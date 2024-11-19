import dynamic from 'next/dynamic'
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
const ThemeSwitch = dynamic(() => import('@/components/elements/ThemeSwitch'), {
    ssr: false
})

export default function Menu({ handleMobileMenuOpen, handleSidebarOpen, offCanvasNav, logoAlt, white }) {
    const router = useRouter()
    const [searchToggle, setSearchToggle] = useState(false)
    const searchHandle = () => setSearchToggle(!searchToggle)

    const customLogoStyle = {
        marginLeft: '20px'
    };

    return (
        <>
            <div className="tgmenu__wrap">
                <nav className="tgmenu__nav">

                    {logoAlt &&
                        <div className="d-flex gap-4 align-items-center">
                            <div className="offcanvas-toggle" onClick={handleSidebarOpen}>
                                <Link href="#"><i className="flaticon-menu-bar" /></Link>
                            </div>
                            <div className="logo">
                                <Link href="/"><img src={`assets/img/logo/${white ? "w_logo" : "logo"}.png`} alt="Logo" /></Link>
                            </div>
                        </div>
                    }
                    
                    {offCanvasNav &&
                        <div className="offcanvas-toggle" onClick={handleSidebarOpen}>
                            <a href="#"><i className="flaticon-menu-bar" /></a>
                        </div>
                    }
                    <div className="logo d-block" style={customLogoStyle}>
                        <Link href="/" className="logo-dark"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                        <Link href="/" className="logo-light"><img src="/assets/img/logo/w_logo.png" alt="Logo" /></Link>
                    </div>
                    <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                        
                        <ul className="navigation">
                            <li className= {router.pathname == "/" ? "active" : ""}><Link href="/">Home</Link>
                            </li>
                            <li className={router.pathname == "/about" ? "active" : ""}><Link href="/about">About Us</Link>
                            </li>
                            <li className="menu-item-has-children"><Link href="/">Category</Link>
                                <ul className="sub-menu">
                                    <li className={router.pathname == "/lifestyle" ? "active" : ""}><Link href="/lifestyle">Lifestyle</Link></li>
                                    <li className={router.pathname == "/travel" ? "active" : ""}><Link href="/travel">Travel</Link></li>
                                </ul>
                            </li>

                            <li className="menu-item-has-children"><Link href="#">Post Type</Link>
                                <ul className="sub-menu">
                                    <li className={router.pathname == "/blog" ? "active" : ""}><Link href="/blog">Our Blog</Link></li>
                                    <li className={router.pathname == "/blog/1" ? "active" : ""}><Link href="/blog/1">Blog Details</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/nft">NFT</Link></li>
                        </ul>
                    </div>
                    <div className="tgmenu__action">
                        <ul className="list-wrap">
                            <li className="mode-switcher">
                                <ThemeSwitch />
                            </li>
                            <li className="header-search"><Link href="#"><i className={`${searchToggle ? "far fa-search fa-times" : "far fa-search"} `} onClick={searchHandle} /></Link>
                                <div className="header__style-two">
                                    <div className={`header__top-search ${searchToggle ? "d-block" : "d-none"}`}>
                                        <form action="#">
                                            <input type="text" placeholder="Search here..." />
                                        </form>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="mobile-nav-toggler" onClick={handleMobileMenuOpen}><i className="fas fa-bars" /></div>
            </div>
        </>
    )
}
