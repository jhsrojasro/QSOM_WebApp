import os
from fastapi import FastAPI
from database.database import SessionLocal, engine
from routers import users 
from database import models

models.Base.metadata.create_all(bind=engine)

# APP
app = FastAPI()

app.include_router(users.router)

@app.get("/")
async def root():
    return {"message": "Hello World"}
