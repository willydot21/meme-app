
import './styles/meme-item.css';
import AppImage from '../media/app-image';
import AppVideo from '../media/app-video';
import TagContainer from '../containers/tag-container';

const MemeItem = props => {

    const {
        media,
        tags
    } = props.meme_content;

    const language = props.language;

    const isVideo = typeof media === 'object';
    
    const render_item = () => {
        
        if( isVideo ) {

            return(
                <AppVideo>
                    <source 
                        type="video/mp4"
                        src={ media[ 'video/mp4' ] }
                    />
                    <source
                        type="video/webm"
                        src={ media[ 'video/webm' ] }
                    />
                </AppVideo>
            );

        } 
        
        return (
            <AppImage src={ media } />
        );

    }

    return(
        <div className="meme-item">
            <div className="media-container">
                { render_item() }
            </div>

            <div className="center-div" >
                <TagContainer 
                    language={ language }
                    tags={ tags }
                />
            </div>
        </div>
    );

}

export default MemeItem;