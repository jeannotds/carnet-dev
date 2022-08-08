import { Link } from "react-router-dom";
import '../styles/Header.css'
import {contact_top_header} from '../datas/header.json.js'
import Logos from '../img/logos.png'

function Header(){

    return(
            <div>
                <header className="header">
                    <div className='container-header'>
                        <div className="contacts">
                            <a href="#" className="contact">{contact_top_header.tel}</a>
                            <a href="#" className="contact">{contact_top_header.gmail}</a>
                            <a href="#" className="contact">{contact_top_header.facebook}</a>
                            <a href="#" className="contact">{contact_top_header.github}</a>
                        </div>
                        <div className='navigation'>
                            <div className='blog-nav'>
                                <h1 className="logo"><img src={Logos} className="logo-devs-team" alt="devs-team"/></h1>
                                <nav className="nav">
                                    <Link to="/" className="link">Home</Link>
                                    <Link to="/apropos" className="link">About</Link>
                                    <Link to="/list/" className="link">List</Link>
                                    <Link to="/contact" className="link">Contact</Link>
                                </nav>
                            </div>
                            <h2 className='msg-accueil'>{contact_top_header.messageAccueil}</h2>
                            <p className='msg-site'>{contact_top_header.msgSite}</p>
                        </div>
                    </div>
                </header>
            </div>
    )
}

export default Header