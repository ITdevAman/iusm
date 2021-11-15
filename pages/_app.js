import '../styles/globals.scss';
import '../styles/index.scss';
import '../styles/index_media.scss';
import '../styles/index_hero.scss';
import '../styles/index_hero_media.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import '../styles/main_hero.scss';
import '../styles/about.scss';
import '../styles/about_media.scss';
import '../styles/act.scss';
import '../styles/act_media.scss';
import '../styles/students.scss';
import '../styles/contact.scss';
import { IntlProvider } from "react-intl";
import {MESSAGES} from "../intl/messages";
import {wrapper} from "../redux/reducer";
import {useSelector} from "react-redux";


// own css files here

function MyApp({Component, pageProps}) {
    const locale = useSelector(state => state.main.locale);
    return (
        <IntlProvider locale={locale} messages={MESSAGES[locale]}>
                <Component {...pageProps} />
        </IntlProvider>
    )
}

export default wrapper.withRedux(MyApp);

