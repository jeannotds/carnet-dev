import { click } from '@testing-library/user-event/dist/click'
import '../styles/Profil.css'

const Profil = ({id, nom, prenom, niveau, academie, image, cohorte, statut, commentaire}) =>{


    function click(){
        alert(`C'est ${prenom} ${nom} apprenant à la  ${academie} de la cohorte ${cohorte}`)
    }

    return (
        <div onClick={click}>
            <img src={image} className="img-dev" alt="developper"/>
        </div>
    )
}

export default Profil