import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Message from "./pages/Message";
import Account from "./pages/Account";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Layout>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false, contentStyle: { padding: 10 } }}
          />
          <Stack.Screen
            name="Schedule"
            component={Schedule}
            options={{ headerShown: false, contentStyle: { padding: 10 } }}
          />
          <Stack.Screen
            name="Message"
            component={Message}
            options={{ headerShown: false, contentStyle: { padding: 10 } }}
          />
          <Stack.Screen
            name="Account"
            component={Account}
            options={{ headerShown: false, contentStyle: { padding: 10 } }}
          />
        </Stack.Navigator>
        {/* <Schedule /> */}
      </Layout>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
