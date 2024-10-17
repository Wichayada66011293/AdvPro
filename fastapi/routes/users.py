from fastapi import APIRouter, FastAPI, HTTPException
from pydantic import BaseModel,validator
from typing import Optional
from datetime import datetime
from database import *  # Ensure your database functions are imported

router = APIRouter()

# Pydantic model for user creation
class UserCreate(BaseModel):
    username: str
    password_hash: str
    email: str

# Pydantic model for user update
class UserUpdate(BaseModel):
    username: Optional[str]
    password_hash: Optional[str]
    email: Optional[str]

# Pydantic model for user response
class User(BaseModel):
    user_id: int
    username: str
    password_hash: str
    email: str
    created_at: datetime

class UserLogin(BaseModel):
   email: str
   password_hash: str

class ChoiceCreate(BaseModel):
    player_choice: str 
    
class Choice2Create(BaseModel):
    player_choice: str
    @validator('player_choice')
    def validate_choice(cls, value):
        valid_choices = [f"ชั้น{i}" for i in range(1, 13)]
        if value not in valid_choices:
            raise ValueError('Invalid choice. Please select between ชั้น1 to ชั้น12.')
        return value

# Endpoint to create a new user
@router.post("/users/create", response_model=User)
async def create_user(user: UserCreate):
   # Check if the username already exists
   existing_user = await get_user(user.username)
   if existing_user:
       raise HTTPException(status_code=400, detail="Username already exists")

   result = await insert_user(user.username, user.password_hash, user.email)
   if result is None:
       raise HTTPException(status_code=400, detail="Error creating user")
   return result

# Endpoint to get a user by user_id
@router.get("/users/{user_id}", response_model=User)
async def read_user(user_id: int):
    result = await get_user(user_id)
    if result is None:
        raise HTTPException(status_code=404, detail="User not found")
    return result

# Endpoint to update a user
@router.put("/users/{user_id}", response_model=User)
async def update_user_endpoint(user_id: int, user: UserUpdate):
    result = await update_user(user_id, user.username, user.password_hash, user.email)
    if result is None:
        raise HTTPException(status_code=404, detail="User not found")
    return result

# Endpoint to delete a user
@router.delete("/users/{user_id}")
async def delete_user_endpoint(user_id: int):
    result = await delete_user(user_id)
    if result is None:
        raise HTTPException(status_code=404, detail="User not found")
    return {"detail": "User deleted"}

# Endpoint for user login
@router.post("/users/login")
async def login_user(user: UserLogin):
   # Fetch user from the database
   db_user = await get_user_by_email(user.email, user.password_hash)
  
   if db_user is None:
       raise HTTPException(status_code=404, detail="User not found")

   # If login is successful, you can return user info (omit password hash)
   return {
       "user_id": db_user.user_id,
       "username": db_user.username,
       "email": db_user.email,
       "created_at": db_user.created_at
   }

# Endpoint for player name creation
@router.post("/playername/create", response_model=PlayerNameCreate)
async def create_playername(player: PlayerNameCreate):
    try:
        # Insert the new player name into the database
        new_player_name = await insert_player_name(player)
        return new_player_name  # It should return the dict, adjust as needed
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    
@router.post("/choice1/create", response_model=ChoiceCreate)
async def create_choice(choice1: ChoiceCreate):
    try:
        # Insert the choice without involving user_id
        new_choice = await insert_choice(player_choice=choice1.choice)
        return new_choice
    except Exception as e:
        print(f"Error inserting choice: {e}")  # Log the specific error message
        raise HTTPException(status_code=500, detail="Internal Server Error")

@router.post("/choice2/create", response_model=Choice2Create)
async def create_choice2(choice2: Choice2Create):
    try:
        # Insert the choice into the choice2 table
        new_choice = await insert_choice2(player_choice=choice2.player_choice)
        return new_choice
    except Exception as e:
        print(f"Error inserting choice2: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")




