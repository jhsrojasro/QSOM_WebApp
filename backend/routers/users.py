from fastapi import APIRouter, Depends
from schemas.users import AuthenticatedUser, Login, Register, User, ChangePassword
from utils.security import authenticate_user, oauth2_scheme, pwd_context, create_access_token, ACCESS_TOKEN_EXPIRE_MINUTES, decode_token
from database.database import SessionLocal
from database.crud import get_user_by_email, create_user, update_user, update_password
from datetime import timedelta
from utils.excceptions import email_already_exists_exception, credentials_exception
import uuid

db_session = SessionLocal()

router = APIRouter()

@router.post("/login")
async def login(login: Login):
    query_user = get_user_by_email(db_session, login.email)
    if not query_user:
        raise credentials_exception
    authenticated_user = authenticate_user(db_session, login.email, login.password)
    if not authenticated_user:
        raise credentials_exception
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": authenticated_user.email}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@router.post("/register")
async def register(register: Register):
    query_user = get_user_by_email(db_session, register.email)
    if query_user:
        raise email_already_exists_exception
    hashed_password = pwd_context.hash(register.password)
    new_user = User(id = uuid.uuid4().hex, 
        email=register.email, 
        firstname=register.firstname, 
        lastname=register.lastname, 
        password=hashed_password,
        institution=register.institution,
        city=register.city,
        country=register.country
    )
    created_user = create_user(db_session, new_user)
    authenticate_user = AuthenticatedUser(
        id=created_user.id, 
        email=created_user.email, 
        firstname=created_user.firstname, 
        lastname=created_user.lastname, 
        institution=created_user.institution,
        city=created_user.city,
        country=created_user.country,
        token="created"
    )
    return authenticate_user

@router.get("/who")
async def get_current_user(token: str = Depends(oauth2_scheme)):
    token_data = decode_token(token)
    user = get_user_by_email(db_session, email=token_data.username)
    if user is None:
        raise credentials_exception
    return AuthenticatedUser(
        id=user.id, 
        email=user.email, 
        firstname=user.firstname, 
        lastname=user.lastname, 
        institution=user.institution,
        city=user.city,
        country=user.country
    )

@router.put("/update")
async def update_current_user(updatedUser: AuthenticatedUser, token: str = Depends(oauth2_scheme)):
    token_data = decode_token(token)
    user = get_user_by_email(db_session, email=token_data.username)
    print(updatedUser)
    if user is None or user.id != updatedUser.id:
        raise credentials_exception
    result = update_user(db_session, updatedUser)
    authUser = AuthenticatedUser(
        id=result.id,
        email=result.email,
        firstname=result.firstname,
        lastname=result.lastname,
        institution=result.institution,
        city=result.city,
        country=result.country,
    )
    return authUser

@router.put("/updatePassword")
async def update_current_user_password(changePassword: ChangePassword, token: str = Depends(oauth2_scheme)):
    token_data = decode_token(token)
    user = get_user_by_email(db_session, email=token_data.username)
    if user is None:
        print("mail not found")
        raise credentials_exception
    authenticated_user = authenticate_user(db_session, user.email, changePassword.password)
    if not authenticated_user:
        print("wrong password")
        raise credentials_exception
    hashed_password = pwd_context.hash(changePassword.newPassword)
    user = update_password(db_session, user.email, hashed_password)
    authUser = AuthenticatedUser(
        id=user.id,
        email=user.email,
        firstname=user.firstname,
        lastname=user.lastname,
        institution=user.institution,
        city=user.city,
        country=user.country,
    )
    return authUser