import colapse from '../assets/colapse.svg'
import Recommended from './Recomended'

const recomended = [
    {
        profilePic: "Peanut",
        user: "midudev",
        videogame: "IRL",
        views: "132.1K ",
        active: true
    },
    {
        profilePic: "random",
        user: "ElCharly",
        videogame: "League of Legends",
        views: "132.1K "
    },
    {
        profilePic: "MikaelC4",
        user: "MikaelC",
        videogame: "Valorant",
        views: "132.1K "
    },
    {
        profilePic: "MikaelC3",
        user: "Juancho",
        videogame: "IRL",
        views: "132.1K "
    },
    {
        profilePic: "MikaelC2",
        user: "El Pepe",
        videogame: "Valorant",
        views: "132.1K ",
        active: true
    },
    {
        profilePic: "MikaelC1",
        user: "Aiudaaaaa",
        videogame: "Valorant",
        views: "132.1K ",
        active: true
    },
]


export default function Aside(){


    return(

        <aside className="w-full mt-[2px] min-h-screen hidden lg:block col-start-1 col-end-2 row-start-2 row-end-3 bg-[#1F1F23]">
            <div className='flex items-center h-10 justify-between px-2'>
                <span className='font-semibold text-sm'>CANALES RECOMENDADOS</span>
                <img src={colapse} alt="" className='w-4 h-5'/>
            </div>

            {
                recomended.map((info) => {
                    return(
                        <Recommended 
                        key={`recommended-${info.user}`}
                        user={info.user}
                        videogame={info.videogame}
                        views={info.views}
                        profilePic={info.profilePic}
                        active={info.active}
                    />
                    )
                })
            }
        </aside>
    )
}