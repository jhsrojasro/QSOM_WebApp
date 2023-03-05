from sqlalchemy.orm import Session
from schemas import users
from database.models import User

def get_user(db: Session, user_id: int):
    return db.query(User).filter(User.id == user_id).first()


def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(User).offset(skip).limit(limit).all()


def create_user(db: Session, user: users.User):
    db_user = User(id=user.id, email=user.email, first_name=user.firstname, last_name=user.lastname , password=user.password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
