import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation: { navigate } }) {
  console.log("Render home");
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
      <Button
        onPress={() => navigate("Detail", { id: 123 })}
        title="To details"
      />
    </View>
  );
}

function DetailScreen() {
  const route = useRoute();
  console.log("Render detail");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details {route.params.id}</Text>
    </View>
  );
}

function Nav() {
  console.log("Render nav");
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "tomato" },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Awesome app",
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: "Awesome app",
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  console.log("Render app");
  return (
    <NavigationContainer
      linking={{
        config: {
          screens: {
            Detail: "Detail/:id",
          },
        },
      }}
    >
      <Nav />
    </NavigationContainer>
  );
}
