
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { fetch_content } from './fetch-content';
import { get_url_route, FetchApi } from '../Api/get-memes';
import StickyNavbar from '../components/navbars/sticky-navbar';
import CenterContainer from '../components/containers/center-container';
import ContainerWrapper from '../components/containers/container-wrapper';
import MemeContainer from '../components/containers/meme-container';
import MenuWrapper from '../components/menus/menu-wraper';
import LoadingItems from '../components/menus/loading-items';
import NotFound from '../components/others/not-found';
//import TagWrapper from '../components/containers/tag-wrapper';

// icons
import spanish from '../media/es.svg';
import english from '../media/gb.svg';
import italian from '../media/it.svg';
import portuguese from '../media/pt.svg';
import french from '../media/fr.svg';

const icons = [
    [ 'english', english ], 
    [ 'spanish' , spanish ], 
    [ 'portuguese' , portuguese ],
    [ 'french' , french ], 
    [ 'italian' , italian ] 
];
//

const TemplatePage = props => {

    const url_params = useParams();

    const language = url_params.language;

    // these parameters do not always exist.
    const query_params = new URLSearchParams( window.location.search.substring(1) );
    const search_query = query_params.get( 'search_query' ) || '';
    //

    const navbar_ref = useRef( null );

    const [ content , setContent ] = useState([]);

    const [ Container , setContainer ] = useState( 2 );

    const ContainerStates = {
        1:(
            <MemeContainer
                language={language}
                section_query={search_query}
                content={content}
                section_name={props.section_name}
            />
        ),

        2:( <LoadingItems /> ),

        3:( <NotFound /> )
    }

    const fetch_content_params = {
        setContent, 
        setContainer
    }

    const init = async() => {

        const route_url = get_url_route( url_params, props.section_name );

        const title = search_query? `"${ search_query }"`:'';

        document.title = `${ props.section_name } ${ title }`;

        await fetch_content( route_url, fetch_content_params );

    }
    
    useEffect( init, [] );

    return(
        <div id="home-page" >
            <StickyNavbar 
                this_ref={ navbar_ref } 
                language={ language }
                icons={ icons }
                fetch_content={ { 
                    fetch_content, 
                    fetch_content_params
                } }
            />

            <MenuWrapper 
                language={ language }
                offcanvasButton={ navbar_ref }
                icons={ icons }
            />

            <CenterContainer>
                { ContainerStates[ Container ] }
            </CenterContainer>

            <ContainerWrapper 
                section_name={ props.section_name } 
                url_params={ url_params }
                setter={ setContent }
                prev_content={ content }
            />
        </div>
    );  

}

export default TemplatePage;