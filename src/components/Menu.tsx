


import Link from "next/link"


export const Menu = () => {

    return (
        <nav className="w-96 mx-auto text-center mt-16">
            <ul className="flex flex-col gap-3">
                <li>
                    <Link href="/ssr-landing" className="text-2xl block w-full bg-slate-200 hover:bg-slate-400 hover:text-white rounded p-3">
                        Landing Page
                    </Link>
                </li>
                <li>
                    <Link href="/csr-passwords" className="text-2xl block w-full bg-slate-200 hover:bg-slate-400 hover:text-white rounded mt-3 p-3">
                        Generador de contraseñas
                    </Link>
                </li>
                <li>
                    <Link href="/dr-dynamic" className="text-2xl block w-full bg-slate-200 hover:bg-slate-400 hover:text-white rounded mt-3 p-3">
                        Dragon Ball Api
                    </Link>
                </li>
            </ul>
        </nav>
    )
}