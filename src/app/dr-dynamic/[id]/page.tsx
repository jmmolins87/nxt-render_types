




import { Header } from "@/components/dynamic/Header";

import { SingleCharacter } from "@/models/SingleCharacter.model";


interface IPropsSingleCharacter {
    params: Promise<{id: string}>
}

const getCharacterById = async (id: string) => {
    const responseCharacter = await fetch(`https://dragonball-api.com/api/characters/${id}`)
    const character: SingleCharacter = await responseCharacter.json()
    return character
}


const SingleCharacterById = async ({params}: IPropsSingleCharacter) => {

    const characterId = await (await params).id
    const character = await getCharacterById(characterId)

    return (
        
        <div>
            <Header />
            {
                character && (
                    <div className="bg-slate-100 min-h-screen">
                        <main className="max-w-[90%] mx-auto sm:max-w-3xl py-6">
                            <div className="flex flex-col sm:flex-row gap-10">
                                <section className="w-full sm:w-1/3 text-emerald-500 text-center bg-emerald-50 border-2 border-emerald-500 rounded-lg p-5">
                                    <img 
                                        src={character.image} 
                                        alt={character.name}
                                        title={character.name} 
                                        className="mx-auto object-cover rounded-lg" />
                                </section>
                                <section className="w-full sm:w-2/3">
                                    <h3 className="text-3xl text-emerald-500 font-bold underline">{character.name}</h3>
                                    <div className="mt-5">
                                        <p className="text-emerald-500 font-semibold">Ki:
                                            <span className="text-slate-800 font-normal"> {character.ki}</span>
                                        </p>
                                        <p className="text-emerald-500 font-semibold">Ki máximo:
                                            <span className="text-slate-800 font-normal"> {character.maxKi}</span>
                                        </p>
                                        <p className="text-emerald-500 font-semibold">Raza: 
                                            <span className="text-slate-800 font-normal"> {character.race}</span>
                                        </p>
                                        <p className="text-emerald-500 font-semibold">Sexo:
                                            <span className="text-slate-800 font-normal"> {character.gender}</span>
                                        </p>
                                        <p className="text-emerald-500 font-semibold">Descripción: 
                                            <span className="text-slate-800 font-normal"> {character.description}</span>
                                        </p>
                                        <p className="text-emerald-500 font-semibold">Afiliación:
                                            <span className="text-slate-800 font-normal"> {character.affiliation}</span>
                                        </p>
                                    </div>
                                </section>
                            </div>
                            <h3 className="text-3xl mt-10">Transformaciones:</h3>
                            {
                                character.transformations.length === 0 && (
                                    <div className="bg-red-50 border-2 border-red-500 text-red-500 text-center mt-4 p-5 rounded-lg">
                                        <p className="font-semibold">Este personaje no tiene transformaciones</p>
                                    </div>
                                )
                            }
                            {
                                character.transformations.length > 0 && (

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                        {
                                            character.transformations.map((transformation) => {
                                                return (
                                                    <div key={transformation.id} >
                                                        {
                                                            <div className="mt-4">
                                                                <section className="text-emerald-500 text-center bg-emerald-50 border-2 border-emerald-500 rounded-lg p-5">
                                                                    <img 
                                                                        src={transformation.image} 
                                                                        alt={transformation.name}
                                                                        title={transformation.name}
                                                                        className="mx-auto h-60 object-cover rounded-lg mt-10" />
                                                                </section>
                                                                <section className="flex justify-around items-center">
                                                                    <h3 className="text-xl text-emerald-500 text-center font-bold">{transformation.name}</h3>
                                                                    <p className="text-emerald-500 font-bold">Ki: 
                                                                        <span className="text-slate-800 font-normal"> {transformation.ki}</span>
                                                                    </p>
                                                                </section>
                                                            </div>
                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            }
                        </main>
                    </div>
                )
            }
        </div>
    )
}

export default SingleCharacterById;