import React from 'react';
import Image from '../images/pexels-ray-piedra-1696726.jpg';


export default function Home() {
    return (
        <main>
            <img src={Image} className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8 ">
                <h1 className="text-3xl text-white font-bold cursive leading-none lg:leading-snug home-name">Aloha! I'm Nouhaila.</h1>
            </section>
        </main>
    )
}

