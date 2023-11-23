import axios from 'axios';
import { returnSuccuss, returnError } from '../errorHandlers/APIResponseHandler.js';

const url = process.env.IMDB_ACTORS

export default class actorControllers {
    bornApi = async (req, res) =>{
        try {
            const options = {
                method: 'GET',
                url: 'https://imdb8.p.rapidapi.com/actors/list-born-today',
                params: {
                  month: '7',
                  day: '27'
                },
                headers: {
                  'X-RapidAPI-Key': 'e6e52421c6mshed7cee379e02599p1cc843jsn2f5b0853b87f',
                  'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
                }
              };

              const response = await axios.request(options);

              const status = 200
              const message = `List of borm data fetched`
              const data = response.data
              res.json(returnSuccuss(status, message, data))
        } catch (error) {
              const status = 404
              const message = `Somthing went wrong`
              res.json(returnError(status, message))
        }
    }
}