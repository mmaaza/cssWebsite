function ButtonOutlineGreenLarge({ urlLink, text }) {
    return (
        <>
            <a href={urlLink} className="px-5 py-3 bg-none border-2 border-green-light text-green-light mt-5 inline-block rounded-sm font-semibold text-sm md:text-base">{text}</a>
        </>
    )
}

export default ButtonOutlineGreenLarge