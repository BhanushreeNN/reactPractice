import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import {ToDo} from './components/ToDo';
import {Keeper} from './components/Keeper'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/keeper" element={<Keeper />} />
      </Routes>
    </BrowserRouter>
);


