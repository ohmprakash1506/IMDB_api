import axios from "axios"
import { returnSuccuss, returnError } from "../errorHandlers/APIResponseHandler.js"

export default class app {
    console = async (req, res) =>{
        try {
            res.json(`hello js app`)
        } catch (error) {
            res.json(`somthing went wrong`)
        }
    }

    all = async (req, res) => {
        try {
            const options = {
                method: 'GET',
                url: 'https://imdb8.p.rapidapi.com/auto-complete',
                params: {q: 'game of thr'},
                headers: {
                  'X-RapidAPI-Key': 'e6e52421c6mshed7cee379e02599p1cc843jsn2f5b0853b87f',
                  'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
                }
              };
            const response = await axios.request(options)
            const status = 200
            const message = `Data fetched`
            const data = response.data
            res.json(returnSuccuss(status, message, data))
        
        } catch (error) {
            const status = 404
            const message = `something went wrong`
            res.json(returnError(status, message))
        }
    }
}