import React from "react";
import { hot } from "react-hot-loader/root";
import Calculator from "./Calculator";
import "./styles.scss";
// import {hot} from 'react-hot-loader/root'
const App: React.FC = () => {
  return <Calculator />;
};
export default hot(App);
