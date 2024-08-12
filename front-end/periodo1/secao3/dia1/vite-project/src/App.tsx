// src/App.tsx

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CoffeeList from './components/CoffeeList';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/coffees" element={ <CoffeeList /> } />
    </Routes>
  )
}

export default App;
