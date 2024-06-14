import clsx from "clsx"

export default function Recommended({user, profilePic, videogame, views}){
    return(

        <div className="w-full flex items-center h-12 cursor-pointer hover:bg-[#26262C] px-2 py-1" key={`users-${user}`}>
            <div className='w-[15%]'>
                <img 
                    src={`https://api.dicebear.com/8.x/rings/svg?seed=${profilePic}`} 
                    alt="" 
                    className="w-6"
                />
            </div>
            <div className="w-[70%] flex flex-col leading-4">
                <div className='flex flex-col'>
                <span className='font-semibold'>{user}</span>
                <span className='text-sm'>{videogame}</span>
                </div>
            </div>

            <div className="w-[25%] h-full">
                <div className='w-full flex items-center gap-1 '>
                    <div className='w-2 h-2 rounded-full bg-red-600'></div>
                    <span className='text-sm'>{views}</span>
                </div> 
            </div>
        </div>
        )
}