import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    position: "relative",
    paddingBottom: 60,
    border: "10px solid red",
  },
  content: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
  },
  footerNavbar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    height: 60,
    borderTopStyle: "solid",
    borderTopWidth: 1,
    borderTopColor: "lightgray",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
