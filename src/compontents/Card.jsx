

export default function Card({ img, category, viewCount, labels = [] }){
    return (
        <article className=" bg-transparent max-w-full flex flex-col gap-2 mb-5">
            <img src={img} alt="" className="object-cover w-full cursor-pointer hover:translate-x-1 hover:-translate-y-2 transition duration-100"/>
            <div className="flex flex-col leading-4">
            <h3 className="font-bold hover:text-[#BF94FF] cursor-pointer">{category}</h3>
            <p className="text-gray-300 text-sm"><span>{viewCount}</span> espectadores</p>
            </div>
            
            <div className="flex gap-2">
                {
                    labels.map((label, index) => {
                        return (
                                <button key={`label-${index}`} className="bg-gray-700 text-white text-xs py-1 px-2 rounded-md hover:bg-gray-00">{label}</button>
                        )
                    })
                }
                
            </div>
        </article>
    )
}