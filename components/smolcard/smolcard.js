export default function Smolcard({text, color, tcolor, width, img}) {
    const cardstyle = {
        borderRadius: '0.5em',
        backgroundColor: '#ccddff',
        width: '10em',
        textAlign: 'center',
        display: 'inline-block',
        margin: '1em',
    };
    if (color) {
        cardstyle.backgroundColor = color;
    }
    if (tcolor) {
        cardstyle.color = tcolor;
    }
    if (width) {
        cardstyle.width = width;
    }
    return (
        <div style={cardstyle}>
            <p style={{paddingRight: '1em', paddingLeft: '1em'}}>
                {text}
            </p>
        </div>
    );
}