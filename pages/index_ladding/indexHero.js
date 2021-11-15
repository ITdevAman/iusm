import { Swiper, SwiperSlide } from 'swiper/react';
import  {A11y, Navigation, Scrollbar,Pagination, Autoplay} from "swiper";
import {useIntl} from "react-intl";
import Link from  "next/link";
import Image from "next/image";
import Img1 from  "../images/0c676f68-828d-4e9a-9e76-d6bb9739e612.jpg"
import Img2 from  "../images/b17e05ae-e1ad-4133-947d-91a2399e67ec.jpg"
import Img3 from  "../images/4e7f002d-656a-41d1-8f51-3812750d8288.jpg"



export default function indexHome() {
    const {formatMessage} = useIntl();
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 1500,
                disableOnInteraction: false
            }}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div className="indexHome__card">
                    <Image src={Img1} layout="fill"/>
                    <div className="index__hero1__block">
                        <h1>{formatMessage({id:"heroTitle3"})}</h1>
                        <Link href={"/About"}><a href="#">-{formatMessage({id : "heroA1"})}</a></Link>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="indexHome__card">
                    <Image src={Img2} layout="fill"/>
                    <div className="index__hero1__block">
                        <h1>{formatMessage({id:"heroTitle2"})}</h1>
                        <Link href={"/students"}><a href="#">-{formatMessage({id : "heroA1"})}</a></Link>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="indexHome__card">
                    <Image src={Img3} layout="fill"/>
                    <div className="index__hero1__block">
                        <h1>{formatMessage({id:"heroTitle1"})}</h1>
                        <Link href={"/Main"}><a href="#">-{formatMessage({id : "heroA1"})}</a></Link>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    );
};
