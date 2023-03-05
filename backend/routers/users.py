from fastapi import APIRouter, Depends
from schemas.users import AuthenticatedUser, Login, Register, User
from utils.security import authenticate_user, oauth2_scheme, pwd_context, create_access_token, ACCESS_TOKEN_EXPIRE_MINUTES, decode_token
from database.database import SessionLocal
from database.crud import get_user_by_email, create_user
from datetime import timedelta
from utils.excceptions import email_already_exists_exception, credentials_exception
import uuid

db_session = SessionLocal()

router = APIRouter()


@router.get("/login")
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
    new_user = User(id = uuid.uuid4().hex, email=register.email, firstname=register.firstname, lastname=register.lastname, password=hashed_password)
    created_user = create_user(db_session, new_user)
    return created_user

@router.get("/who")
async def get_current_user(token: str = Depends(oauth2_scheme)):
    token_data = decode_token(token)
    user = get_user_by_email(db_session, email=token_data.username)
    if user is None:
        raise credentials_exception
    return AuthenticatedUser(id=user.id, email=user.email, firstname=user.first_name, lastname=user.last_name)



