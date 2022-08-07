import { useState } from 'react'
import '../styles/Contact.css'


const Contact = ()=>{

    const [name, setName] = useState('Jeannot DIAMBU')
    const [mail, setMail] = useState('jean@mail.com')
    const [msg, setMsg] = useState('Salut! comment tu vas ?')
    const [input, setInput] = useState(0)

    const handleName = (e)=>{
        setName(e.target.value)
    }

    const handleMail = ()=>{
        alert(mail)
    }

    const handleMsg = ()=>{
        alert(msg)
    }

    return (
        <div className="formulaire">
            <div className="blog-form">
                <h2>Contact Us</h2>
                <form className="form">
                    <div>
                        <input type="text" id="Name" placeholder='Enter your name'
                            value={name} onChange={
                                handleName
                            }
                        />
                    </div>
                    <div>
                        <input type="text" id="mail" placeholder='Enter your E-mail' value={mail}
                            onChange={handleMail
                            }
                        />
                    </div>
                    <div>
                        <textarea id="message" placeholder='Write your Message' className='message' value={msg}
                            onChange={
                                handleMsg
                            }
                        />
                    </div>
                    <div>
                        <button type='submit'
                            onClick={()=>{
                                // alert(handleName)
                            }}
                        >Send</button>
                    </div>
                </form>
            
            </div>


            <div>
                <button
                    onClick={()=>{
                        setInput(input+1)
                    }}
                >Ajouter</button>
                <p>{input}</p>
            </div>


        </div>
    )
}

export default Contact