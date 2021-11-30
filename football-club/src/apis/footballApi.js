import axios from 'axios'

const FOOTBALL_API = 'http://api.football-data.org/v2'

const footBallApi = axios.create({
  baseURL: FOOTBALL_API,
  headers: { 'X-Auth-Token': '0cb8e876a52e491c8336c846d20387f9' }
})

export default footBallApi
