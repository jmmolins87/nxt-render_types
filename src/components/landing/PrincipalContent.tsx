



export const PrincipalContent = () => {

    return (
        <div className="bg-[#17494c]">
            <main className="flex flex-col sm:flex-row justify-between items-center gap-10 max-w-2xl sm:max-w-4xl mx-auto text-white pt-10 pb-20">
                <div className="w-[90%] sm:w-1/2">
                    <h2 className=" text-4xl sm:text-7xl font-bold leading-[3rem] sm:leading-[5.5rem]">
                        <span className="text-[#cc9fb6]">Champions</span>
                        <br /><span className="text-[#fed6aa]">of </span> 
                        <span className="text-[#00a655] border-b-3 border-white">customer</span>
                        <br /><span className="text-[#31aabd] border-b-3 border-white">service</span>
                    </h2>
                </div>
                <div className="w-[90%] sm:w-1/2">
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, illum eum eligendi odit debitis modi labore quo iure animi possimus dignissimos commodi accusantium veritatis nulla alias optio excepturi similique consequuntur! Placeat commodi quidem quisquam in laudantium quos consectetur ducimus recusandae illo. Fuga corrupti ullam esse quidem soluta non temporibus iste.</p>
                    </div>
                    <div className="flex gap-10 mt-5">
                        <button className="bg-[#e4f0d3] text-[#03363e] font-semibold py-2.5 px-5 cursor-pointer">Free trial</button>
                        <button className="border-2 border-[#e4f0d3] font-semibold py-2.5 px-5 cursor-pointer">View demo</button>
                    </div>
                </div>
            </main>
        </div>
    )
}