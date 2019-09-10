import React from 'react';
import s from './Header.module.css';

const  Header = (props) => {
    return (
        <header>
            <img className={s.logo}
                 src="data:image/png;base64,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"/>
            <nav>
                <ul className={s.nav__links}>
                    <li><a href="/home"> Home</a></li>
                    <li><a href="/news feed">News Feed</a></li>
                    <li><a href="/settings">Settings</a></li>
                </ul>
            </nav>
            <div className={s.header__input}>
                <input type="text" placeholder="Search.." name="search"/>
                <button type="submit"><i className="fa fa-search"></i></button>
            </div>
            <a href="#">
                <button>Sign in</button>
            </a>
        </header>

    );
}

export default Header;