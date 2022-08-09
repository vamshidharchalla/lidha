import { useEffect } from "react";

const ContactUs = () => {
    useEffect(() => {

    }, [])
    
 return(
    <div className="container lidha-contact-us">
        <div className="row">
        <div className="col-sm">
           <h2>Get in touch</h2>
           <p>Feel free to get in touch with us to discuss about your project. <br />Just Fill out the form. we’ll get back to you shortly or Just call Us / WhatsApp us!</p>
            <div className="row">
                <div className="col-2">
                    <i className="fa-regular fa-building icon-size-contact"></i>
                </div>
                <div className="col-10">
                    <h5>OFFICE ADDRESS</h5>
                    <p>Gautami Enclave, Kondapur, Hyderabad-500084</p>
                    <hr />
                </div>

                <div className="col-2">
                    <i className="fa-solid fa-phone-volume icon-size-contact"></i>
                </div>
                <div className="col-10">
                    <h5>CALL US ON</h5>
                    <p className="lidha-color">+91 7730075767</p>
                </div>
                <div className="col-2">
                    <i className="fa-brands fa-whatsapp icon-size-contact"></i>
                </div>
                <div className="col-10">
                    <h5>WHATSAPP US ON</h5>
                    <p className="lidha-color">+91 7730075767</p>
                </div>
                <div className="col-2">
                    <i className="fa-regular fa-envelope-open icon-size-contact"></i>
                </div>
                <div className="col-10">
                    <h5>MAIL US</h5>
                    <p className="lidha-color">office@lidha.in</p>
                </div>
            </div>
            
           
        </div>
        <div class="col-sm">
            One of three columns
        </div>
        </div>
    </div>
 )
}

export default ContactUs;