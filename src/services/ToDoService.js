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
  },
  updateToDo(id, payload){
    return fetch(baseUrl + id, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },
  deleteToDo(id){
    return fetch(baseUrl + id, {
      method: 'DELETE'
    })
    .then(res => res.json());
  }
}
