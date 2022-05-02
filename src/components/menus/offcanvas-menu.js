
import './offcanvas-menu-style.css';
import  SectionsMenu from './sections-menu';

const MenuActivator = () => (

    <span className="material-icons"
        data-bs-toggle="offcanvas"
        href="#offcanvas-menu"
        aria-controls="offcanvasExample"
    >
        menu
    </span>
    
);

const OffCanvasMenu = props => (

    <div className="offcanvas offcanvas-start offcanvas-menu" tabindex="-1" id="offcanvas-menu" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel"> Menu </h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <SectionsMenu 
                language={ props.language } 
                icons={ props.icons } 
            />     
        </div>
    </div>

);

export { OffCanvasMenu, MenuActivator };