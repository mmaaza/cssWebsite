import {Link} from "react-router-dom";

function ButtonOutlineGreenLarge({ urlLink, text }) {
    return (
        <>
            <Link to={urlLink} className="px-5 py-3 bg-none border-2 border-green-light text-green-light mt-5 inline-block rounded-sm font-semibold text-sm md:text-base">{text}</Link>
        </>
    )
}

export default ButtonOutlineGreenLarge