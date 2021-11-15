import {useIntl} from "react-intl";
import Image from "next/image";
import Img1 from "../images/img_9.png"
import Img2 from "../images/img_9.png"
import Img3 from "../images/IMAGE 2021-10-25 14_19_10.jpg"
import Img4 from "../images/IMAGE 2021-10-25 14_32_27.jpg"


export default function mainHero() {
    const {formatMessage} = useIntl();
    return (
        <>
            <div className="mainHero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="mainHero__block">
                                <Image src={Img1}  layout="fill" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <h1 className="mainHero__name">{formatMessage({id : "PersonName2"})}</h1>
                            <div className="mainHero__box2">
                                <p className="mainHero__box2__title">{formatMessage({id : "PersonDesc2"})}</p>
                                <a href="tel:+996 555 330 868"><span>{formatMessage({id : "num"})} : </span>+996 552 431 612</a>
                                <a href="mailto:maliksm@mail.ru"><span>E-mail : </span>maliksm@mail.ru</a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mainHero__block">
                                <Image src={Img2}  layout="fill" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <h1 className="mainHero__name">{formatMessage({id : "PersonName3"})}</h1>
                            <div className="mainHero__box2">
                                <p className="mainHero__box2__title">{formatMessage({id : "PersonDesc3"})}</p>
                                <a href="tel:+996 555 330 868"><span>{formatMessage({id : "num"})} : </span>+996 556 130260</a>
                                <a href="mailto:holpon_01@yahoo.com"><span>E-mail : </span>cholpon_01@yahoo.com</a>

                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mainHero__block">
                                <Image src={Img3}  layout="fill"/>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <h1 className="mainHero__name">{formatMessage({id : "PersonName1"})}</h1>
                            <div className="mainHero__box2">
                                <p className="mainHero__box2__title">{formatMessage({id : "PersonDesc1"})}</p>
                                <a href="tel:+996 555 330 868"><span>{formatMessage({id : "num"})} : </span>+996 555 330 868</a>
                                <a href="mailto:pozvonok@gmail.com"><span>E-mail : </span>pozvonok@gmail.com</a>

                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mainHero__block">
                                <Image src={Img4}    layout="fill" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <h1 className="mainHero__name">{formatMessage({id : "PersonName4"})}</h1>
                            <div className="mainHero__box2">
                                <p className="mainHero__box2__title">{formatMessage({id : "PersonDesc4"})}</p>
                                <a href="tel:+996 555 330 868"><span>{formatMessage({id : "num"})} : </span>+996999010040</a>
                                <a href="mailto:asanbaiuulumirbek@gmail.com"><span>E-mail : </span>asanbaiuulumirbek@gmail.com</a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
