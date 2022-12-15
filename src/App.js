
import "./styles.css";
import RoutesApp from "./routes";
import { BrowserRouter, Route } from "react-router-dom";

export default function App(){
  return(
  <>
    <BrowserRouter>
      <RoutesApp/>
    </BrowserRouter>
  </>
  )
}