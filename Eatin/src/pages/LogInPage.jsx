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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const LogInPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
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

          <IonButton expand="full" type="submit">Log in</IonButton>
          <IonButton expand="full" fill="clear" type="submit" routerLink="/register">Register</IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default LogInPage;