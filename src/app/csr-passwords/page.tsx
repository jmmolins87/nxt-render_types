
"use client";


import { useEffect, useState } from 'react';

import { Slider } from '@/components/passwords/Slider';
import { Switch } from '@/components/passwords/Switch';


const PasswordsPage = () => {

    const [inputValue, setInputValue] = useState<string>("");
    const [longPass, setLongPass] = useState<number>(10);

    // Switches
    const [upper, setUpper] = useState<boolean>(true);
    const [lower, setLower] = useState<boolean>(true);
    const [numbers, setNumbers] = useState<boolean>(true);
    const [symbols, setSymbols] = useState<boolean>(true);

    // showMessage
    const [showMessage, setShowMessage] = useState<boolean>(false);

    useEffect(() => {
        generatePassword()
    }, [longPass, upper, lower, numbers, symbols]);

    // Function generatePassword
    const generatePassword = () => {
        let characters = "";

        if (upper) {
            characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }

        if (lower) {
            characters += "abcdefghijklmnopqrstuvwxyz";
        }

        if (numbers) {
            characters += "0123456789";
        }

        if (symbols) {
            characters += "!@#$%^&*()_+[]{}|;:,.<>?";
        }

        let password = "";
        for (let i = 0; i < longPass; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        setInputValue(password);
    }

    // Function copy in clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(inputValue);
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 2500)
    }

    return (
        <div className="bg-slate-100 w-full h-screen flex justify-center items-center">
            <div className="border border-gray-500 bg-white rounded p-5">
                <h2 className="text-3xl text-blue-400 border-blue-400 border-b-2">Password Generate</h2>
                <div className="flex justify-between items-center gap-2 mt-2">
                    <input 
                        type="text" 
                        value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="New Password" 
                        className="w-4/5 rounded p-2 border border-gray-300" />
                    <button onClick={copyToClipboard} className="w-1/5 flex justify-center items-center bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                        </svg>
                    </button>
                </div>
                <Slider 
                    value={longPass} 
                    changeValue={setLongPass} />
                <div className="grid grid-cols-2 gap-2.5 mt-3">
                    <Switch 
                        textLabel="Mayúsculas" 
                        value={upper}
                        changeValue={setUpper} />
                    <Switch 
                        textLabel="Minúsculas" 
                        value={lower}
                        changeValue={setLower} />
                    <Switch 
                        textLabel="Números" 
                        value={numbers}
                        changeValue={setNumbers} />
                    <Switch 
                        textLabel="Simbolos" 
                        value={symbols}
                        changeValue={setSymbols} />
                </div>
                <button 
                    onClick={generatePassword}
                    className="w-full bg-blue-400 hover:bg-blue-500 text-white rounded py-1.5 mt-4 cursor-pointer">
                    Generate
                </button>
                <div className="absolute w-fit top-5 right-5">
                    {
                        showMessage && (
                            <p className="flex justify-between gap-2 bg-emerald-200 text-emerald-700 text-center border-2 border-emerald-700 rounded mt-2 py-1.5 px-2">
                                ¡¡Password copiado!!
                                <span onClick={() => setShowMessage(false)} className="cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </span>
                            </p>
                        )
                    }
                </div>
            </div>
        </div>
    );
}


export default PasswordsPage;