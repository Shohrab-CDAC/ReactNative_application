import axios from 'axios';
import createUrl from '../utils/utils';
import EncryptedStorage from 'react-native-encrypted-storage';
export async function login(email, password) {
  const body = {
    email,
    password,
  };

  const url = createUrl('/applicant/login');

  try {
    const response = await axios.post(url, body);
    return response.data;
  } catch (ex) {
    console.log(ex);
    return null;
  }
}

export async function educationalDetails() {

  let applicantId = await EncryptedStorage.getItem('applicantId');
 
  const url = createUrl('/applicant/geteducation/' + applicantId);
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (ex) {
    console.log(ex);
    return null;
  }
}

export async function applyToJob(obj) {
  const url = createUrl('/jobapplied/apply/');

  try {
    const response = await axios.post(url, obj);
    return response.data;
  } catch (ex) {
    console.log(ex);
    return null;
  }
}

export async function getAppliedJobs()
{
    let applicantId = await EncryptedStorage.getItem('applicantId');

    const url = createUrl("/jobapplied/applied/"+applicantId)

    try{
        const response = await axios.get(url)
        return response.data

    }catch(ex)
    {
        console.log(ex)
        return null
    }

}

export async function getProfile()
{
  let applicantId = await EncryptedStorage.getItem('applicantId');

  const url = createUrl("/applicant/getapplicant/"+applicantId);

  try{

    const response = await axios.get(url)
    return response.data
  }
  catch(ex){

    console.log(ex)
    return null

  }


}

