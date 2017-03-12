import React from 'react'

function Gallery(props) {
    return (
        <img alt={props.image.title} src={props.image.url} />
    );
}

export default function GalleryView(props) {
    return (
        <div className={'mainContent'}>
            {props.images.map(image => (
                <li key={image.id}>
                    <Gallery image={image} />
                </li>
            ))}
        </div>
    );
}