import {useIntl} from "react-intl";


const ActItem =({item , index}) =>{
    const {formatMessage} = useIntl();
    return(

        <a href={item.link}><span>{index}.</span>{formatMessage({id: item.intlId})}</a>

    )
}
export default ActItem