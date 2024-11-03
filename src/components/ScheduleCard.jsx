export function ScheduleCard({time, status, title}) {
    const total = Array(time.length).fill(0)
    
    return <div className="w-[29rem] overflow-hidden bg-white dark:bg-zinc-950 h-[24rem] shadow-[0px_5px_70px_1px_rgba(0,0,0,0.1)] rounded-2xl flex flex-col  ">
        <div className="h-10 bg-gray-100 dark:bg-gray-300 m-4 rounded-lg ">
            {/* Calendar */}
           <p className="text-center mt-2"> Monday, 14 oct 2024  </p>
        </div>
        <div className="flex gap-4 ml-5 ">
            <div>
                {time.map((x, index) => (
                    <div key={index} className="mt-5 ">
                        <h4 className="text-lg dark:text-white"> {x} </h4>
                        <h6 className="text-gray-400 text-sm font-thin"> {x} </h6>
                       
                    </div>
                ))}
                
            </div>
            <div className="">
            {total.map((_,i) => (
                <div key={i}>
                    <div   className="bg-green-300 w-[2px] h-12 mt-5 mb-5"></div>
                    {i < time.length-1 && <div className="mx-5 h-[2px] w-[26rem] bg-gray-200 absolute left-0 -my-3"> </div>} 
                </div>
            ))}
            </div>
            
            <div className="">
                {status.map((s, index) => (
                    <div key={index} className="mt-6">
                    <div className="flex gap-2">
                        <div className="text-sm font-thin dark:text-white">{s}</div>
                        {console.log(`${s}`)}
                        <div className={s === "Live" ? "text-red-500" : "text-green-500"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                        </div>
                        
                    </div> 
                        <div className=" dark:text-white">{title[index]}</div>
                        
                    </div>
                ))}
            </div>
            
        </div>
        
    </div>
}