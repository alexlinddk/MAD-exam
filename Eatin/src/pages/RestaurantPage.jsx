import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import RestaurantList from "../components/RestaurantList";
import React, { useEffect, useState } from "react";

const RestaurantPage = () => {
  // const [restaurants, setRestaurants] = useState();
  let restaurants = [
    {
      id: 0,
      name: "McDonalds",
      images: [
        "https://gdkfiles.visitdenmark.com/files/484/208306_Restaurant_Mellemrum_Aarhus_RAISFOTO_7984.jpg?width=987"
      ],
    },
    {
      id: 1,
      name: "Burger King",
      images: [
        "https://gdkfiles.visitdenmark.com/files/484/208306_Restaurant_Mellemrum_Aarhus_RAISFOTO_7984.jpg?width=987"
      ],
    }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Eatin</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent>
        <RestaurantList restaurants={restaurants} />
      </IonContent>
    </IonPage>
  )
}

export default RestaurantPage;
