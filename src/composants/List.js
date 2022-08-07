import '../styles/Main.css'
import Illis from '../img/ilAbout.svg'
import {contact_top_header} from '../datas/header.json.js'
import { learnerList } from '../datas/learnerList'
import '../styles/List.css'
import NiveauLearner from './NiveauLearner'
import Profil from './Profil'

const ListeApprenant = () =>{

    return (
            <div>
                <h2>Liste des developpeurs</h2>
                <p>{contact_top_header.msgSite}</p>

                    <div className='blog-learners'>
                        {learnerList.map(({id, nom, prenom, niveau, academie, image, cohorte, statut, commentaire})=>(
                            <div key={id} className="learners">
                                <div>
                                    <Profil 
                                        id={id} nom={nom} prenom={prenom}
                                        niveau={niveau} image={image} cohorte={cohorte}
                                        statut={statut} commentaire={commentaire} academie={academie}
                                    />
                                </div>
                                <div>{academie}</div> 
                                <div>Noms : {nom} {prenom}</div> 
                                <div>Status : {statut} </div>
                                
                                <div>Cohorte : {cohorte}</div>
                                <div className='categorie'>
                                    Categorie : <NiveauLearner niveau={niveau}/>
                                </div>
                                <div>Blog : {commentaire}</div>
                                
                            </div>
                        ))}
                    </div>
                   
            </div>
    )
}

export default ListeApprenant