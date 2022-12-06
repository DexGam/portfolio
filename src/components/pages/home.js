import CardContainer from "../cardContainer";
import Navbar from "../navbar";
import AboutMe from "../aboutme";
import Footer from "../footer";

function Home(){
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