import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "../components/styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import CatItem from "../components/CatItem";
import NavItems from "../components/NavItems";
import DoctorCard from "../components/DoctorCard";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const imageSource = require("../assets/doctor.jpg");
const Home = ({ navigation }) => {
  const items = [
    {
      text: "Covid 19",
      icon: <FontAwesome6 name="virus-covid" size={24} color="#4894fe" />,
    },
    {
      text: "Doctor",
      icon: <Fontisto name="doctor" size={24} color="#4894fe" />,
    },
    {
      text: "Medicine",
      icon: <AntDesign name="link" size={24} color="#4894fe" />,
    },
    {
      text: "Hospital",
      icon: <FontAwesome5 name="hospital-alt" size={24} color="#4894fe" />,
    },
  ];
  return (
    // the main view
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        {/* header view starts here */}
        <View style={style.header}>
          <View>
            <Text style={style.text1}>Hello,</Text>
            <Text style={style.text2}>Hi James</Text>
          </View>
          <View style={style.rounded}></View>
        </View>
        {/* header view ends here */}
        {/* blue bg card starts here */}
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
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
                >
                  Dr. Shell Holmes
                </Text>
                <Text style={{ color: "lightgray" }}>General Doctor</Text>
              </View>
            </View>
            <View>
              <AntDesign name="right" size={24} color="white" />
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
              <Ionicons name="calendar-outline" size={14} color="white" />
              <Text style={{ color: "white" }}>Sunday, 12 June</Text>
            </View>
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
                color="white"
              />
              <Text style={{ color: "white" }}>11:00 - 12:00AM</Text>
            </View>
          </View>
        </View>
        {/* blue bg card ends here */}

        {/* search input starts here */}
        <View style={style.inputDiv}>
          <Feather name="search" size={24} color="#8d9cbf" />
          <TextInput
            style={style.textfield}
            placeholder="Search doctor or health issue"
          />
        </View>
        {/* search input starts here */}
        {/* categories starts here */}
        <View style={style.categories}>
          {items.map((item, index) => (
            <CatItem key={index} text={item.text} icon={item.icon} />
          ))}
        </View>
        {/* categories ends here */}
        <Text style={{ fontWeight: "bold", fontSize: 19, marginVertical: 15 }}>
          Near Doctor
        </Text>
        {/* near doctor card starts here */}
        <DoctorCard />
        {/* near doctor card ends here */}
      </View>
    </TouchableWithoutFeedback>
  );
};

// borderColor: "red",
// borderStyle: "solid",
// borderWidth: 1

export default Home;

const style = StyleSheet.create({
  categories: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  inputDiv: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginVertical: 10,
    marginTop: 20,
    backgroundColor: "#ced4e2",
    padding: 10,
    borderRadius: 10,
    columnGap: 10,
    alignItems: "center",
  },
  textfield: {
    width: "90%",
    height: "100%",
  },
  main: {
    flex: 1,
  },
  text1: {
    fontSize: 17,
    color: "gray",
  },
  text2: {
    fontSize: 17,
    color: "gray",
    fontWeight: "bold",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rounded: {
    height: 50,
    width: 50,
    backgroundColor: "black",
    borderRadius: 50,
  },
  card: {
    backgroundColor: "#4894fe",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    padding: 10,
    marginTop: 20,
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
});
