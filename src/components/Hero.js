import heroImg from '../assets/hero.png'
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";

export default function Hero(){
    const config = {
        subtitle: "Im a Full-stack Developer",
        social: {
            linkedin: "https://www.linkedin.com/in/joney-abraham-7b4530249",
            instagram: "https://www.instagram.com/_.joney__/profilecard/?igsh=MXY0bm8zNWZvcmRubw==",
            whatsapp: "https://wa.me/+916369212574/?Hi"
        }
    }
    return <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
        <div className="md:w-1/2 flex flex-col">
            <h1 className="text-secondary text-6xl font-hero-font">Hi, <br/>
                Im <span className="text-black">S</span> Joney Abraham
                <p className="text-2xl">{config.subtitle}</p>
            </h1>
            <div className="flex py-5">
                <a target="_blank" href={config.social.linkedin} className="pr-5 hover:text-white"><AiOutlineLinkedin size="40"/></a>
                <a target="_blank" href={config.social.instagram} className="pr-5 hover:text-white"><AiOutlineInstagram size={40}/></a>
                <a target="_blank" href={config.social.whatsapp} className="hover:text-white"><AiOutlineWhatsApp size="40"/></a>
            </div>
        </div>
        
        <img className="md:w-1/3" src={heroImg}/>
    </section>
}