import React, { useEffect, useState } from 'react'
import { Alert, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { getAlljobs } from '../Service/jobs'
import Jobs from '../components/Jobs' 
import { useIsFocused } from '@react-navigation/native'




export default function JobList({navigation}) {

  const [jobs,setJobs] = useState([])
  const [searchInput,setSearchInput] = useState("")
  const isFocused = useIsFocused()



  useEffect(()=>{

      getjobs()
    

  },[isFocused])


  let getjobs = async ()=>{

    const data = await getAlljobs()
    setJobs(data.data)

  }

  let gotoDetails = (i)=>{
    navigation.navigate('jobdetails',{ param : i})
 }



  return (
   
        <View style={styles.mainView}>
           <SafeAreaView style={{flex : 1}}>
          <TextInput onChangeText={(text)=>{setSearchInput(text)}} style={styles.searchBox} placeholder='Search by job or location' value={searchInput}/>
        
          <FlatList 
            data={jobs}
            scrollEnabled={true}
            numColumns={1}

            renderItem={({item,index})=>{
              
                if(searchInput === "")
                {
                  return (<Jobs item={item} gotoDetails={gotoDetails}/>)
                }

                if(item.job_type.toLowerCase().includes(searchInput.toLowerCase()) ||item.job_location.toLowerCase().includes(searchInput.toLowerCase()) )
                {
                  
                  console.log(item.job_type)
                  console.log(searchInput)
                  return (<Jobs item={item} gotoDetails={gotoDetails}/>)
                }
              
            }}/>
         </SafeAreaView>
      
        </View>
       
  )
}

const styles = StyleSheet.create({


  searchBox : {

      borderWidth :1,
      borderColor : 'grey',
      borderRadius : 10,
      marginBottom : 2
      

  },

  mainView : {

    padding : 5,
    height : '100%'

  },




})