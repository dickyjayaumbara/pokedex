import axios from 'axios';

const baseUrl = "https://pokeapi.co";
const baseApiUrl = baseUrl + "/api/v2";

export default class ApiRequest{
    static get = (url, callback) => {
        axios.get(baseApiUrl + url)
        .then(function (response) {
            callback(response);
        })
        .catch(function (error) {
            callback(error.response);
        });
    }

    static post = (url, formData, callback) => {
        let headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

        axios.post(baseApiUrl + url, formData, headers)
        .then(function (response) {
            callback(response);
        })
        .catch(function (error) {
            callback(error.response);
        });
    }
}
