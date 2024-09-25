import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const imageSource = require("../assets/doctor.jpg");

const DoctorCard = () => {
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
              Dr. Shell Holmes
            </Text>
            <Text style={{ color: "gray" }}>General Doctor</Text>
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "row", gap: 4 }}>
          <Ionicons name="location" size={18} color="gray" />
          <Text style={{ color: "gray", fontWeight: "bold" }}>1.2 KM</Text>
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
          <MaterialCommunityIcons
            name="clock-outline"
            size={14}
            color="orange"
          />
          <Text style={{ color: "orange" }}>4.8 (120 Reviews)</Text>
        </View>
        <View
          style={{
            dispaly: "flex",
            flexDirection: "row",
            columnGap: 5,
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons name="clock-outline" size={14} color="blue" />
          <Text style={{ color: "blue" }}>Open at 17.00</Text>
        </View>
      </View>
    </View>
  );
};

export default DoctorCard;

const style = StyleSheet.create({
  card: {
    // backgroundColor: "#4894fe",
    backgroundColor: "#fff",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    padding: 10,
    marginTop: 20,
    paddingVertical: 16,
    shadowColor: "#000",
    shadowOffset: { width: 5, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
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
