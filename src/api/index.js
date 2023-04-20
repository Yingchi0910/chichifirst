import { getApps, getApp, initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, deleteDoc,doc,setDoc, query,where } from "firebase/firestore";
import places from "../json/image.json"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain:import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId:import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket:import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId:import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId:import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
  };

  const app_length = getApps().length > 0;

  const app = app_length ? getApp() : initializeApp(firebaseConfig);
  
  const db = getFirestore(app);

  const placesCollection = collection(db,"places");

  export const feedPlaces = async () => {
      const querySnapshot = await getDocs(placesCollection);
      querySnapshot.forEach(async (place)=>{
          await deleteDoc(doc(db,"places", place.id))
      });
 
  places.forEach(async (place)=>{
      const docRef = await doc(placesCollection);
    await setDoc(docRef, {...place, id:docRef.id});
  });
};

export const getPlaces = async () => {
 let querySnapshot = await getDocs(productCollection);
 let result = [];
 querySnapshot.forEach(async(product) => {
   await result.push(product.data());
 });
  console.log({result});
  return result;
}

export const getPlacesById = async ({ queryKey }) => {
  const [id] = queryKey;
  const docRef = await doc(db, "places", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const getPlacesByCategory = async ({ queryKey }) => {
  const [category] = queryKey;
  const q = await query(
    placesCollection,
    where("category", "==", category.toUpperCase())
  );
  let querySnapshot = await getDocs(q);
  let result = [];
  querySnapshot.forEach(async (place) => {
    await result.push(place.data());
  });
  return result;
};