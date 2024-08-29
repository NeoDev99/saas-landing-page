"use client";

import React from 'react';
import { Button } from '../ui/Button';
import starsBg from '@/public/assets/stars.png';

const Hero = () => {
    return (
        <section
            className='h-[492px] flex items-center'
            style={{
                backgroundImage: `url(${starsBg.src})`,
            }}
        >
            <div className='container'>
                {/** remove white for a different text effect */}
                <h1 className='text-8xl font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center'>AI SEO</h1>

                <p className='text-lg text-white/70 mt-5 text-center'>
                    Elevate your site&apos;s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.
                </p>

                <div className='flex justify-center mt-5'>
                    <Button>Join waitlist</Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;