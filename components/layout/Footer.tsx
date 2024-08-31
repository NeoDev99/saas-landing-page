"use client";

import React from 'react';

import Logo from '@/public/assets/logo.svg';
import XSocial from '@/public/assets/social/social-x.svg';
import InstaSocial from '@/public/assets/social/social-instagram.svg';
import YTSocial from '@/public/assets/social/social-youtube.svg';

const Footer = () => {
    return (
        <footer className='py-5 border-t border-white/15'>
            <div className='container'>
                <div className='flex flex-col lg:flex-row lg:items-center gap-8'>

                    <div className='flex gap-2 items-center lg:flex-1'>
                        <Logo className='size-6' />
                        <div>AI Landing Page</div>
                    </div>

                    <div>
                        <nav className='flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center'>
                            <a href="#" className='text-white/70 hover:text-white text-xs md:text-sm transition'>
                                Features
                            </a>
                            <a href="#" className='text-white/70 hover:text-white text-xs md:text-sm transition'>
                                Developers
                            </a>
                            <a href="#" className='text-white/70 hover:text-white text-xs md:text-sm transition'>
                                Company
                            </a>
                            <a href="#" className='text-white/70 hover:text-white text-xs md:text-sm transition'>
                                Blog
                            </a>
                            <a href="#" className='text-white/70 hover:text-white text-xs md:text-sm transition'>
                                Changelog
                            </a>
                        </nav>
                    </div>

                    <div className='flex gap-5 lg:flex-1 lg:justify-end'>
                        <XSocial className='text-white/40 hover:text-white transition' />
                        <InstaSocial className='text-white/40 hover:text-white transition' />
                        <YTSocial className='text-white/40 hover:text-white transition' />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;