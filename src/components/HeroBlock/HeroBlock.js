import React from 'react';
import './HeroBlock.scss';

const HeroBlock = ({ bgImg, title, links, logos }) => {
 const LogosImages = logos.map((logoitem, i) => <img src={logoitem} alt="partner-logo" className="hero-partners-item" key={i}/>);
const navItem = links.map((link, i) => <a href={link.href} className="hero-navigation-item"
key={i}>{link.title}</a>);
    // const bgCSS = {
    //     background: `url(${bgImg})`
    // };

    return (

        // <section className="conteiner" style={bgCSS}>
        //         <div className="hero">
        
        <section className="hero" 
        // style={bgCSS}
        >
                <div className="container">
                    <div className="hero-partners">
                        {LogosImages}
                    </div>
                    <nav className="hero-navigation">
                        {navItem}
                    </nav>
                    <h1 className="hero-title">{title}</h1>
                    <a href="#assets" className="hero-link">Отследить</a>
                </div>
            
            </section>    
               
        
    );
}

export default HeroBlock;
