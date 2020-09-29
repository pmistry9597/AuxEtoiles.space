import wrapperStyle from '../../components/leftbar/leftbar.module.css'

export default function Leftbar({children, color, nobar, padding, top}) {
    const leftbarStyle = {
        borderStyle: 'solid',
        borderWidth: '2em',
        borderColor: 'brown',
        width: '1em',
        marginRight: '2em',
        paddingBottom: '3em',
        display: 'inline-block',
        position: 'relative',
        top: '2em'
    }
    if (typeof(color) == 'string') {
        leftbarStyle.borderColor = color;
    }
    if (typeof(padding) == 'string') {
        leftbarStyle.paddingBottom = padding;
    }
    const wrapAdded = {

    };
    if (typeof(top) == 'string') {
        wrapAdded.marginTop = top;
    }

    return (
    <div className={wrapperStyle.wrapper} style={top ? wrapAdded : null}>
        {
            nobar ? null : (<div style={leftbarStyle}></div>)
        }
        <div style={{display: 'inline-block', width: '85%'}}>
        {
            children
        }
        </div>
    </div>
    );
}