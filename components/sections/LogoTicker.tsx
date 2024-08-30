"use client";

import React from 'react';
import Image from 'next/image';

import acmeLogo from '@/public/assets/logos/logo-acme.png';
import apexLogo from '@/public/assets/logos/logo-apex.png';
import celestialLogo from '@/public/assets/logos/logo-celestial.png';
import quantumLogo from '@/public/assets/logos/logo-quantum.png';
import pulseLogo from '@/public/assets/logos/logo-pulse.png';
import echoLogo from '@/public/assets/logos/logo-echo.png';

const LogoTicker = () => {
    return (
        <section>
            <div className='container py-20 md:py-24'>
                <div className='flex items-center gap-5'>
                    <div className='flex-1 md:flex-none'>
                        <h2>Trusted by top innovative teams</h2>
                    </div>
                    
                    <div className='flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]'>
                        <div className='flex flex-none gap-14'>
                            {[
                                acmeLogo,
                                apexLogo,
                                celestialLogo,
                                quantumLogo,
                                pulseLogo,
                                echoLogo
                            ].map((logo) => (
                                <Image
                                src={logo.src}
                                key={logo.src}
                                alt="Trusted company logo"
                                width={80}
                                height={80}
                                className="h-6 w-auto"
                            />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default LogoTicker;