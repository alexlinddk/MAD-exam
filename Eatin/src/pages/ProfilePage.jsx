import React, { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { IonAvatar, IonButton, IonContent, IonIcon, IonImg, IonItem, IonList, IonNavLink, IonPage, IonRouterLink, IonText } from "@ionic/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
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
                <IonList>
                    <IonItem>
                        <IonAvatar>
                        </IonAvatar>
                    </IonItem>
                    <IonItem>
                    </IonItem>
                    <IonRouterLink href={`/profile/edit`}>
                        <IonItem>
                            <IonText>Edit Profile</IonText>
                            <IonIcon slot="end" icon={arrowForwardOutline} />
                        </IonItem>
                    </IonRouterLink>
                    <IonRouterLink href={`/profile/account`}>
                        <IonItem>
                            <IonText>Edit Account</IonText>
                            <IonIcon slot="end" icon={arrowForwardOutline} />
                        </IonItem>
                    </IonRouterLink>
                    <IonButton onClick={handleSignOut}>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    </IonButton>
                </IonList>
            </IonContent>
        </IonPage>
    );
}

export default ProfilePage;