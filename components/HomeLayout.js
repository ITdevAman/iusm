import Link from "next/link";
import {useIntl} from "react-intl";
import {languages} from "../constants/languages";
import {LOCALES} from "../intl/locales";
import {useDispatch} from "react-redux";
import {setLocale} from "../redux/reducers/main";
import { bubble as Menu } from 'react-burger-menu'
import Image from "next/image";
import Img1 from "../pages/images/img_2.png";
import Img2 from "../pages/images/img_3.png";
import Img3 from "../pages/images/img_4.png";
import Img4 from "../pages/images/img_5.png";



export default function HomeLayout({children}) {
    const dispatch = useDispatch();
    const {formatMessage, locale} = useIntl();
    return (
        <>
            <div className='header1'>
                <div className="select">
                    <div className="select_block">
                        <select name="main" value={locale} onChange={(e) => dispatch(setLocale(e.target.value))}>
                            {languages.map((elem, i) => (
                                <option key={LOCALES[elem.key]} value={LOCALES[elem.key]}>{elem.flag}{elem.text}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="container">
                    <div className="header">
                        <div className="header__logo col-lg-3 col-md-3">
                           <img src={require('../pages/images/Logo MED.png').default.src} alt=""/>
                        </div>
                        <nav className='header__navbar col-lg-9 col-md-8 '>
                            <Link href={"/"}><a href={"/"} className="header__navbar_a">{formatMessage({id: 'header1'})}</a></Link>
                            <Link href={"/Main"}><a className="header__navbar_a" href={"/Main"}>{formatMessage({id: 'header2'})}</a></Link>
                            <Link href={"/About"}><a className="header__navbar_a" href={"/About"}>{formatMessage({id: 'header3'})}</a></Link>
                            <Link href={"/students"}><a className="header__navbar_a" href={"/students"}>{formatMessage({id: 'header4'})}</a></Link>
                            <Link href={"/Act"}><a className="header__navbar_a" href={"/Act"}>{formatMessage({id: 'header5'})}</a></Link>
                            <Link href={"/contact"}><a className="header__navbar_a" href={"/contact"}>{formatMessage({id: 'header6'})}</a></Link>
                        </nav>
                        <Menu right className='burger col-lg-8 col-md-8 ' >
                            <Link href={"/"}><a href={"/"} className="header__navbar_a">{formatMessage({id: 'header1'})}</a></Link>
                            <Link href={"/Main"}><a className="header__navbar_a" href={"/Main"}>{formatMessage({id: 'header2'})}</a></Link>
                            <Link href={"/About"}><a className="header__navbar_a" href={"/About"}>{formatMessage({id: 'header3'})}</a></Link>
                            <Link href={"/students"}><a className="header__navbar_a" href={"/students"}>{formatMessage({id: 'header4'})}</a></Link>
                            <Link href={"/Act"}><a className="header__navbar_a" href={"/Act"}>{formatMessage({id: 'header5'})}</a></Link>
                            <Link href={"/contact"}><a className="header__navbar_a" href={"/contact"}>{formatMessage({id: 'header6'})}</a></Link>
                        </Menu>
                    </div>
                </div>

            </div>
            <main>
                {children}
            </main>
            <div className='footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4  col-md-4  footer__logo">
                            <Link  href={"/"}><a href={"/"} className="footer__logo_a">{formatMessage({id: 'header1'})}</a></Link>
                            <Link href={"/Main"}><a className="footer__logo_a" href={"/Main"}>{formatMessage({id: 'header2'})}</a></Link>
                            <Link href={"/About"}><a className="footer__logo_a" href={"/About"}>{formatMessage({id: 'header3'})}</a></Link>
                            <Link href={"/students"}><a className="footer__logo_a" href={"/students"}>{formatMessage({id: 'header4'})}</a></Link>
                            <Link href={"/Act"}><a className="footer__logo_a" href={"/Act"}>{formatMessage({id: 'header5'})}</a></Link>
                            <Link href={"/contact"}><a className="footer__logo_a" href={"/contact"}>{formatMessage({id: 'header6'})}</a></Link>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                            <div className="footer_adress">
                                <span>{formatMessage({id: 'addresFooter'})}</span>
                                <h1>{formatMessage({id: 'addres'})}</h1>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                            <div className="footer_adress">
                                <span>{formatMessage({id : "header6"})}</span>
                                <h1>Email : <a href="mailto:iusm.kg@gmail.com"> iusm.kg@gmail.com</a></h1>
                                <h1>{formatMessage({id:"num"})}: (+919335011912
                                    )</h1> <h1>{formatMessage({id:"num"})}: (+996 999 010 040
                                    )</h1>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="footer_line">
                                <h1>{formatMessage({id : "kay"})}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer__logo__block'>
                    <a href="https://instagram.com"><Image src={Img1}/></a>
                    <a href="https://www.facebook.com/International-University-of-Science-Medicine-355373318327909"><Image src={Img2}/></a>
                    <a href="https://web.telegram.org/z/#1395775338"><Image src={Img3}/></a>
                    <a href="https://api.whatsapp.com/send?phone=+996700123404"><Image src={Img4}/></a>
                </div>
            </div>
        </>
    )
}
