import React from 'react';

function Thumbnail(props) {
    return (
        <div>
            <img alt={props.image.title} src={props.image.url} height='100px' width='100px' />
            <h4>{props.image.title}</h4>
        </div>
    );
}

export default function ThumbnailView(props) {

    return (
        <ol>
            {props.images.map(image => (
                <li key={image.id}>
                    <Thumbnail image={image} />
                </li>
            ))}

        </ol>

    );

}