
import './sections-menu-style.css';
import AppSelect from '../forms/app-select';
//import { NavLink } from 'react-router-dom';

const SectionsMenu = props => {

    const language = props.language;
    const top = [ 'day', 'week', 'month', 'ever' ];

    const languages = props.icons;

    return (
        <div>
            <div className="menu-section">
                <AppSelect name="Top">
                    {
                        top.map( el => (
                            <a href={`/${ language }/top?search_query=${el}`} 
                                className="app-select-option dark-text"
                            >
                                { el }
                            </a>
                        ) )
                    }
                </AppSelect>
            </div>

            <div className="menu-section">
                <p>
                    Other Memes
                </p>

                <div className="section-menu" >
                    <a href={ `/${ language }/latest` } className="dark-text" >
                        latest
                    </a>

                    <a href={ `/${ language }/random` } className="dark-text" >
                        random
                    </a>
                </div> 
            </div>   

            <div className="menu-section">
                <AppSelect name="Language">
                    {
                        languages.map( el => (
                            <a href={`/${el[0]}`}
                                className="dark-text app-select-option"
                            >
                                <img 
                                    className=""
                                    src={ el[1] }
                                />
                                { el[0] }
                            </a>
                        ) )
                    }
                </AppSelect>
            </div>
        </div>
    );
};

export default SectionsMenu;