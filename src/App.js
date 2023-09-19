import './App.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItem from './components/TotalCompleteItem';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>My Todo List</h1>
			<AddTodoForm />
			<TodoList />
			<TotalCompleteItem />
    </div>
  );
}

export default App;
