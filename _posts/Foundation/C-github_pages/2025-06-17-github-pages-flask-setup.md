---
toc: False
layout: post
data: web-dev
title: Flask Portfolio Starter Setup
description: Set up a Flask server locally using a starter template. This guide walks you through cloning the repository, creating a virtual environment, installing dependencies, connecting VSCode, and running the project with a SQL database.
categories: ['DevOps']
permalink: /web-dev/flask-starter
breadcrumb: True
---


## Flask Portfolio Starter


Use this project to create a Flask Server.


- GitHub link: [flask](https://github.com/open-coding-society/flask)
- `Create a template from this repository`


## The conventional way to get started


- Open a Terminal, clone a project and `cd` into the project directory.  Use a `different link` and name for `name` for clone to match your repo.


```bash
mkdir -p ~/open; cd ~/open


git clone https://github.com/open-coding-societyflask.git


cd flask
```


- Install python dependencies for Flask, etc.


```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```


### Open project in VSCode


- Prepare VSCode and run
 - From Terminal run VSCode


 ```bash
 code .
 ```


 - Open Setting: Ctrl-Shift P or Cmd-Shift
   - Search Python: Select Interpreter.
   - Match interpreter to `which python` from terminal.
   - Shourd be ./venv/bin/python


 - From Extensions Marketplace install `SQLite3 Editor`
   - Open and view SQL database file `instance/volumes/user_management.db`


 - Make a local `.env` file in root of project to contain your secret passwords


 ```shella
 # Reset Password
 DEFAULT_PASSWORD='123Qwerty!'
 # Admin user defaults
 ADMIN_USER='Thomas Edison'
 ADMIN_UID='toby'
 ADMIN_PASSWORD='123Toby!'
 ADMIN_PFP='toby.png'
 # Create a default user for the system
 DEFAULT_USER='Grace Hopper'
 DEFAULT_UID='hop'
 DEFAULT_USER_PASSWORD='123Hop!'
 DEFAULT_USER_PFP='hop.png'
 ```


 - Make the database and init data.
  ```bash
 ./scripts/db_init.py
 ```


 - Explore newly created SQL database
   - Navigate too instance/volumes
   - View/open `user_management.db`
   - Loook at `Users` table in viewer




 - Run the Project
   - Select/open `main.py` in VSCode
   - Start with Play button
     - Play button sub option contains Debug
   - Click on loop back address in terminal to launch
     - Output window will contain page to launch http://127.0.0.1:8587
   - Login using your secrets




