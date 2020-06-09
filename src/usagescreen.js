import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import fire from './auth/fire';
export default class Usagescreen extends React.Component{

  constructor(){
    super()
  
  
        this.database= fire.database().ref().child('weight');
  
        this.state = {
          weight : 10
        }
        }
        componentDidMount(){
          this.database.on('value',snap =>{
            this.setState({
              weight:snap.val()
            });
          });
        }
    render(){
        return(
            <View style={styles.inputView}>
            <Text style={styles.inputtext}>GAS usage History</Text>
            <LineChart 
              data={{
                labels: ["WEEK 1", "WEEK 2", "WEEK 3", "WEEK 4", "WEEK 5", "WEEK 6"],
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100
                    ]
                  }
                ]
              }}
              width={Dimensions.get("window").width} // from react-native
              height={300}
              yAxisLabel=""
              yAxisSuffix=""
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "#5199ff",
                backgroundGradientFrom: "#5199ff",
                backgroundGradientTo: "#5199ff",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 10
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726"
                }
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16
              }}
            />
          </View>
        )
    }
}

const styles = StyleSheet.create({
  inputView: {
    flex: 1,
    backgroundColor: '#1771f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
    inputtext: {
      fontSize: 30,
      color:'white',
      marginTop: 30,
      fontWeight: 'bold'
  },
  inputt: {
    fontSize: 50,
    color:'white',
    marginTop: 50,
    fontWeight: 'bold'
}});