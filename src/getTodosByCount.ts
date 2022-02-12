import {Todo} from "./interfaces.js";

export const getTodosByCount = (count) => {
  for(let i = 1; i <= count; i++){
    fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
      .then<Todo>(response => response.json())
      .then(json => console.log(json))
  }
}
