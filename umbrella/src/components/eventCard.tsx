import {
    Image,
    ImageSourcePropType,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { useTheme } from "../helper/useTheme";

type EventCardProps = {
  src: ImageSourcePropType;
  eventName: string;
  eventStartTime: string;
  eventEndTime: string;
  eventLocation: string;
  eventOwner: string;
  eventGoing: number;
  eventInterested: number;
};

export default function EventCard(props: EventCardProps) {
  const colours = useTheme();
  return (
    <View
      style={[
        styles.card,
        { backgroundColor: colours.innerField, borderColor: colours.borders },
      ]}
    >
      <Image style={styles.image} source={props.src}></Image>
      <View style={styles.info}>
        <Text style={[styles.eventName, { color: colours.text }]}>
          {props.eventName}
        </Text>
        <Text style={[styles.eventLocation, { color: colours.text }]}>
          {props.eventLocation}
        </Text>
        <Text
          style={[styles.eventTime, { color: colours.text }]}
        >{`${props.eventStartTime} - ${props.eventEndTime}`}</Text>
        <Text
          style={[
            styles.eventOwner,
            { color: colours.text, borderColor: colours.borders },
          ]}
        >
          {"Event Creator: " + props.eventOwner}
        </Text>
      </View>
      <View style={styles.description}>
        <Text
          style={{
            color: colours.text,
            backgroundColor: colours.cardDescription,
            borderRadius: 15,
            padding: 10,
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>
      <View style={styles.cardButtonContainer}>
        <Pressable
          style={[
            styles.cardButton,
            {
              backgroundColor: colours.cardDescription,
              borderColor: colours.borders,
            },
          ]}
        >
          <Text
            style={[
              { color: colours.text, backgroundColor: colours.cardDescription },
              styles.cardButtonText,
            ]}
          >
            I'm Going!
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.cardButton,
            {
              backgroundColor: colours.cardDescription,
              borderColor: colours.borders,
            },
          ]}
        >
          <Text style={[{ color: colours.text }, styles.cardButtonText]}>
            Interested
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.cardButton,
            {
              backgroundColor: colours.cardDescription,
              borderColor: colours.borders,
            },
          ]}
        >
          <Text style={[{ color: colours.text }, styles.cardButtonText]}>
            Not Interested
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 500,
    width: 350,
    borderWidth: 2,
    borderRadius: 15,
    paddingBottom: 60,
  },
  info: {
    marginLeft: 17,
    marginRight: 70,
  },
  image: {
    width: "100%",
    height: "25%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  eventName: {
    fontSize: 50,
    marginTop: 9,
    marginBottom: 10,
  },
  eventLocation: {
    fontSize: 11,
    marginBottom: 10,
    marginLeft: 2,
  },
  eventTime: {
    fontSize: 22,

    marginBottom: 10,
  },
  eventOwner: {
    fontSize: 16,
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 17,
  },
  eventGoing: {},
  eventInterested: {},

  description: {
    marginHorizontal: 20,
    maxHeight: "20%",
    marginBottom: 40,
  },
  cardButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  cardButton: {
    borderWidth: 2,
    borderRadius: 10,
    width: 90,
    height: 30,
    justifyContent: "center",
  },
  cardButtonText: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
  },
});
