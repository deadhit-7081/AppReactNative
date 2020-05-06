import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { TextInput,Appbar , Button} from 'react-native-paper';
import DisplayLove from './components/DisplayLove';
import axios from 'axios';


class App extends Component {

  state={
    pmname:"",
    pfname:"",
    result:'Loading'
  }

  calculate()
  {
    axios.get("https://love-calculator.p.rapidapi.com/getPercentage",{
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"love-calculator.p.rapidapi.com",
      "x-rapidapi-key":"8075172c1bmsh071df08f86c93b7p187897jsn7013fee148c6"
      },"params":{
      "fname":`${this.state.pmname}`,
      "sname":`${this.state.pfname}`
      }
      })
      .then((response)=>{
        console.log(response)
        this.setState({
          result:response.data
        })
      })
      .catch((error)=>{
        console.log(error)
      })
  }
  render()
  {
    return (
      <View style={styles.container}>
        <Appbar.Header>
        <Appbar.Content
          title="Love Percent"
          style={{alignItems:"center"}}
        />
      </Appbar.Header>
        <TextInput
        label='Person(male)'
        value={this.state.pmname}
        onChangeText={text => this.setState({pmname:text})}
        />
        <TextInput
        label='Person(female)'
        value={this.state.pfname}
        onChangeText={text => this.setState({pfname:text})}
        />
        <Button icon="heart" mode="contained" style={{margin:10}} onPress={this.calculate.bind(this)}>
          Calculate
        </Button>
        <DisplayLove data={this.state.result}/>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection:"column"
  }
});
