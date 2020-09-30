import hcstyle from '../../components/horizcard/hcstyle.module.css';
import Leftbar from '../../components/leftbar/leftbar'

export default function Horizcard({ children, width, leftbar, padding, top }) {
    const widthStyle = {
        width,
        position: 'relative',
        top
    };

    const normalCardStyle = {
        display: 'block',
        margin: 'auto',
        width: '90%',
        marginTop: '1em',
        marginBottom: '1em',
        position: 'relative',
        top
    }
    
    let cardStyle = normalCardStyle;
    if (leftbar) {
        cardStyle = widthStyle;
        cardStyle.position = 'relative';
        //cardStyle.top = '-1em'
    }
    return (
        <Leftbar padding={padding} nobar={!leftbar} color={ (typeof(leftbar) == 'string') ? leftbar: null }>
            <div className={hcstyle.card} style={leftbar ? widthStyle : normalCardStyle}>
                { children }
            </div>
        </Leftbar>
    );
}