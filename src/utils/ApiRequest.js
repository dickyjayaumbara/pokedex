import axios from 'axios';

const baseUrl = "https://pokeapi.co";
const baseApiUrl = baseUrl + "/api/v2";

export default class ApiRequest{
    static getBaseApiUrl = () =>{
        return baseApiUrl;
    }

    static get = (url, callback) => {
        let headers = {
            'Access-Control-Allow-Origin': '*',
        }

        axios.get(baseApiUrl + url, headers)
        .then(function (response) {
            callback(response);
        })
        .catch(function (error) {
            callback(error.response);
        });
    }

    static getAll = (arrAxios, callback) => {
        let headers = {
            'Access-Control-Allow-Origin': '*',
        }

        let arrRequest = [];

        let i = 0;
        while(i < arrAxios.length){
            let axi = axios.get(arrAxios[i].url, headers);
            arrRequest = [...arrRequest, axi]
            i++;
        }

        axios
        .all(arrRequest)
        .then(
            axios.spread((...responses) => {
                callback(responses);
            })
        )
        .catch(errors => {
                callback(errors.response);
        });
    }
}
