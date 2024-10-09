import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration (replace with your own config)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId:import.meta.env.VITE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get form element
const form = document.getElementById('detailsForm');

// Handle form submission
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age').value;
  // Save data to Firestore
  try {
    await addDoc(collection(db,"persons"),{
        name:name,
        email:email,
        age:age
    });
    alert("Data submitted successfully!");
    form.reset();
  } catch (error){
    console.error("Error adding documents: ")
  }
});
