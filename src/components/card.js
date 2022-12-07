import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Card(props) {

    const [isOpen, setIsOpen] = useState(false)
    const [zIndex, setZIndex] = useState("0")

    useEffect(() => {

        if (props.chosenIndex == props.index) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }

        if (props.chosenIndex == props.index) {
            setZIndex("10")
        } else if (props.oldChosenIndex == props.index && props.chosenIndex == "0") {
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
            >
                <motion.div style={{ borderRadius: '10px' }} className="card_link">
                    <div className="card_img-wrap">
                        <motion.img style={{ borderRadius: '10px' }} layout className="card_img" src={props.src} />
                    </div>
                    <div className="card_title">
                        <motion.h5 layout="position" className="card_title-text">{props.desc}</motion.h5>
                    </div>
                    {isOpen && (
                        <div className="card_desc">
                            <motion.h5
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="card_desc-text"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis mollitia repellendus soluta sequi itaque tempore quasi dolores iusto, tempora ratione. Maiores, provident qui optio reprehenderit eius quibusdam culpa blanditiis accusantium?
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae rem qui aspernatur repellendus sit nisi libero, voluptas vel perferendis unde, dicta, asperiores repudiandae amet veniam pariatur quisquam illo voluptatem adipisci fugit hic aliquam doloremque est nulla? Voluptatum, aut corrupti nisi pariatur, nostrum eligendi quos laborum veritatis ad harum, temporibus voluptate.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus officiis unde possimus, omnis ipsam voluptatum. Saepe accusantium nobis laudantium rem labore nemo perferendis praesentium dolores molestiae, excepturi illum quod, aspernatur, eaque quibusdam laborum itaque distinctio neque adipisci. Labore cumque ipsa nobis sunt laudantium. Nostrum ullam quibusdam suscipit porro, ipsam fugiat? Dolorum porro quibusdam obcaecati alias nobis soluta aspernatur quam vero quos pariatur doloribus nostrum, tempore voluptatem laboriosam? Earum doloremque reprehenderit molestias accusamus odit ipsum et officia minus dolorem sunt! Dolor perspiciatis maxime est ut adipisci. Cum ea quam dolore in inventore voluptatem dolores delectus praesentium reiciendis quasi deleniti repudiandae excepturi nobis quae suscipit impedit mollitia, ratione, itaque amet. Mollitia ipsa aliquam ex saepe fugit error ab exercitationem. Cumque explicabo at dolores nulla deserunt, ad ipsum id voluptatibus, eum officia itaque quos expedita minus similique alias beatae impedit, eligendi eius ab deleniti consequatur incidunt. Quia architecto soluta, perferendis laborum praesentium minima saepe eveniet eaque fugiat sunt quis beatae laboriosam ipsam recusandae dolor cumque incidunt molestiae distinctio! Vel, vero similique ipsa nesciunt hic corporis et rerum repellat, est minima error fugit laudantium repellendus quaerat voluptatibus eveniet. Perferendis praesentium a iure, dolorum voluptas, ad, impedit corrupti molestiae adipisci cum tempora. Fuga reprehenderit non aperiam aliquam adipisci voluptatem nostrum, excepturi repellat, vero assumenda neque, laborum asperiores cumque. Eos odio, accusamus dignissimos tempore consequatur facilis ullam recusandae doloribus cum vitae dolorem sit delectus officia beatae totam mollitia sunt at sint non possimus aperiam quae. Incidunt rem beatae vitae quae omnis animi doloribus quia perferendis aperiam voluptas nostrum fuga inventore ab adipisci, quod reiciendis id repellendus commodi vero repudiandae eaque molestias blanditiis sit natus! Vero libero placeat tempore voluptatum nihil, qui deleniti ex eum totam repudiandae at necessitatibus adipisci beatae maxime dolorum quia ipsa assumenda, quasi porro sequi nisi dolor. Deserunt debitis, accusantium atque rem maiores beatae adipisci obcaecati perferendis inventore, corrupti, in omnis amet odit ad qui id exercitationem saepe sint repellendus. Quos eligendi quidem tempore optio veniam repudiandae fuga cupiditate placeat praesentium amet sit velit deleniti aperiam, vel sapiente, dolorem alias incidunt asperiores sunt commodi quis quibusdam facere, beatae ex. Dolorum dignissimos, rerum deserunt laudantium sed laboriosam ea amet quisquam velit aliquam quis similique possimus iusto totam unde maxime iste quidem, adipisci id aut a ab optio labore. Corrupti nulla tempore labore! Sint, quisquam quibusdam natus reiciendis officiis, nesciunt ad eos fugit corporis quod rem cupiditate totam veritatis cum repellendus in sed nihil expedita modi? Optio itaque voluptatem eum ratione perspiciatis repellendus atque rerum perferendis! Eius quibusdam nisi corporis, unde minima a fugit optio nobis. Expedita dolore quos deleniti voluptate facere soluta ut corporis facilis. Adipisci excepturi corporis deserunt sit cumque non enim est possimus, inventore aliquam quod, obcaecati doloribus dolorem vero ex tenetur asperiores maxime ab unde eum consequatur, odio debitis eius. Nihil, aperiam, velit eius nostrum quae doloribus beatae ullam soluta, non quidem eveniet. Ab, qui sed unde odio tempora pariatur voluptates cumque nesciunt repellendus optio magni voluptatem vitae nemo doloribus iure voluptatibus beatae est. Pariatur aspernatur voluptatum necessitatibus. Autem nemo est nobis sed culpa sequi, amet esse doloremque quo perferendis alias rerum rem facere. Accusamus in, ipsa veniam libero quidem quas molestiae expedita voluptates incidunt, cupiditate excepturi assumenda, debitis at dolorum consequuntur doloribus nobis delectus. Temporibus repellat, impedit perspiciatis consequatur, sed ut aliquam debitis dignissimos molestiae reiciendis laboriosam minima numquam ex iure error vitae exercitationem eligendi cumque quasi pariatur a. In est ea incidunt corrupti. Ut, laborum praesentium incidunt laboriosam ipsum possimus distinctio optio tenetur eum voluptatem amet, perspiciatis deleniti nisi maiores natus porro ipsa voluptates doloremque autem. Odio eos vitae, omnis sint dolores ex fugiat adipisci quaerat temporibus libero necessitatibus! Et ipsa veniam minima rerum quis magni obcaecati repudiandae asperiores nemo iste. Debitis similique atque numquam, voluptatum expedita voluptates molestiae velit et nisi delectus, quisquam quibusdam officia sapiente quae pariatur accusantium sit quod tenetur dolor obcaecati veritatis a, nobis eveniet corporis. Ab molestiae sed voluptates aliquid tempora? Assumenda dolorem, maxime eveniet in alias sed! Velit voluptate in rem voluptatibus, cupiditate officia. Placeat autem quisquam quo mollitia, quam sapiente dolorum quod minima distinctio, illum dolorem enim corrupti dolor accusamus maiores quos corporis facere accusantium iusto alias! Optio ratione quaerat possimus repudiandae voluptatem officia iste totam suscipit dignissimos necessitatibus, dolor delectus. Animi voluptatibus, aperiam placeat assumenda quasi itaque corrupti blanditiis maiores doloribus cum. Eaque aliquam nostrum placeat itaque suscipit odit deserunt, temporibus totam assumenda iure laboriosam veniam iste eius voluptatem quo error pariatur. Esse deleniti eum voluptatem mollitia neque laudantium, nihil quisquam, sit voluptatum ea error eos quis aut laboriosam vel minus ducimus tempora quas. Expedita aliquam, omnis nisi molestiae dolores similique illum distinctio deleniti voluptatum nobis nostrum labore neque laborum fugit sapiente eveniet veniam velit laboriosam? Assumenda officia iure at provident voluptate ad vero non et architecto officiis, reiciendis pariatur ut fuga deleniti harum ea minus omnis quaerat tenetur sapiente nisi earum sint dolores ratione. Porro vitae repellendus quis impedit, nostrum excepturi itaque maxime sint dolor cupiditate magni facilis? Aspernatur mollitia nobis dignissimos accusantium harum saepe eaque minima aliquid earum. Culpa perferendis sapiente adipisci eum vel laborum eius, et porro quibusdam doloremque nihil ad exercitationem nam dolorem. Iusto delectus voluptate dolores molestiae explicabo esse eaque enim velit, deserunt porro obcaecati impedit quidem illum eveniet nobis accusamus magni voluptates vel rem, at assumenda a cumque ipsa accusantium. Nam suscipit aspernatur similique eveniet ducimus nobis. Accusantium incidunt a voluptatem quae eveniet rerum omnis dolores repudiandae illum impedit atque adipisci quisquam, est vero odio sapiente modi vel ipsum debitis similique explicabo dolorum. Iure perferendis enim, temporibus ipsam possimus ullam delectus praesentium repudiandae vitae consequatur mollitia sunt voluptatem suscipit, laborum quaerat reprehenderit similique nisi. Illum quos quod exercitationem ipsa ut, fugiat nisi labore adipisci reiciendis veniam error quidem quae natus eaque! Fugiat minus veritatis repellendus id quae. Quibusdam, ipsum, beatae earum eveniet alias obcaecati nobis delectus non in ut placeat soluta officiis nemo fuga officia quod nam sint eos explicabo porro. Amet dicta quae impedit. Libero quaerat distinctio, ad deserunt sed est dolorem eligendi quod laboriosam nam aspernatur enim aut doloribus illo deleniti soluta. Velit.
                            </motion.h5>
                        </div>
                    )}
                </motion.div>
            </motion.li>
        </>
    )
}

export default Card;