import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonImg,
    IonItem,
    IonList,
    IonText
} from "@ionic/react";

const RestaurantList = ({ restaurants }) => {
    return (
        <IonList>
            {restaurants.map((restaurant) => {
                return (
                    <IonItem routerLink={`/restaurants/${restaurant.id}`} key={restaurant.id}>
                        <IonCard>
                            <IonCardHeader>
                                <IonImg src={restaurant.images[0]} />
                            </IonCardHeader>
                            <IonCardContent>
                                <IonItem>
                                    <IonCardTitle>{restaurant.name}</IonCardTitle>
                                </IonItem>
                                <IonItem>
                                    <IonText>{restaurant.address}</IonText>
                                </IonItem>
                            </IonCardContent>
                        </IonCard>
                    </IonItem>
                )
            })}
        </IonList>
    );
}

export default RestaurantList;