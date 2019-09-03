import React from 'react';
import AppRouter from './AppRouter';
import './App.css';
import Store from './store/configureStore';

function App() {
  return (
    <Store>
      <AppRouter/>
   </Store>
  );
}

export default App;
