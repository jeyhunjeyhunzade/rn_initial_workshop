import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = props => {
  const {navigate} = props.navigation;

  return (
    <View>
      <Text style={styles.text}>My first react</Text>
      <Button title="Go to components demo" onPress={() => navigate("Some")} />
      <TouchableOpacity onPress={() => navigate("Some")}>
        <Text>Go to components demo</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
