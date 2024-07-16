import './App.css';

import { Routes, Route } from 'react-router-dom';
import Layout from 'src/layouts/Layout';
import { Home, Login, Signup } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Route>
    </Routes>
  )
}

export default App;
