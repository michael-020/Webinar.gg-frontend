import { ProfileCard } from "./ProfileCard";

export function HeroSection() {

    return <div className="h-screen w-[calc(100%-17.1rem)] bg-gray-50 relative">
        <div className="absolute top-[-2rem] left-14">
            <ProfileCard pfp={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8p0YnDULTB1o2yg30WH1jjseq8dq1smyvA&s"} username={"hello kitty"} email={"hellokitty@gmail.com"} phone={"9213413432"} location={"Mumbai, India"}/>
        </div>
        
    </div>
}