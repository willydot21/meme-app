
import './styles/tag-wrapper-style.css';
import TagContainer from "./tag-container";
import { FetchApi } from "../../Api/get-memes";
import { useState, useEffect } from "react";

const TagWrapper = props => {

    const [ content, setContent ] = useState({ tags:[] });

    const language = props.language;

    const query = props.section_query;

    const url_route = `/${ language }/search_tag?search_query=${ query }`;

    const fetch_content = async() => {

        const tags = await FetchApi( url_route );

        setContent( tags );
        
    }

    useEffect( fetch_content, [] );

    const TagWrapper = () => (
        <div className="tag-wrapper">
            <h5>
                More tags
            </h5>
            <TagContainer
                tags={content.tags}
                language={language}
            />
        </div>
    );

    return (
        <>
        {

            content.tags.length>0?
                <TagWrapper />
                :
                null

        }
        </>
    );

}

export default TagWrapper;