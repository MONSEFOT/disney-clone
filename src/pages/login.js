import '../styles/pages/login.scss';

export default function Login() {
    return <section className='container'>
        <div className='content'>
            <div className='cta'>
                <img className='cta-logo' src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_3840/v1656431462/web-images/logo-d-plus-horizontal.svg" alt="" />
                <h1 className='cta-sub-price-description'>
                    399.99 DZD per month or 3,998.99 DZD per year
                </h1>
                <button className='cta-sub-button'>
                    <span>Sign Up Now</span>
                    <span>
                        <i className="fa-solid fa-angle-right"></i>
                    </span>
                </button>
            </div>
            <div className='bg-img'></div>
        </div>
    </section>
}
