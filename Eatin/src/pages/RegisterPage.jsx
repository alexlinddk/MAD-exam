import React, { useState } from "react"
import {
  IonContent,
  IonPage,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonHeader,
  IonCardHeader,
  IonText,
  IonToolbar,
  IonRouterLink,
} from "@ionic/react"
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

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
      <IonHeader>
          <IonToolbar>
            <IonRouterLink routerLink="/restaurants" class="ion-float-left">
              <FontAwesomeIcon icon={faChevronLeft} fontSize="32px" className="ion-padding" />
            </IonRouterLink>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardContent className="ion-text-center">
            <IonCardTitle>Register</IonCardTitle>
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
            <IonButton expand="full" type="submit" onClick={Register}>Register</IonButton>
            <IonText style={{ fontStyle: "italic" }}>or</IonText>
            <IonButton expand="full" fill="clear" routerLink="/login">Log in</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  )
}

export default RegisterPage;