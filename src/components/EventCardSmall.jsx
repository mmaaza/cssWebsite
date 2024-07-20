// eslint-disable-next-line react/prop-types
function EventCardSmall({backgroundImage, title}) {
    return (
        <>
            <a href="" className={"p-3 bg-white-transparent h-fit w-1/3 border border-gray-600 rounded-md"}>
                <div className={"w-full h-44 rounded"}
                     style={{'background': 'url(' + backgroundImage + ') no-repeat center', 'backgroundSize': 'cover'}}>
                </div>
                <p className={"text-white-off font-semibold mt-3 text-lg truncate-multiline"}>{title}</p>
            </a>
        </>
    )
}

export default EventCardSmall