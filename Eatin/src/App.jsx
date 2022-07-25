import { Redirect, Route } from "react-router-dom"
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"
import RestaurantPage from "./pages/RestaurantPage"


/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css"

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css"
import "@ionic/react/css/structure.css"
import "@ionic/react/css/typography.css"

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css"
import "@ionic/react/css/float-elements.css"
import "@ionic/react/css/text-alignment.css"
import "@ionic/react/css/text-transformation.css"
import "@ionic/react/css/flex-utils.css"
import "@ionic/react/css/display.css"

/* Theme variables */
import "./theme/variables.css"
import RegisterPage from "./pages/RegisterPage"
import LogInPage from "./pages/LogInPage"
import RestaurantDetailsPage from "./pages/RestaurantDetailPage"
import ProfilePage from "./pages/ProfilePage"
import EditProfilePage from "./pages/EditProfilePage"
import NewRestaurantPage from "./pages/NewRestaurantPage"
import RestaurantReviewsPage from "./pages/RestaurantReviewsPage"
import EditAccountPage from "./pages/EditAccountPage"

/* Firebase */
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";





const firebaseConfig = {
  apiKey: "AIzaSyAvp_Hh7PWqScM7Avg0RnS9udLF-ut9Iaw",
  authDomain: "mad-exam-4e6cd.firebaseapp.com",
  projectId: "mad-exam-4e6cd",
  storageBucket: "mad-exam-4e6cd.appspot.com",
  messagingSenderId: "203962209512",
  appId: "1:203962209512:web:f0fd1fd564aa0b98f7a55d"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);


setupIonicReact()

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/restaurants">
          <RestaurantPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/login">
          <LogInPage />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
        <Route exact path="/profile/edit">
          <EditProfilePage />
        </Route>
        <Route exact path="/profile/account">
          <EditAccountPage />
        </Route>
        <Route exact path="/new-restaurant">
          <NewRestaurantPage />
        </Route>
        <Route exact path="/restaurants/:id">
          <RestaurantDetailsPage />
        </Route>
        <Route exact path="/restaurants/:id/reviews">
          <RestaurantReviewsPage />
        </Route>
        <Route exact path="/">
          <Redirect to="/restaurants" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)

export default App
