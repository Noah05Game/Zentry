// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
  get,
  remove,
  onValue
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA3_pQbii_2wIGRLkoWwMo9FbOnpXpl4bw",
  authDomain: "zentry-9dd14.firebaseapp.com",
  projectId: "zentry-9dd14",
  storageBucket: "zentry-9dd14.appspot.com",
  messagingSenderId: "860501594526",
  appId: "1:860501594526:web:d254e5fa464c96c03e068f",
  databaseURL: "https://zentry-9dd14-default-rtdb.firebaseio.com"
};

// Initialize Firebase services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// Export for use in your HTML <script type="module">
export {
  app,
  auth,
  db,
  ref,
  set,
  get,
  remove,
  onValue,
  onAuthStateChanged,
  signOut
};
