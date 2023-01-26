import "../styles/components/Viewrs.scss";

const Viewrs = () => {
    return <div className="container">
        <div className="wrap">
            <img src="/images/viewers-disney.png" alt="wraped-img" />
            <video autoPlay muted loop playsInline>
                <source src="/videos/1564674844-disney.mp4" type="video/mp4"/>
            </video>
        </div>
        <div className="wrap">
            <img src="/images/viewers-marvel.png" alt="wraped-img" />
            <video autoPlay muted loop playsInline>
                <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
            </video>
        </div>
        <div className="wrap">
            <img src="/images/viewers-national.png" alt="wraped-img" />
            <video autoPlay muted loop playsInline>
                <source src="/videos/1564676296-national.mp4" type="video/mp4"/>
            </video>
        </div>
        <div className="wrap">
            <img src="/images/viewers-pixar.png" alt="wraped-img" />
            <video autoPlay muted loop playsInline>
                <source src="/videos/1564676714-pixar.mp4" type="video/mp4"/>
            </video>
        </div>
        <div className="wrap">
            <img src="/images/viewers-starwars.png" alt="wraped-img" />
            <video autoPlay muted loop playsInline>
                <source src="/videos/1608229455-starwars.mp4" type="video/mp4"/>
            </video>
        </div>
    </div>
}
export default Viewrs;   