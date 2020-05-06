import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const DisplayLove = (props) =>
{
    if(props.data == 'Loading')
    {
        return(
            <Text style={{fontSize:20}}>
                Enter name and press Calculate
            </Text>
        )
    }
    else if(props.data.percentage <=50)
    {
        return(
            <View style={styles.container}>
                <Text style={{fontSize:30,color:"red",textAlign:"center"}}>{props.data.percentage}</Text>
                <Text style={{fontSize:30,color:"red",textAlign:"center"}}>{props.data.result}</Text>
            </View>
        )
    }
    else{
        return(
            <View style={styles.container}>
                <Text style={{fontSize:30,color:"green",textAlign:"center"}}>{props.data.percentage}</Text>
                <Text style={{fontSize:30,color:"green",textAlign:"center"}}>{props.data.result}</Text>
            </View>
        )
    }
}

export default DisplayLove;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
    }
  });