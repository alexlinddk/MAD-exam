import {

    IonAccordion,
    IonToolbar,
    IonAccordionGroup,
    IonBackButton,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonImg,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonRouterLink,
    IonRow,
    IonText,
    IonButtons,
    IonTitle
}
    from "@ionic/react";
import { useHistory, useParams } from "react-router";
import { getDatabase, ref } from "firebase/database";
import { useEffect, useRef, useState } from "react";
import { arrowForwardOutline, star, starHalf } from 'ionicons/icons'

import Rating from "../components/Rating";
import OpeningHours from "../components/OpeningHours";

const RestaurantDetailsPage = () => {
    const [restaurant, setRestaurant] = useState({});

    // const history = useHistory();
    const params = useParams();
    const restaurantId = params.id;

    async function loadData() {
        const res = await fetch(`https://mad-exam-4e6cd-default-rtdb.firebaseio.com/restaurants/${restaurantId}.json`);
        const restaurantData = await res.json();
        setRestaurant(restaurantData);
    }

    const openingDays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ]
    let openingHours = [
        "15:00 - 23:30",
        "15:00 - 23:30",
        "15:00 - 23:30",
        "15:00 - 23:30",
        "15:00 - 23:30",
        "15:00 - 23:30",
        "15:00 - 23:30",
    ]

    let ratings = [5, 5, 5, 5, 5]
    const average = () => ratings.reduce((a, b) => a + b) / ratings.length;

    const Rate = () => {

    }

    const rate = simulateSwitch => {
    switch (average) {
        case (average <= 1): return <IonIcon icon={star} />
        case (average <= 2): return <><IonIcon icon={star} /><IonIcon icon={star} /></>
        case (average <= 3): return <><IonIcon icon={star} /><IonIcon icon={star} /></>
        case (average <= 4): return <><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} /></>
        case (average <= 5): return <><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} /><IonIcon icon={star} /></>
        default: return <IonIcon icon={starHalf} />
    }
}

useEffect(() => {
    loadData();
}, []);

return (
    <IonPage>
        <IonContent>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>Restaurant</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonList>
                <IonImg src="https://gdkfiles.visitdenmark.com/files/484/208306_Restaurant_Mellemrum_Aarhus_RAISFOTO_7984.jpg?width=987" />
                <OpeningHours />
                <IonItem>
                    {/* <Rating /> */}
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                {
                                    simulateSwitch()
                                    };
                            </IonCol>
                            <IonCol>

                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonItem>
                <IonRouterLink href="https://meny.dk/" target="_blank">
                    <IonItem>
                        <IonText>Menu</IonText>
                        <IonIcon slot="end" icon={arrowForwardOutline} />
                    </IonItem>
                </IonRouterLink>
                <IonRouterLink href="https://mehttps://www.booking.com/index.en-gb.html?aid=397656&label=duc511jc-1DCAEoggI46AdIM1gDaD2IAQGYAQm4ARfIAQ_YAQPoAQGIAgGoAgO4AvDrnZUGwAIB0gIkODhmNTllZTAtNGQ2OS00NjM3LTg3NTItNDYwMDAyZmQ5NzA52AIE4AIB&sid=3ca48b8ceae21224e652095afe39d496&keep_landing=1&sb_price_type=total&ny.dk/" target="_blank">
                    <IonItem>
                        <IonText>Book bord</IonText>
                        <IonIcon slot="end" icon={arrowForwardOutline} />
                    </IonItem>
                </IonRouterLink>
            </IonList>
        </IonContent>
    </IonPage>
);
}

export default RestaurantDetailsPage;