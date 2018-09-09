import axios from 'axios';
import {AUTH_CONFIG} from '../auth/auth0-variables'

export function getBandInfo(band){
    return axios.get(`https://rest.bandsintown.com/artists/${band}?app_id=davedemo`);
}

export function auth0Logout(){
    return axios.get(`https://${AUTH_CONFIG.domain}/v2/logout?returnTO=http%3A%2F%2Flocalhost:3000`);
}