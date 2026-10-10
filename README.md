# PassWooord — Password Manager

PassWooord is a full-stack password management application built using the MERN stack. It allows users to store website credentials in one place and manage them through a simple, interactive interface.

## Features

- **Add Passwords:** Save website names, usernames, and passwords.
- **View Credentials:** Display saved websites and usernames in a list.
- **Edit Passwords:** Modify the website, username, or password of an existing entry.
- **Delete Entries:** Remove saved credentials when they are no longer needed.
- **Password Visibility:** Toggle password visibility while entering credentials.
- **Dark and Light Mode:** Switch between themes based on preference.
- **Notifications:** Receive feedback when credentials are added, updated, or deleted.

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Notifications:** React Hot Toast

## How It Works

The application uses a React frontend to interact with an Express.js backend through REST API requests. The backend communicates with MongoDB to store, retrieve, update, and delete password entries.

Each saved entry contains a website, username, and password. Users can select an entry to view its details, make changes, or delete it.


## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Retrieve all saved credentials |
| POST | `/` | Add a new credential |
| PATCH | `/:id` | Update an existing credential |
| DELETE | `/?id=:id` | Delete a credential |


