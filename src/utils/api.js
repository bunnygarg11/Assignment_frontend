import axios from 'axios';

export const getProviders = (provider) => {
    return axios.get('https://api.apis.guru/v2/providers.json')
        .then(response => {
            return response;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

export const getProviderDetails = (provider) => {
    return axios.get(`https://api.apis.guru/v2/${provider}.json`)
        .then(response => {
            return response;
        })
        .catch(error => {
            console.error('Error fetching data:', error);

        });
}