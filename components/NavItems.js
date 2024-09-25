import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";

const NavItems = ({ icon, active, text, setIsActive, handleChangeTab }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        handleChangeTab(text);
      }}
    >
      <View
        style={navs.navItems}
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: active ? "#f0f8ff" : "white",
          justifyContent: "center",
          columnGap: 5,
          padding: 10,
          borderRadius: 15,
        }}
      >
        {icon}
        {active && <Text style={navs.itemText}>{text}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default NavItems;

const navs = StyleSheet.create({
  itemText: {
    color: "#63b4ff",
    fontSize: 16,
  },
});
