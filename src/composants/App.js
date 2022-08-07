
import Header from "./Header";
import Main from "./Main";
import {Routes, Route} from "react-router-dom";
import { ToastContainer } from "react-toast";
import Footer from "./Footer";
import ListeApprenant from "./List";

function App() {
  return (
    <div className="App">
      {/* <ToastContainer /> */}
        <Header />
        <Routes>
            <Route exact path='/' element={<Main />} ></Route>
            <Route exact path='/apropos' element={<Main />}></Route>
            <Route exact path='/list' element={<ListeApprenant />}></Route>
            <Route exact path='/contact' element=""></Route>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
