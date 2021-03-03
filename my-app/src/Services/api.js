import axios from 'axios'

const api = axios.create({
    //baseURL: 'http://localhost:8080'
    //baseURL: 'https://sistema-carol-nutri.devorion.repl.co'
    baseURL: 'https://sistema-carol-nutri-1.devorion.repl.co' // apontador para a area de testes
})

export default api