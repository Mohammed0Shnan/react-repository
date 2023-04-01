import React from 'react'
const SocialLinks = () => {
    return (
        <div className='buttons'  data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="900">
            <div className='line1'></div>
            <h6>Socail Links</h6>
            <div className='line2'></div>
            <ul className='navbar-nav'>
                <li className='nav-link'>
                    <a href='#'><span className='icon'><i class="ri-facebook-box-fill"></i></span></a>
                    <span className='icon-text'>Facebook</span>
                </li>
                <li className='nav-link'>
                    <a href='#'><span className='icon'><i class="ri-whatsapp-line"></i></span></a>
                    <span className='icon-text'>Whatsapp</span>
                </li>
                <li className='nav-link'>
                    <a href='#'><span className='icon'><i class="ri-instagram-line"></i></span></a>
                    <span className='icon-text'>Whatsapp</span>
                </li>
                
            </ul>
        </div>
    );
}
export default SocialLinks









