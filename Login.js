import React, { Component } from "react";

import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    ImageBackground,
    Image,
    Alert,
    KeyboardAvoidingView,
    ToastAndroid


} from "react-native";
import firebase from "firebase"
export default class LoginScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: ""
      };
    }
    handleLogin = (email, password) => {
          firebase
          .auth()
          .signInWithEmailAndPassword(email,password)
          .then(()=>{

            this.props.navigation.navigate("BottomTab")
          })
      
          .catch(error => {
      
            alert(error.message)
          })
        };
    
    render() {
        const { email, password } = this.state;
        return (
    <View>
    <TouchableOpacity
    style={[styles.button, { marginTop: 20 }]}
    onPress={() => this.handleLogin(email, password)}
  >
    <Text style={styles.buttonText}>Login</Text>
  </TouchableOpacity>
  </View>
        )}}
