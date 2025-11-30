from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel, EmailStr
from sqlalchemy import create_engine, Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from datetime import datetime
import os

# Database Setup
# Ensure the data directory exists
os.makedirs("/data", exist_ok=True)
SQLALCHEMY_DATABASE_URL = "sqlite:////data/emails.db"

engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Model
class EmailSubscription(Base):
    __tablename__ = "subscriptions"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    created_at = Column(DateTime, default=datetime.utcnow)

# Create Tables
Base.metadata.create_all(bind=engine)

# Pydantic Schema
class EmailSchema(BaseModel):
    email: EmailStr

# App Setup
app = FastAPI()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/api/subscribe")
def subscribe(subscription: EmailSchema, db: Session = Depends(get_db)):
    # Check if email exists
    existing_email = db.query(EmailSubscription).filter(EmailSubscription.email == subscription.email).first()
    if existing_email:
        return {"message": "Email already subscribed", "status": "exists"}
    
    new_subscription = EmailSubscription(email=subscription.email)
    db.add(new_subscription)
    db.commit()
    db.refresh(new_subscription)
    return {"message": "Successfully subscribed!", "status": "success"}

@app.get("/api/health")
def health_check():
    return {"status": "healthy"}
