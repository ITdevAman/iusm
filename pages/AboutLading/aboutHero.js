import {useIntl} from "react-intl";

export default function  AboutHero() {
    const {formatMessage} = useIntl();
    return (
        <div className="container">
            <div className="about_container">
                <h1 className="about_container_title col-lg-12">{formatMessage({id: "aboutHero"})}</h1>
                <div className="about_container_block col-lg-12">
                    <span className="about_container_block_title col-lg-12">{formatMessage({id: "aboutGrup1"})}:</span>
                    <div className="about_container_block_box col-lg-12">
                        <h1><span>1.</span>{formatMessage({id: "aboutGrup1title1"})}
                        </h1>
                        <p>{formatMessage({id: "aboutGrup1desc1"})}</p>
                    </div>
                    <div className="about_container_block_box">
                        <h1><span>2.</span>{formatMessage({id: "aboutGrup1title2"})}</h1>
                        <p>{formatMessage({id: "aboutGrup1desc2"})}</p>
                    </div>
                    <div className="about_container_block_box">
                        <h1><span>3.</span>{formatMessage({id: "aboutGrup1title3"})}</h1>
                        <p>{formatMessage({id: "aboutGrup1desc3"})}</p>
                    </div>
                </div>
                <div className="about_container_block">
                    <span className="about_container_block_title">{formatMessage({id: "aboutGrup2"})}:</span>
                    <div className="about_container_block_box">
                        <p>{formatMessage({id: "aboutGrup2desc1"})}</p>
                    </div>
                    <div className="about_container_block_box">
                        <p>{formatMessage({id: "aboutGrup2desc2"})}</p>
                    </div>
                    <div className="about_container_block_box">
                        <p>{formatMessage({id: "aboutGrup2desc3"})}</p>
                    </div>
                </div>
                <div className="about_container_block">
                    <span className="about_container_block_title">{formatMessage({id: "aboutGrup3"})}:</span>
                    <div className="about_container_block_box">
                        <h1><span>1.</span>{formatMessage({id: "aboutGrup3title1"})}:</h1>
                        <p>{formatMessage({id: "aboutGrup3desc1"})}</p>
                    </div>
                    <div className="about_container_block_box">
                        <h1><span>2.</span>{formatMessage({id: "aboutGrup3title2"})}:</h1>
                        <p>{formatMessage({id: "aboutGrup3desc1"})}</p>
                    </div>
                </div>
                <div className="about_container_block">
                    <span className="about_container_block_title">{formatMessage({id: "aboutGrup4"})}:</span>
                    <div className="about_container_block_box">
                        <h1><span>1.</span>{formatMessage({id: "aboutGrup4title1"})}:</h1>
                        <p>{formatMessage({id: "aboutGrup4desc1"})}</p>
                    </div>
                    <div className="about_container_block_box">
                        <h1><span>2.</span>{formatMessage({id: "aboutGrup4title2"})}:</h1>
                        <p>{formatMessage({id: "aboutGrup4desc2"})}</p>
                    </div>
                    <div className="about_container_block_box">
                        <h1><span>3.</span>{formatMessage({id: "aboutGrup4title3"})}:</h1>
                        <p>{formatMessage({id: "aboutGrup4desc3"})}</p>
                    </div>
                    <div className="about_container_block_box">
                        <h1><span>4.</span>{formatMessage({id: "aboutGrup4title4"})}:</h1>
                        <p>{formatMessage({id: "aboutGrup4desc4"})} </p>
                    </div>
                    <div className="about_container_block_box">
                        <h1><span>5.</span>{formatMessage({id: "aboutGrup4title5"})}:</h1>
                        <p>{formatMessage({id: "aboutGrup4desc5"})}</p>
                    </div>
                    <div className="about_container_block_box">
                        <h1><span>6.</span>{formatMessage({id: "aboutGrup4title6"})}:</h1>
                        <p> {formatMessage({id: "aboutGrup4desc6"})}</p></div>
                    <div className="about_container_block_box">
                        <h1><span>7.</span>{formatMessage({id: "aboutGrup4title7"})}: </h1>
                        <p>{formatMessage({id: "aboutGrup4desc7"})}  </p>
                    </div>
                    <div className="about_container_block_box">
                        <h1><span>8.</span>{formatMessage({id: "aboutGrup4title8"})}:</h1>
                        <p>{formatMessage({id: "aboutGrup4desc8"})}</p>
                    </div>
                </div>
            </div>
            <div className="about_container2">
                <h1 className="about_container2_title">{formatMessage({id: "about_container2_title"})}
                </h1>
                <ul>{formatMessage({id: "about_container2_title_tit1"})}
                    <p>{formatMessage({id: "about_container2_title_tit2"})}:
                    </p>
                    <li>{formatMessage({id: "about_container2_title_li1"})}</li>
                    <li>    {formatMessage({id: "about_container2_title_li2"})}
                    </li>
                    <li>        {formatMessage({id: "about_container2_title_li3"})}
                    </li>
                    <li>        {formatMessage({id: "about_container2_title_li4"})}
                    </li>
                    <li> {formatMessage({id: "about_container2_title_li5"})}</li>
                    <li>    {formatMessage({id: "about_container2_title_li6"})}   </li>
                </ul>
            </div>
            <div className="about_container3">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="about_container3_block2">
                            <h5>{formatMessage({id: "about_container3_block3_tit"})} </h5>
                            <p>{formatMessage({id: "about_container3_block3_desc"})} </p>
                        </div>
                        <div className="about_container3_block3">
                            <ul>{formatMessage({id: "about_container3_block3_ul"})}
                                <li>        {formatMessage({id: "about_container3_block3_li1"})}
                                </li>
                                <li>    {formatMessage({id: "about_container3_block3_li2"})}
                                </li>
                                <li>        {formatMessage({id: "about_container3_block3_li3"})}
                                </li>
                                <li>        {formatMessage({id: "about_container3_block3_li4"})}
                                </li>
                                <li>{formatMessage({id: "about_container3_block3_li5"})}
                                </li>
                                <li>        {formatMessage({id: "about_container3_block3_li6"})}  </li>
                                <li> {formatMessage({id: "about_container3_block3_li7"})} </li>
                                <li>    {formatMessage({id: "about_container3_block3_li8"})}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="about_container4_block">
                            <table className="about_container4_block_table">
                                <tr>
                                    <th>№</th>
                                    <th>{formatMessage({id: "tr1_th2"})}</th>
                                    <th>{formatMessage({id: "tr1_th3"})}</th>
                                    <th>{formatMessage({id: "tr1_th4"})}</th>
                                    <th>{formatMessage({id: "tr1_th5"})}</th>
                                    <th>{formatMessage({id: "tr1_th6"})}</th>
                                    <th>{formatMessage({id: "tr1_th7"})}</th>
                                    <th>{formatMessage({id: "tr1_th8"})} </th>
                                </tr>
                                <tr>
                                    <th align="center">1</th>
                                    <td>{formatMessage({id: "tr2_td2"})}</td>
                                    <td>{formatMessage({id: "tr2_td3"})}</td>
                                    <td>{formatMessage({id: "tr2_td4"})}</td>
                                    <td align="center">2021-2025</td>
                                    <td align="center">{formatMessage({id: "tr2_td6"})}</td>
                                    <td align="center">5,520,000</td>
                                    <td align="center">{formatMessage({id: "tr2_td8"})}</td>
                                </tr>
                                <tr align="center">
                                    <th colSpan="8">{formatMessage({id: "tr3_th"})}</th>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <td>{formatMessage({id: "tr3_td2"})}</td>
                                    <td>{formatMessage({id: "tr3_td3"})}</td>
                                    <td>{formatMessage({id: "tr3_td4"})}</td>
                                    <td align="center">2021-2025</td>
                                    <td align="center">{formatMessage({id: "tr2_td6"})}</td>
                                    <td align="center">4,250,000</td>
                                    <td align="center">{formatMessage({id: "tr2_td8"})}</td>
                                </tr>
                                <tr align="center">
                                    <th colSpan="8">{formatMessage({id: "tr4_th"})}</th>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <td>{formatMessage({id: "tr4_td2"})}</td>
                                    <td>{formatMessage({id: "tr4_td3"})}</td>
                                    <td>{formatMessage({id: "tr4_td4"})}</td>
                                    <td align="center">2021-2025</td>
                                    <td align="center">{formatMessage({id: "tr2_td6"})}</td>
                                    <td align="center">1,800,000</td>
                                    <td align="center">{formatMessage({id: "tr2_td8"})}</td>
                                </tr>
                                <tr align="center">
                                    <th colSpan="8">{formatMessage({id: "tr5_th"})}</th>
                                </tr>
                                <tr>
                                    <th>4</th>
                                    <td>{formatMessage({id: "tr5_td2"})}</td>
                                    <td>{formatMessage({id: "tr5_td3"})}</td>
                                    <td>{formatMessage({id: "tr5_td4"})}</td>
                                    <td align="center">2021-2025</td>
                                    <td align="center">{formatMessage({id: "tr2_td6"})}</td>
                                    <td align="center">3,120,000</td>
                                    <td align="center">{formatMessage({id: "tr2_td8"})}</td>
                                </tr>
                                <tr align="center">
                                    <th colSpan="8">{formatMessage({id: "tr6_th"})}</th>
                                </tr>
                                <tr>
                                    <th>5</th>
                                    <td>{formatMessage({id: "tr6_td2"})}</td>
                                    <td>{formatMessage({id: "tr6_td3"})}</td>
                                    <td>{formatMessage({id: "tr6_td4"})}</td>
                                    <td align="center">2021-2025</td>
                                    <td align="center">{formatMessage({id: "tr2_td6"})}</td>
                                    <td align="center">8,000,000</td>
                                    <td align="center">{formatMessage({id: "tr2_td8"})}</td>
                                </tr>
                                <tr align="center">
                                    <th colSpan="8">{formatMessage({id: "tr7_th"})}</th>
                                </tr>
                                <tr>
                                    <th>6</th>
                                    <td>{formatMessage({id: "tr7_td2"})}</td>
                                    <td>{formatMessage({id: "tr7_td3"})}</td>
                                    <td>{formatMessage({id: "tr7_td4"})}</td>
                                    <td align="center">2021-2025</td>
                                    <td align="center">{formatMessage({id: "tr2_td6"})}</td>
                                    <td align="center">150,500,000</td>
                                    <td align="center">{formatMessage({id: "tr2_td8"})}</td>
                                </tr>
                                <tr align="center">
                                    <th colSpan="8">{formatMessage({id: "tr8_th"})}</th>

                                </tr>
                                <tr>
                                    <th>7</th>
                                    <td>{formatMessage({id: "tr8_td2"})}</td>
                                    <td>{formatMessage({id: "tr8_td3"})}</td>
                                    <td>{formatMessage({id: "tr8_td4"})}</td>
                                    <td align="center">2021-2025</td>
                                    <td align="center">{formatMessage({id: "tr2_td6"})}</td>
                                    <td align="center">200,000,000</td>
                                    <td align="center">{formatMessage({id: "tr2_td8"})}</td>
                                </tr>
                                <tr align="center">
                                    <th colSpan="8">{formatMessage({id: "tr9_th"})}</th>

                                </tr>
                                <tr>
                                    <th>8</th>
                                    <td>{formatMessage({id: "tr9_td2"})}</td>
                                    <td>{formatMessage({id: "tr9_td3"})}</td>
                                    <td>{formatMessage({id: "tr9_td4"})}</td>
                                    <td align="center">2021-2025</td>
                                    <td align="center">{formatMessage({id: "tr2_td6"})}</td>
                                    <td align="center">25,120,000</td>
                                    <td align="center">{formatMessage({id: "tr2_td8"})}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
