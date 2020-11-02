import React, { useState , useEffect } from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Text, View} from 'react-native';

export default function Table(){

    const [j,setj] = useState([]);
    const[isLoading , setisLoading] = useState(true);



    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((json) => setj(json))
            .catch((error) => console.error(error))
            .finally(() => setisLoading(false));
    }, []);
    

    return(
        <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList 
            data={j}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
                <Text style={styles.tablerow}>{item.id}  / {item.title}</Text>
            )}
          />
        )}
      </View>
    )


}

const styles = StyleSheet.create({
    tablerow: {
        padding: 6,
        borderWidth:2,
        margin:3,
        borderColor: 'black',
        
    }
});