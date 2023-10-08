import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  finished: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data;
  const ID = todo.id;
  const title = todo.title;
  const completed = todo.finished;

  console.log(`
    The ToDo with ID ${ID} 
    has a title of ${title}
    and is it finished? ${completed}`);
});
