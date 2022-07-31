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
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

import Rating from "../components/Rating";
import OpeningHours from "../components/OpeningHours";

import 'swiper/css';

const RestaurantDetailsPage = () => {
    const [restaurant, setRestaurant] = useState({});
    const [openingHours, setOpeningHours] = useState([]);

    const params = useParams();
    const restaurantId = params.id;

    async function loadData() {
        const res = await fetch(`https://mad-exam-4e6cd-default-rtdb.firebaseio.com/restaurants/${restaurantId}.json`);
        const restaurantData = await res.json();
        setRestaurant(restaurantData);
        setOpeningHours(restaurantData.openingHours);
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
                        <IonTitle>{restaurant.name}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={true}
                >
                    {restaurant?.images.map((image) => {
                        return (
                            <SwiperSlide>
                                <IonImg src={image} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <IonList>
                    <OpeningHours openingHours={openingHours} />
                    <IonRouterLink href={restaurant.menuUrl} target="_blank">
                        <IonItem>
                            <IonText>Menu</IonText>
                            <IonIcon slot="end" icon={arrowForwardOutline} />
                        </IonItem>
                    </IonRouterLink>
                    <IonRouterLink href={restaurant.bookUrl} target="_blank">
                        <IonItem>
                            <IonText>Book table</IonText>
                            <IonIcon slot="end" icon={arrowForwardOutline} />
                        </IonItem>
                    </IonRouterLink>
                    <IonRouterLink href={`/restaurants/${restaurantId}/reviews`} >
                        <IonItem>
                            <IonText>Reviews</IonText>
                            <IonIcon slot="end" icon={arrowForwardOutline} />
                        </IonItem>
                    </IonRouterLink>
                </IonList>
            </IonContent>
        </IonPage>
    );
}

export default RestaurantDetailsPage;