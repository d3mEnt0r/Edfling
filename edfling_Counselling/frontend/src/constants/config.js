// API_NOTIFICATION_MESSAGES


export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: "Loading...",
        message: "We are currently processing your request. Please wait!"
    },
    success:{
        title:"Success",
        message:"Data successfully loaded"
    },
    responseFailure:{
        title: "Error",
        message: "An error occured while fetching response from the server. Please try again"
    },
    requestFailure:{
        title: "Error",
        message: "An error occured while parsing request data!"
    },
    networkError:{
        title: "Error",
        message: "Please check internet connectivity!"
    }
}



// API SERVICE CALLS
export const SERVICE_URLS = {
    userSignup: { url: '/signup', method: 'POST'},
    userLogin: { url: '/login', method: 'POST'},
    expertList : { url: '/experts', method: 'GET'},
}