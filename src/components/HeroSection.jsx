import { MenuCard } from "./MenuCard";
import { ProfileCard } from "./ProfileCard";
import { ScheduleCard } from "./ScheduleCard";

export function HeroSection() {

    // return <div className="h-full w-[calc(100%-17.1rem)]  bg-gray-50 dark:bg-zinc-800 relative ">
    //     <div className="absolute top-[-2rem] left-14">
    //         <ProfileCard pfp={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8p0YnDULTB1o2yg30WH1jjseq8dq1smyvA&s"} username={"Lazy Panda"} email={"lazypanda@gmail.com"} phone={"9213413432"} location={"Mumbai, India"}/>
    //     </div>
    //     <div className="absolute w-96 top-10 left-[22.4rem]"> <p className="text-md dark:text-white ">Monday, 14 October</p> <br></br> <h1 className="text-2xl font-bold dark:text-white">Good Morning, Lazy Panda 👋</h1></div>
    //     <div className="absolute top-[10rem] left-[22rem]">
    //         <ScheduleCard time={["11.30 AM", "12.30 PM", "1.40 PM", "3.30 PM"]} status={["Live", "Upcomming", "Upcoming", "Upcomming"]} title={["UX Webinar", "My first Webinar", "Important Webinar", "Web Dev Webinar"]} />
    //     </div>
    //     <div className="absolute left-[52.5rem] top-[10rem]">
    //         <MenuCard />
    //     </div>
    // </div>
    return <div>
       
        <div className="h-screen w-[80vw] pr-10 pl-8  grid grid-cols-12 grid-rows-2 gap-32 xl:gap-8 justify-around ">
            <div className="-translate-y-7 col-span-12 xl:col-span-3 row-span-1 hidden xl:block">
            <ProfileCard pfp={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8p0YnDULTB1o2yg30WH1jjseq8dq1smyvA&s"} username={"Lazy Panda"} email={"lazypanda@gmail.com"} phone={"9213413432"} location={"Mumbai, India"}/>
            </div>
        
            <div className="translate-y-32 col-span-12 xl:col-span-6 row-span-1 relative">
            <div className=" w-96 -mt-24 mb-5"> <p className="text-md dark:text-white ">Monday, 14 October</p> <br></br> <h1 className="text-2xl font-bold dark:text-white">Good Morning, Lazy Panda 👋</h1></div>
            <ScheduleCard time={["11.30 AM", "12.30 PM", "1.40 PM", "3.30 PM"]} status={["Live", "Upcomming", "Upcoming", "Upcomming"]} title={["UX Webinar", "My first Webinar", "Important Webinar", "Web Dev Webinar"]} />
            </div>
            <div className="translate-y-32 col-span-12 xl:col-span-3 row-span-1">
            <MenuCard />
            </div>
        </div>
    </div>
}