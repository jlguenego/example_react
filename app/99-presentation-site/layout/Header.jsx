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

const MenuDesktop = () => <Menu />;
const MenuMobile = () => <Menu isMobile={true} />;

const Menu = (props) => {
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

    if (props.isMobile) {
        style.menu = {
            color: 'blue',
        };
    }

    return (<menu style={style.menu}>
        <NavLink style={style.menuItem} to="/" exact className="menu-item">Home</NavLink>
        <NavLink style={style.menuItem} to="/examples" className="menu-item">Examples</NavLink>
        <NavLink style={style.menuItem} to="/services" className="menu-item">Services</NavLink>
        <NavLink style={style.menuItem} to="/contact" className="menu-item">Contact</NavLink>
    </menu>);
}



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
                {this.state.isMenuOpen ? <MenuMobile /> : null}
            </React.Fragment>
        );
    }
}



export default Header;