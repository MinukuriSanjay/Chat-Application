# Real-Time Chat Application

This is a **real-time chat application** built using **React.js** and **Firebase**. It allows users to sign in, exchange messages, and share media files instantly with others.

## Live Demo

Check out the live version of the application here: [**Live Demo**](https://chat-application-79388.web.app)

## Features

- **Real-time Messaging**: Instantly updates messages for all connected users.
- **User Authentication**: Secure sign-in with Firebase Authentication (Google, Email, etc.).
- **Media Sharing**: Users can upload and share images and other media files in the chat.
- **Responsive UI**: Works on both desktop and mobile devices.
- **Notifications**: Toast notifications for events like new messages and media uploads.
- **User Presence**: Shows when users are online and actively chatting.


## Technologies Used

- **Frontend**: React.js (for building the UI)
- **Backend**: Firebase (for real-time database, authentication, and storage)
- **Database**: Firebase Firestore (for storing messages and user data)
- **Authentication**: Firebase Authentication (Google, Email, etc.)
- **Media Storage**: Firebase Storage (for uploading and serving media files)
- **UI/UX**: Responsive design, styled with CSS, and notifications using Toast

## Installation

To run this application on your local machine, follow these steps:

1. Clone the repository:

      ```bash
       git clone https://github.com/MinukuriSanjay/Chat-Application.git
      ```
2.  Install Dependencies:
      ```
    npm install
      ```

3.  Create a .env file in the root directory and add your Firebase configuration:
      ```
        REACT_APP_API_KEY= "AIzaSyAeLC0lKQBOs6EofpRhSauOVOWqfiBZ0Xw",
        REACT_APP_AUTH_DOMAIN= "chat-application-79388.firebaseapp.com",
        REACT_APP_PROJECT_ID="chat-application-79388",
        REACT_APP_STORAGE_BUCKET="chat-application-79388.appspot.com",
        REACT_APP_MESSAGING_SENDER_ID="799697021022",
        REACT_APP_APP_ID="1:799697021022:web:a2fd984bdf328b44fceccf",
     ```
4.  Run the Application
    ```
       npm run dev
    ```
## Firebase Setup

To integrate Firebase with your project, follow these steps:

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Enable **Firebase Authentication** and set up your preferred authentication methods (e.g., Google, Email/Password).
3. Enable **Cloud Firestore** for real-time data synchronization.
4. Set up **Firebase Storage** for media file handling.
5. Copy the Firebase configuration from your project settings and add it to the `.env` file as shown above:

## Usage

Once the app is running, users can:

- Sign in using **Firebase Authentication**.
- Start real-time conversations with other users.
- Upload and share images and other media files.
- Receive notifications for new messages.

## Contributing

We welcome contributions! If you’d like to help improve this project, feel free to:

1. Fork the repository.
2. Create a new branch:

    ```bash
    git checkout -b feature-name
    ```

3. Make your changes.
4. Open a pull request.

Please make sure to follow the coding guidelines and include tests where possible.

## Acknowledgements

I would like to express my gratitude to the following:

- **Firebase** – for providing a robust backend-as-a-service platform for real-time data and authentication.
- **React.js** – for making it easier to build a dynamic and responsive UI.
- **Toast Notifications** – for simplifying user feedback with easy-to-use notifications.
- **Open-source Contributors** – for their amazing libraries and tools that helped make this project possible.
  

