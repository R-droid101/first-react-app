import axios from "axios";
const url = "http://localhost:3001/persons";

const retrieveData = () => axios.get(url).then((response) => response.data);

const add = (newContact) =>
  axios.post(url, newContact).then((response) => response.data);

const edit = (contact) => {
  axios
    .delete(`${url}/${contact}`)
    .then((response) => response.data)
    .catch(() => console.log("error"));
};

const services = { retrieveData, add, edit };

export default services;
