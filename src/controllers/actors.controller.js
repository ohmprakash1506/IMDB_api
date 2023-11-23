import axios from "axios";
import {
  returnSuccuss,
  returnError,
} from "../errorHandlers/APIResponseHandler.js";

const url = process.env.IMDB_ACTORS;

export default class actorControllers {
  bornApi = async (req, res) => {
    try {
      const options = {
        method: "GET",
        url: "https://imdb8.p.rapidapi.com/actors/list-born-today",
        params: {
          month: "7",
          day: "27",
        },
        headers: {
          "X-RapidAPI-Key":
            "e6e52421c6mshed7cee379e02599p1cc843jsn2f5b0853b87f",
          "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);

      const status = 200;
      const message = `List of born data fetched`;
      const data = response.data;
      res.json(returnSuccuss(status, message, data));
    } catch (error) {
      const status = 404;
      const message = `Somthing went wrong`;
      res.json(returnError(status, message));
    }
  };

  boiApi = async (req, res) => {
    try {
      const options = {
        method: "GET",
        url: "https://imdb8.p.rapidapi.com/actors/get-bio",
        params: {
          nconst: "nm0001667",
        },
        headers: {
          "X-RapidAPI-Key":
            "e6e52421c6mshed7cee379e02599p1cc843jsn2f5b0853b87f",
          "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
        },
      };
      const response = await axios.request(options);

      const status = 200;
      const message = `List of boi data fetched`;
      const data = response.data;
      res.json(returnSuccuss(status, message, data));
    } catch (error) {
      const status = 404;
      const message = `Somthing went wrong`;
      res.json(returnError(status, message));
    }
  };

  imageApi = async (req, res) => {
    try {
      const options = {
        method: "GET",
        url: "https://imdb8.p.rapidapi.com/actors/get-all-images",
        params: {
          nconst: "nm0001667",
        },
        headers: {
          "X-RapidAPI-Key":
            "e6e52421c6mshed7cee379e02599p1cc843jsn2f5b0853b87f",
          "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);

      const status = 200;
      const message = `List of images fetched`;
      const data = response.data;
      res.json(returnSuccuss(status, message, data));
    } catch (error) {
      const status = 404;
      const message = `Somthing went wrong`;
      res.json(returnError(status, message));
    }
  };
}
