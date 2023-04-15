import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store.js';
import Films from './pages/FilmsPage.jsx';
import Characters from './pages/CharactersPage.jsx';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Films />} />
          <Route exact path="/films/:id/characters" element={<Characters />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
