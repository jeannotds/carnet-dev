
import Header from "./Header";
import Main from "./Main";
import {Routes, Route} from "react-router-dom";
import { ToastContainer } from "react-toast";
import Footer from "./Footer";
import 'react-toastify/dist/ReactToastify.css';
import ListeApprenant from "./List";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      {/* <ToastContainer /> */}
        <Header />
        <Routes>
            <Route exact path='/' element={<Main />} ></Route>
            <Route exact path='/apropos' element={<Main />}></Route>
            <Route exact path='/list' element={<ListeApprenant />}></Route>
            <Route exact path='/contact' element={<Contact />}></Route>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
