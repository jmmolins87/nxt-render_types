


interface IHeaderLandingSecondaryProps {
    itemsMenuSecondary: string[];
}


import Link from 'next/link';


export const HeaderLandingSecondary = ({ itemsMenuSecondary }: IHeaderLandingSecondaryProps) => {

    return (
        <nav>
            <ul className='flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-4 max-w-4xl mx-auto text-white py-2.5'>
                {
                    itemsMenuSecondary.map((item, index) => (
                        <li key={index}>
                            <Link href={"#"} className='text-sm text-slate-400'>{ item }</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>

    )
}

