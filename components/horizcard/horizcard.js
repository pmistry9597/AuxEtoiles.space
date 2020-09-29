import hcstyle from '../../components/horizcard/hcstyle.module.css';
import Leftbar from '../../components/leftbar/leftbar'

export default function Horizcard({ children, width, leftbar, padding }) {
    const widthStyle = {
        width
    };

    const normalCardStyle = {
        display: 'inline-block',
        margin: 'auto',
        width,
    }
    
    let cardStyle = normalCardStyle;
    if (leftbar) {
        cardStyle = widthStyle;
        cardStyle.position = 'relative';
        cardStyle.top = '-1em'
    }
    return (
        <Leftbar padding={padding} nobar={!leftbar} color={ (typeof(leftbar) == 'string') ? leftbar: null }>
            <div className={hcstyle.card} style={leftbar ? widthStyle : normalCardStyle}>
                { children }
            </div>
        </Leftbar>
    );
}