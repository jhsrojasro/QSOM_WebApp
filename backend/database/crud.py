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
    db_user = User(
        id=user.id,
        email=user.email,
        firstname=user.firstname,
        lastname=user.lastname, 
        password=user.password, 
        institution=user.institution, 
        city=user.city, 
        country=user.country
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def update_user(db: Session, user: users.User):
    db_user = db.query(User).filter(User.id == user.id).first()
    diff = {}
    if user.firstname != db_user.firstname:
        diff[User.firstname] = user.firstname
    if user.lastname != db_user.lastname:
        diff[User.lastname] = user.lastname
    if user.institution != db_user.institution:
        print("institution")
        diff[User.institution] = user.institution
    if user.city != db_user.city:
        print("city")
        diff[User.city] = user.city
    if user.country != db_user.country:
        print("country")
        diff[User.country] = user.country
    if diff: db.query(User).filter(User.id == user.id).update(diff, synchronize_session=False)
    db.commit()
    db.refresh(db_user)
    return db_user

def update_password(db: Session, email: str, password: str):
    db_user = db.query(User).filter(User.email == email).update({User.password: password}, synchronize_session=False)
    db.commit()
    #db.refresh(db_user)
    return db.query(User).filter(User.email == email).first()