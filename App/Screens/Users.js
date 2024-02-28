import React from 'react';
import {
  Button,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
export default function Users({
  users,
  onClickUser,
  userToAdd,
  setUserToAdd,
  onAddFriend,
}) {
  const renderUser = ({item}) => {
    return (
      <Pressable onPress={() => onClickUser(item)} style={styles.row}>
        <Image style={styles.avatar} source={{uri: item.avatar}} />
        <Text style={{color:'white',fontSize:17,fontWeight:'bold'}}>{item.username}</Text>
      </Pressable>
    );
  };
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#1d2736'}}>
      <View style={styles.addUser}>
        <TextInput
          style={styles.input}
          onChangeText={setUserToAdd}
          value={userToAdd}
          placeholder={"Enter your Friend Name"}
          placeholderTextColor={'#4a4948'}
        />
        {/* <Button title={'Add User'} onPress={() => onAddFriend(userToAdd)} /> */}
       <TouchableOpacity style={{height:50,width:80,backgroundColor:'#4f92ff',borderRadius:25,justifyContent:'center'}} 
       onPress={() => onAddFriend(userToAdd)}
       >
        <View style={{height:50,width:80,backgroundColor:'#4f92ff',borderRadius:25,justifyContent:'center'}}>
          <Text style={{fontSize:15,fontWeight:'bold',color:'#ffff',alignSelf:'center'}}>Add User</Text>
        </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={users}
        renderItem={renderUser}
        keyExtractor={item => item.username.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius:50
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomColor: '#cacaca',
    borderBottomWidth: 1,
  },
  addUser: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    backgroundColor: '#caca',
    flex: 1,
    marginRight: 10,
    padding: 10,
    fontSize:16,
    borderRadius:20
  },
});
