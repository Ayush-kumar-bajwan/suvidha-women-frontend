import { IoIosMail } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { FaFacebook } from "react-icons/fa"; <FaFacebook />
import { FaInstagramSquare } from "react-icons/fa"; 
import { FaLinkedin } from "react-icons/fa"; 

const Footer=()=>{
    return (
        <div className="flex h-[14vh] bg-[#DE3163] text-white gap-80 items-center justify-center mt-25">
            <div >
                <h1 className="text-xl"><IoIosMail className="text-4xl inline"/> Mail Us</h1>
                <h1>info@suvidhafoundationedutech.org</h1>
            </div>
            <div>
                <h1 className="text-xl"><MdCall className="text-4xl inline"/> Call Us </h1>
                <h1>+91 7020044091</h1>
            </div>
            <div className="flex items-center justify-center gap-10">
                <a href="https://www.linkedin.com/company/suvidha-foundation/"><i className="text-4xl"> <FaLinkedin /></i></a>
                <a href="https://www.instagram.com/suvidha_mahila_mandal/"><i className="text-4xl"><FaInstagramSquare /></i></a>
                <a href="https://www.facebook.com/suvidhamahilamandal/"><i className="text-4xl"> <FaFacebook /></i></a>
            </div>
        </div>
    );
}
export default Footer