import resumeImg from '../assets/resume.jpg'

export default function Resume(){
    const config = {
        link: "https://drive.google.com/file/d/1_mZDPp2CDkE9y4U8UC8cNo374--bQBM6/view?usp=sharing"
    }
    return <section id="resume" className="flex flex-col md:flex-row bg-secondary">
        <div className="md:w-1/2 py-5 flex justify-center md:justify-end">
            <img className="w-[300px]" src={resumeImg} />
        </div>
        <div className="md:w-1/2 flex justify-center text-white">
            <div className="flex flex-col justify-center">
                <h1 className="text-4xl border-b-4 border-tertiary mb-5 w-[140px] font-bold">Resume</h1>
                <p className="pb-5">You can download my resume <a className="btn" target="_blank" href={config.link}>Download</a></p>
            </div>
        </div>
    </section>
}