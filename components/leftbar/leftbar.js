import wrapperStyle from '../../components/leftbar/leftbar.module.css'

export default function Leftbar({children, color, nobar, padding, top}) {
    const leftbarStyle = {
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
            nobar ? null : (<div className='leftbar' style={leftbarStyle}></div>)
        }
        <div style={{display: 'inline-block', width: '90%'}}>
        {
            children
        }
        </div>
        <style jsx>
            {`
            .leftbar {
                border-style: solid;
                border-width: 2em;
                border-color: brown;
                width: 1em;
                margin-right: 2em;
                padding-bottom: 3em;
                display: inline-block;
                position: relative;
                top: 2em;
            }
            @media only screen and (max-width: 1200px) {
                .leftbar {
                  display: none;
                }
              }
            `}
        </style>
    </div>
    );
}