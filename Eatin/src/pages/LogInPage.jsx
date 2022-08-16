import React, { useState } from "react"
import {
  IonContent,
  IonPage,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonRouterLink,
  IonCard,
  IonCardContent,
  IonText,
  IonCardTitle,
  IonCardHeader,
} from "@ionic/react"
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

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
      history.replace(`/restaurants`);
      console.log('Logged in!');
    } else {
      // User is signed out
      console.log('Logged out!');
    }
  });

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonRouterLink routerLink="/restaurants" class="ion-float-left">
              <FontAwesomeIcon icon={faChevronLeft} fontSize="32px" className="ion-padding" />
            </IonRouterLink>
          </IonToolbar>
        </IonHeader>
        <IonCard>
        <IonCardContent className="ion-text-center">
        <IonCardTitle>Log in</IonCardTitle>
          <IonCardHeader>
            <IonItem className="ion-padding-end ion-padding-bottom">
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="email" value={email} clearInput required onIonChange={e => setEmail(e.target.value)}></IonInput>
            </IonItem>
            <IonItem className="ion-padding-end ion-padding-bottom">
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type="password" value={password} clearInput required onIonChange={e => setPassword(e.target.value)}></IonInput>
            </IonItem>
          </IonCardHeader>

          <IonButton expand="full" type="submit" onClick={handleSubmit}>Log in</IonButton>
          <IonText style={{fontStyle: "italic"}}>or</IonText>
          <IonButton expand="full" fill="clear" type="submit" routerLink="/register">Register</IonButton>
          </IonCardContent>

        </IonCard>
      </IonContent>
    </IonPage>
  )
}

export default LogInPage;