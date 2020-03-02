import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID wKN7KmePH2OmwVF7ZWTLrpXBl59ZbeLuk0-odLxr2lg"
  }
});
