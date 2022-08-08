import { useState } from 'react'
import { toast } from 'react-toast'
import { Toastify } from 'toastify'
import '../styles/Contact.css'


const Contact = ()=>{

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [msg, setMsg] = useState('')

    const handleName = (e) =>{
        e.preventDefault()
        if(name.length != 0 && mail.length != 0 && msg.length != 0){
            setName("")
            setMail("")
            setMsg("")
            return toast.warning("Please fill in all fields")
        }
        else{
            return toast.warning(" Entrer toutes les informations !")
        }
    }


    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if( !name || !mail || !msg){
            alert("Entrer toutes les informations !")
        }
        else{
            alert('message envoyé avec succes!')
            setName("")
            setMail("")
            setMsg("")
        }
    }

    return (
        <div className="formulaire">
            <div className="blog-form">
                <h2>Contact Us</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <div>
                    {(name.length != 0 && mail.length != 0 && msg.length != 0) ? <div>Vous pouvez maintenant envoyer</div> : null}
                        <input type="text" id="Name" placeholder='Enter your name' value={name}
                            onChange={(e)=>{

                                setName(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <input type="mail" id="mail" placeholder='Enter your E-mail' value={mail}
                            onChange={(e)=>{
                                setMail(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <textarea id="message" placeholder='Write your Message' className='message' value={msg}
                            onChange={(e)=>{
                                setMsg(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        {/* <button type='Envoir'
                            onClick={
                                handleName
                            }
                        >Send</button> */}
                        <input type="submit" value="Envoyer" />
                        
                    </div>
                    
                </form>
            </div>

        </div>
    )
}

export default Contact




  {/* <div>
                            {isInputError && (
                                <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>
                            )}
                        </div> */}