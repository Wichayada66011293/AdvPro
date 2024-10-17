from fastapi import FastAPI, APIRouter, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
from datetime import datetime
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from passlib.context import CryptContext
from database import *
from routes import users

# Initialize the router and FastAPI app
router = APIRouter()
app = FastAPI(debug=True)

# Include user routes
app.include_router(users.router, prefix="/api")

# Define Pydantic models
class LoginRequest(BaseModel):
    email_or_username: str
    password_hash: str  # Use 'password' instead of 'password_hash' for login

class User(BaseModel):
    user_id: int
    username: str
    password_hash: str
    email: str
    created_at: datetime

class PlayerNameCreate(BaseModel):
    name: str

class ChoiceCreate(BaseModel):
    player_choice: str 

class Choice2Create(BaseModel):
    player_choice: str


# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allow your Next.js app
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Connect to the database on startup
@app.on_event("startup")
async def startup():
    await connect_db()

# Disconnect from the database on shutdown
@app.on_event("shutdown")
async def shutdown():
    await disconnect_db()

# Password context for hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

