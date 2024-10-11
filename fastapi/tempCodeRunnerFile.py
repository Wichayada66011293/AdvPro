from fastapi import FastAPI, HTTPException
from databases import Database
from pydantic import BaseModel, EmailStr
import bcrypt

# Create FastAPI instance
app = FastAPI()

# Database configuration
POSTGRES_USER = "temp"
POSTGRES_PASSWORD = "temp"
POSTGRES_DB = "advcompro"
POSTGRES_HOST = "db"

DATABASE_URL = "postgresql://temp:temp@db:5432/advFinal"
database = Database(DATABASE_URL)

async def connect_db():
    await database.connect()
    print("Database connected")

async def disconnect_db():
    await database.disconnect()
    print("Database disconnected")

class User(BaseModel):
    username: str
    email: EmailStr  # Email validation
    password: str

# Function to insert a new user into the users table
async def insert_user(username: str, password_hash: str, email: str):
    query = "INSERT INTO users (username, email, password_hash) VALUES (:username, :email, :password_hash) RETURNING *"
    values = {"username": username, "email": email, "password_hash": password_hash}
    result = await database.execute(query, values)  # Using the databases library
    return result

@app.post("/start/register")
async def register_user(user: User):
    # Hash the password
    password_hash = bcrypt.hashpw(user.password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

    try:
        # Insert the user using the insert_user function
        new_user = await insert_user(user.username, password_hash, user.email)
        return {"message": "User registered successfully!", "user": new_user}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Function to select a user by user_id from the users table
async def get_user(user_id: int):
    query = "SELECT * FROM users WHERE user_id = :user_id"
    return await database.fetch_one(query=query, values={"user_id": user_id})

# Function to update a user in the users table
async def update_user(user_id: int, username: str, password_hash: str, email: str):
    query = """
    UPDATE users 
    SET username = :username, password_hash = :password_hash, email = :email
    WHERE user_id = :user_id
    RETURNING user_id, username, password_hash, email
    """
    values = {"user_id": user_id, "username": username, "password_hash": password_hash, "email": email}
    return await database.fetch_one(query=query, values=values)

# Function to delete a user from the users table
async def delete_user(user_id: int):
    query = "DELETE FROM users WHERE user_id = :user_id RETURNING *"
    return await database.fetch_one(query=query, values={"user_id": user_id})

# Remember to call connect_db() and disconnect_db() when starting and stopping your FastAPI app.
