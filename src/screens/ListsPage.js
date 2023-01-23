import react from "react"
import {Text, StyleSheet, FlatList} from "react-native"

const Lists = () => {
    
    const friends = [
        {name: "Friends 1"},
        {name: "Friends 2"},
        {name: "Friends 3"},
        {name: "Friends 4"},
        {name: "Friends 5"},
        {name: "Friends 6"},
        {name: "Friends 7"},
        {name: "Friends 8"},
        {name: "Friends 9"},
        {name: "Friends 10"},
    ]

    return (
        <FlatList
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({item}) => {
                return <Text style={styles.listStyle}>{item.name}</Text>
            }}
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fonstSize: 100,
        color: "red"
    },
    listStyle: {
        marginVertical: 50
    }
})

export default Lists;