import react from "react"
import {Text, StyleSheet, FlatList} from "react-native"

const Lists = () => {
    
    const friends = [
        {name: "Friends 1"},
        {name: "Friends 2"},
        {name: "Friends 3"},
        {name: "Friends 4"},
        {name: "Friends 5"},
        {name: "Friends 6"}
    ]

    return (
        <FlatList
            data={friends}
            renderItem={({friend}) => {
                return <Text>{friend.name}</Text>
            }}
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fonstSize: 100,
        color: "red"
    }
})

export default Lists;