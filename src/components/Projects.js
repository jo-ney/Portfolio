import websiteImg1 from "../assets/ida.jpeg"

export default function projects(){
    const config = {
        projects: [
            {
                image: websiteImg1,
                description: "My website is built with HTML, CSS, JS, and Bootstrap, ensuring a responsive design that works smoothly on all devices.",
                link: "https://jo-ney.github.io/IDA/"
            },
        ]
    }
    return <section id="projects" className="flex flex-col px-5 py-20 bg-primary justify-center">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5 text-secondary">
                <h1 className="text-4xl border-b-4 border-tertiary mb-5 w-[140px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have build these with React, MERN and vanilla CSS. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className="flex flex-col md:flex-row px-10 gap-5">
                {config.projects.map((project)=>(
                    
                        <div className="relative">
                            <img className="h-[280px] w-[500px]" src={project.image} />
                            <div className="project-desc text-primary">
                                <p className="text-center px-5 py-5">{project.description}</p>
                                <div className="flex justify-center">
                                <a className="btn" href={project.link} target="_blank">View Project</a>
                                </div>
                            </div> 
                        </div>
                ))}
            </div>
        </div>
    </section>
}