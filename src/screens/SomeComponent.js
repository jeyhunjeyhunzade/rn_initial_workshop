import react from "react"
import {Text, StyleSheet, View} from "react-native"

const SomeComponent = () => {
    return (
        <View>
            <Text style={styles.textStyle}>ReactNativeHub</Text>
            <Text>There will be some components</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50,
        color: "orange",
        backgroundColor: "#000000",
        height: "100%"
    }
})

export default SomeComponent;