import React from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Jobs({item,gotoDetails}) {


  return (

          <TouchableOpacity onPress={()=>{gotoDetails(item)}}>
            <View style={styles.container}> 
                  <Text style={styles.text}>{item['job_type']}</Text>
                  <View style={styles.box}>
                     <MaterialCommunityIcons name='domain' style={styles.icon}/>
                     <Text>{item['company_name']}</Text>
                  </View>

                  <View style={styles.box}>
                     <MaterialCommunityIcons name='map-marker' style={styles.icon}/>
                     <Text>{item['job_location']}</Text>
                  </View>
            </View>
           </TouchableOpacity>

  )
}

const styles = StyleSheet.create({


  container : {

    flex : 1,
    padding : 10,
    backgroundColor : 'white',
    marginVertical : 3,
    marginHorizontal : 4,
    borderRadius : 10
  },

  box : {
    flex : 1,
    flexDirection : 'row'

  },

  icon : {

    alignSelf : 'center',
    marginRight : 2
  },

  text : {
    fontSize : 15,
    color : 'black',
    fontWeight : '400'
  }


})
