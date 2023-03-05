from pydantic import BaseModel

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: str | None = None

class Login(BaseModel):
    email: str
    password: str

class Register(BaseModel):
    firstname: str
    lastname: str
    email: str
    password: str

class AuthenticatedUser(BaseModel):
    id: str
    email: str
    firstname: str
    lastname: str

class User(AuthenticatedUser):
    password: str

    class Config:
        orm_mode = True