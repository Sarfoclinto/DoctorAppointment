import { ScrollView, StyleSheet, Text, View } from "react-native";
import ScheduleCard from "../components/ScheduleCard";
const Schedule = () => {
  const scheduleDoctors = [
    { name: "Dr. Shell Holmes" },
    { name: "Dr. Babe Didrikson" },
    { name: "Dr. BessieColeman" },
    { name: "Dr. BessieColeman" },
  ];
  return (
    <View>
      <ScrollView
        style={styles.schedulesDiv}
        showsVerticalScrollIndicator={false}
      >
        {scheduleDoctors.map((item, index) => (
          <ScheduleCard name={item.name} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  header: {},
  schedulesDiv: {
    display: "flex",
    flexDirection: "column",
  },
});
