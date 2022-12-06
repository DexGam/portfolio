import Card from "./card";
import "../style/cards.css"
import { useRef, useState, useEffect } from "react";

function CardContainer() {

    let element;

    const refChoosenIndex = useRef();
    const [chosenIndex, setChosenIndex] = useState("0");

    useEffect(() => {
        refChoosenIndex.current = chosenIndex;
    }, [chosenIndex]);

    function ScrollToCard(targetClass){
        element = document.querySelector(targetClass);
        console.log("element: ",element)
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <>
            
            <div className="cards">
                <div className="cards_container">
                    <div className="cards_wrapper">
                        <div className="divGrid">
                            <div onClick={() => ((chosenIndex === "1") ? setChosenIndex("0") : setChosenIndex("1"), ScrollToCard(".divGrid"))}>
                                <Card
                                    index="1"
                                    chosenIndex={chosenIndex}
                                    oldChosenIndex={refChoosenIndex.current}
                                    src="/pictures/pic.png"
                                    alt="TestImg"
                                    desc="Hackathon Budapest 2022, Wise Challenge"
                                />
                            </div>
                            <div onClick={() => ((chosenIndex === "2") ? setChosenIndex("0") : setChosenIndex("2"), ScrollToCard(".divGrid"))}>
                                <Card
                                    index="2"
                                    chosenIndex={chosenIndex}
                                    oldChosenIndex={refChoosenIndex.current}
                                    src="/pictures/pic.png"
                                    alt="TestImg"
                                    desc="Procedural Animation With The Help Of Neural Networks"
                                />
                            </div>
                        </div>
                        <div className="aloneGrid">
                            <div onClick={() => ((chosenIndex === "3") ? setChosenIndex("0") : setChosenIndex("3"), ScrollToCard(".aloneGrid"))}>
                                <Card
                                    index="3"
                                    chosenIndex={chosenIndex}
                                    oldChosenIndex={refChoosenIndex.current}
                                    src="/pictures/pic.png"
                                    alt="TestImg"
                                    desc="Mobile game Developed With Unity, Available On Google Play"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<motion.div
                className="dim-layer"
                animate={{ opacity: chosenIndex != "0" ? .2 : 0 }}
            />*/}
        </>
    )
}

export default CardContainer;