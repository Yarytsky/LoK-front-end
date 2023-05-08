import axios from "axios";
const API_URL = "https://lakeofknowledgeserver.azurewebsites.net/";
const refreshInterval = 4 * 60 * 1000
const refreshToken = async () => {
    localStorage.setItem('expirationTime', refreshInterval);
    const expirationTime = localStorage.getItem('expirationTime');
    const currentTime = new Date().getTime() / 1000;

    if (currentTime > refreshInterval - 240) { // Refresh token if it's about to expire in 5 minutes
        try {
            return await axios.post(API_URL + 'auth/refreshtoken', {
                "token": localStorage.getItem('atoken'),
                "refreshToken": localStorage.getItem('rtoken')
            }).then(response => {
                if (response.data.accessToken) {
                    var token = response.data.accessToken
                    localStorage.setItem("Btoken", "Bearer " + token)
                    localStorage.setItem("atoken", response.data.accessToken)
                    localStorage.setItem("rtoken", response.data.refreshToken)
                    localStorage.setItem('expirationTime', refreshInterval);
                }

                return response.data;
            })
        } catch (error) {
            // Handle error
        }
    }
};

const setref = () => {
    setInterval(() => {
        refreshToken();
    }, refreshInterval);
};

export default setref;

