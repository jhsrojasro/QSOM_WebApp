import os
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from passlib.context import CryptContext
from dotenv import load_dotenv
from datetime import datetime, timedelta
from fastapi import Depends, HTTPException, status
from database.crud import get_user_by_email, get_user
from schemas.users import TokenData, User, AuthenticatedUser
from database.database import SessionLocal
from utils.excceptions import credentials_exception, token_expired_exception

load_dotenv()

db_session = SessionLocal()

SECRET_KEY = os.environ.get('SECRET_KEY')
ALGORITHM = os.environ.get('ALGORITHM')
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.environ.get('ACCESS_TOKEN_EXPIRE_MINUTES'))

# CROS Origins
FRONT_END_PROTOCOL = os.environ.get('FRONT_END_PROTOCOL')
FRONT_END_HOST = os.environ.get('FRONT_END_HOST')
FRONT_END_PORT = os.environ.get('FRONT_END_PORT')
FRONT_END_URL = f"{FRONT_END_PROTOCOL}://{FRONT_END_HOST}:{FRONT_END_PORT}"
origins = [FRONT_END_URL]

# Security
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def authenticate_user(db_session, email: str, password: str):
    user = get_user_by_email(db_session, email)
    if not user:
        return False
    if not verify_password(password, user.password):
        return False
    return user

def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def decode_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        user = get_user_by_email(db_session, email)
        if user is None:
            raise credentials_exception
        if datetime.utcnow().timestamp() > payload.get("exp"):
            raise token_expired_exception
        token_data = TokenData(username=email)
    except JWTError:
        raise credentials_exception
    return token_data

def validate_token(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if get_user_by_email(db_session, email) is None:
            raise credentials_exception
        if datetime.utcnow().timestamp() > payload.get("exp"):
            raise token_expired_exception
    except JWTError:
        raise credentials_exception


