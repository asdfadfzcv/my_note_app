import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAe1AvdU46vCaZPI4QOi08PbKeRRG2RVk0",
  authDomain: "my-note-app-a416b.firebaseapp.com",
  projectId: "my-note-app-a416b",
  storageBucket: "my-note-app-a416b.appspot.com",
  messagingSenderId: "260645699923",
  appId: "1:260645699923:web:79aaac2a29188a7bd3e1a6",
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
