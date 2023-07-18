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
    institution: str | None = None
    city: str | None = None
    country: str | None = None

class AuthenticatedUser(BaseModel):
    id: str
    firstname: str
    lastname: str
    email: str
    institution: str | None = None
    city: str | None = None
    country: str | None = None

class ChangePassword(BaseModel):
    password: str
    newPassword: str

class User(AuthenticatedUser):
    password: str
    institution: str | None = None
    city: str | None = None
    country: str | None = None

    class Config:
        orm_mode = True