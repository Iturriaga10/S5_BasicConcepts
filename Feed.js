import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export const Feed = (props) => {

    const data = props.data;
        
    return(
        <>  
            <View style={styles.headerContainer}>
              <Image 
                source={{ uri: data.image }}
                style={styles.image}
              />
              <Text style={styles.text}>{data.name}</Text>
            </View>
            <Text style={styles.descriptionText}>{data.description}</Text>
        </>
    );
}
  
const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 1,
        borderTopColor: 'grey',
        borderTopWidth: 1,
      },
    text:{
      fontFamily: 'sans-serif-light',
      fontSize: 20,
      color: 'black' 
    },
    descriptionText:{
      margin: 8,
    },
    image:{
      backgroundColor:'violet',
      marginTop: 5,
      marginLeft: 16,
      marginRight: 16,
      width: 30, 
      height:30
    },
});
  