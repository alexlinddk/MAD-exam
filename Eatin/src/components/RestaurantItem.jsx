import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonImg,
} from "@ionic/react";
import { useHistory } from "react-router";

const RestaurantItem = ({ restaurant }) => {
    const history = useHistory();

    function goToRestaurantDetailPage() {
        history.replace(`restaurants/${restaurant.id}`);
    }
    return (
        <IonCard onClick={goToRestaurantDetailPage}>
            <IonCardHeader>
                <IonImg src={restaurant.images[0]} />
            </IonCardHeader>
            <IonCardContent>
                <IonCardTitle>{restaurant.name}</IonCardTitle>
            </IonCardContent>
        </IonCard>
    );
}

export default RestaurantItem;