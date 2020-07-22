import React, { useState, useEffect } from 'react';
import { useWindowScroll } from 'react-use';

const ScrollToTop = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisibility] = useState(false);

    useEffect(() => {
        if(pageYOffset > 100) {
            setVisibility(true);
        } else {
            setVisibility(false);
        }
    }, [pageYOffset]);

    if (!visible) {
        return false;
    }

    const scrollToTop = () => window.scrollTo({top: 0, behavior: 'smooth'})

    return (
        <div>
            <a className="btn-floating btn-large" onClick={scrollToTop}>
                <i className="large material-icons ">keyboard_arrow_up</i>
            </a>
        </div>
    );
};

export default ScrollToTop;