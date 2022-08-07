import '../styles/Contact.css'


const Contact = ()=>{


    return (
        <div className="formulaire">
            <div className="blog-form">
                <h2>Contact Us</h2>
                <form className="form">
                    <div>
                        <input type="text" id="Name" placeholder='Enter your name'/>
                    </div>
                    <div>
                        <input type="text" id="mail" placeholder='Enter your E-mail'/>
                    </div>
                    <div>
                        <textarea id="message" placeholder='Write your Message' className='message'/>
                    </div>
                    <div>
                        <button type='submit'>Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact