import { IonAccordion, IonAccordionGroup, IonCol, IonGrid, IonItem, IonLabel, IonList, IonRow, IonText } from "@ionic/react";
import { useState } from "react";
import { useParams } from "react-router";

const OpeningHours = ({ openingHours }) => {
    const openingDays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ]

    return (
        <IonAccordionGroup>
            <IonAccordion value="openingHours">
                <IonItem slot="header">
                    <IonLabel>Opening hours</IonLabel>
                </IonItem>
                <IonGrid slot="content">
                    <IonRow>
                        <IonCol size="6">
                            {
                                openingDays.map((day) => {
                                    return (
                                        <IonItem key={day.id}>
                                            <IonText>{day}</IonText>
                                        </IonItem>

                                    );
                                })
                            }
                        </IonCol>
                        <IonCol size="6">
                            {
                                openingHours.map((hours) => {
                                    return (
                                        <IonItem key={hours.id}>
                                            <IonText>{hours}</IonText>
                                        </IonItem>

                                    );
                                })
                            }
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonAccordion>
        </IonAccordionGroup>
    );
}

export default OpeningHours;