import React from 'react'
import{ MenuItems } from './MenuItems'
import './Navbar.css'
import{Button} from '../Button'
// import logo from './img/logo.png'


class Navbar extends React.Component {
    // statr off being off
    state={clicked:false}

    // set the function to the oppsite
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }


    render () {
        return(
            <nav className="NavbarItems">
                <h1 className='logo'>Hello<i className='fab fa-react'></i></h1>
                {/* <h1 className='logo'>
                    <img src={logo}/></h1> */}
                <div className="menu-icon" onClick={this.handleClick}>

                    {/* when click 'times' will appear, if not bar is the default */}
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                {/* if you click on it it'll be active if not i'll be just a reg menu */}
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {/* item.title is list of item from menu item  */}
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button>Resume</Button>
            </nav>
        )
    }
}

export default Navbar