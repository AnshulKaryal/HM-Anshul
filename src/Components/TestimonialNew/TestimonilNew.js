import ReactPlayer from "react-player";

export default function TestimonialNew(){
    return (
        <div className="h-[650px] w-full flex flex-col items-center">
            <div className="bg-[#FAEFD9] w-[80%] h-[90%] flex  items-center justify-center">
                <button>
                    <img className="w-[30px]" src="../Icons/leftarrowtest.svg"/>
                </button>
                <div className="bg-white w-[85%] h-[80%] flex items-center justify-between p-6 relative">
                    <div className="w-[30%] h-full">
                        <ReactPlayer height='100%' width='100%' playing={false} url='https://www.youtube.com/watch?v=XewspIh58Qg'/>
                    </div>
                    <div className="w-[60px] h-[60px] bg-[#FF0000] rounded-full flex justify-center items-center absolute left-[28%]">
                        <img className="w-[40px] h-[40px] ml-2" src="../Icons/Play.svg" alt="play"/>
                    </div>
                    <div className="flex flex-col w-[50%] justify-center items-center mr-20 space-y-4">
                        <div className="flex flex-col items-center">
                            <p className="font-mons font-semibold text-[30px]">What Our Students Says</p>
                            <img className="w-[40px]" src="../Icons/invertedcomma.svg"/>
                        </div>
                        <div>
                            <p className="font-mons text-center text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className="flex items-center space-x-6 ">
                            <button>
                                <img className="w-[50px]" src="../img/Testimonialimg1.png"/>
                            </button>
                            <button>
                                <img className="w-[80px]" src="../img/Testimonialimg2.png"/>
                            </button>
                            <button>
                                <img className="w-[50px]" src="../img/Testimonialimg1.png"/>
                            </button>
                        </div>
                        <div>
                            <p className="font-mons font-semibold">Catherine Pitt</p>
                        </div>
                        <div className="flex space-x-2 ">
                            <img className="w-[20px]" src="../Icons/Star.svg"/>
                            <img className="w-[20px]" src="../Icons/Star.svg"/>
                            <img className="w-[20px]" src="../Icons/Star.svg"/>
                            <img className="w-[20px]" src="../Icons/Star.svg"/>
                            <img className="w-[20px]" src="../Icons/Star.svg"/>
                        </div>
                    </div>
                </div>
                <button>
                    <img className="w-[30px]" src="../Icons/rightarrowtest.svg"/>
                </button>
            </div>
        </div>
    );
}