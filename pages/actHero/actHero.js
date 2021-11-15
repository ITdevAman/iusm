import {normativeActs} from "../../constants/normativeActs";
import ActItem from "../../components/actItem";
import {useIntl} from "react-intl";


export default function actHero (){
    const {formatMessage} = useIntl();
    return (
        <>
            <div className="actHero">
                <div className="container">
                    <div className="act_container">
                        <div className="act_container_block">
                            <h1>{formatMessage({id : "header5"})}</h1>
                        </div>
                        <div className="act_container_box">
                            {normativeActs.map((elem, i) => (
                                <ActItem item={elem} index={i + 1} key={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
