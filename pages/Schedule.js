import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import ScheduleCard from "../components/ScheduleCard";
const Schedule = () => {
  const scheduleDoctors = [
    { name: "Dr. Shell Holmes" },
    { name: "Dr. Babe Didrikson" },
    { name: "Dr. BessieColeman" },
    { name: "Dr. BessieColeman" },
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.header}
      >
        <TouchableOpacity style={styles.headings}>
          <Text style={styles.headingText}>Upcoming schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headings}>
          <Text style={styles.headingText}>Upcoming schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headings}>
          <Text style={styles.headingText}>Upcoming schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headings}>
          <Text style={styles.headingText}>Upcoming schedule</Text>
        </TouchableOpacity>
      </ScrollView>
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
  headings: {
    backgroundColor: "#aacdff",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginHorizontal: 3,
  },
  headingText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#4894fe",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 10,
  },
  schedulesDiv: {
    display: "flex",
    flexDirection: "column",
  },
});
