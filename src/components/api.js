import axios from 'axios';

export function getWebPage(band){
    return axios.get(`https://rest.bandsintown.com/artists/${band}?app_id=mydemo`)
}

export function getBandInfo(band){
    return axios.get(`https://rest.bandsintown.com/artists/${band}?app_id=davedemo`)
}