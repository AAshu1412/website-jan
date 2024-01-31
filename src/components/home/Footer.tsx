import React from "react";
import home_mail from "../../assets/home_footer/ic_mail.svg"
import home_call from "../../assets/home_footer/ic_call.svg";

function Footer(){
return (
    <div className="bg-[#004642] text-white ">
        <div className="flex flex-row justify-around">
        <div className="w-64 flex flex-col gap-5">
            <h1 className="text-sm text-[#FFFFFF99]">“Our mission is to provide the highest business value to our customers and live by a value-focused, technology centered organization.”</h1>
            <div className="flex gap-2">
                <img src={home_mail} className="w-5"/>
                <h1 className="text-sm">hr@gytechs.com</h1>
            </div>
            <div className="flex gap-2">
                <img src={home_call} className="w-5"/>
                <h1 className="text-sm">+91 40 40177887</h1>
            </div>
        </div>
        <div>
            2nd column
        </div>
        </div>
        
    </div>
);
}

export default Footer;