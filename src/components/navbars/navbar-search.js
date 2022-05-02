
import './styles/navbar-search-style.css';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const NavbarSearch = props => {

    const { 
        fetch_content, 
        fetch_content_params
    } = props.fetch_content;

    const NavigateTo = useNavigate();

    const self = useRef( null );

    const language = props.language;

    const onClickFn = () => {

        const query = self.current.value;

        const route_url = `/${ language }/search?search_query=${ query }`;

        NavigateTo( route_url );

        fetch_content( 
            route_url, fetch_content_params 
        );

        document.title = `search "${ query }"`;

    }

    const onKeyPress = event => {

        if ( event.key === 'Enter' ){

            onClickFn();
            
        }

    }

    /*

    var typing_timer;

    const start_countdown = () => {
        clearTimeout( typing_timer );
        typing_timer = setTimeout( search_query, 100 );
    }

    const end_countdown = () => {
        clearTimeout( typing_timer );
    }

    */

    return (
        <>
            <input 
                className="navbar-search"
                placeholder="search"
                ref={ self }
                onKeyPress={ onKeyPress }
            />
            <span 
                className="material-icons"
                onClick={ onClickFn }
            >
                search
            </span>
        </>
    );
};

export default NavbarSearch;