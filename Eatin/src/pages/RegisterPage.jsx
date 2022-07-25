import React, { useState } from "react"
import {
  IonContent,
  IonPage,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
} from "@ionic/react"
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useHistory } from "react-router";

const RegisterPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  //const [confirmPassword, setConfirmPassword] = useState();
  // const [isOwner, setIsOwner] = useState();
  const auth = getAuth();
  const history = useHistory();

  function Register(event) {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      console.log("Signed in!");
      history.push(`restaurants`);
    } else {
      // User is signed out
      console.log("Signet out!");
    }
  });

  return (
    <IonPage>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput value={email} clearInput required onIonChange={e => setEmail(e.detail.value)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput value={password} clearInput required onIonChange={e => setPassword(e.detail.value)}></IonInput>
          </IonItem>
          {/* <IonItem>
            <IonLabel position="floating">Confirm Password</IonLabel>
            <IonInput value={confirmPassword} clearInput required onIonChange={e => setConfirmPassword(e.detail.value)}></IonInput>
          </IonItem> */}
          <IonButton expand="full" type="submit" onClick={Register}>Register</IonButton>
          <IonButton expand="full" fill="clear" routerLink="/login">Log in</IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default RegisterPage;