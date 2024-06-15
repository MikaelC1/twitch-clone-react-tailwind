import Card from "./Card"
import CategoryButton from "./CategoryButton"
import lupa from "../assets/magnifying-glass.svg"

const cardContent = [
    {
        img: "https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg",
        category: "Solo Chateando",
        viewCount: "320.1 k",
        labels: ["IRL(vida real)"],
        newLabel: true
    },
    {
        img: "https://static-cdn.jtvnw.net/ttv-boxart/21779-624x832.jpg",
        category: "Por favor no",
        viewCount: "123.1 k",
        labels: ["Simulación", "Juego de Rol"],
    },
    {
        img: "https://static-cdn.jtvnw.net/ttv-boxart/509663-285x380.jpg",
        category: "Special Events",
        viewCount: "123.1 k",
        labels: ["IRL(vida real)"],
        newLabel: true
    },
    {
        img: "https://static-cdn.jtvnw.net/ttv-boxart/1863222988-285x380.jpg",
        category: "Kings League",
        viewCount: "91.2 k",
    },
    {
        img: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg",
        category: "Maincra",
        viewCount: "32.1 k",
        labels: ["Simulación"]
    },{
        img: "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
        category: "El Valo",
        viewCount: "4.1 k",
        labels: ["Shooter"],
        newLabel: true
    },{
        img: "https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
        category: "El Fornait",
        viewCount: "2 k",
        labels: ["Shooter", "Juego de Rol"]
    },
    {
        img: "https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg",
        category: "Call of Duty: Warzone",
        viewCount: "1 k",
        labels: ["Shooter"],
        newLabel: true
    },
    {
        img: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg",
        category: "Maincra",
        viewCount: "32.1 k",
        labels: ["Simulación"]
    },{
        img: "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
        category: "El Valo",
        viewCount: "4.1 k",
        labels: ["Shooter"]
    },{
        img: "https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
        category: "El Fornait",
        viewCount: "2 k",
        labels: ["Shooter", "Juego de Rol"]
    },
    {
        img: "https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg",
        category: "Call of Duty: Warzone",
        viewCount: "1 k",
        labels: ["Shooter"],
        newLabel: true
    },
    {
        img: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg",
        category: "Maincra",
        viewCount: "32.1 k",
        labels: ["Simulación"]
    },{
        img: "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
        category: "El Valo",
        viewCount: "4.1 k",
        labels: ["Shooter"]
    },{
        img: "https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
        category: "El Fornait",
        viewCount: "2 k",
        labels: ["Shooter", "Juego de Rol"]
    },
    {
        img: "https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg",
        category: "Call of Duty: Warzone",
        viewCount: "1 k",
        labels: ["Shooter"]
    },
    {
        img: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg",
        category: "Maincra",
        viewCount: "32.1 k",
        labels: ["Simulación"]
    },{
        img: "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
        category: "El Valo",
        viewCount: "4.1 k",
        labels: ["Shooter"]
    },{
        img: "https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
        category: "El Fornait",
        viewCount: "2 k",
        labels: ["Shooter", "Juego de Rol"]
    },
    {
        img: "https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg",
        category: "Call of Duty: Warzone",
        viewCount: "1 k",
        labels: ["Shooter"]
    },
    {
        img: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg",
        category: "Maincra",
        viewCount: "32.1 k",
        labels: ["Simulación"]
    },{
        img: "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
        category: "El Valo",
        viewCount: "4.1 k",
        labels: ["Shooter"]
    },{
        img: "https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
        category: "El Fornait",
        viewCount: "2 k",
        labels: ["Shooter", "Juego de Rol"]
    },
    {
        img: "https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg",
        category: "Call of Duty: Warzone",
        viewCount: "1 k",
        labels: ["Shooter"]
    },
    {
        img: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg",
        category: "Maincra",
        viewCount: "32.1 k",
        labels: ["Simulación"]
    },{
        img: "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
        category: "El Valo",
        viewCount: "4.1 k",
        labels: ["Shooter"]
    },{
        img: "https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
        category: "El Fornait",
        viewCount: "2 k",
        labels: ["Shooter", "Juego de Rol"]
    },
    {
        img: "https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg",
        category: "Call of Duty: Warzone",
        viewCount: "1 k",
        labels: ["Shooter"]
    },

    
]

const explore = [
    {
        category:"Juegos",
        img:"https://static-cdn.jtvnw.net/c3-vg/verticals/gaming.svg"
    },
    {
        category:"IRL",
        img:"https://static-cdn.jtvnw.net/c3-vg/verticals/irl.svg"
    },
    {
        category:"Musica",
        img:"https://static-cdn.jtvnw.net/c3-vg/verticals/music.svg"
    },
    {
        category:"Creative",
        img:"https://static-cdn.jtvnw.net/c3-vg/verticals/creative.svg"
    },
    {
        category:"Esports",
        img:"https://static-cdn.jtvnw.net/c3-vg/verticals/esports.svg"
    },
]

export default function Content(){

    return (
        
        <section className="grid gap-7 lg:col-start-2 lg:col-end-3 bg-[#0E0E10] px-6 py-10">
            <div className="flex w-full flex-col gap-7">
                <h1 className="text-6xl font-bold">Explorar</h1>
                
                <div className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(190px,1fr))]">
                {
                    explore.map((explore) => {
                        return(
                            <CategoryButton
                            key={`explore-${explore.category}`} 
                            category={explore.category}
                            img={explore.img}
                            />
                        )
                    })
                }
                </div>
                <div className="w-full flex gap-10">
                    <span className="font-semibold text-xl text-[#BF94FF] border-b-2 cursor-pointer hover:text-[#8e5ddd] pb-3">Categorias</span>
                    <span className="font-semibold text-xl cursor-pointer hover:text-[#8e5ddd]">Canales en Vivo</span>
                </div>
                <label htmlFor="" className="relative">
                    <img src={lupa} alt="" className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-5"/>
                    <input type="text" placeholder="Buscar etiquetas por categoria" className="w-60 h-8 text-md pl-8 pr-3 rounded bg-[#18181B] border border-[#636363]"/>
                </label>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(190px,_1fr))] gap-3  bg-[#0E0E10]">
                {
                    cardContent.map((content) => {
                        return( 
                            <Card 
                                key={`content-${content.category}`}
                                img={content.img}
                                category={content.category}
                                viewCount={content.viewCount}
                                labels={content.labels}
                                newLabel={content.newLabel}
                            />
                        )
                
                    })
                }
            </div>
            
        </section>
    )
}