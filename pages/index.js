import HomeLayout from "../components/HomeLayout";
import Hero from './index_ladding/indexHero';
import Card from './index_ladding/indexCard'


export default function Home() {

    return (
        <HomeLayout>
            <Hero/>
            <Card/>
        </HomeLayout>
    )
}

