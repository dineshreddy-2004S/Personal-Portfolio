import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "7d3a12a1-c778-44f9-9548-9f16c79e01f6");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          alert(data.message);
          event.target.reset();
        } else {
          console.log("Error", data);
        }
      };

    return (
        <div className='contact' id='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Lets talk</h1>
                    <p>I am currently available to take an new projects, so feel free to send me a message about anything that you want to work on. You can contact anytime. </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>dineshreddy8658@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>+91 9652128657</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>Bangalore, India</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className='contact-submit'>Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact