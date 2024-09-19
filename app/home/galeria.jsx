import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, FlatList } from 'react-native';

const months = [
    {
      name: 'Setembro',
      photos: [
        require('../../assets/images/galeria/setembro/f1.jpeg'),
        require('../../assets/images/galeria/setembro/f2.jpeg'),
        require('../../assets/images/galeria/setembro/f3.jpeg'),
        require('../../assets/images/galeria/setembro/f4.jpeg'),
        require('../../assets/images/galeria/setembro/f5.jpeg'),
        require('../../assets/images/galeria/setembro/f6.jpeg'),
      ],
    },
    {
      name: 'Agosto',
      photos: [
        require('../../assets/images/galeria/agosto/f1.jpeg'),
        require('../../assets/images/galeria/agosto/f2.jpeg'),
        require('../../assets/images/galeria/agosto/f3.jpeg'),
        require('../../assets/images/galeria/agosto/f4.jpeg'),
        require('../../assets/images/galeria/agosto/f5.jpeg'),
        require('../../assets/images/galeria/agosto/f6.jpeg'),
      ],
    },
    {
      name: 'Julho',
      photos: [
        require('../../assets/images/galeria/julho/f1.jpeg'),
        require('../../assets/images/galeria/julho/f2.jpeg'),
        require('../../assets/images/galeria/julho/f3.jpeg'),
        require('../../assets/images/galeria/julho/f4.jpeg'),
        require('../../assets/images/galeria/julho/f5.jpeg'),
        require('../../assets/images/galeria/julho/f6.jpeg'),
        ],
    },
];

const Gallery = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Galeria do Mainchein</Text>
        <Text style={styles.subtitle}>
          Explore a minha coleção de fotos incríveis!
        </Text>
      </View>

      {months.map((month, index) => (
        <View key={index} style={styles.monthContainer}>
          <Text style={styles.monthTitle}>{month.name}</Text>
          <FlatList
            data={month.photos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.photoContainer}>
                <Image source={item} style={styles.photo} />
              </View>
            )}
            numColumns={3}
            contentContainerStyle={styles.photoList}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#51aff7',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#06364d',
  },
  subtitle: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
  },
  monthContainer: {
    marginBottom: 30,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 3,
  },
  monthTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#51aff7',
    marginBottom: 10,
  },
  photoContainer: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
    
  },
  photo: {
    width: '100%',
    height: 350,
    aspectRatio: 1, 
    borderRadius: 10,
  },
  photoList: {
    justifyContent: 'space-between',
  },
});

export default Gallery;
