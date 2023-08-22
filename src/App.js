import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { useState } from 'react';

const defatulTodos = [
  {text: 'Cortar cebolla', completed:true},
  {text: 'Tomar el curso de intro a react', completed:false},
  {text: 'Llorar con la llorora', completed:false},
  {text: 'LALALA', completed:false},
  {text: 'usar estados derivvados', completed:true}
];

function App() {
  const [todos, setTodos] = useState(defatulTodos);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText) 
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed =true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  }


  return (
    <>
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos}/>
       <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
       />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed} 
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}

          />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </>
  );
}

export default App;
