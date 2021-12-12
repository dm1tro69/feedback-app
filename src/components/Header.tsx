import React, {FC} from 'react';

type HeaderProps = {
    text?: string
}

const Header:FC<HeaderProps> = ({text}) => {
    const headerStyles = {
        backgroundColor: 'rgba(0, 0, 0, 0.4)', color: '#ff6a95'
    }
    return (
        <header style={headerStyles}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    );

};
Header.defaultProps = {
    text: 'Feedback UI'
}

export default Header;
