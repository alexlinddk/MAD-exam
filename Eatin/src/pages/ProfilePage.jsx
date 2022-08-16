import React, { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonFabButton, IonHeader, IonIcon, IonImg, IonItem, IonList, IonNavLink, IonPage, IonRouterLink, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";
import { arrowForwardOutline } from "ionicons/icons";

const ProfilePage = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const history = useHistory();

    function handleSignOut() {
        auth.signOut();
        history.replace('/restaurants')
        console.log("Signed out!");
    }

    if (user !== null) {
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;
        const uid = user.uid;
    }


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
                        <IonCardTitle>Profile</IonCardTitle>
                        <IonCardHeader>
                            <IonAvatar style={{ marginLeft: "auto", marginRight: "auto" }} className="ion-margin-bottom">
                                <IonImg src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                            </IonAvatar>
                        </IonCardHeader>
                        <IonItem routerLink={`/profile/edit`} lines="none" detail='false' className="ion-margin-bottom">
                            <IonText>Edit Profile</IonText>
                            <FontAwesomeIcon slot="end" icon={faChevronRight} />
                        </IonItem>
                        <IonItem routerLink={`/profile/account`} lines="none" detail='false'>
                            <IonText>Edit Account</IonText>
                            <FontAwesomeIcon slot="end" icon={faChevronRight} fontSize="16px" />
                        </IonItem>
                        <IonItem button="true" onClick={handleSignOut} color="danger" detail='false' style={{ borderRadius: 5, marginTop: 64 }} lines="none">
                            <IonText>Log out</IonText>
                            <FontAwesomeIcon icon={faArrowRightFromBracket} slot="end" />
                        </IonItem>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
}

export default ProfilePage;