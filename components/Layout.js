import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { styles } from "./styles";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import NavItems from "./NavItems";
import { useNavigation } from "@react-navigation/native";

const Layout = ({ children }) => {
  const [isActive, setIsActive] = useState("home");
  const [navs, setNavs] = useState([
    {
      text: "Home",
      active: isActive === "home" ? true : false,
      icon: (
        <FontAwesome6
          name="house"
          size={24}
          color={isActive === "home" ? "#63b4ff" : "gray"}
        />
      ),
    },
    {
      text: "Schedule",
      active: isActive === "schedule" ? true : false,
      icon: (
        <AntDesign
          name="calendar"
          size={24}
          color={isActive === "schedule" ? "#63b4ff" : "gray"}
        />
      ),
    },
    {
      text: "Message",
      active: isActive === "message" ? true : false,
      icon: (
        <AntDesign
          name="message1"
          size={24}
          color={isActive === "message" ? "#63b4ff" : "gray"}
        />
      ),
    },
    {
      text: "Account",
      active: isActive === "account" ? true : false,
      icon: (
        <AntDesign
          name="user"
          size={24}
          color={isActive === "account" ? "#63b4ff" : "gray"}
        />
      ),
    },
  ]);

  const navigation = useNavigation();

  useEffect(() => {
    setNavs([
      {
        text: "Home",
        active: isActive === "home" ? true : false,
        icon: (
          <FontAwesome6
            name="house"
            size={24}
            color={isActive === "home" ? "#63b4ff" : "gray"}
          />
        ),
      },
      {
        text: "Schedule",
        active: isActive === "schedule" ? true : false,
        icon: (
          <AntDesign
            name="calendar"
            size={24}
            color={isActive === "schedule" ? "#63b4ff" : "gray"}
          />
        ),
      },
      {
        text: "Message",
        active: isActive === "message" ? true : false,
        icon: (
          <AntDesign
            name="message1"
            size={24}
            color={isActive === "message" ? "#63b4ff" : "gray"}
          />
        ),
      },
      {
        text: "Account",
        active: isActive === "account" ? true : false,
        icon: (
          <AntDesign
            name="user"
            size={24}
            color={isActive === "account" ? "#63b4ff" : "gray"}
          />
        ),
      },
    ]);
  }, [isActive]);

  const handleChangeTab = (text) => {
    setIsActive(text.toLowerCase());
    navigation.navigate(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
      <View style={styles.footerNavbar}>
        {navs.map((item, index) => (
          <NavItems
            key={index}
            icon={item.icon}
            text={item.text}
            active={item.active}
            setIsActive={setIsActive}
            handleChangeTab={handleChangeTab}
          />
        ))}
      </View>
    </View>
  );
};

export default Layout;
