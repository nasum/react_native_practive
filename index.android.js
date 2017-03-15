/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Image, View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class Blink extends Component {
  constructor(props){
    super(props);
    this.state = {showText: true};

    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text style={styles.red}>{display}</Text>
    )
  }
}

class TextInputComponent extends Component {
  constructor(props){
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="Type here"
          onChangeText={(text) => this.setState({text})}
        >
        </TextInput>
        <Text>
          {this.state.text}
        </Text>
      </View>
    )
  }
}

class ScrollViewComponent extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Text style={{fontSize:96}}>If you like</Text>
        <Text style={{fontSize:96}}>Scrolling down</Text>
        <Text style={{fontSize:96}}>What's the best</Text>
        <Text style={{fontSize:96}}>Framework around?</Text>
        <Text style={{fontSize:80}}>React Native</Text>
      </ScrollView>
    );
  }
}


class react_native_practice extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{alignItems: 'center'}}>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Greeting name='Rexxar' />
        <Blink text="hogehoge" />
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <TextInputComponent />
        <ScrollViewComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  red: {
    color: 'red'
  }
})

AppRegistry.registerComponent('react_native_practice', () => react_native_practice);
