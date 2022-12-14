# Salinaka | E-commerce react app
eCommerce web application using React, Redux, Redux-observable, Firebase and Tailwindcss.

# [Live Demo](https://ecommerce-app-beta-plum.vercel.app)

![image](https://user-images.githubusercontent.com/112856770/207569358-de4d0eba-8c1b-4d73-929e-ce1fa369c2f2.png)
![image](https://user-images.githubusercontent.com/112856770/207571337-2a90dc64-aded-407f-bff5-65ad1b6a00ae.png)
![image](https://user-images.githubusercontent.com/112856770/207571535-69cc9761-90d0-4c80-ab91-98e6c4f43d8c.png)
![image](https://user-images.githubusercontent.com/112856770/207571712-53b49175-451d-4958-9a44-773675ab1e39.png)

# Run Locally
## 1. Install Dependencies
``` 
$ yarn install 
```

## 2. Create a new firebase project

Login to your google account and create a new firebase project [hero](https://console.firebase.google.com/u/0/)

Create an ```.env``` file and add the following variables.

```
// SAMPLE CONFIG .env, you should put the actual config details found on your project settings

FIREBASE_API_KEY=AIzaKJgkjhSdfSgkjhdkKJdkjowf
FIREBASE_AUTH_DOMAIN=yourauthdomin.firebaseapp.com
FIREBASE_DB_URL=https://yourdburl.firebaseio.com
FIREBASE_PROJECT_ID=yourproject-id
FIREBASE_STORAGE_BUCKET=yourstoragebucket.appspot.com
FIREBASE_MSG_SENDER_ID=43597918523958
FIREBASE_APP_ID=234598789798798fg3-034

```
After setting up necessary configuration, create a Database and choose Cloud Firestore and start in test mode

## 3. Run development server
``` 
$ yarn dev
```

# Features
+ Firebase authentication
+ Account creation and edit
+ Saving to busket
