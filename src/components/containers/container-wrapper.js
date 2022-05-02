
import { useState } from "react";
import { get_url_route, FetchApi } from "../../Api/get-memes";

function AreArrayEquals( arr1, arr2 ) {

    return JSON.stringify( arr1 ) === JSON.stringify( arr2 );

}

const ContainerWrapper = props => {

    const setContent = props.setter;

    const prev_content = props.prev_content;

    const [ loading , setLoading ] = useState( false );

    const [ page , setPage ] = useState( 1 );

    const get_content = async () => {
        
        setLoading( true );

        var route_url = get_url_route(
            props.url_params, props.section_name
        );

        const arg_index = route_url.indexOf( '&page=');
            
        if( arg_index !== -1 ){
            return 0;
        }
        // if page query exists then don't search more.
        // for avoid errors.

        route_url += `&page=${ page+1 }`;

        const fetched_content = await FetchApi( route_url );

        const Repeated = AreArrayEquals( prev_content , fetched_content );

        if ( Repeated ){ return 0; }

        if( fetched_content.length > 0 ){
            setContent( prev => [ ...prev, ...fetched_content ] );
            setPage( page+1 );
        }

        setLoading( false );

    }

    window.onscroll = () => {

        try {

            const _ = document.querySelector('.meme-container').getBoundingClientRect();
            const bottom = _.bottom;

            if( bottom <= 1000 && !loading ) {

                get_content();
    
                console.log( 'loading more items...' );
    
            }

        } catch ( error ) { return }

    }

}

export default ContainerWrapper;