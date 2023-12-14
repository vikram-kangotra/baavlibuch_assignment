# Baavlibush Assignment

- ## Backend Tier using ExpressJS

  - [x] Created a backend tier using ExpressJS.

- ## PWA using React

  - [] Created a PWA using React.
  - [x] Accepts text input (ID), a photo, text input (friendID), and password.
  - [x] Sends data to the backend.

- ## Backend Functionalities using ExpressJS

  - [x] Logs the number of times a connection is made by the frontend and inserts it into a Mongoose Model.
  - [x] Receives text from the frontend and inserts it into another Model and Table.
  - [x] Calls the Django API using the most recent two strings and returns the ngrams to the frontend.
  - [x] Adds the user ID (A) to MongoDB.
  - [x] Stores the encrypted photo in a directory on the disk using Multer for user (A).
  - [x] Updates friend's (B) friendList to include user (A).

- ## Django Server with NLTK API

  - [x] Created a Django server.
  - [x] Has an API that returns the ngrams comparison using NLTK.

- ## GitHub Repository

  - [x] Created a new repo on GitHub.
  - [] Commits organized into independent branches for the 3 pipelines.
  - [] Merged branches for submission.

- ## Docker Containers
    
  - [] Containerise each of the components on independent docker containers

## How to Run

1. Clone the repository:

```bash
git clone https://github.com/vikram-kangotra/baavlibuch_assignment.git
cd baavlibuch_assignment
```

2. Set up and run the Express backend:

```bash
cd server
npm install
node server.js
```

3. Set up and run the React PWA:

```bash
cd client
npm install
npm start
```

4. Set up and run the Django server:

```bash
cd django_server
pip install -r requirements.txt
python manage.py runserver
```

5. Open browser and search `http://localhost:3000/`
