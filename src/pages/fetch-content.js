
import { FetchApi } from '../Api/get-memes';

const fetch_content = async( route_url, utils ) => {

    const setContent = utils.setContent;

    const setContainer = utils.setContainer;

    setContainer( 2 );
    
    const get_content = await FetchApi( route_url );

    if( get_content.length > 0 ) {

        setContent( get_content );

        setContainer( 1 )

    } else {

        setContainer( 3 );

    }
    
}

export {
    fetch_content
}