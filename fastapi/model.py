from pydantic import BaseModel  # Import BaseModel here

class PlayerNameCreate(BaseModel):
    name: str


