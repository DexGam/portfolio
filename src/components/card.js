import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Card(props) {

    const [isOpen, setIsOpen] = useState(false)
    const [zIndex, setZIndex] = useState("0")

    const hover = {
        scale: 1.1,
        transition: { duration: 0.2 }
    }

    useEffect(() => {

        if (props.chosenIndex == props.data.index) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }

        if (props.chosenIndex == props.data.index) {
            setZIndex("10")
        } else if (props.oldChosenIndex == props.data.index && props.chosenIndex == "0") {
            setZIndex("10")
        } else {
            setZIndex("0")
        }

    }, [props.chosenIndex]);

    return (
        <>
            <motion.li
                layout
                className={isOpen ? "opened-card" : "card"}
                style={{ zIndex: zIndex }}
                whileHover={ isOpen ? {} : hover}
            >
                <motion.div style={{ borderRadius: '10px' }} className="card_link">
                    <div className="card_img-wrap">
                        <motion.img style={{ borderRadius: '10px' }} layout className="card_img" src={props.src} alt={props.data.alt} />
                    </div>
                    <div className="card_title">
                        <motion.h5 layout="position" className="card_title-text"
                        >{props.data.title}</motion.h5>
                    </div>
                    {isOpen && (
                        <div className="card_desc">
                            <motion.h5 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="card_desc-text">
                                {props.data.longDes}
                            </motion.h5>

                            <motion.div className="link-wrap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                                <i class={props.data.icon}></i>
                                <a className="link" href={props.data.link[0]}>{props.data.link[1]}</a>
                                <br/>
                                {props.data.moreIcons.map((item, i) => <i class={props.data.moreIcons[i]}/>)}
                                <a className="link" href={props.data.moreLink[0]}>{props.data.moreLink[1]}</a>
                            </motion.div>

                            {props.data.video != "" ? 
                            <motion.div className="video-wrap" initial={{opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
                                <iframe
                                    className="ytVideo"
                                    allowFullScreen={true}
                                    frameBorder="0"
                                    src={props.data.video}>
                                </iframe>
                            </motion.div> : null }
                        </div>
                    )}
                </motion.div>
            </motion.li>
        </>
    )
}

export default Card;