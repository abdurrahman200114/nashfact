import Link from 'next/link'
import Menu from './Menu'
import MobileMenu from './MobileMenu'
import Sidebar from './Sidebar'

const Header1 = ({
    scroll,
    handleMobileMenuOpen,
    handleMobileMenuClose,
    langToggle,
    handleLangToggle,
    handleSidebarClose,
    handleSidebarOpen }) => {
    return (
        <>
            <header>
                <div id="header-fixed-height" className={`${scroll ? "active-height" : ""}`} />
                <div id="sticky-header" className= {`mt-20 tg-header__area ${scroll ? "sticky-menu" : ""}`}>
                    <div className="row">
                        <div className="col-12">
                            <Menu handleMobileMenuOpen={handleMobileMenuOpen} handleSidebarOpen={handleSidebarOpen} offCanvasNav/>
                            <MobileMenu handleMobileMenuClose={handleMobileMenuClose} />
                        </div>
                    </div>
                </div>
                <Sidebar handleSidebarClose={handleSidebarClose} />
            </header>
        </>
    )
}

export default Header1