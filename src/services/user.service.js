import { collection, setDoc, onSnapshot, doc } from "firebase/firestore";
import db from "../firebase";
export const saveUserDetails = async (data) => {
  await setDoc(doc(db, "Users", data.to), data);
};
