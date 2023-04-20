import Header from "../components/Header";
import ImageList from "../components/Imagelist";
import Description from "../components/Description";
import Footer from "../components/Footer";
import {usePlaces} from '../react-query'

function Home(){

    const {data, isloading } = usePlaces();
    const places = data || [];

    return(
        <div className="mainLayout">
            <Header 
                classname="layoutHeader"
                title="chichi's home work"
                slogan="keep learning"
                />
            <ImageList className="layoutContent"/>
            <Description/>
            <Footer classname="layoutFooter"/>

        </div>
    );
}

export default Home;