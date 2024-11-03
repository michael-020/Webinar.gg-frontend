import { MenuCard } from "./MenuCard";
import { ProfileCard } from "./ProfileCard";
import { ScheduleCard } from "./ScheduleCard";

export function HeroSection() {

    return <div className="h-full w-[calc(100%-17.1rem)]  bg-gray-50 dark:bg-zinc-800 relative ">
        <div className="absolute top-[-2rem] left-14 ">
            <ProfileCard pfp={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8p0YnDULTB1o2yg30WH1jjseq8dq1smyvA&s"} username={"hello kitty"} email={"hellokitty@gmail.com"} phone={"9213413432"} location={"Mumbai, India"}/>
        </div>
        <div className="absolute top-[10rem] left-[22rem]">
            <ScheduleCard time={["11.30 AM", "12.30 PM", "1.40 PM", "3.30 PM"]} status={["Live", "Upcomming", "Upcoming", "Upcomming"]} title={["UX Webinar", "My first Webinar", "Important Webinar", "Web Dev Webinar"]} />
        </div>
        <div className="absolute left-[52.5rem] top-[10rem]">
            <MenuCard />
        </div>
    </div>
}