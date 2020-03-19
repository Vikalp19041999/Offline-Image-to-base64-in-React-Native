import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import ImgToBase64 from 'react-native-image-base64'

class App extends Component {
  constructor() {
    super()
    this.state =
    {
      data: 'data'
    }
  }

  offline() {
    ImgToBase64.getBase64String('file:///storage/emulated/0/DCIM/Camera/vikalproom.jpg')
      .then(base64String => {
        console.log(base64String);
        this.setState(
          {
            data: "data:image/png;base64," + base64String
          }
        )
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appHeader}>
          <Text style={styles.headerText}>Image to base64 encoding and decoding</Text>
        </View>
        <View style={styles.mainScreen}>
          <Image style={styles.image} source={{ uri: this.state.data }}></Image>
          <TouchableOpacity style={styles.buttonContainer} onPress={this.offline.bind(this)}>
            <Text style={styles.buttonText}>OFFLINE</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  appHeader: {
    height: '8.5%',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  headerText: {
    marginTop: '4.25%',
    fontWeight: 'normal',
    fontSize: 19,
    color: 'snow'
  },
  mainScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer:
  {
    height: 40,
    width: '30%',
    margin: 3,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  buttonText:
  {
    fontSize: 18,
    color: 'snow',
  },
  image: {
    height: '30%',
    width: '45%',
    backgroundColor: 'black'
  }
})