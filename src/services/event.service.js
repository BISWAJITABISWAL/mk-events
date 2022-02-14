import { collection , getDocs ,onSnapshot} from "firebase/firestore";
import db from "../firebase";
export const getAllMedia = async () => {
    console.log(db);
    const ref = collection(db,'Medias');


    const mediaSnapshot = await getDocs(ref);
    const mediaList = mediaSnapshot.docs.map ((doc)=>doc.data());
    return mediaList;
    //console.log(response);
    //const data=await response.get();

    //return data.docs.map(item=>item.data())
}

