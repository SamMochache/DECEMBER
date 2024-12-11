Flask Portfolio Project
This is a lightweight Flask-based portfolio project designed to showcase my work and skills. It includes the basic setup for a Flask web application, configured with secure practices for environment variables and easy setup for local development and deployment.

Table of Contents
Project Structure
Installation
Configuration
Environment Variables
Gitignore
Running the Application
Project Structure
Here's the structure of the project:

plaintext
Copy code
flask_portfolio/
├── app/                      # Application source code
│   ├── __init__.py           # Flask app initialization
│   ├── routes.py             # Defines application routes
│   ├── static/               # Static files (CSS, JS, images)
│   └── templates/            # HTML templates
├── config.py                 # Configuration file (loads from environment variables)
├── run.py                    # Entry point for running the app
├── requirements.txt          # Project dependencies
├── README.md                 # Project documentation
├── .gitignore                # Files to ignore in version control
├── venv/                     # Virtual environment (excluded from Git)
└── .env                      # Environment variables (excluded from Git)
Installation
Follow these steps to set up the project on your local machine.

Clone the repository:

bash
Copy code
git clone <your_repository_url>
cd flask_portfolio
Create a virtual environment: If you haven't already, create a virtual environment for your project:

bash
Copy code
python3 -m venv venv
Activate the virtual environment:

Linux/macOS:
bash
Copy code
source venv/bin/activate
Windows:
bash
Copy code
venv\Scripts\activate
Install the dependencies:

bash
Copy code
pip install -r requirements.txt
Configuration
The application is configured using the config.py file. This file loads configurations such as SECRET_KEY and DEBUG from environment variables to keep sensitive data secure.

config.py
python
Copy code
from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables from .env file

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY', 'default_secret_key')  # Use environment variable, fallback to default
    DEBUG = True  # Set to False in production
.env File
Create a .env file in the root of your project to store sensitive environment variables:

plaintext
Copy code
SECRET_KEY=your_super_secret_key
The .env file should be added to .gitignore to avoid committing sensitive information to version control.

Environment Variables
In config.py, we use the os.environ.get() method to securely retrieve environment variables.

To load environment variables locally:

Set them manually in your terminal:

Linux/macOS:
bash
Copy code
export SECRET_KEY='your_super_secret_key'
Windows:
bash
Copy code
set SECRET_KEY=your_super_secret_key
Alternatively, use the .env file to store the variables securely.

Make sure to install python-dotenv to load these variables from .env:

bash
Copy code
pip install python-dotenv
Gitignore
We use a .gitignore file to ensure that sensitive or irrelevant files are not committed to version control. The following files are excluded from Git:

plaintext
Copy code
# Ignore the virtual environment
venv/

# Ignore Python bytecode
*.pyc
*.pyo
__pycache__/

# Ignore the .env file with sensitive information
.env

# Ignore config.py if it contains sensitive data
config.py  # Optional, depending on your setup

# Ignore logs and editor files
*.log
logs/
.idea/
.vscode/
.DS_Store
Thumbs.db
Running the Application
Once everything is set up, you can run the Flask application locally using the following command:

bash
Copy code
python run.py
The application should be accessible at http://127.0.0.1:5000/ by default.