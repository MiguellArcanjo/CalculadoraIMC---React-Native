import * as React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// import { Button } from 'react-native-paper';

export default class App extends React.Component {

  state = {
    peso: 0,
    altura: 0,
    imc: 0,
    legenda: 'Indeterminado'
  };

  calcularIMC = () => {
    const resultado = this.state.peso / this.state.altura ** 2;

    this.setState({
      imc: Math.ceil(resultado)
    });

    if(resultado < 18.5) {
      this.setState({
        legenda: 'Magreza'
      })
    } else if(resultado >= 18.5 && resultado < 25) {
      this.setState({
        legenda: 'Normal'
      })
    } else if (resultado >= 25 && resultado < 30) {
      this.setState({
        legenda: 'Sobrepeso'
      })
    } else if(resultado >= 30 && resultado < 40) {
      this.setState({
        legenda: 'Obesidade'
      })
    } else if (resultado >= 40) {
      this.setState({
        legenda: 'Obesidade Grave'
      })
    }
  } 


  render() {
    return (
      <View style={styles.app}>  
        <Text style={styles.legenda}>Seu IMC</Text>

        <View>
          <Text style={styles.resultado}>{this.state.imc}</Text>
          <Text style={styles.diagnostico}>{this.state.legenda}</Text>
        </View>

        <View>
          <TextInput 
            style={styles.peso}
            onChangeText={(valor) => {this.setState({peso: valor.replace(',', '.')})}}
          />
          <TextInput 
            style={styles.altura}
            onChangeText={(valor) => {this.setState({altura: valor.replace(',', '.')})}}
          />

          <Button title='Calcular' onPress={this.calcularIMC} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    marginTop: 40,
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
    borderColor: '#000',
    borderWidth: 1
  },

  altura: {
    borderColor: '#000',
    borderWidth: 1
  }
})