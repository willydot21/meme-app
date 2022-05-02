
import './menu-wrapper-style.css';
import SectionsMenu from "./sections-menu";
import { OffCanvasMenu } from "./offcanvas-menu";
import { useState, useEffect } from "react"

const MenuWrapper = props => {

    const [ menu, set_menu ] = useState();

    const offcanvasButton= props.offcanvasButton;

    const menu_options_ = {
        'offcanvas-menu': <OffCanvasMenu language={ props.language } icons={ props.icons }/>,
        'sections-menu': <SectionsMenu language={ props.language } icons={ props.icons }/>
    }

    const Change_menu = () => {

        const suitable_menu = (
            window.innerWidth < 950? 
            'offcanvas-menu'
            :
            'sections-menu'
        );
    
        const menu_button = offcanvasButton.current.firstChild;
        
        if ( suitable_menu !== menu ) {
            set_menu( suitable_menu ); 
            // offcanvas menu which is activated by navbar button. 
    
            menu_button.style.display = (
                suitable_menu === 'offcanvas-menu'? 
                'block'
                :
                'none'
            );
    
        }
    
    }

    useEffect( Change_menu , [] );

    window.onresize = Change_menu;

    return (
        <div className={'menu-' + menu}>
            {menu_options_[menu]}
        </div>
    );

}

export default MenuWrapper;