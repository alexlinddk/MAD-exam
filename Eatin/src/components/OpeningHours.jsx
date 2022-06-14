import { IonAccordion, IonAccordionGroup, IonCol, IonGrid, IonItem, IonLabel, IonList, IonRow, IonText } from "@ionic/react";

const OpeningHours = () => {

    const openingDays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ]

    let openingHours = [
        "15:00 - 23:30",
        "15:00 - 23:30",
        "15:00 - 23:30",
        "15:00 - 23:30",
        "15:00 - 23:30",
        "15:00 - 23:30",
        "15:00 - 23:30",
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
                                        <IonItem>
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
                                        <IonItem>
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