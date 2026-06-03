export default function Heading({ title, description })
{
    return (
        <>
            <header className="text-center mb-10">
                <h1 className="text-[40px] font-medium py-2">
                    {title}
                </h1>

                <p className="text-gray-500 text-[18px]">
                    {description}
                </p>
            </header>
        </>
    )
}