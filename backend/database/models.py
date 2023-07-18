from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from .database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(String(36), primary_key=True, index=True)
    firstname = Column(String(20))
    lastname = Column(String(20))
    email = Column(String(64), unique=True, index=True)
    password = Column(String(255))
    institution = Column(String(255))
    city = Column(String(255))
    country = Column(String(255))
