
import React, { useState } from "react"
import { IonAvatar, IonContent, IonImg, IonItem, IonList, IonPage, IonText } from "@ionic/react";
import { getAuth, updateProfile } from "firebase/auth";

const ProfilePage = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    updateProfile(auth.currentUser, {
        displayName: "", photoURL: ""
    }).then(() => {
        console.log("Profile updated!");
    }).catch((error) => {
        console.log(error);
    });

    return (
        <IonPage>
            <IonContent>
                <IonList>
                    <IonItem>
                        <IonAvatar>
                            <IonImg src={`${user.image}`} />
                        </IonAvatar>
                    </IonItem>
                    <IonItem>
                        <IonText>{user.name}</IonText>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
}

export default ProfilePage;