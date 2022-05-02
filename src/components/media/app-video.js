
import './style.css';

const AppVideo = props => (
    <video className="app-media"
        controls
        autoPlay
        muted
    >
        { props.children }
    </video>
)

export default AppVideo; 