import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';

const KarateKid = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bem-vindo ao Mundo de Karate Kid</Text>
        <Text style={styles.subtitle}>
          Acompanhe a jornada de Daniel LaRusso e seu mestre Mr. Miyagi em uma série de desafios de artes marciais.
        </Text>
      </View>

      <View style={styles.filmes}>
        <Text style={styles.sectionTitle}>Filmes da Série Karate Kid</Text>
        <View style={styles.filmesList}>
          {['Karate Kid (1984) - Daniel aprende a lutar com Mr. Miyagi.',
            'Karate Kid II (1986) - Daniel e Mr. Miyagi viajam ao Japão.',
            'Karate Kid III (1989) - Daniel enfrenta um novo rival com a ajuda de Mr. Miyagi.'].map((filme, index) => (
              <View key={index} style={styles.filmeItem}>
                <Text style={styles.filmeText}>{filme}</Text>
              </View>
          ))}
        </View>
      </View>

      <View style={styles.cards}>
        {[
          { title: 'Karate Kid', year: '1984', actor: 'Ralph Macchio', image: require('../../assets/images/k1.png') },
          { title: 'Karate Kid II', year: '1986', actor: 'Ralph Macchio', image: require('../../assets/images/k2.png') },
          { title: 'Karate Kid III', year: '1989', actor: 'Ralph Macchio', image: require('../../assets/images/k3.png') }
        ].map((card, index) => (
          <View key={index} style={styles.card}>
            <Image source={card.image} style={styles.cardImage} />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>{card.title}</Text>
              <Text style={styles.cardText}>Ano: {card.year}</Text>
              <Text style={styles.cardText}>Ator Principal: {card.actor}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Links Úteis</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.imdb.com/title/tt0087538/')}>
          <Text style={styles.footerLink}>Veja mais sobre Karate Kid</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 20,
    color: '#fff',
  },
  header: {
    backgroundColor: 'rgba(0, 123, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#fff',
  },
  filmes: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 10,
  },
  sectionTitle: {
    color: '#ffcc00',
    marginBottom: 10,
    fontSize: 20,
  },
  filmesList: {
    marginTop: 10,
  },
  filmeItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginVertical: 5,
    padding: 15,
    borderRadius: 5,
  },
  filmeText: {
    color: '#fff',
  },
  cards: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    width: 250,
    height: 500,
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 400,
    borderRadius: 10,
  },
  cardInfo: {
    padding: 10,
    alignItems: 'center',
  },
  cardTitle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cardText: {
    color: '#fff',
  },
  footer: {
    backgroundColor: 'rgba(0, 123, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  footerTitle: {
    color: '#fff',
    marginBottom: 10,
  },
  footerLink: {
    color: '#ffcc00',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default KarateKid;
