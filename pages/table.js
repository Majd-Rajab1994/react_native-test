import React, { useState , useEffect } from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native';

export default function Table(){

    const [j,setj] = useState([]);
    const[isLoading , setisLoading] = useState(true);

// https://jsonplaceholder.typicode.com/todos

    useEffect(() => {
        fetch('http://192.168.1.3/dw/t1/api/lists/read.php',{
          method: 'GET',
          headers:{
            Authorization : 'Basic dXNlcjE6YWJjMTIz',
          }
          
        })
            .then((response) => response.json())
            .then((json) => setj(json.item))
            .catch((error) => console.error(error))
            .finally(() => setisLoading(false));
    }, []);
    

    return(
        <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList data={j} keyExtractor={({ id }) => id} renderItem={({ item }) => (
                //<Text style={styles.tablerow}>{item.id}  / {item.title}</Text>
                
                <TouchableOpacity style={styles.tablerow} >
                  <Image source={{ uri: 'data:image/jpeg;base64,' + item.img }} style = {styles.img}/>
                  <Text style={styles.txt} >{item.id}  / {item.title}</Text>
                </TouchableOpacity>
                
            )}
          />
        )}
      </View>
    )


}

const styles = StyleSheet.create({
    tablerow: {
        flex : 1,
        flexDirection: 'row',
        padding: 6,
        borderWidth:2,
        margin:3,
        borderColor: 'black',
        
    },
    img : {
      height : 80,
      width: 80,
      margin :16
    },
    txt: {
      fontSize: 25,
      margin:16,
      textAlign:"center",
      
    }
});