import Sun from '../img/sun.svg'
import water from '../img/water.svg'
import '../styles/Scale.css'

const Scale = ({type, niveau}) =>{

    const ShowLevelList = {
        1: 'Junior',
        2: 'Intermediaire',
        3: 'Junior'
    }

    const myNiveau = type === 'niveau' ? <img src={Sun} /> : null
    const rang =[1, 2, 3]

    const ShowLevel = () =>(
        alert(` Il est de categorie ${ShowLevelList[niveau]} `)
    )

    return(

        <div onClick={ShowLevel} className="list-niveau">
            {rang.map((rangeElem)=>(
                niveau >= rangeElem ? <span className='scale' key={rangeElem.toString()}>{myNiveau}</span> : null
            ))}
        </div>

    )
}

export default Scale