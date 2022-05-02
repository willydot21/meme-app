
import './styles/sticky-navbar.css';
import { MenuActivator } from '../menus/offcanvas-menu';
import NavbarSearch from './navbar-search';

const StickyNavbar = props => {

    const fetch_content = props.fetch_content;

    const ref = props.this_ref;

    const icons = props.icons;

    const language = props.language;

    const icon = icons.filter( el => el[0] === language )[0][1];

    return(
        <nav className='sticky-navbar' ref={ ref }>

            <MenuActivator />

            <div className="navbar-separator" > 
                <NavbarSearch 
                    fetch_content={ fetch_content }
                    language={ language }
                />
            </div>

            <img src={ icon } />
            
        </nav>
    );

}

export default StickyNavbar;