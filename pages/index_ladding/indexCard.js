import {useIntl} from "react-intl";
import Link from "next/link"
import React from "react";
import Modal from 'react-modal';
import Image from "next/image";
import IT from "../images/it.jpg";
import MEN from "../images/men.jpg";
import DEI from "../images/dei.jpg";
import DEI2 from "../images/img_21.png";
import DELO from "../images/img_15.png";

export default function indexCard() {
    const {formatMessage} = useIntl();
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [modalIsOpen2, setIsOpen2] = React.useState(false);

    function openModal2() {
        setIsOpen2(true);
    }

    function closeModal2() {
        setIsOpen2(false);
    }

    const [modalIsOpen3, setIsOpen3] = React.useState(false);

    function openModal3() {
        setIsOpen3(true);
    }

    function closeModal3() {
        setIsOpen3(false);
    }

    const [modalIsOpen4, setIsOpen4] = React.useState(false);

    function openModal4() {
        setIsOpen4(true);
    }

    function closeModal4() {
        setIsOpen4(false);
    }


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 ">
                        <div className="indexCard " onClick={openModal}>
                            <img src={require('../images/img.png').default.src} alt=""/>
                            <div className="indexCard_card_line"/>
                            <div className="indexCard_card_line2"/>
                            <div className="indexCard_card">
                                <h1>{formatMessage({id: "cardName1"})}</h1>
                                <a href="#">{formatMessage({id: "linkcard"})}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 " onClick={openModal2}>
                        <div className="indexCard">
                            <div className="indexCard_card_line"/>
                            <div className="indexCard_card_line2"/>
                            <img src={require('../images/img.png').default.src} alt=""/>
                            <div className="indexCard_card">
                                <h1>{formatMessage({id: "cardName2"})}</h1>
                                <a href="#">{formatMessage({id: "linkcard"})}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6" onClick={openModal3}>
                        <div className="indexCard">
                            <div className="indexCard_card_line"/>
                            <div className="indexCard_card_line2"/>
                            <img src={require('../images/img.png').default.src} alt=""/>
                            <div className="indexCard_card">
                                <h1>{formatMessage({id: "cardName3"})}</h1>
                                <a href="#">{formatMessage({id: "linkcard"})}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6" onClick={openModal4}>
                        <div className="indexCard">
                            <div className="indexCard_card_line"/>
                            <div className="indexCard_card_line2"/>
                            <img src={require('../images/img.png').default.src} alt=""/>
                            <div className="indexCard_card">
                                <h1>{formatMessage({id: "cardName4"})}</h1>
                                <a href="#">{formatMessage({id: "linkcard"})}</a>
                            </div>
                        </div>
                    </div>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Example Modal"
                    >
                        <button className="modalClose" onClick={closeModal}>X</button>
                        <div className="modal_row2 row">
                            <div className="modal_img col-lg-5 col-md-12 col-sm-12 col-12"><Image className="modal_img_img" src={DEI}/></div>
                            <div className="modal_block col-lg-7 col-md-12 col-sm-12 col-12">
                                <h3 className="modal_tit">{formatMessage({id: "cardName1tit"})}</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 modal_block">
                                <h3 className="modal_tit2">{formatMessage({id: "cardName1tit2"})}</h3>
                            </div>
                            <div className="modal_row2 row">
                                <div className="modal_block col-lg-7">
                                    <h3 className="modal_tit">{formatMessage({id: "cardName1tit3"})}</h3>
                                </div>
                                <div className="modal_img col-lg-5"><Image className="modal_img_img" src={DEI2}/></div>
                            </div>
                            <div className=" modal_block"><h3
                                className="modal_tit4">{formatMessage({id: "cardName1tit4"})}</h3>
                            </div>
                            <div className="col-lg-12 ">
                                <div className="dei_tel">
                                <p>{formatMessage({id: "num"})}:</p>
                                <a href="tel:+919335011912"><h5>+919335011912 </h5></a>

                                <a href="tel:+919065448044"><h5>+919065448044 </h5></a>
                            </div>
                            </div>
                        </div>
                    </Modal>
                    <Modal
                        isOpen={modalIsOpen2}
                        onRequestClose={closeModal2}
                        contentLabel="Example Modal"
                    >
                        <button className="modalClose" onClick={closeModal2}>X</button>
                        <div className="modal_row row">
                            <div className="modal_img col-lg-5"><Image className="modal_img_img" src={DELO}/></div>
                            <div className="modal_block col-lg-7">
                                <h3 className="modal_tit">{formatMessage({id: "cardName1tit"})}</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 ">
                                <table>
                                    <ul>
                                        <h5 className="cardNameh5">{formatMessage({id: "cardName2tit2"})}</h5>
                                        <li>{formatMessage({id: "cardName2tit2desc1"})}</li>
                                        <li>{formatMessage({id: "cardName2tit2desc2"})}</li>
                                        <li>{formatMessage({id: "cardName2tit2desc3"})}</li>
                                        <h5 className="cardNameh5"> {formatMessage({id: "cardName2tit3"})}</h5>
                                        <li>{formatMessage({id: "cardName2tit3desc1"})}</li>
                                        <li>{formatMessage({id: "cardName2tit3desc2"})}</li>
                                        <li>{formatMessage({id: "cardName2tit3desc3"})}</li>
                                        <li>{formatMessage({id: "cardName2tit3desc4"})}</li>
                                        <li>{formatMessage({id: "cardName2tit3desc5"})}</li>
                                        <li>{formatMessage({id: "cardName2tit3desc6"})}</li>
                                        <li>{formatMessage({id: "cardName2tit3desc7"})}</li>
                                        <h5 className="cardNameh5"> {formatMessage({id: "cardName2tit4"})}</h5>
                                        <li>{formatMessage({id: "cardName2tit4desc1"})}
                                            <p className="cardNamep">{formatMessage({id: "cardName2tit4desc1li1"})}</p>
                                            <p className="cardNamep">{formatMessage({id: "cardName2tit4desc1li2"})}</p>
                                            <p className="cardNamep">{formatMessage({id: "cardName2tit4desc1li3"})}</p>
                                            <p className="cardNamep">{formatMessage({id: "cardName2tit4desc1li4"})}</p>
                                            <p className="cardNamep">{formatMessage({id: "cardName2tit4desc1li5"})}</p>
                                            <p className="cardNamep">{formatMessage({id: "cardName2tit4desc1li6"})}</p>
                                        </li>
                                        <li>{formatMessage({id: "cardName2tit4desc2"})}
                                            <p className="cardNamep">{formatMessage({id: "cardName2tit4desc2li1"})}</p>
                                            <p className="cardNamep">{formatMessage({id: "cardName2tit4desc2li2"})}</p>
                                            <p className="cardNamep">{formatMessage({id: "cardName2tit4desc2li3"})}</p>
                                            <p className="cardNamep">{formatMessage({id: "cardName2tit4desc2li4"})}</p>
                                            <p className="cardNamep">{formatMessage({id: "cardName2tit4desc2li5"})}</p>
                                        </li>
                                        <li>{formatMessage({id: "cardName2tit4desc3"})}
                                            <p className="cardNamep">{formatMessage({id: "cardName2tit4desc3li1"})}</p>
                                            <p className="cardNamep">{formatMessage({id: "cardName2tit4desc3li2"})}</p>
                                            <p className="cardNamep">{formatMessage({id: "cardName2tit4desc3li3"})}</p>
                                        </li>
                                        <li>{formatMessage({id: "cardName2tit4desc4"})}
                                            <p className="cardNamep">{formatMessage({id: "cardName2tit4desc4li1"})}</p>
                                            <p className="cardNamep">{formatMessage({id: "cardName2tit4desc4li2"})}</p>
                                        </li>
                                        <li>{formatMessage({id: "cardName2tit4desc5"})}
                                            <p className="cardNamep">{formatMessage({id: "cardName2tit4desc5li1"})}</p>
                                            <p className="cardNamep">{formatMessage({id: "cardName2tit4desc5li2"})}</p>
                                            <p className="cardNamep">{formatMessage({id: "cardName2tit4desc5li3"})}</p>
                                        </li>
                                        <li>{formatMessage({id: "cardName2tit4desc6"})}
                                            <p className="cardNamep">{formatMessage({id: "cardName2tit4desc6li1"})}</p>
                                            <p className="cardNamep">{formatMessage({id: "cardName2tit4desc6li2"})}</p>
                                            <p className="cardNamep">{formatMessage({id: "cardName2tit4desc6li3"})}</p>
                                            <p className="cardNamep">{formatMessage({id: "cardName2tit4desc6li4"})}</p>
                                        </li>
                                        <li>{formatMessage({id: "cardName2tit4desc7"})}
                                            <p className="cardNamep">{formatMessage({id: "cardName2tit4desc7li1"})}</p>
                                            <p className="cardNamep">{formatMessage({id: "cardName2tit4desc7li2"})}</p>
                                            <p className="cardNamep">{formatMessage({id: "cardName2tit4desc7li3"})}</p>
                                        </li>
                                    </ul>
                                </table>
                            </div>
                        </div>
                    </Modal>
                    <Modal
                        isOpen={modalIsOpen3}
                        onRequestClose={closeModal3}
                        contentLabel="Example Modal"
                    >

                        <button className="modalClose" onClick={closeModal3}>X</button>
                            <div className="modal_row row">
                                <div className="modal_img col-lg-6"><Image className="modal_img_img" src={IT}/></div>
                                <div className="modal_block col-lg-6">
                                    <h3 className="modal_tit">{formatMessage({id: "cardName3tit"})}</h3>
                                </div>
                        </div>

                    </Modal>
                    <Modal
                        isOpen={modalIsOpen4}
                        onRequestClose={closeModal4}
                        contentLabel="Example Modal"
                    >
                        <button className="modalClose" onClick={closeModal4}>X</button>
                        <div className="modal_row  row">
                                <div className="modal_img col-lg-6"><Image className="modal_img_img" src={MEN}/></div>
                                <div className="modal_block col-lg-6">
                                    <h3 className="modal_tit">{formatMessage({id: "cardName4tit"})}</h3>
                            </div>
                        </div>
                    </Modal>

                </div>
                <div className="row">
                    <div className="col-lg-3 ">
                        <div className="indexBlock_card">
                            <Link href={"#"}><h1
                                className="indexBlock_card_tit">{formatMessage({id: "indexBlock1"})}</h1></Link>
                            <Link href={"#"}><h1
                                className="indexBlock_card_tit">{formatMessage({id: "indexBlock2"})}</h1></Link>
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <div className="indexCard_news">
                            <div className="indexCard_news_card">
                                <div className='num'>
                                    <h3>23</h3>
                                </div>
                                <div className="desc">
                                    <h1>
                                        {formatMessage({id: "newsName1"})}
                                    </h1>
                                    <p>{formatMessage({id: "newsDesc1"})}</p>
                                </div>
                            </div>
                            <div className="indexCard_news_card">
                                <div className='num'>
                                    <h3>24</h3>
                                </div>
                                <div className="desc">
                                    <h1>
                                        {formatMessage({id: "newsName2"})}
                                    </h1>
                                    <p>{formatMessage({id: "newsDesc2"})}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 ">
                        <div className="indexCard_person">
                            <img src={require("../images/img_14.png").default.src} alt=""/>
                            <div className="indexCard_person_block">
                                <h1>{formatMessage({id: "onlain"})}</h1>
                                <a href="https://api.whatsapp.com/send?phone=0999010040">{formatMessage({id: "onlainBtn"})}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
