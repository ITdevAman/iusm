import HomeLayout from "../components/HomeLayout";
import Link from "next/link";
import {useIntl} from "react-intl";


export default function contact() {
    const {formatMessage} = useIntl()

    return (
        <HomeLayout>
            <div className="contact">
                <iframe className="contact_map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.7441737971394!2d74.62467941538797!3d42.857134711557535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb64e38a80069%3A0x20338aeb2ebfbbbd!2zMSDRg9C7LiDQk9C-0YDRjNC60L7Qs9C-LCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1634722623057!5m2!1sru!2skg"
                        allowFullScreen="" loading="lazy"/>
                <div className="contact_block">
                    <h1>{formatMessage({id : "contact" })}</h1>
                    <div className="contact_block_box">
                        <p>{formatMessage({id : "num" })}:</p>
                      <a href="tel:+919335011912">  <h5>+919335011912 </h5></a>
                      <a href="tel:+996 999 010 040 ">  <h5>+996 999 010 040 </h5></a>

                    </div>
                    <div className="contact_block_box">
                        <p>E-mail:</p>
                        <h6> <a href="mailto:iusm.kg@gmail.com">iusm.kg@gmail.com</a></h6>
                    </div>
                    <div className="contact_block_box">
                        <p>{formatMessage({id : "address" })}:</p>
                        <h5>{
                            formatMessage({id : "addres"})
                        }</h5>
                    </div>
                    <Link href="https://go.2gis.com/o9z40"><button className="contact_block_btn"><a href="#">{formatMessage({id : "btn"})}</a></button></Link>
                </div>
                <div className="btn_con">
                    <Link href="https://go.2gis.com/o9z40"><button className="contact_block_btn2"><a href="#">{formatMessage({id : "btn"})}</a></button></Link>
                </div>
            </div>
        </HomeLayout>
    )
}
