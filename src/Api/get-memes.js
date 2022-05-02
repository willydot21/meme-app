
import axios from 'axios';

async function FetchApi( url ) {

    const get_response = await axios({
        method:'GET',
        baseURL:'https://memedroid-scraper.herokuapp.com/memes',
        url:url
    });

    const response_data = await get_response.data;

    return response_data;

}

function get_tag_from_url( url ){

    const url_length = url.length;

    var tag_index = url.indexOf( 'tag' );

    tag_index += 4;

    return url.slice( tag_index, url_length );
}


function get_query_params( url ) {

    const queries = {};

    var split_queries = url.split('&');

    split_queries.forEach( query => {

        const _ = query.split('=');

        queries[ _[0] ] = _[1];

    });

    return queries;

}

function get_url_route( url_params, route ) {

    // get query params from actual window url
    const url = window.location.search.substring(1);
    const query_params = get_query_params(url);
    //

    // Route params 
    route = route || 'latest';
    const language = url_params.language || 'english';
    const search = query_params.search_query;
    var page = query_params.page;
    page = page? `&page=${page}` : ``;
    //

    // join to route url
    var route_url = `/${language}/${route}?`;
    route_url += (search ? `search_query=${search}` : '') + page;
    //
    
    return route_url;
}

export {
    FetchApi,
    get_tag_from_url,
    get_url_route,
    get_query_params
}