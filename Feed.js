import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export const Feed = (props) => {

    const data = props.data;
        
    return(
        <>  
            <View style={styles.headerContainer}>
              <Image 
                source={{ uri: data.image }}
                style={styles.imageIcon}
              />
              <Text style={styles.text}>{data.name}</Text>
            </View>
            <Text style={styles.descriptionText}>{data.description}</Text>
            <View style={styles.imageReactionContainer}>
                <Image 
                    source={require('./assets/icon_dog.png')}
                    style={styles.imageReaction}
                />
                <Image 
                    source={require('./assets/icon_dog.png')}
                    style={styles.imageReaction}
                />
            </View>
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
    imageIcon:{
      marginTop: 5,
      marginLeft: 16,
      marginRight: 16,
      width: 30, 
      height:30
    },
    imageReactionContainer:{
        flexDirection:'row',
        backgroundColor:'gray',
    },
    imageReaction:{
        marginLeft: 16,
        width: 30, 
        height:30
    }
});
  