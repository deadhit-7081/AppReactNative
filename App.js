import React, {Component} from 'react';
import { StyleSheet, Text, View ,Button, TextInput,Image,Alert,ScrollView} from 'react-native';
import axios from 'axios';


class App extends Component {
  state  = 
  {
    name:"Jai",
    status:"Coder",
    text:"loading",
    text1:"loading1"
  }
  handleOnClick = (name) =>
  {
    this.setState({
      name:name,
      status:"Student"
    });
  }
  componentDidMount()
  {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response =>
    {
      console.log(response);
      this.setState({
        text1:response.data[1].name
      })
    })
  }
  render()
  {
    console.log(this.state);
    console.log("from render");
    return (
      <View style={styles.container}>
        <Text style = {styles.text}>{this.state.name}</Text>
        <Text>{this.state.status}</Text>
        <Button title="Click" onPress={this.handleOnClick.bind(this,"Archit")}/>
        <Text style = {styles.text}>Hello1</Text>
        <Text style = {styles.text}>Hello2</Text>
        <Text style = {{fontSize:30}}>{this.state.text}</Text>
        <Text style = {{fontSize:30}}>{this.state.text1}</Text>
        <TextInput style= {{fontSize:30,height:40,borderColor:"yellow",borderWidth:2}}
        placeholder="Type Here" onChangeText = {(input) => this.setState({text:input})}/>
        <Button title="click me!!" onPress = {() => Alert.alert("Worked")} color ="red"/>
        <ScrollView>
          <Image
           source={{
             uri:"https://images.pexels.com/photos/4048182/pexels-photo-4048182.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
             ,height:200,width:200}}/>
          <Image
           source={{
             uri:"https://images.pexels.com/photos/4048182/pexels-photo-4048182.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
             ,height:200,width:200}}/>
          <Image
           source={{
             uri:"https://images.pexels.com/photos/4048182/pexels-photo-4048182.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
             ,height:200,width:200}}/>
        </ScrollView>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  text:
  {
    fontSize : 30,
    height:80,
    width:100,
    borderWidth:3,
    backgroundColor:"yellow",
    textAlign:"center",
    borderColor:"red",
    marginBottom:10
  }
});
