import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { TextInput, Button } from 'react-native-paper';

export default class App extends React.Component {

  state = {
    peso: 0,
    altura: 0,
    imc: 0,
    legenda: 'Indeterminado',
    color: '#bdc3c7'
  };

  calcularIMC = () => {
    const resultado = this.state.peso / this.state.altura ** 2;

    this.setState({
      imc: Math.ceil(resultado)
    });

    if(resultado < 18.5) {
      this.setState({
        legenda: 'Magreza',
        color: '#e74c3c'
      })
    } else if(resultado >= 18.5 && resultado < 25) {
      this.setState({
        legenda: 'Normal',
        color: '#2ecc71'
      })
    } else if (resultado >= 25 && resultado < 30) {
      this.setState({
        legenda: 'Sobrepeso',
        color: '#f1c40f'
      })
    } else if(resultado >= 30 && resultado < 40) {
      this.setState({
        legenda: 'Obesidade',
        color: '#e67e22'
      })
    } else if (resultado >= 40) {
      this.setState({
        legenda: 'Obesidade Grave',
        color: '#e74c3c'
      })
    }
  } 


  render() {
    return (
      <View style={styles.app}>  
        <Text style={styles.legenda}>Seu IMC</Text>

        <View style={[styles.painel, {backgroundColor: this.state.color}]}>
          <Text style={styles.resultado}>{this.state.imc}</Text>
          <Text style={styles.diagnostico}>{this.state.legenda}</Text>
        </View>

        <View>
          <TextInput 
            label='Peso'
            style={styles.peso}
            onChangeText={(valor) => {this.setState({peso: valor.replace(',', '.')})}}
          />
          <TextInput 
            label='Altura'
            style={styles.altura}
            onChangeText={(valor) => {this.setState({altura: valor.replace(',', '.')})}}
          />

          <Button mode='contained' onPress={this.calcularIMC}>Calcular</Button>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },

  legenda: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  },

  resultado: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold'
  },
  
  diagnostico: {
    textAlign: 'center',
    fontSize: 20,
  },

  peso: {
    marginVertical: 10
  },

  altura: {
    marginVertical: 10
  },

  painel: {
    borderRadius: 5,
    marginVertical: 10,
    padding: 8,
    width: 150,
    alignSelf: 'center'
  }
})