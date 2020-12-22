import React from 'react';

//import components
import Navbar from './components/navbar.jsx';
import Intro from './components/intro.jsx';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';
import BackToTop from './components/back-top.jsx';
import Preloader from './components/preloader';

export const App = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Intro />
            <About />
            <Contact />
            <BackToTop />
            <Preloader />
        </React.Fragment>
    );
};
