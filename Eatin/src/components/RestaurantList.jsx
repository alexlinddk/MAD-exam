import RestaurantItem from "./RestaurantItem";
import { 
    IonItem, 
    IonList 
} from "@ionic/react";

const RestaurantList = ({ restaurants }) => {
    return (
        <IonList>
            {restaurants.map((restaurant) => {
                return (
                    <IonItem routerLink={`/restaurants/${restaurant.id}` } key={restaurant.id}>
                        <RestaurantItem restaurant={restaurant} key={restaurant.id} />
                    </IonItem>
                )
            })}
        </IonList>
    );
}

export default RestaurantList;