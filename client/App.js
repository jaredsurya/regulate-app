//functional imports
import React from 'react';
import { Provider } from "react-redux";
import store from "./src/state-managment/store";

//component imports
import Home from './components/Home';

export default function App() {

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};


