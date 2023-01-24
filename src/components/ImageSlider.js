import "../styles/components/ImageSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-slick';

const ImageSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }
    return <Carousel className="custom-slider" {...settings}>
        <div className="slider-wrap">
            <a href="/">
                <img className="show-backgound" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/70B8C94AA6FEDB21D156CEDBDA3594C6D9ECD9CE2FD24782EF288DBDA8BA49CC/compose?width=1440&aspectRatio=3.91&format=jpeg&label=391_scrim" alt="movie" />
                <div className="show-desc">
                    <img className="show-logo" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4C5F7C51C683F29F4183E765B8CEA6A5FB13FF6E8FF449829E99DA11751F6117/scale?width=800&aspectRatio=1.78&format=png" alt="show-logo" />
                </div>
            </a>
        </div>
        <div className="slider-wrap">
            <a href="/">
                <img className="show-backgound" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/82F362A65558A245C3FAC805A0F849F898072E26F5028C452D3E272BAC0F0599/compose?width=1440&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391_scrim" alt="show-backgound" />
                <div className="show-desc">
                    <img className="show-logo" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/ACEF1BE106C29978B2CE45FE2FCEF9E38F3CAC4C23C4438E9AD7B85E6636207C/scale?width=800&aspectRatio=1.78&format=png" alt="show-logo" />
                </div>
            </a>
        </div>
        <div className="slider-wrap">
            <a href="/">
                <img className="show-backgound" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D5789BF1C6E9F50F77E69A55FFEBE46AFCDA56EBFC860E38107FBA54F6741CA0/compose?width=1440&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391_scrim" alt="movie" />
                <div className="show-desc">
                    <img className="show-logo" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B4BCD1957136B0AB540C1A72C04B3C9248A9F462E1CF8D13BEF2097F30996502/scale?width=800&aspectRatio=1.78&format=png" alt="show-logo" />
                </div>
            </a>
        </div>
    </Carousel>
}

export default ImageSlider;