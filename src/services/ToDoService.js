const baseUrl = "http://localhost:3000/api/todo/";

export default {
  getToDos(){
    return fetch(baseUrl)
    .then(res => res.json());
  }
}
