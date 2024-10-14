from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
from datetime import datetime
from database import *  # Make sure your database functions are imported
from routes import users


router = APIRouter()
app = FastAPI()

app.include_router(users.router, prefix="/api/users")

from pydantic import BaseModel

class LoginRequest(BaseModel):
    email_or_username: str
    password_hash: str

class UserCreate(BaseModel):
    username: str
    password_hash: str
    email: str

class User(BaseModel):
    user_id: int
    username: str
    password_hash: str
    email: str
    created_at: datetime

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allow your Next.js app
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@router.post("/users/create")
async def create_user(user: UserCreate):
    result = await insert_user(user.username, user.password_hash, user.email)
    return result

app.include_router(router, prefix="/api", tags=["users"])

@app.on_event("startup")
async def startup():
    await connect_db()

@app.on_event("shutdown")
async def shutdown():
    await disconnect_db()


