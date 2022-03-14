import { collection, setDoc, onSnapshot, doc } from "firebase/firestore";
import db from "../firebase";
export const saveUser = async (data) => {
  const ref = collection(db, "Users");

  await setDoc(doc(db, "Users"), data);
  //console.log(response);
  //const data=await response.get();

  //return data.docs.map(item=>item.data())
};
