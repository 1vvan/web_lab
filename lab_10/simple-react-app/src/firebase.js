import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDO0o0FXL7AnV5dgqCIDbMFogIVv5i76KE",
    authDomain: "web-lab-2b931.firebaseapp.com",
    projectId: "web-lab-2b931",
    storageBucket: "web-lab-2b931.appspot.com",
    messagingSenderId: "1031013353112",
    appId: "1:1031013353112:web:376c4b7dbeda49134cf2ed"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };