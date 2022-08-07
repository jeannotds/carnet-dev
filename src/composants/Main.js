import '../styles/Main.css'
import Illis from '../img/ilAbout.svg'

const Main = () =>{

    return (
        <div className="about-us">
            <div className="top-about">
               <div className='top-1'>
                    <h2 className='title-about'>About Us</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam officiis quibusdam autem eveniet at, nihil repudiandae nam, eum fugiat ratione dignissimos minus reiciendis sequi. Non itaque at deserunt nemo amet?
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    </p>
                    <a href='#' className='savoir-plus'>Savoir plus</a>
               </div>
               <div className='top-2'>
                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                   <img src={Illis} alt='' className='illis'/>
               </div>
            </div>
           <div className="about-left">
           </div>
           <div className="about-right">
           </div>
        </div>
    )
}

export default Main