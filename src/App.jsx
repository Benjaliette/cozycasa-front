import './App.css';

import { Routes, Route } from 'react-router-dom';
import { MainLayout, TodoLayout } from 'src/layouts';
import { Home, Login, Signup, TodoList, Show } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Route>
      <Route>
        <Route path="users" element={<TodoLayout/>}>
          <Route path="todos" element={<TodoList />}></Route>
          <Route path=":id" element={<Show />}></Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default App;
