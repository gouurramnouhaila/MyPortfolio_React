import React,{useState,useEffect} from 'react';
import sanityClient from '../client';
import Image from '../images/pexels-alena-koval-961402.jpg';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from "@sanity/block-content-to-react";


const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}



export default function About() {
    const [author,setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
            .catch(console.error);
    },[]);

    if(!author) return <div>Loading...</div>
    return (
        <main className="relative">
            <img src={Image} alt="Flower" className="absolute w-full"/>
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className=" rounded-lg shadow-2xl lg:flex p-20">
                    <img src={urlFor(author.authorImage).url()} className="rounded w-32 h-32 lg:h-64 lg:w-64 mr-8"/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="text-grey-300 mb-4 px-32">
                            Hey there. I'm{" "}
                            <span className="text-grey-100">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-gray-700 px-32">
                            <BlockContent blocks={author.bio} projectId="ze0bjeck" dataset="production" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

