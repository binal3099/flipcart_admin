import { collection, addDoc, getDocs, doc, getDoc, deleteDoc, updateDoc } from "firebase/firestore";
import auth, { db, provider } from "../../Firebase";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AddProductAsync = (data) => {

    return async dispatch => {

        dispatch(loading())


        await addDoc(collection(db, "product"), data);

        dispatch(get_dataAsync(data));
        // console.log("Document written with ID: ", docRef);

    }

}


export const get_dataAsync = () => {
    return async dispatch => {

        dispatch(loading())
        //(firebaase curd)

        let get_fire = [];

        const querySnapshot = await getDocs(collection(db, "product"));
        querySnapshot.forEach((doc) => {

            let get_firbase = { ...doc.data(), id: doc.id }
            get_fire = [...get_fire, get_firbase];
            // console.log(get_fire);

            // console.log(doc.id, " => ", doc.data());
        });
        dispatch(allData(get_fire));
    }
}

const loading = () => {
    return {
        type: "Loading"
    }
}

export const allData = (data) => {
    return {
        type: "AllData",
        payload: data
    }
}


export const Product_editAsync = (id, data) => {
    return async dispatch => {
        dispatch(loading());
        // console.log("id", id);

        const docRef = doc(db, "product", `${id}`);
        const docSnap = await getDoc(docRef);

        let d = { ...docSnap.data(), id: id }
        // console.log(docSnap.data(),"docSnap");
        // console.log("d",d);

        dispatch(singleProduct(d));
    }
}

const singleProduct = (data) => {
    return {
        type: "Single_product",
        payload: data

    }
}

export const product_updateAsync = (id, data) => {
    // console.log("data",data);
    return async dispatch => {
        dispatch(loading());

        await updateDoc(doc(db, "product", `${id}`), data);

        dispatch(get_dataAsync());
    }
}

export const product_removeAsync = (id) => {
    // console.log("data",data);
    return async dispatch => {
        dispatch(loading());

        await deleteDoc(doc(db, "product", `${id}`));

        dispatch(get_dataAsync());
    }
}

// login method

export const Loginasync = (data) => {
    return dispatch => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // console.log(userCredential, "userCredential");
                // Signed in 
                const user = userCredential.user;
                dispatch(Login(user));
                // ...
            })
            .catch((error) => {
                console.log(error, "error");
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }
}

const Login = (user) => {
    return {
        type: "log_in",
        payload: user
    }
}

// signUp

export const Signupasync = (data) => {
    return dispatch => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // console.log(userCredential,"userCredential");
                // Signed in 
                // const user = userCredential.user;
                // ...
                dispatch(Signup());
            })
            .catch((error) => {
                console.log("error", error);
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }
}


const Signup = () => {
    return {
        type: "sign_up"
    }
}

// google signup

export const google_signup = () => {
    return dispatch => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                console.log("credential",credential);
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                console.log("error",error);
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
}

// google login

export const google_lognin = () => {
    return dispatch => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                console.log("credential",credential);
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                console.log("error",error);
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
}