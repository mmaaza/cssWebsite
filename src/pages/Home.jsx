import bgImage from '../assets/abstract_img.png'
import iiuiImg from '../assets/sap-96248a56d312.svg'
import mercedes from '../assets/mercedes-fcf97d2d6ec4.svg'
import gdsc from '../assets/telus-df0c2109df99.svg'
import worldMap from '../assets/world-map.png'
import ButtonGreenLarge from "../components/ButtonGreenLarge";
import ButtonOutlineGreenLarge from "../components/ButtonOutlineGreenLarge";
import EventCardSmall from "../components/EventCardSmall"
import event1 from "../assets/event-1.jpg"
import event2 from "../assets/event-2.jpeg"
import event3 from "../assets/event-3.jpeg"

function Home() {
    return (
        <>
            <main className="overflow-x-hidden ">
                <section className="h-screen w-full pt-20 flex flex-col justify-center"
                         style={{'background': 'url(' + bgImage + ') no-repeat left'}}>
                    <div className="overflow-x-hidden px-4 md:px-16">
                        <div className="flex flex-col md:flex-row relative">
                            <div className="py-12">
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <h2 className="text-white-off text-lg font-base md:text-3xl my-7 md:my-7">Computer
                                    Science
                                    Society</h2>
                                <h1 className="text-white-off text-5xl font-semibold md:text-7xl md:leading-tight">Empowering
                                    the next generation of coders!</h1>
                                <p className="text-gray-disable text-lg font-base md:text-2xl mt-7 md:mt-7">Established
                                    by IIUI Alumni, 1996</p>
                                <div className="gap-2 flex flex-wrap mt-3">
                                    <ButtonGreenLarge urlLink="/events" text="View Events"/>
                                    <ButtonOutlineGreenLarge urlLink="#" text="About Us"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <section className="my-20 px-4 md:px-16">
                <h2 className="text-white-off text-4xl font-semibold text-center mt-5">Our Purpose</h2>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p className="text-slate-300 text-lg font-base mt-8 px-4 md:px-16 py-5 bg-white-transparent rounded-md border border-gray-600 leading-8">At
                    CSS, we believe in the power of code to transform and shape the digital world. We've built a dynamic
                    community that celebrates all aspects of coding, from web design to AI. Our philosophy, "Crafting
                    coders, the dope way," fosters an inclusive space for coders at all skill levels. We thrive on
                    collaboration, shared learning, and open communication. We offer resources, workshops, and events
                    for all expertise levels. Driven by a shared passion for coding and its potential for positive
                    change, we foster a culture of innovation and creativity. Join us at CSS, and embark on an exciting
                    journey of creation, collaboration, and empowerment to become the best coders we can be.
                </p>
            </section>
            {/* Our Mission - Section */}
            <section className="mt-20">
                <h2 className="text-white-off text-4xl font-semibold text-center mt-5">Our Mission</h2>
                <p className="text-gray-disable text-lg font-base text-center mt-3 px-4 md:px-16">Empowering
                    Entrepreneurial Generation through Technology and Innovation
                </p>
                <div className="flex px-40 gap-24 my-20">
                    <div className="flex flex-col items-center">
                        <svg preserveAspectRatio="xMidYMid meet" data-bbox="26.5 23.75 147 152.5"
                             viewBox="26.5 23.75 147 152.5"
                             height="150" width="150" xmlns="http://www.w3.org/2000/svg" data-type="color"
                             role="presentation"
                             aria-hidden="true" aria-label="">
                            <g>
                                <path fill="#9FE870" clipRule="evenodd" fillRule="evenodd"
                                      d="M173.5 103.75c0 31.48-25.52 57-57 57s-57-25.52-57-57 25.52-57 57-57 57 25.52 57 57z"
                                      data-color="2"></path>
                                <path fill="rgba(227, 250, 212, 0.4)" clipRule="evenodd" fillRule="evenodd"
                                      d="M116.5 68.75c0 24.853-20.147 45-45 45s-45-20.147-45-45 20.147-45 45-45 45 20.147 45 45z"
                                      data-color="3"></path>
                            </g>
                        </svg>
                        <div className="text-white text-center mt-8">
                            <h3 className="font-semibold">Create a Community</h3>
                            <p className="text-sm mt-3">
                                Create a community of aspiring tech entrepreneurs, builders, and venture capitalists
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg preserveAspectRatio="xMidYMid meet" data-bbox="20 34.606 159.999 126.634"
                             viewBox="20 34.606 159.999 126.634" height="150" width="150"
                             xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true"
                             aria-label="">
                            <g>
                                <path
                                    d="M37.029 103.69l40.464 40.531a9.606 9.606 0 0 1 0 13.572l-.627.628a9.604 9.604 0 0 1-13.583.011l-.011-.011-40.465-40.531a9.606 9.606 0 0 1 0-13.572l.627-.628a9.604 9.604 0 0 1 13.583-.011c.005.003.008.007.012.011z"
                                    fill="#9FE870" clipRule="evenodd" fillRule="evenodd" data-color="2"></path>
                                <path
                                    d="M62.556 144.076L162.971 43.492a9.604 9.604 0 0 1 13.583-.011l.011.011.627.628a9.606 9.606 0 0 1 0 13.572L76.777 158.276a9.604 9.604 0 0 1-13.583.011l-.011-.011-.627-.628a9.604 9.604 0 0 1 0-13.572z"
                                    fill="rgba(227, 250, 212, 0.4)" clipRule="evenodd" fillRule="evenodd"
                                    data-color="3"></path>
                            </g>
                        </svg>
                        <div className="text-white text-center mt-8">
                            <h3 className="font-semibold">Connect our Members</h3>
                            <p className="text-sm mt-3">
                                Connect our members with future mentors, investors, and collaborators
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg preserveAspectRatio="xMidYMid meet" data-bbox="26.5 23.75 147 152.5"
                             viewBox="26.5 23.75 147 152.5"
                             height="150" width="150" xmlns="http://www.w3.org/2000/svg" data-type="color"
                             role="presentation"
                             aria-hidden="true" aria-label="">
                            <g>
                                <path fill="#9FE870" clipRule="evenodd" fillRule="evenodd"
                                      d="M153.608 59.374v93.252H60.356V59.374h93.252z"
                                      data-color="2"></path>
                                <path fill="rgba(227, 250, 212, 0.4)" clipRule="evenodd" fillRule="evenodd"
                                      d="M92.749 26v65.767H26.982V26h65.767z"
                                      data-color="3"></path>
                            </g>
                        </svg>
                        <div className="text-white text-center mt-8">
                            <h3 className="font-semibold">Empower Members to Build</h3>
                            <p className="text-sm mt-3">
                                Empower members to build their own personal projects and startups
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* End - Section */}

            {/* Past Events - Section */}
            <section className="px-4 md:px-16 py-6">
                <div className="flex items-center flex-grow py-3 my-5">
                    <div className="w-4/12 px-4">
                        <h2 className="text-white-off text-4xl font-semibold">Past Events</h2>
                        <p className="text-gray-disable leading-8 text-lg font-base mt-3">Explore our society's past events, achievements, and memorable moments here.</p>
                        <ButtonOutlineGreenLarge urlLink="/events" text="View All"/>
                    </div>
                    <div className="w-8/12 h-full flex gap-4">
                        <EventCardSmall backgroundImage={event1} title="Mastering DSA in Python & Unlocking the job Opportunity"/>
                        <EventCardSmall backgroundImage={event2} title="CV/Resume Building Webinar - Tayyab Zain"/>
                        <EventCardSmall backgroundImage={event3} title="How to join Google as a software engineer - Dr. Zafar Shahid"/>
                    </div>
                </div>
            </section>
            {/* End - Section */}

            {/* International Community - Section */}

            <section className="px-4 md:px-16 py-6">
                <h2 className="text-white-off text-4xl font-semibold text-center mt-5">International Community</h2>
                <div className="mt-5 rounded-sm p-3 flex justify-between items-center gap-20">
                    <div className="w-7/12">
                        <p className="text-gray-disable leading-8 text-lg font-base mt-3">
                            Our CSS community boasts an international presence, fostering a diverse and inclusive
                            environment where individuals from various cultural backgrounds can collaborate, share
                            knowledge, and innovate together. This global reach not only enriches our community with a
                            wide array of perspectives but also enhances our collective expertise and creativity.
                        </p>
                    </div>
                    <div className="w-5/12">
                        <img src={worldMap} alt=""/>
                    </div>
                </div>
            </section>

            {/* End - Section */}

            {/* Trusted Partners - Section */}
            <section className="px-4 md:px-16 py-6">
                <h2 className="text-white-off text-4xl font-semibold text-center mt-5">Our Trusted Partners</h2>
                <div className="mt-5 rounded-sm p-3 flex justify-center gap-20">
                    <img src={mercedes} alt=""/>
                    <img src={iiuiImg} alt=""/>
                    <img src={gdsc} alt=""/>
                </div>
            </section>
            {/* End - Section*/}

            {/*<hr className="w-96 mx-auto"/>*/}
        </>
    )
}

export default Home