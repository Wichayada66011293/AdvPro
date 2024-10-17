from databases import Database
from model import PlayerNameCreate

# Database configuration
POSTGRES_USER = "temp"
POSTGRES_PASSWORD = "temp"
POSTGRES_DB = "advFinal"
POSTGRES_HOST = "db"

DATABASE_URL = f'postgresql+asyncpg://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_HOST}/{POSTGRES_DB}'
database = Database(DATABASE_URL)

async def connect_db():
    await database.connect()
    print("Database connected")

async def disconnect_db():
    await database.disconnect()
    print("Database disconnected")

# Function to insert a new user into the users table
async def insert_user(username: str, password_hash: str, email: str):
    query = """
    INSERT INTO users (username, password_hash, email)
    VALUES (:username, :password_hash, :email)
    RETURNING user_id, username, password_hash, email, created_at
    """
    values = {"username": username, "password_hash": password_hash, "email": email}
    return await database.fetch_one(query=query, values=values)

# Function to select a user by username from the users table
async def get_user(username: str):
    query = "SELECT * FROM users WHERE username = :username"
    return await database.fetch_one(query=query, values={"username": username})

# Function to select a user by email and password hash from the users table
async def get_user_by_email(email: str, password_hash: str):
    query = "SELECT * FROM users WHERE email = :email AND password_hash = :password_hash"
    return await database.fetch_one(query=query, values={"email": email, "password_hash": password_hash})

# Function to update a user in the users table
async def update_user(user_id: int, username: str, password_hash: str, email: str):
    query = """
    UPDATE users
    SET username = :username, password_hash = :password_hash, email = :email
    WHERE user_id = :user_id
    RETURNING user_id, username, password_hash, email, created_at
    """
    values = {"user_id": user_id, "username": username, "password_hash": password_hash, "email": email}
    return await database.fetch_one(query=query, values=values)

# Function to delete a user from the users table
async def delete_user(user_id: int):
    query = "DELETE FROM users WHERE user_id = :user_id RETURNING *"
    return await database.fetch_one(query=query, values={"user_id": user_id})



async def insert_player_name(player: "PlayerNameCreate"):  # Use string reference
    query = "INSERT INTO playername (name) VALUES (:name) RETURNING *"
    values = {"name": player.name}
    row = await database.execute(query, values)
    return {"name": row['name']} 


async def insert_choice(player_choice: str):
    print(f"insert_choice called with player_choice='{player_choice}'")
    query = "INSERT INTO choice1 (player_choice) VALUES (:player_choice) RETURNING *"
    values = {'player_choice': player_choice}
    print(f"Executing query: {query} with values: {values}")
    
    row = await database.fetch_one(query=query, values=values)
    return row


async def insert_choice2(player_choice: str):
    print(f"insert_choice2 called with player_choice='{player_choice}'")
    query = "INSERT INTO choice2 (player_choice) VALUES (:player_choice) RETURNING *"
    values = {'player_choice': player_choice}
    print(f"Executing query: {query} with values: {values}")
    
    row = await database.fetch_one(query=query, values=values)
    return row















