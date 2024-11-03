export function ProfileCard({pfp, username, email, phone,location}) {

    return <div>
        <div className="w-[17rem] h-[25rem] bg-white mx-auto mb-6 flex flex-col justify-evenly rounded-xl shadow-lg items-center">
            
            <img src={`${pfp}`} width={"125px"} className="cursor-pointer mt-10 rounded-lg"/>
            <div>
                <h3 className="font-extrabold text-lg">{username}</h3>
            </div>
            <div>
                <h3 className="text-gray-500">{email}</h3>
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