from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables from .env file

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY', 'default_secret_key')
    DEBUG = True  # Set to False in production
