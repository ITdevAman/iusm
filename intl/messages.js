import {LOCALES} from "./locales";
import {headerMessages} from "./messages/header";
import {normativeActsMesseages} from "./messages/normativeActs";
import {footerMessages} from "./messages/footer";
import {IndexHeroMessages} from "./messages/indexHero";
import {IndexCard} from "./messages/indexCard";
import {AboutHero} from "./messages/aboutHero";
import {Contact} from "./messages/contact";
import {Students} from "./messages/students";
import {main} from "./messages/main";

export const MESSAGES = {
    [LOCALES.RUSSIAN]:{
       ...headerMessages[LOCALES.RUSSIAN],
        ...normativeActsMesseages[LOCALES.RUSSIAN],
        ...footerMessages[LOCALES.RUSSIAN],
        ...IndexHeroMessages[LOCALES.RUSSIAN],
        ...IndexCard[LOCALES.RUSSIAN],
        ...AboutHero[LOCALES.RUSSIAN],
        ...Contact[LOCALES.RUSSIAN],
        ...Students[LOCALES.RUSSIAN],
        ...main[LOCALES.RUSSIAN],
    },
    [LOCALES.KYRGYZ]:{
        ...headerMessages[LOCALES.KYRGYZ],
        ...normativeActsMesseages[LOCALES.KYRGYZ],
        ...footerMessages[LOCALES.KYRGYZ],
        ...IndexHeroMessages[LOCALES.KYRGYZ],
        ...IndexCard[LOCALES.KYRGYZ],
        ...AboutHero[LOCALES.KYRGYZ],
        ...Contact[LOCALES.KYRGYZ],
        ...Students[LOCALES.KYRGYZ],
        ...main[LOCALES.KYRGYZ],



    },
    [LOCALES.ENGLISH]:{
        ...headerMessages[LOCALES.ENGLISH],
        ...normativeActsMesseages[LOCALES.ENGLISH],
        ...footerMessages[LOCALES.ENGLISH],
        ...IndexHeroMessages[LOCALES.ENGLISH],
        ...IndexCard[LOCALES.ENGLISH],
        ...AboutHero[LOCALES.ENGLISH],
        ...Contact[LOCALES.ENGLISH],
        ...Students[LOCALES.ENGLISH],
        ...main[LOCALES.ENGLISH],



    }
}