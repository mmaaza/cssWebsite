function ButtonGreenLarge({ urlLink, text }) {
    return (
        <>
            <a href={urlLink} className="px-5 py-3 border-2 border-transparent bg-green-light mt-5 inline-block rounded-sm font-semibold text-green-dark text-sm md:text-base">{text}</a>
        </>
    )
}

export default ButtonGreenLarge