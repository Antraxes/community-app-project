import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EventCard from "../../components/eventCard";
import { useTheme } from "../../helper/useTheme";

export default function Home() {
  const colours = useTheme();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colours.screenBackground }]}
    >
      <ScrollView>
        <View style={styles.card}>
          <EventCard
            src={require("../../../assets/images/queer-event.jpg")}
            eventName="My Event"
            eventOwner="Jackie Ryton"
            eventStartTime="10:00am"
            eventEndTime="2:00pm"
            eventLocation="The Local Park"
            eventGoing={24}
            eventInterested={102}
          ></EventCard>
        </View>
        <View style={styles.card}>
          <EventCard
            src={require("../../../assets/images/queer-event.jpg")}
            eventName="My Event"
            eventOwner="Jackie Ryton"
            eventStartTime="10:00am"
            eventEndTime="2:00pm"
            eventLocation="The Local Park"
            eventGoing={24}
            eventInterested={102}
          ></EventCard>
        </View>
        <View style={styles.card}>
          <EventCard
            src={require("../../../assets/images/queer-event.jpg")}
            eventName="My Event"
            eventOwner="Jackie Ryton"
            eventStartTime="10:00am"
            eventEndTime="2:00pm"
            eventLocation="The Local Park"
            eventGoing={24}
            eventInterested={102}
          ></EventCard>
        </View>
        <View style={styles.card}>
          <EventCard
            src={require("../../../assets/images/queer-event.jpg")}
            eventName="My Event"
            eventOwner="Jackie Ryton"
            eventStartTime="10:00am"
            eventEndTime="2:00pm"
            eventLocation="The Local Park"
            eventGoing={24}
            eventInterested={102}
          ></EventCard>
        </View>
        <View style={styles.card}>
          <EventCard
            src={require("../../../assets/images/queer-event.jpg")}
            eventName="My Event"
            eventOwner="Jackie Ryton"
            eventStartTime="10:00am"
            eventEndTime="2:00pm"
            eventLocation="The Local Park"
            eventGoing={24}
            eventInterested={102}
          ></EventCard>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    alignItems: "center",
    marginBottom: 40,
  },
});
