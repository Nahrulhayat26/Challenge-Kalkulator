import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default class App extends React.Component {
    static navigationOptions = {
        title: 'Home'
    }
  constructor() {
    super()
    this.state = {
      hasil: 0,
      input: '',
      ShowAbout: false
    }
  }

  input = (val) => {
    const {input} = this.state
    const inputValue = val

    this.setState({ input: inputValue })
    const hasil = this.hasilPerhitungan(inputValue)
    this.setState({ hasil: hasil })
  }

  hasilPerhitungan = (inputValue) => {
    const arrayInput = inputValue.split('')
    let hasil = 0
    let angka1 = ""
    let angka2 = ""
    let operator = ""

    for (var i = 0; i < arrayInput.length; i++) {
    switch (arrayInput[i]) {
      case "+":
      operator = "+"
      angka1 = hasil
      angka2 = ""
      break;
      case "-":
      operator = "-"
      angka1 = hasil
      angka2 = ""
      break;
      case "*":
      operator = "*"
      angka1 = hasil
      angka2 = ""
      break;
      case "/":
      operator = "/"
      angka1 = hasil
      angka2 = ""
      break;
      default:
      arrayInput[i] == "" ? angka2 = "" : angka2 += String(arrayInput[i])
      angka1 == "" ? angka1 = angka2 : hasil;
      if (arrayInput[i] != " ") {
        switch(operator) {
          case "+":
          hasil =
          Number(angka1) + Number(angka2);
          break;
          case "-":
          hasil =
          Number(angka1) - Number(angka2);
          break;
          case "*":
          hasil =
          Number(angka1) * Number(angka2);
          break;
          case "/":
          hasil =
          Number(angka1) / Number(angka2);
          break;
          default :
          hasil = Number(angka1) + 0;

          }
        }
      }
    }
    return hasil;
  }
  render() {

    const {ShowAbout} = this.state
    const arrayOperator = [{
      nama: 'Tambah',
      operator: '+'
    },{
      nama: 'Kurang',
      operator: '-'
    },{
      nama: 'Bagi',
      operator: '/'
    },{
      nama: 'Kali',
      operator: '*'
    }]
    return (
      <View style={styles.container}>
        <Text style = {{fontSize: 32}}>Kalkulator</Text>

        <TextInput
          style={styles.inputBox}
          value={this.state.input}
          onChangeText={ (val) => this.input(val) }
        />

        <Text style = {{ fontSize: 25 }}> Hasil : {this.state.hasil}</Text>
        {
          arrayOperator.map(data => {
            return (
              <Button title={data.nama} onPress={() => {
                const { input } = this.state
                const angkaBaru = `${input}${data.operator}`
                this.setState({input: angkaBaru})
              }} />
            )
          })
        }
        <Button 
            title="Go to About screen" 
            onPress={() => this.props.navigation.navigate('About', { text: 'ini adalah data dari params' })} />
        {/* <Button title="Tambah" onPress={() => {
          const { input } = this.state
          const angkaBaru = `${input}+`
          this.setState({input: angkaBaru})
        }} /> */}
        {/* {
          ShowAbout ? 
          <Button title="Hide About" onPress={ () => this.setState({ShowAbout: false})} /> 
          : 
          <Button title="Show About" onPress={ () => this.setState({ShowAbout: true})} />
        }
        
        
        {
          ShowAbout && <About deskripsi={ "Ini adalah Aplikasi kalkulator" } />
        }
         */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    padding: 12,
    margin: 6
  }
});
