import ImageSlider from "../components/ImageSlider";
import Viewrs from "../components/Viewrs";
import "../styles/pages/home.scss";
export default function Home(){
    return <main className="container">
        <ImageSlider />
        <Viewrs />
    </main>
}
