




import Link from "next/link"


export const Topbanner = () => {

    return (
        <div className="bg-[#03363e] p-5">
            <ul className="flex justify-center gap-5 text-white ">
                <li>CX Trends 2024</li>
                <li>Unlock growth with costumer service</li>
                <li><Link href={"#"} className="underline">Get report</Link></li>
            </ul>
        </div>
    )
}