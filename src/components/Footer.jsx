// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import {Link } from 'react-router-dom';
import qrcode from '../assets/society_qrcode.png'

function Footer() {
    return(
        <>
            <footer className="p-3">
                <div className={"p-5 bg-white-transparent border border-gray-600 rounded-md flex justify-between"}>
                    <div>
                        <h1 className="text-white-off text-xl">CSS | Computer Science Society</h1>
                        <ul className={"mt-5"}>
                            <li className={"my-2"}>
                                <Link to="/"
                                      className="text-[#f3f5f1] text-left text-sm hover:underline hover:text-green-light hover:underline-offset-4"
                                >
                                    Events
                                </Link>
                            </li>
                            <li className={"my-2"}>
                                <Link to="/"
                                      className="text-[#f3f5f1] text-left text-sm hover:underline hover:text-green-light hover:underline-offset-4"
                                >
                                    About
                                </Link>
                            </li>
                            <li className={"my-2"}>
                                <Link to="/"
                                      className="text-[#f3f5f1] text-left text-sm hover:underline hover:text-green-light hover:underline-offset-4"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={"flex w-4/12"}>
                        <img className={"w-1/2"} src={qrcode} alt=""/>
                        <div className={"ms-5"}>
                            <h2 className={"text-2xl text-white-off font-semibold"}>Join Now!</h2>
                            <p className={"text-neutral-300 text-sm mt-3"}>Come and be a part of ever growing CSS community</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer