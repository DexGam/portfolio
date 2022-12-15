import React, { useEffect } from "react";
import CardContainer from "../cardContainer";
import Navbar from "../navbar";
import AboutMe from "../aboutme";
import Footer from "../footer";

function Home(){

    const art = 
        `
        $$\\               $$\\$$\\                  $$\\    $$\\                                  
        $$ |              $$ $$ |                 $$ |   $$ |                                 
        $$$$$$$\\  $$$$$$\\ $$ $$ |$$$$$$\\        $$$$$$\\  $$$$$$$\\  $$$$$$\\  $$$$$$\\  $$$$$$\\  
        $$  __$$\\$$  __$$\\$$ $$ $$  __$$\\       \\_$$  _| $$  __$$\\$$  __$$\\$$  __$$\\$$  __$$\\ 
        $$ |  $$ $$$$$$$$ $$ $$ $$ /  $$ |        $$ |   $$ |  $$ $$$$$$$$ $$ |  \\__$$$$$$$$ |
        $$ |  $$ $$   ____$$ $$ $$ |  $$ |        $$ |$$\\$$ |  $$ $$   ____$$ |     $$   ____|
        $$ |  $$ \\$$$$$$$\\$$ $$ \\$$$$$$  |        \\$$$$  $$ |  $$ \\$$$$$$$\\$$ |     \\$$$$$$$\\ 
        \\__|  \\__|\\_______\\__\\__|\\______/          \\____/\\__|  \\__|\\_______\\__|      \\_______|                                                                                       
        `

    useEffect(() => {
        console.log(art)
    },[]);

    return(
        <>
            <Navbar />
            <AboutMe />
            <CardContainer />
            <Footer />
        </>
    )
}

export default Home;