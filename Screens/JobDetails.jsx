import React from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { applyToJob, educationalDetails } from '../Service/user';
import EncryptedStorage from 'react-native-encrypted-storage';




export default function JobDetails({route,navigation}) {

    const job = route.params.param;
    
    let apply = async () => {
     
      const eduDet = await educationalDetails();
      const postedId = job['posted_by_id'];
      const jobId = job['job_id'];

      if (eduDet.data.length === 0) {
        Alert.alert('Enter Educational Details First');
      } else {
        const id = await EncryptedStorage.getItem('applicantId');

        const obj = {
          applicant_id: id,
          posted_by_id: postedId,
          job_id: jobId,
          selected: false,
        };

        const status = await applyToJob(obj);
       

        if (status.status === 'error') {
         
          Alert.alert('Already Applied');
         
        }
        else if(status.status === "success")
        {
          Alert.alert('Successfully Applied')
        

          
        }
      }
    };


    let onCancel = ()=>{


        navigation.pop()


    }
  return (
 
    

             
        <View style={styles.container}>

                <Text style={styles.text}>{job['job_type']}</Text>
                  <View style={styles.box}>
                     <MaterialCommunityIcons name='office-building-outline' size={20}  style={styles.icon}/>
                     <Text style={styles.companyText}>{job['company_name']}</Text>
                  </View>
                  <View style={styles.box}>
                     <MaterialCommunityIcons name='map-marker-multiple-outline' size={20}  style={styles.icon}/>
                     <Text style={styles.companyText}>{job['job_location']}</Text>
                  </View>
                  <View style={styles.box}>
                     <MaterialCommunityIcons name='calendar-month' size={20}  style={styles.icon}/>
                     <Text style={styles.companyText}>{"POSTED ON : "+job['created_date'].substring(0,10)}</Text>
                  </View>
                  <View style={styles.box}>
                     <MaterialCommunityIcons name='playlist-check' size={20}  style={styles.icon}/>
                     <Text style={styles.companyText}>{"Skills :"+job['skill_set_required']}</Text>
                  </View>
                  <View style={styles.box}>
                     <MaterialCommunityIcons name='eye-check' size={20}  style={styles.icon}/>
                     <Text style={styles.companyText}>{job['is_active'] === 1 ?  "ACTIVE": "NOT ACTIVE"}</Text>
                  </View>
                  <View style={styles.box}>
                     <MaterialCommunityIcons name='account-multiple' size={20}  style={styles.icon}/>
                     <Text style={styles.companyText}>{"POSITIONS : "+job['position']}</Text>
                  </View>
                  <View style={styles.box}>
                    <Button title='APPLY' onPress={apply}/>
                    <View  style={styles.btn}></View>
                    <Button title='CANCEL'onPress={onCancel}/>
                  </View>
                  <ScrollView style={styles.jobBox}>
                    <Text style={styles.text}>Job Description</Text>
                    <Text style={styles.companyText}>{job['job_description']}</Text>

                  </ScrollView>
                  
        </View>


    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    
  },

  box: {
   
    flex: 1,
    flexDirection: 'row',
    maxHeight : "5%"
  },

  icon: {
   
    alignSelf: 'center',
    marginRight: 5,
    color : 'dimgrey',

  },

  text: {
    fontSize: 18,
    color: 'black',
    fontWeight: '700',
    marginBottom : 9
  },
  companyText : {

    color : 'dimgrey',
    fontWeight : '400',
    alignSelf : 'center',
  },
  btn : {
    marginHorizontal : 115
  },
  jobBox : {
    marginTop : 14,
    height : 400,

    
  }
});