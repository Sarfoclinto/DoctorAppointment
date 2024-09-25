import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const CatItem = ({ text, icon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.categories}>{icon}</View>
      <Text style={{ color: "gray" }}>{text}</Text>
    </View>
  );
};

export default CatItem;

const styles = StyleSheet.create({
  container: {
    width: "22%",
    display: "flex",
    flexDirection: "cloumn",
    alignItems: "center",
    rowGap: 6,
    marginVertical: 15,
  },
  categories: {
    backgroundColor: "#f0f8ff",
    borderRadius: 50,
    paddingHorizontal: 5,
    paddingVertical: 22,
    display: "flex",
    width: "100%",
    alignItems: "center",
  },
});
