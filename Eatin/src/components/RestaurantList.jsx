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
                    <IonCard routerLink={`/restaurants/${restaurant?.id}`} key={restaurant.id}>
                        <IonCardHeader style={{paddingTop: 0, paddingRight: 0, paddingLeft: 0}}>
                            <div style={{maxHeight: 200, overflow: "hidden"}}>
                                <IonImg src={restaurant?.images[0]} />
                            </div>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonCardTitle style={{paddingBottom: 13}}>{restaurant.name}</IonCardTitle>
                            <IonText>{restaurant.address}</IonText>
                        </IonCardContent>
                    </IonCard>
                )
            })}
        </IonList>
    );
}

export default RestaurantList;