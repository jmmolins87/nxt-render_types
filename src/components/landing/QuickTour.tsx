




import Image from "next/image"

import ImageTour from "@/assets/images/tour.png"


export const QuickTour = () => {

    return (
        <section className="bg-[#e4f0d3]">
            <div className="max-w-4xl mx-auto text-center py-10">
                <h3 className="text-5xl text-[#03363e] font-bold">Take a quick tour</h3>
                <p className="mt-10 max-w-2/3 mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus numquam autem consequuntur alias a quisquam possimus corrupti? Aperiam, maiores consequatur!</p>
                <Image 
                    src={ ImageTour } 
                    alt="tour"
                    width={500}
                    height={500}
                    className="mx-auto mt-7" />
            </div>
        </section>
    )
}