import React from 'react';
import { Button, StyleSheet, TextInput, View, Image, Text, Touchable, TouchableOpacity } from 'react-native';

export default function Login({ onLogin, username, setUsername }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../App/assets/panda.png')} style={{ height: 200, width: 200, alignSelf: 'center' }} />
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder={"Enter Your Chat Name"}
        placeholderTextColor={'black'}
      />
      <TouchableOpacity  onPress={onLogin} style={{ height: 45, width: '80%', backgroundColor: '#4f92ff', borderRadius: 20, alignContent: 'center', justifyContent: 'center' }}>

      <View style={{ height: 45, width: '100%', backgroundColor: '#4f92ff', borderRadius: 20, alignContent: 'center', justifyContent: 'center' }}
      >

        <Text style={{ alignSelf: 'center', fontSize: 17, fontWeight: 'bold', color: '#ffff' }} >Go to Chat</Text>
      </View>
    </TouchableOpacity>
      {/* <Button title={'Login'} onPress={onLogin} /> */}

      <Text style={{fontSize:13,position:'absolute',bottom:20}} >Made with lots of love </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#941845',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#f7c3d6',
    width: '80%',
    marginBottom: 20,
    borderRadius: 20,
    paddingHorizontal: 20,
    color: 'black'
  },
});
