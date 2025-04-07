





import { Header } from '@/components/dynamic/Header';

import { Characters } from "@/models/Characters.model";
import Link from 'next/link';

const getCharacters = async () => {
    const responseCharacters = await fetch("https://dragonball-api.com/api/characters")
    const character: Characters = await responseCharacters.json()
    return character.items
}


const DragonBallApiPage = async () => {

    const characters = await getCharacters()

    return (
        <div className="bg-slate-100 min-h-screen">
            <Header />
            <main className="max-w-[90%] sm:max-w-5xl mx-auto py-6">
                {
                    characters.length === 0 && (
                        <div className="bg-red-50 border-2 border-red-500 text-red-500 text-center p-5 rounded-lg">
                            <p className="font-semibold">No se encontraro personajes</p>
                        </div>
                    )
                }
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
                    {
                        characters.map((character) => {
                            return (
                                <Link href={`/dr-dynamic/${character.id}`}>
                                    <div 
                                        key={character.id}
                                        className="text-emerald-500 text-center bg-emerald-50 border-2 border-emerald-500 rounded-lg p-5">
                                        <img 
                                            src={character.image} 
                                            alt={character.name}
                                            title={character.name} 
                                            className="h-60 mx-auto object-cover rounded-lg mb-3"
                                        />
                                        <h3 className="font-bold">{character.name}</h3>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </main>
        </div>
    )
}


export default DragonBallApiPage;