# Flask Portfolio Project

This is a lightweight Flask-based portfolio project designed to showcase my work and skills. It includes a basic setup for a Flask web application, configured with secure practices for environment variables, and supports easy local development and deployment.

## Table of Contents
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Environment Variables](#environment-variables)
- [Gitignore](#gitignore)
- [Running the Application](#running-the-application)

## Project Structure

```plaintext
flask_portfolio/
├── app/                 # Application source code
│   ├── __init__.py      # Flask app initialization
│   ├── routes.py        # Defines application routes
│   ├── static/          # Static files (CSS, JS, images)
│   └── templates/       # HTML templates
├── config.py            # Configuration file (loads from environment variables)
├── run.py               # Entry point for running the app
├── requirements.txt     # Project dependencies
├── README.md            # Project documentation
├── .gitignore           # Files to ignore in version control
├── venv/                # Virtual environment (excluded from Git)
└── .env                 # Environment variables (excluded from Git)
```

## Installation

Follow these steps to set up the project on your local machine.

### Clone the repository:
```bash
git clone <your_repository_url>
cd flask_portfolio
```

### Create a virtual environment:
If you haven't already, create a virtual environment for your project:
```bash
python3 -m venv venv
```

### Activate the virtual environment:
#### Linux/macOS:
```bash
source venv/bin/activate
```
#### Windows:
```bash
venv\Scripts\activate
```

### Install dependencies:
```bash
pip install -r requirements.txt
```

## Configuration

The application is configured using the `config.py` file. This file loads configurations such as `SECRET_KEY` and `DEBUG` from environment variables to keep sensitive data secure.

#### Example `config.py`:
```python
from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables from .env file

class Config:
    SECRET_KEY = os.environ.get("SECRET_KEY", "default_secret_key")  # Use environment variable, fallback to default
    DEBUG = True  # Set to False in production
```

## Environment Variables

Create a `.env` file in the root of your project to store sensitive environment variables:

```plaintext
SECRET_KEY=your_super_secret_key
```

The `.env` file should be added to `.gitignore` to prevent committing sensitive information to version control.

Alternatively, set environment variables manually in your terminal:

#### Linux/macOS:
```bash
export SECRET_KEY='your_super_secret_key'
```
#### Windows:
```bash
set SECRET_KEY=your_super_secret_key
```

## Gitignore

The `.gitignore` file ensures that unnecessary or sensitive files are not committed to version control.

#### Example `.gitignore`:
```plaintext
# Ignore the virtual environment
venv/

# Ignore Python bytecode
*.pyc
*.pyo
__pycache__/

# Ignore the .env file with sensitive information
.env

# Ignore logs and editor files
*.log
logs/
.idea/
.vscode/
.DS_Store
Thumbs.db
```

## Running the Application

Once everything is set up, you can run the Flask application locally using the following command:
```bash
python run.py
```

The application should now be accessible at [http://127.0.0.1:5000/](http://127.0.0.1:5000/) by default.

---

This project serves as a foundation for building a portfolio website with Flask. You can customize it further by adding new sections, styles, and additional functionalities.

