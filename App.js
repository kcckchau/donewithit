import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Image, SafeAreaView } from "react-native";

export default function App() {
  const handlePress = () => console.log("haha");
  console.log(require("./assets/icon.png"));
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React Native
      </Text>
      <Image source={require("./assets/icon.png")} />
      <Image
        blurRadius={10}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
