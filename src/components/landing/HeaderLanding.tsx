



import Link from "next/link"
import { HeaderLandingSecondary } from "./HeaderLandingSecondary";


export const HeaderLanding = () => {

    const nameCompany = "Zendesk";
    const itemsMenuPrincipal = ["Product", "Pricing", "Product", "Solution", "Demo", "Resources"];
    const itemsMenuSecondary = ["Sign in", "Support", "Company", "Contact Us", "English"];
    const freeTrial = "Free trial";

    return (

        <div className="bg-[#17494c] sm:sticky top-0 z-50">
            <HeaderLandingSecondary itemsMenuSecondary={ itemsMenuSecondary } />
            <header className="flex flex-col sm:flex-row justify-between items-center gap-7 max-w-4xl mx-auto text-white pt-1">
                <h2 className="text-3xl text-center">{ nameCompany }</h2>
                <nav>
                    <ul className="w-full flex flex-col justify-center items-center text-center sm:flex-row gap-5 sm:gap-10">
                        {
                            itemsMenuPrincipal.map((item, index) => (
                                <li key={index}>
                                    <Link href={"#"}>{ item }</Link>
                                </li>
                            ))
                        }
                        <li>
                            <Link href={"#"} className="bg-[#e4f0d3] text-[#03363e] px-5 py-2.5 font-semibold">{ freeTrial }</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}