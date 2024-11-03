export function ScheduleCard({time, status, title}) {
    const total = Array(time.length).fill(0)
    
    return <div className="w-[29rem] bg-white dark:bg-zinc-950 h-[24rem] shadow-[0px_5px_70px_1px_rgba(0,0,0,0.1)] rounded-2xl flex flex-col  ">
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
                        <div className="text-sm font-thin dark:text-white">{s}</div>
                        
                        <div className=" dark:text-white">{title[index]}</div>
                        
                    </div>
                ))}
            </div>
            
        </div>
        
    </div>
}