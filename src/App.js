import logo from "./logo.svg";
import "./App.css";
import MainCom from "./Components/MainCom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {Provider} from 'react-redux';
import myStore from './Redux/Store';

function App() {
  // console.log('app',myStore.getState());
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store = {myStore}>
        <MainCom></MainCom>
        </Provider>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
