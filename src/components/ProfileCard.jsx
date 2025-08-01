export function ProfileCard({pfp, username, email, phone,location}) {

    return <div>
        <div className="w-[16rem] h-[25rem] bg-white dark:bg-zinc-950 mx-auto mb-6 flex flex-col justify-evenly rounded-xl shadow-lg items-center overflow-hidden">
            
            <img src={`${pfp}`} width={"125px"} className="cursor-pointer mt-10 rounded-lg"/>
            <div>
                <h3 className="font-extrabold text-lg dark:text-white">{username}</h3>
            </div>
            <div>
                <h3 className="text-gray-500 dark:text-gray-500">{email}</h3>
            </div>
            <div className="relative top-[-1rem]">
                <h3 className="text-gray-500">{phone}</h3>
            </div>
            <div className="relative top-[-1rem]">
                <h3 className="text-gray-500">{location}</h3>
            </div>
        </div>
    </div>
}