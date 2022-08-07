import '../styles/Main.css'
import Illis from '../img/ilAbout.svg'
import {contact_top_header} from '../datas/header.json.js'
import { learnerList } from '../datas/learnerList'
import '../styles/List.css'
import NiveauLearner from './NiveauLearner'
import Profil from './Profil'

const ListeApprenant = () =>{

    return (
            <div className='list-dev'>
                <h2>Liste des developpeurs</h2>
                <p>{contact_top_header.msgSite}</p>

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
    )
}

export default ListeApprenant