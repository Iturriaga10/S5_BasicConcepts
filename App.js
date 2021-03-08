import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import {Header} from './Header';
import {Feed} from './Feed';

export default function App() {
  const dataFeed = [
    {
      "_id": 1,
      "name": "Jorge Luis Borges",
      "image": 'https://www.ecestaticos.com/image/clipping/557/418/7052744faf519355ca32636cf370cf63/tres-estudios-que-han-cambiado-todo-lo-que-creiamos-sobre-los-perros.jpg',
      "description": "Description Description Description Description Description Description Description Description",
    },
    {
      "_id": 2,
      "name": "Julio Cortazar",
      "image": 'https://cdn.forbes.com.mx/2018/12/perro_china-640x360.jpg',
      "description": "Description Description Description Description Description Description Description Description",
    },
    {
      "_id": 3,
      "name": "Jorge Luis Borges",
      "image": 'https://www.hola.com/imagenes/estar-bien/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-a.jpg',
      "description": "Description Description Description Description Description Description Description Description",
    },
  ]
  
  return (
    <>
    <Header />
    <FlatList 
      keyExtractor={ (item) => String(item['_id']) }
      data = {dataFeed}
      renderItem = { ({item}) =>(
        <Feed data={item}/>
      )}
    />
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
