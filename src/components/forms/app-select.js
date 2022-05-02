
import './app-select-style.css';
import { useRef, useState } from 'react';

const AppSelect = props => {

    const options_ref = useRef(null);

    const [ active , setActive ] = useState(false);

    const pushClass = () => {

        const child_nodes = options_ref.current.childNodes;

        child_nodes.forEach( child_node => {

            const child_classes = child_node.classList;

            const isActive = child_classes.contains( 'select-animate' );

            if( isActive ){
                child_classes.remove( 'select-animate' );
            } else {
                child_classes.add( 'select-animate' );
            }
            
        });
        
        setActive( active? false:true );
    }

    return (
        <div className="app-select">
            <div onClick={ pushClass }
                className="select-activator"
            >
                <p> { props.name } </p>
                <span className="material-icons">
                    { 
                        (
                            active?
                                'keyboard_arrow_down'
                                :
                                'keyboard_arrow_right'
                        )
                    }
                </span>
            </div>

            <div className="app-select-options" ref={ options_ref }>
                { props.children }
            </div>
        </div>
    );
};


export default AppSelect;