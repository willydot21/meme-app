
import './styles/meme-container.css';
import MemeItem from '../container-items/meme-item';

const MemeContainer = props => {

    const content = props.content;

    const language = props.language;

    const query = props.section_query;

    const section = props.section_name;

    const toCapitalizeCase = str => str[0].toUpperCase()+str.slice(1);
    
    return (
        <div className="meme-container">

            <h3 className="section-title meme-container-title">
                {toCapitalizeCase(section)} memes
                {
                    query.length > 0 ?
                        <p className="dark-text"> 
                            {`'${toCapitalizeCase(query)}'`} 
                        </p>
                        :
                        null
                }
            </h3>

            {
                content.map(meme => (
                    <MemeItem 
                        meme_content={ meme } 
                        language={ language } 
                    />
                ))
            }

        </div>
    );

}

export default MemeContainer;