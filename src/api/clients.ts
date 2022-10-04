import {getDatabase, ref, set, remove, onValue} from "firebase/database";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"

const auth = getAuth();
const db = getDatabase();

export function createClient(email, password){
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const uid = userCredential.user.uid
            return set(ref(db, "clients/" + uid + "/email"), email)
                .then(() => {return "Client en base de données."})
        })
}

export async function getAllClients(){
    const clients = [];
    await onValue(ref(db, "clients"),
        (snapshot) => {
        snapshot.forEach((clientSnapshot) => {
            clients[clientSnapshot.key] = clientSnapshot.val()
        })
        });
    return clients;
}

export function deleteClient(uid){
    return remove(ref(db, "clients/" + uid))
        .then(() => {return "utilisateur supprimé"});
}