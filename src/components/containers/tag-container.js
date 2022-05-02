
import './styles/tag-container-style.css';
import { get_tag_from_url } from '../../Api/get-memes';

const TagContainer = props => {

    const language = props.language;

    const tags = props.tags;

    const addClass = props.addClass;

    return (
        <div className={ "meme-tags " + addClass } >
            {
                tags.map(tag => (
                    <a href={`/${language}/tag?search_query=${get_tag_from_url(tag[1])}`}
                       className="meme-tag"
                    >
                        {tag[0]}
                    </a>
                ))
            }
        </div>
    );
};

export default TagContainer; 