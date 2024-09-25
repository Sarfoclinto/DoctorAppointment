import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const imageSource = require("../assets/doctor.jpg");

const ScheduleCard = ({ name }) => {
  return (
    <View style={style.card}>
      {/* top */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            columnGap: 5,
          }}
        >
          <Image source={imageSource} style={style.image} />
          <View style={{}}>
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 18 }}>
              {name}
            </Text>
            <Text
              style={{ color: "lightgray", fontWeight: "bold", fontSize: 16 }}
            >
              General Doctor
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          borderStyle: "solid",
          borderColor: "lightgray",
          borderWidth: 0.3,
          marginVertical: 15,
        }}
      ></View>
      {/* bottom */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            dispaly: "flex",
            flexDirection: "row",
            columnGap: 5,
            alignItems: "center",
          }}
        >
          <Ionicons name="calendar-outline" size={14} color="gray" />
          <Text style={{ color: "gray" }}>Sunday, 12 June</Text>
        </View>
        <View
          style={{
            dispaly: "flex",
            flexDirection: "row",
            columnGap: 5,
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons name="clock-outline" size={14} color="gray" />
          <Text style={{ color: "gray" }}>11:00 - 12:00AM</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity style={style.customButton}>
          <Text style={style.btnText}>Detail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScheduleCard;

const style = StyleSheet.create({
  btnText: {
    color: "#569cfe",
    fontWeight: "bold",
  },
  customButton: {
    backgroundColor: "#eff7ff",
    padding: 10,
    display: "flex",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 15,
  },
  card: {
    // backgroundColor: "#4894fe",
    backgroundColor: "#fff",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    padding: 10,
    marginTop: 20,
    marginHorizontal: 2,
    paddingVertical: 16,
    shadowColor: "#000",
    shadowOffset: { width: 5, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 2,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  rounded: {
    height: 50,
    width: 50,
    backgroundColor: "black",
    borderRadius: 50,
  },
});
