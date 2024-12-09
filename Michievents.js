import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Bienvenido a Eventos</Text>
    <Text style={styles.text} onPress={() => navigation.navigate('Evento1')}>
      Ver Evento 1
    </Text>
    <Text style={styles.text} onPress={() => navigation.navigate('Evento2')}>
      Ver Evento 2
    </Text>
    <Text style={styles.text} onPress={() => navigation.navigate('Evento3')}>
      Ver Evento 3
    </Text>
  </View>
);

const EventScreen1 = () => (
  <View style={styles.container}>
    <Image
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlKYKRbJnE96eyW53eBjUU-dV1lRvF8gW8Rg&s/300x200' }}
      style={styles.image}
    />
    <Text style={styles.title}>Concierto de K-pop</Text>
    <Text style={styles.text}>Fecha: 20 de Diciembre</Text>
    <Text style={styles.text}>Lugar: Centro Comercial Las Cascadas</Text>
  </View>
);


const EventScreen2 = () => (
  <View style={styles.container}>
    <Image
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFpDm2HeYhofuu5p7pkIz58mInnhCnbxQICg&s/300x200' }}
      style={styles.image}
    />
    <Text style={styles.title}>Exposicion de Arte</Text>
    <Text style={styles.text}>Fecha: 11 de Enero</Text>
    <Text style={styles.text}>Lugar: Museo Nacional de Antropologia</Text>
  </View>
);


const EventScreen3 = () => (
  <View style={styles.container}>
    <Image
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRahvr0Y7L03j5pgda6qRggb4wmxFz4GqRYA&s/300x200' }}
      style={styles.image}
    />
    <Text style={styles.title}>Maratón contra el cancer</Text>
    <Text style={styles.text}>Fecha: 4 de Febrero</Text>
    <Text style={styles.text}>Lugar: Estadio Jorge Magico Gonzalez</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Evento1" component={EventScreen1} />
        <Stack.Screen name="Evento2" component={EventScreen2} />
        <Stack.Screen name="Evento3" component={EventScreen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
    color: '#007BFF',
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
});
