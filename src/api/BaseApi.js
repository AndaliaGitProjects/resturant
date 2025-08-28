import axios from "axios"

const URL = import.meta.env.VITE_URL_SERVER
const BaseApi = axios.create({ baseURL: URL })

export default BaseApi
