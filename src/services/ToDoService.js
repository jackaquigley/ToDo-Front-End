const baseUrl = "http://localhost:3000/api/todo/";

export default {
  getToDos(){
    return fetch(baseUrl)
    .then(res => res.json());
  },
  postToDo(payload){
    return fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  }
}
