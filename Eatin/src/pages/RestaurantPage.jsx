import {
  IonContent,
  IonFabButton,
  IonHeader,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from "@ionic/react";
import RestaurantList from "../components/RestaurantList";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const RestaurantPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;

  async function getRestaurants() {
    const response = await fetch("https://mad-exam-4e6cd-default-rtdb.firebaseio.com/restaurants.json");
    const data = await response.json();
    const restaurantsArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
    setRestaurants(restaurantsArray);
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  useIonViewWillEnter(() => {
    getRestaurants();
  });

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            {
              !user ?
                <IonRouterLink routerLink="/login" class="ion-float-right">
                  <FontAwesomeIcon icon={faArrowRightToBracket} fontSize="32px" className="ion-padding"/>
                </IonRouterLink>
                :
                <IonRouterLink routerLink="/profile" class="ion-float-right">
                  <FontAwesomeIcon icon={faUser} fontSize="32px" className="ion-padding"/>
                </IonRouterLink>
            }
          </IonToolbar>
        </IonHeader>
        <RestaurantList restaurants={restaurants} />
      </IonContent>
    </IonPage>
  )
}

export default RestaurantPage;
