/* eslint-disable prettier/prettier */
import auth from "@react-native-firebase/auth";

const registerUser = async (email, password) => {
  try {
    let response = await auth().createUserWithEmailAndPassword(email, password);
    return response;
  } catch {
    (error) => {
      if (error.code === "auth/email-already-in-use") {
        console.log("This email address is already in use!");
      }

      if (error.code === "auth/invalid-email") {
        console.log("That email address is invalid!");
      }

      console.error(error);
    };
  }
};

const loginUser = async (email, password) => {
  try {
    let response =  await auth().signInWithEmailAndPassword(email, password);
    return response;
  } catch {
    (error) => {
        if (error.code === "auth/invalid-email") {
            console.log("This email address is invalid");
        }
    
        if (error.code === "auth/user-disabled") {
            console.log("This user has been disabled");
        }

        if (error.code === "auth/wrong-password") {
            console.log("This password is invalid for the given email");
        }
    };
  }
};

const logOut = async () => {
    try {
        let response = await auth().signOut();
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const AuthService = {
  registerUser, 
  loginUser,
  logOut
};
