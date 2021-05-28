import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import { useHistory, useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { setSignedIn, setUserData } from "../../store/reducers/auth.slice";

const Login = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const dispatch = useDispatch();

  const googleSignIn = () => {
    const GProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(GProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signInUser = { name: displayName, email, photoURL };
        dispatch(setSignedIn(true));
        dispatch(setUserData(signInUser));
        sessionStorage.setItem("user", JSON.stringify(signInUser));
        history.replace(from);
        console.log(signInUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="mx-auto my-5" style={{ width: "200px" }}>
      <div className="card  text-center" style={{ width: "18rem" }}>
        <div className="card-body">
          <h2>Continue with Google account</h2>
          <button onClick={googleSignIn} className="btn btn-dark m-5">
            Sign-in Google
          </button>
          <p className="text-start" style={{ color: "#999999" }}>
            To continue, Google will share your name, email address, language
            preference, and profile picture with our site.Learn about our
            customer{" "}
            <a
              rel="noreferrer"
              href="https://policies.google.com/terms?hl=en-US"
              target="_blank"
            >
              policy
            </a>{" "}
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
