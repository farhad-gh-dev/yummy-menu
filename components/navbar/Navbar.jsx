import Image from "next/image";

export default function Navbar({logo_img_src}) {
    return (
        <div className="navbar">
            <div className='left-side'>
                <img src={logo_img_src} alt="yummy menu" />
            </div>
            <div className='right-side d-flex align-items-center'>
                <div className="shopping-card">
                    <img src='/design-utils/shop-card.svg' alt="orders basket" />
                </div>
                <div className="dropdown-menu">
                    <button className="button d-flex justify-content-center align-items-center">
                        <div className="bar"></div>
                        <div className="bar middle"></div>
                        <div className="bar"></div>
                    </button>
                </div>
            </div>
        </div>
    )
}
