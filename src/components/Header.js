import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header(){
    const [toggleMenu, setToggleMenu] = useState(false)

    return <header className="flex justify-between px-5 py-2 bg-primary text-secondary">
        <a className="font-bold text-3xl" href="#">JoneY</a>
        <nav className="hidden md:block">
                <ul className="flex">
                    <li><a className="hover:text-tertiary" href="#">Home</a></li>
                    <li><a className="hover:text-tertiary" href="#about">About</a></li>
                    <li><a className="hover:text-tertiary" href="#projects">Project</a></li>
                    <li><a className="hover:text-tertiary" href="#resume">Resume</a></li>
                    <li><a className="hover:text-tertiary" href="#contact">Contact</a></li>
                </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden">
            <ul onClick={()=> setToggleMenu(!toggleMenu)} className="flex flex-col text-secondary mobile-nav">
                <li><a className="hover:text-tertiary" href="/">Home</a></li>
                <li><a className="hover:text-tertiary" href="#about">About</a></li>
                <li><a className="hover:text-tertiary" href="#projects">Project</a></li>
                <li><a className="hover:text-tertiary" href="#resume">Resume</a></li>
                <li><a className="hover:text-tertiary" href="#contact">Contact</a></li>
            </ul>
        </nav>
        }
        <button onClick={()=> setToggleMenu(!toggleMenu)} className="block md:hidden"><Bars3Icon className="text-secondary h-8" /></button>
        
    </header>
}