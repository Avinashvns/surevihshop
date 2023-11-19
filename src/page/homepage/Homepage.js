

import React from 'react'

import Header from '../../Component/Header';
import HomeContent1 from '../../Component/Homecontent1';
import Footer from '../../Component/Footer';

export default function Homepage(){
    return (
        <div>
            <header>
                <Header />
            </header>
            {/* Carousle Image */}
            <div>
                {/* <CarouselGS /> */}

                {/* Content */}
                <HomeContent1 />
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}