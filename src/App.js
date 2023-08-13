import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import logo from './platzi.webp';

const defatulTodos = [
  {text: 'Cortar cebollla', completed:true},
  {text: 'Tomar el curso de intro a react', completed:false},
  {text: 'Llorar con la llorora', completed:false},
  {text: 'lallala', completed:false},
  {text: 'texto 5', completed:false}
]

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25}/>
       <TodoSearch/>
      <TodoList>
        {defatulTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed} />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </>
  );
}

export default App;
