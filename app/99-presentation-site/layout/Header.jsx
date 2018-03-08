import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = (props) => {

    return (
        <header>
            <div className="site-id">
                <Link to="/" className="menu-item">
                    <span className="helper"></span>
                    <img className="logo" src="./img/logo.png" />
                </Link>
            </div>
            {props.isMobile ? <Hamburger /> : <MenuDesktop />}
        </header>
    );
};

const MenuDesktop = () => {
    const style = {
        menu: {
            float: 'right',
            height: '100%',
        },
        menuItem: {
            display: 'inline-block',
            lineHeight: '4rem',
            height: '100%',
            padding: '0 1.5em',
        }

    };

    const cssClass = {
        menuItem: 'menu-item hoverable',
    };

    return (<menu style={style.menu}>
        <NavLink style={style.menuItem} to="/" exact className={cssClass.menuItem}>Home</NavLink>
        <NavLink style={style.menuItem} to="/examples" className={cssClass.menuItem}>Examples</NavLink>
        <NavLink style={style.menuItem} to="/services" className={cssClass.menuItem}>Services</NavLink>
        <NavLink style={style.menuItem} to="/contact" className={cssClass.menuItem}>Contact</NavLink>
    </menu>);
};

const MenuMobile = (props) => {
    const style = {
        menu: {
            display: 'block',
            position: 'absolute',
            zIndex: 1,
            top: '4rem',
            height: 'auto',
            width: '100%',
        },
        menuItem: {
            display: 'block',
            width: '100%',
            textAlign: 'center',
            // backgroundColor: 'white',
        }

    };

    const cssClass = {
        menuItem: 'menu-item hoverable mobile',
    };

    
    return (<menu style={style.menu} onClick={props.handleClick}>
        <NavLink style={style.menuItem} to="/" exact className={cssClass.menuItem}>Home</NavLink>
        <NavLink style={style.menuItem} to="/examples" className={cssClass.menuItem}>Examples</NavLink>
        <NavLink style={style.menuItem} to="/services" className={cssClass.menuItem}>Services</NavLink>
        <NavLink style={style.menuItem} to="/contact" className={cssClass.menuItem}>Contact</NavLink>
    </menu>);
};



class Hamburger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false
        };
    }

    onClick() {
        this.setState((prevState) => {
            return {
                isMenuOpen: !prevState.isMenuOpen
            };
        });
    }

    render() {
        const style = {
            float: 'right',
            fontSize: '2em',
            padding: '0.5em',
            cursor: 'pointer',
        };

        return (
            <React.Fragment>
                <i style={style} onClick={this.onClick.bind(this)} className="fa fa-bars"></i>
                {this.state.isMenuOpen ? <MenuMobile handleClick={this.onClick.bind(this)}/> : null}
            </React.Fragment>
        );
    }
}



export default Header;