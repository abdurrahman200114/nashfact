import { useEffect, useState } from 'react';
import BackToTop from '../elements/BackToTop';
import Breadcrumb from './Breadcrumb';
import Footer2 from './Footer/Footer2';
import Header1 from './Header/Header1';
import PageHead from './PageHead';

const Layout = ({ children, breadcrumbCategory, breadcrumbPostTitle, footerClass, headTitle }) => {
    const handleMobileMenuOpen = () => {
        document.body.classList.add("mobile-menu-visible");
    };

    const handleMobileMenuClose = () => {
        document.body.classList.remove("mobile-menu-visible");
    };

    const handleSidebarOpen = () => {
        document.body.classList.add("offCanvas__menu-visible");
    };

    const handleSidebarClose = () => {
        document.body.classList.remove("offCanvas__menu-visible");
    };

    // Language Toggle
    // const [langToggle, setLangToggle] = useState(false);
    // const handleLangToggle = () => setLangToggle(!langToggle);

    // Scroll State
    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        };
        document.addEventListener("scroll", handleScroll);
        return () => document.removeEventListener("scroll", handleScroll);
    }, [scroll]);

    return (
        <>
            {/* Page Head */}
            <PageHead headTitle={headTitle} />

            {/* Header */}
            <Header1
                handleMobileMenuOpen={handleMobileMenuOpen}
                handleMobileMenuClose={handleMobileMenuClose}
                scroll={scroll}
                // langToggle={langToggle}
                // handleLangToggle={handleLangToggle}
                handleSidebarOpen={handleSidebarOpen}
                handleSidebarClose={handleSidebarClose}
            />

            {/* Main Content */}
            <main className="main">
                {breadcrumbCategory && (
                    <Breadcrumb
                        breadcrumbCategory={breadcrumbCategory}
                        breadcrumbPostTitle={breadcrumbPostTitle}
                    />
                )}
                {children}
            </main>

            {/* Footer */}
            <Footer2 footerClass={footerClass} />

            {/* Back to Top */}
            <BackToTop />
        </>
    );
};

export default Layout;
