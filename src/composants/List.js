import '../styles/Main.css'
import {contact_top_header} from '../datas/header.json.js'
import { learnerList } from '../datas/learnerList'
import '../styles/List.css'
import Profil from './Profil'
import { useState } from 'react'
import { Link } from "react-router-dom";

const ListeApprenant = () =>{

    const [isOpen, setIsOpen] = useState(true)

    return !isOpen ? (
            <div className='list-dev'>
                <div className='isOpen-true' onClick={()=>{
                    setIsOpen(true)
                }}>Cacher la listé</div>
                <div className='info-list'>
                    <div className='info-list-title'>      
                        <h2>Liste des developpeurs</h2>
                            <p>{contact_top_header.msgSite}</p>
                        </div>
                        <div className='info-list-blog'>
                            <Link to="/list">Voir tous</Link>
                            <Link to="/list">1ere Chorte</Link>
                            <Link to="/list">2ere Chorte</Link>
                            <Link to="/list">3ere Chorte</Link>
                        </div>
                    </div>
                     <div className='blog-learners'>
                        {learnerList.map(({id, nom, prenom, niveau, academie, image, cohorte, statut, commentaire})=>(
                            <div key={id} className="learners">
                                <Profil 
                                    nom={nom} prenom={prenom}
                                    niveau={niveau} image={image} cohorte={cohorte}
                                    statut={statut} commentaire={commentaire} academie={academie}
                                />
                                <div className='list-ident'>
                                    <div className='commentaire'> {commentaire}</div>
                                    <div>Je suis {prenom} {nom}</div> 
                                    <div>{statut} </div>
                                    <div>formé(e) à {academie} en {cohorte}. 
                                    <span className='plus'> Voir plus</span></div> 
                                </div>
                            </div>
                        ))}
                    </div>
                   
            </div>
    ) : (<div className='isOpen-false' onClick={ ()=>setIsOpen(false)}>Afficher la liste</div>)
}

export default ListeApprenant