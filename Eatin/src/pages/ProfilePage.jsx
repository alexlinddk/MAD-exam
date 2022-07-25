import React, { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { IonAvatar, IonButton, IonContent, IonImg, IonItem, IonList, IonNavLink, IonPage, IonText } from "@ionic/react";

const ProfilePage = () => {
    const auth = getAuth();
    const user = auth.currentUser;

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
                        <IonText>{user.displayName}</IonText>
                    </IonItem>
                    <IonItem>
                        <IonNavLink>Edit Profile</IonNavLink>
                    </IonItem>
                    <IonItem>
                        <IonNavLink>Edit Account</IonNavLink>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
}

export default ProfilePage;