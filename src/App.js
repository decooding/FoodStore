import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header.component';
import Main from './pages/main.page';
import Recommend from './pages/Recommend.page';
import NewPlace from './pages/newPlace.page';
import Footer from './components/footer.component';

import Restouran from './pages/category/Restouran.page';
import Pab from './pages/category/Pab.page';
import Karaoke from './pages/category/Karaoke.page';
import Cafe from './pages/category/Cafe.page';
import FastFood from './pages/category/FastFood.page';
import Coffee from './pages/category/Coffee.page';
import Sushi from './pages/category/Sushi.page';
import Stolovka from './pages/category/Stolovka.page';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/allplace" element={<NewPlace />} />
          <Route exact path="/recommend" element={<Recommend />} />

          <Route exact path="/brad" element={<Restouran />} />
          <Route exact path="/jus" element={<Pab />} />
          <Route exact path="/milk" element={<Karaoke />} />
          <Route exact path="/gastro" element={<FastFood />} />
          <Route exact path="/fruit" element={<Coffee />} />
          <Route exact path="/fish" element={<Sushi />} />
          <Route exact path="/freeze" element={<Stolovka />} />
          <Route exact path="/baka" element={<Cafe />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
