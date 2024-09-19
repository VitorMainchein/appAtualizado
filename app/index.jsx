import { StyleSheet, Image, Text, View, FlatList } from "react-native";
import { Link } from "expo-router";

export default function SobreHome() {
  const data = [
    { id: '1', link: './home/filmes', titulo: 'Filmes Favoritos' },
    { id: '2', link: './home/galeria', titulo: 'Galeria' },
    { id: '3', link: './atividades', titulo: 'Atividades' }
  ];
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sobre Mim</Text>
      </View>
      <View style={styles.main}>
        <Image 
          style={styles.profileImage}
          source={require('../assets/images/eu.jpg')}
        />
        <Text style={styles.welcome}>Bem-vindo</Text>
        <Text style={styles.description}>
          Sou estudante do Sesi-senai e curso Desenvolvimento de Sistemas. Sou jovem aprendiz na Intelbras e amos esportes.
        </Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Link style={styles.link} href={item.link}>
              {item.titulo}
            </Link>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    
  },
  
  header: {
    backgroundColor: '#ff9cb5',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  
  title: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 28,
  },

  main: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: '100%',
    maxWidth: 600,
  },

  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#ff9cb5',
  },

  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },

  description: {
    textAlign: 'center',
    margin: 10,
    width: '90%',
    color: '#555',
    lineHeight: 20,
  },

  link: {
    backgroundColor: '#ff9cb5',
    margin: 10,
    padding: 15,
    width: 300,
    color: '#fff',
    textAlign: 'center',
    borderRadius: 5,
    fontWeight: 'bold',
    elevation: 2,
  },
});
