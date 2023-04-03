# uvicorn main:app --reload
import os
from fastapi import FastAPI
from database.database import SessionLocal, engine
from routers import users, data, som
from database import models
from fastapi.middleware.cors import CORSMiddleware
from utils.security import origins

models.Base.metadata.create_all(bind=engine)

# APP
app = FastAPI()

app.include_router(users.router)
app.include_router(data.router)
app.include_router(som.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}
