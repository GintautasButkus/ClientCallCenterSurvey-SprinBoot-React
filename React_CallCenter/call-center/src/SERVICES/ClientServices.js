import axios from 'axios';

const CLIENT_API_BASE_URL = "http://localhost:8080/api/client";
const SURVEY_API_BASE_URL = "http://localhost:8080/api/survey";
class ClientService{
    getClients(){
        return axios.get(CLIENT_API_BASE_URL);
    }

    createClient(client){
        return axios.post(CLIENT_API_BASE_URL, client);
    }

    getClientById(clientId){
        return axios.get(CLIENT_API_BASE_URL + '/' + clientId)
    }

    updateClient(client, clientId){
        return axios.put(CLIENT_API_BASE_URL + '/update/' + clientId, client)
    }

    delteClient(clientId){
        return axios.delete(CLIENT_API_BASE_URL + '/' + clientId)
    }

    getSurveys(surveyId){
        return axios.get(SURVEY_API_BASE_URL + '/' + surveyId)
    }
} export default new ClientService();