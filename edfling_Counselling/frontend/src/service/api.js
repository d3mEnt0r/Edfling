// Now here we will make the api
// There are many methods to call the api ......We will use AXIOS

import axios from 'axios';

import { API_NOTIFICATION_MESSAGES, SERVICE_URLS } from '../constants/config.js';


const API_URL = 'http://localhost:5000';

const axiosInstance = axios.create({
    baseURL : API_URL,
    timeout : 10000,
    headers : {
        "content-type" : "application/json"
    }
});

axiosInstance.interceptors.request.use(
    function(config){
        return config;
    },
    function (error){
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function (response){
        // return global loader here
        return processResponse(response);
    },
    function(error){
        //stop global loader here
        return Promise.reject(processError(error));
    }
);


////////////////////////////////////////
// if SUCCESS -> return{ isSuccess : true, data : object}
// if Failure -> return{ isFailure : true, status : string, msg: string, code: int}
const processResponse = (response) => {
    if (response?.status === 200) {
        return {
            isSuccess: true,
            data: response.data
        };
    } else {
        return {
            isFailure: true,
            status: response?.status,
            msg: response?.msg,
            code: response?.code
        };
    }
}


const processError = (error) => {
    if(error.response){
        // request made successfully but server responded with status code other than 200
        console.log("Error in response:", error.toJSON());
        return{
            isError : true,
            msg: API_NOTIFICATION_MESSAGES.responseFailure,
            code: error.response.status
        }
    }
    else if(error.request){
        // request bheji par server se koi response hi nahi aya
        console.log("Error in request", error.toJSON());
        return{
            isError : true,
            msg: API_NOTIFICATION_MESSAGES.requestFailure,
            code: ""
        }
    }
    else{
        console.log("Error in network", error.toJSON());
        return{
            isError : true,
            msg: API_NOTIFICATION_MESSAGES.networkError,
            code: ""
        }
    }
}


const API = {};

for (const [key, value] of Object.entries(SERVICE_URLS)){
    API[key] = (body, showUploadProgress, showDownloadProgress, id) =>
        axiosInstance({
            method: value.method,
            url: value.url,
            data: body,
            responseType: value.responseType,
            onUploadProgress: function(progressEvent){
                if(showUploadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    showUploadProgress(percentageCompleted);
                }
            },
            onDownloadProgress: function(progressEvent){
                if(showDownloadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    showDownloadProgress(percentageCompleted);
                }
            }
        });  
}

export const fetchExpertByID = async (id) => {
    const url = `/expert/${id}`;
    try {
      const response = await axiosInstance.get(url);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
};

export {API};