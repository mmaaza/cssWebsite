function Header() {
    return (<>
        <header
            className="px-4 md:px-16 py-4 md:py-7 absolute w-full flex flex-col md:flex-row items-center justify-between z-40"
        >
            <div className="flex flex-row gap-3 items-center justify-center">
                <div className="bg-green-light rounded-[50%]  w-9 h-9 shrink-0"></div>
                <p
                    className="text-white-off text-left text-base leading-normal font-semibold md:text-xl md:font-bold"
                >
                    CSS <span className="font-light"> | Computer Science Society</span>
                </p>
            </div>
            <div className="flex flex-row gap-0 items-center justify-start ">
                <div
                    className="p-4 flex flex-row gap-2.5 items-center justify-center"
                >
                    <a href="#"
                        className="text-[#f3f5f1] text-left text-sm md:text-base hover:underline hover:text-green-light hover:underline-offset-4"
                    >
                        Home
                    </a>
                </div>
                <div
                    className="p-4 flex flex-row gap-2.5 items-center justify-center"
                >
                    <a href="#"
                        className="text-[#f3f5f1] text-left text-sm md:text-base hover:underline hover:text-green-light hover:underline-offset-4"
                    >
                        Events
                    </a>
                </div>
                <div
                    className="p-4 flex flex-row gap-2.5 items-center justify-center"
                >
                    <a href="#"
                        className="text-[#f3f5f1] text-left text-sm md:text-base hover:underline hover:text-green-light hover:underline-offset-4"
                    >
                        About
                    </a>
                </div>
                <div
                    className="p-4 flex flex-row gap-2.5 items-center justify-center"
                >
                    <a href="#"
                        className="text-[#f3f5f1] text-left text-sm md:text-base hover:underline hover:text-green-light hover:underline-offset-4"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </header>
    </>)
}

export default Header