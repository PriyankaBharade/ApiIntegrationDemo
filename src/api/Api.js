import axios from 'axios'

export default axios.create({
    baseURL: "https://rktest009.herokuapp.com/getproducts"
})