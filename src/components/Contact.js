import resumeImg from '../assets/resume.jpg'

export default function Contact(){
    const config = {
        email: "joneyabrahams@gmail.com",
        phone: "+91 6369212574"
    }
    return <section id="contact" className="flex flex-col bg-primary px-5 py-32">
        <div className="flex flex-col items-center text-secondary">
                <h1 className="text-4xl border-b-4 border-tertiary mb-5 w-[140px] font-bold">Contact</h1>
                <p className="pb-5">If you want to discuss more in detail, please contact me</p>
                <p classname="py-2"><span className="font-bold">Email : </span>{config.email}</p>
                <p classname="py-2"><span className="font-bold">Phone : </span>{config.phone}</p>
        </div>
    </section>
}