
import HomeLayout from "../components/HomeLayout";
import {useIntl} from "react-intl";
import Image from "next/image";
import Student1 from "./images/st1.jpg"
import Student2 from "./images/st2.jpg"
import Student3 from "./images/st3.jpg"
import Student4 from "./images/telegram-cloud-photo-size-4-5765872760726334668-w.jpg"
import Student5 from "./images/st5.jpg"
import Student6 from "./images/st6.jpg"

export default function students() {
    const {formatMessage} = useIntl();
    return(
        <HomeLayout>
            <div className="container">
                <div className="students">
                    <h1>{formatMessage({id : "studentsTit"})}</h1>

                    <div className="row">
                        <div className="col-lg-5">
                            <div className="students__img">
                                <Image src={Student3}/>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <ul className="students_ul">{formatMessage({id : "studentsDesc"})}
                                <li>{formatMessage({id : "studentsDes2"})}</li>
                                <li>{formatMessage({id : "studentsDes3"})}</li>
                                <li>{formatMessage({id : "studentsDes4"})}</li>
                                <li>{formatMessage({id : "studentsDes5"})}</li>
                                <li>{formatMessage({id : "studentsDes6"})}</li>
                                <li>{formatMessage({id : "studentsDes7"})}</li>
                                <li>{formatMessage({id : "studentsDes8"})}</li>
                                <li>{formatMessage({id : "studentsDes9"})}</li>
                                <li>{formatMessage({id : "studentsDes10"})}</li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul className="students_ul">{formatMessage({id : "students2Desc"})}
                                <li>{formatMessage({id : "students2Desc2"})}</li>
                                <li>{formatMessage({id : "students2Desc3"})}</li>
                                <li>{formatMessage({id : "students2Desc4"})}</li>
                                <li>{formatMessage({id : "students2Desc5"})}</li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="students__img">
                                <Image src={Student2}/>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="students__img">
                                <Image src={Student1}/>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <ul className="students_ul">{formatMessage({id : "students3Desc"})}
                                <li>{formatMessage({id : "students3Desc2"})}</li>
                                <li>{formatMessage({id : "students3Desc3"})}</li>
                                <li>{formatMessage({id : "students3Desc4"})}</li>
                                <li>{formatMessage({id : "students3Desc5"})}</li>
                                <li>{formatMessage({id : "students3Desc6"})}</li>
                            </ul>
                        </div>

                        <div className="col-lg-6">
                            <ul className="students_ul">{formatMessage({id : "students4Desc"})}
                                <li>{formatMessage({id : "students4Desc2"})}</li>
                                <li>{formatMessage({id : "students4Desc3"})}</li>
                                <li>{formatMessage({id : "students4Desc4"})}</li>
                                <li>{formatMessage({id : "students4Desc5"})}</li>
                            </ul>
                        </div>

                        <div className="col-lg-6">
                            <div className="students__img">
                                <Image src={Student4}/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="students__img">
                                <Image src={Student5}/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ul className="students_ul">{formatMessage({id : "students5Desc"})}
                                <li>{formatMessage({id : "students5Desc1"})}</li>
                                <li>{formatMessage({id : "students5Desc2"})}</li>
                                <li>{formatMessage({id : "students5Desc3"})}</li>
                            </ul>
                        </div>
                        <div className="col-lg-7">
                            <ul className="students_ul">
                                {formatMessage({id : "students6Desc"})}
                                <li>{formatMessage({id : "students6Desc2"})}</li>
                                <li>{formatMessage({id : "students6Desc3"})}</li>
                                <li>{formatMessage({id : "students6Desc4"})}</li>
                                <li>{formatMessage({id : "students6Desc5"})}</li>
                            </ul>
                        </div>
                        <div className="col-lg-5">
                            <div className="students__img">
                                <Image src={Student6}/>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <ul className="students_ul">

                                {formatMessage({id : "students7Desc"})}

                                <li>{formatMessage({id : "students7Desc2"})}</li>
                                <li>{formatMessage({id : "students7Desc3"})}</li>
                                <li>{formatMessage({id : "students7Desc4"})}</li>
                                <li>{formatMessage({id : "students7Desc5"})}</li>
                                <li>{formatMessage({id : "students7Desc6"})}</li>
                                <li>{formatMessage({id : "students7Desc7"})}</li>
                                <li>{formatMessage({id : "students7Desc8"})}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}
