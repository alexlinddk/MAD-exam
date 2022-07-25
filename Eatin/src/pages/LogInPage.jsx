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
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router";

export const LogInPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();
  const auth = getAuth();


  function handleSubmit(event) {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then(userCredential => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    }).catch(error => {
      console.log(error)
    })
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      history.replace(`restaurants`);
      console.log('Logged in!');
    } else {
      // User is signed out
      console.log('Logged out!');
    }
  });

  return (
    <IonPage>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput value={email} clearInput required onIonChange={e => setEmail(e.target.value)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput value={password} clearInput required onIonChange={e => setPassword(e.target.value)}></IonInput>
          </IonItem>

          <IonButton expand="full" type="submit" onClick={handleSubmit}>Log in</IonButton>
          <IonButton expand="full" fill="clear" type="submit" routerLink="/register">Register</IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default LogInPage;