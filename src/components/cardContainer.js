import Card from "./card";
import "../style/cards.css"
import { cardsData } from "../data/cardData";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function CardContainer() {

    let element;

    const refChoosenIndex = useRef();
    const [chosenIndex, setChosenIndex] = useState("0");

    const dimOn = {
        opacity: 0.2,
        zIndex: 5
    };

    const dimOff = {
        opacity: 0,
        transitionEnd: { zIndex: "-1" }
    };

    const cardInView = {
        y: 0,
        opacity: 1,
        transition: { delay: 0.2 }
    }

    const cardOutView = {
        y: +60,
        opacity: 0
    }

    useEffect(() => {
        refChoosenIndex.current = chosenIndex;
    }, [chosenIndex]);

    function ScrollToCard(targetClass) {
        element = document.querySelector(targetClass);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <>
            <div className="cards">
                <div className="cards_container">
                    <div className="cards_wrapper">
                        <div className="divGrid">
                            <motion.div initial={cardOutView} whileInView={cardInView} viewport={{ once: true }} className="grid-left" onClick={() => ((chosenIndex === "1") ? setChosenIndex("0") : setChosenIndex("1"), ScrollToCard(".grid-left"))}>
                                <Card
                                    chosenIndex={chosenIndex}
                                    oldChosenIndex={refChoosenIndex.current}
                                    src={process.env.PUBLIC_URL + "/pictures/wise.png"}
                                    data={cardsData[0]}
                                />
                            </motion.div>
                            <motion.div initial={cardOutView} whileInView={cardInView} viewport={{ once: true }} className="grid-right" onClick={() => ((chosenIndex === "2") ? setChosenIndex("0") : setChosenIndex("2"), ScrollToCard(".grid-right"))}>
                                <Card
                                    chosenIndex={chosenIndex}
                                    oldChosenIndex={refChoosenIndex.current}
                                    src={process.env.PUBLIC_URL + "/pictures/gravity.png"}
                                    data={cardsData[1]}
                                />
                            </motion.div>
                        </div>
                        <div className="divGrid secondRow">
                            <motion.div initial={cardOutView} whileInView={cardInView} viewport={{ once: true }} className="grid-left-second" onClick={() => ((chosenIndex === "3") ? setChosenIndex("0") : setChosenIndex("3"), ScrollToCard(".grid-left-second"))}>
                                <Card
                                    chosenIndex={chosenIndex}
                                    oldChosenIndex={refChoosenIndex.current}
                                    src={process.env.PUBLIC_URL + "/pictures/agent.png"}
                                    data={cardsData[2]}
                                />
                            </motion.div>
                            <motion.div initial={cardOutView} whileInView={cardInView} viewport={{ once: true }} className="grid-right-second" onClick={() => ((chosenIndex === "4") ? setChosenIndex("0") : setChosenIndex("4"), ScrollToCard(".grid-right-second"))}>
                                <Card
                                    chosenIndex={chosenIndex}
                                    oldChosenIndex={refChoosenIndex.current}
                                    src={process.env.PUBLIC_URL + "/pictures/aigerimbackground.png"}
                                    data={cardsData[3]}
                                />
                            </motion.div>
                        </div>
                        {/*<div className="aloneGrid">
                            <motion.div initial={cardOutView} whileInView={cardInView} viewport={{ once: true }} onClick={() => ((chosenIndex === "3") ? setChosenIndex("0") : setChosenIndex("3"), ScrollToCard(".aloneGrid"))}>
                                <Card
                                    chosenIndex={chosenIndex}
                                    oldChosenIndex={refChoosenIndex.current}
                                    src={process.env.PUBLIC_URL + "/pictures/agent.png"}
                                    data={cardsData[2]}
                                />
                            </motion.div>
                        </div>*/}
                    </div>
                </div>
            </div>

            <motion.div
                className="dim-layer"
                animate={chosenIndex != "0" ? dimOn : dimOff}
                transition={{ delay: 0.3 }}
                onClick={() => setChosenIndex("0")}
            />
        </>
    )
}

export default CardContainer;