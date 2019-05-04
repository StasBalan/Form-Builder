import {Component} from 'inferno';
import './style.css';
import { Link } from 'inferno-router';

class Navbar extends Component {

    render() {
        return (
            <div className='nav-bar'>
                {/*<img className='nav-bar__logo' src={logo} alt="" width='109' height='100'/>*/}
                <ul className='menu'>
                    <li className='menu-item'><Link to='/'>Home</Link></li>
                    <li className='menu-item'><Link to='/newForm'>New Form</Link></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;