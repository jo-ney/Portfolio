import aboutImg from '../assets/about.png'

export default function About(){
    const config = {
        line1: "Hi, My name is Joney Abraham. I am Full stack web developer. I built beautiful websites with React.js and tailwind CSS.",
        line2: "I am proficient in Frontend skills like React.js, Bootstrap, Tailwind CSS and many more.",
        line3: "In Backend I know Node.js, Express.js, MongoDB, Mongoose."
    }
    return <section id="about" className="flex flex-col md:flex-row bg-secondary">
        <div className="md:w-1/2 py-5">
            <img src={aboutImg} />
        </div>
        <div className="md:w-1/2 flex justify-center text-white">
            <div className="flex flex-col justify-center px-5">
                <h1 className="text-4xl border-b-4 border-tertiary mb-5 w-[170px] font-bold">About me</h1>
                <p className="pb-5">{config.line1}</p>
                <p className="pb-5">{config.line2}</p>
                <p className="pb-5">{config.line3}</p>
            </div>
        </div>
    </section>
}