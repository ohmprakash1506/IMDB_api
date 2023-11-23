import axios from "axios";
import {
  returnSuccuss,
  returnError,
} from "../errorHandlers/APIResponseHandler.js";

export default class titleController {
  findApi = async (req, res) => {
    try {
      const options = {
        method: "GET",
        url: "https://imdb8.p.rapidapi.com/title/find",
        params: { q: "game of thr" },
        headers: {
          "X-RapidAPI-Key":
            "e6e52421c6mshed7cee379e02599p1cc843jsn2f5b0853b87f",
          "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
        },
      };
      const response = await axios.request(options);

      const status = 200;
      const message = `List of titles fetched`;
      const data = response.data;
      res.json(returnSuccuss(status, message, data));
    } catch (error) {
      const status = 404;
      const message = `Somthing went wrong`;
      res.json(returnError(status, message));
    }
  };

  topCastApi = async (req, res) => {
    try {
      const options = {
        method: "GET",
        url: "https://imdb8.p.rapidapi.com/title/get-top-cast",
        params: {
          tconst: "tt0944947",
        },
        headers: {
          "X-RapidAPI-Key":
            "e6e52421c6mshed7cee379e02599p1cc843jsn2f5b0853b87f",
          "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);

      const status = 200;
      const message = `List of top cast fetched`;
      const data = response.data;
      res.json(returnSuccuss(status, message, data));
    } catch (error) {
      const status = 404;
      const message = `Somthing went wrong`;
      res.json(returnError(status, message));
    }
  };

  ratingApi = async (req, res) => {
    try {
      const options = {
        method: "GET",
        url: "https://imdb8.p.rapidapi.com/title/get-ratings",
        params: {
          tconst: "tt0944947",
        },
        headers: {
          "X-RapidAPI-Key":
            "e6e52421c6mshed7cee379e02599p1cc843jsn2f5b0853b87f",
          "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);

      const status = 200;
      const message = `List of top cast fetched`;
      const data = response.data;
      res.json(returnSuccuss(status, message, data));

    } catch (error) {
      const status = 404;
      const message = `Somthing went wrong`;
      res.json(returnError(status, message));
    }
  };
}
