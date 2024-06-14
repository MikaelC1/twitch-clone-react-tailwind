
import logo from "../assets/twitch-logo.svg"
import crown from "../assets/crown.svg"
import user from "../assets/user.svg"
import lupa from "../assets/magnifying-glass.svg"
import dots from "../assets/3dots.svg"
import copy from '../assets/copy.svg'

export default function Navbar(){
    return (
        <nav className=" w-full col-start-1 col-end-3 grid grid-cols-2 lg:grid-cols-3 px-3 bg-[#18181B] border-b-2 border-neutral-900"> 
            <div className="flex gap-10 items-center">
                <img src={logo} alt="" className="w-6"/>
                <img src={copy} alt="" className="w-6 lg:hidden"/>
                <a href=""><span className="hidden lg:block font-semibold text-xl text-[#BF94FF] border-b-2 border-[#BF94FF] pb-2">Explorar</span></a>
                <img src={dots} alt="" className="w-6 hover:bg-[#2c2c2c] cursor-pointer rounded py-1"/>
            </div>
            <div className="hidden lg:flex justify-center p-1">
                <input type="text" placeholder="Buscar" className="rounded-l-md w-[22.5rem] h-9 bg-transparent border pl-2"/>
                <div className="p-2 h-9 bg-[#2F2F35] rounded-r-md">
                    <img src={lupa} alt="" className="w-5 bg-[#2F2F35] cursor-pointer"/>
                </div>
            </div>
            <div className="flex justify-end p-3 gap-2">
                <img src={crown} alt="" className="w-6 hidden lg:block hover:bg-[#2c2c2c] cursor-pointer rounded py-1"/>
                <img src={lupa} alt="" className="w-6 lg:hidden"/>
                <button className="hidden lg:block text-sm font-semibold rounded-md bg-[#35353B] hover:bg-[#44444d] px-2 py-1">Iniciar Sesion</button>
                <button className="hidden lg:block text-sm font-semibold rounded-md bg-[#9147FF] hover:bg-[#885fc7] px-2 py-1">Registrarse</button>
                <img src={user} alt="" className="w-6 hover:bg-[#2c2c2c] cursor-pointer rounded py-1"/>
            </div>
        </nav>
    )
}