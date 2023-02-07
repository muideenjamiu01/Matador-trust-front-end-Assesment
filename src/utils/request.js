// import { getServers } from "dns"

const API_KEY = process.env.NEXT_PUBLIC_API_KEY
// const BASE_URL = 'https://api.themoviedb.org/3'
const BASE_URL = 'https://dev.matadortrust.com/v2';
// https://dev.matadortrust.com/v2/developers/dashboard_data

const requests = {
  fetchDashboardData: `${BASE_URL}/developers/dashboard_data`,  
}

export default requests

