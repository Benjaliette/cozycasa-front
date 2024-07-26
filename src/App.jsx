import './App.css';

import { Routes, Route } from 'react-router-dom';
import { MainLayout, HomeLayout, UserLayout } from 'src/layouts';
import { Home, Login, Signup, TodoList, NoteList, EventList, Show } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Route>
      <Route path="users" element={<UserLayout/>}>
        <Route path=":id" element={<Show />}></Route>
      </Route>
      <Route path="homes" element={<HomeLayout/>}>
        <Route path="todos" element={<TodoList />}></Route>
        <Route path="notes" element={<NoteList />}></Route>
        <Route path="events" element={<EventList />}></Route>
      </Route>
    </Routes>
  )
}

export default App;
