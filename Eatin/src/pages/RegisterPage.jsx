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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const RegisterPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  //const [confirmPassword, setConfirmPassword] = useState();
  // const [isOwner, setIsOwner] = useState();
  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
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
          <IonButton expand="full" type="submit" onClick={createUserWithEmailAndPassword}>Register</IonButton>
          <IonButton expand="full" fill="clear" routerLink="/login">Log in</IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default RegisterPage;