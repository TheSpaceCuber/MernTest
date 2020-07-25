import React from 'react';

const FormatText = () => {
    var formattedText = this.props.text.split('**').map((text,key) => {
        return (
            <span key={key}>
                {text}
                <br/>
            </span>
        )
    })
    return <p>{formattedText}</p>
};

export default FormatText;

