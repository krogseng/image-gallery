import React, { Component } from 'react';

let image = {
    title: 'Cute Bunny',
    description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
    url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
};

const GALLERY_TYPE = 'gallery';
const THUMBNAIL_TYPE = 'thumbnail';
const LISTIMAGE_TYPE = 'listImage';

// not real sure how the outputs works, but it does
function ImageView(props) {
    const outputs = {
        [GALLERY_TYPE]: Gallery,
        [THUMBNAIL_TYPE]: Thumbnail,
        [LISTIMAGE_TYPE]: ListImage
    }

    const ComponentToRender = outputs[props.viewSelected];

    return (
        <div>          
            {ComponentToRender
                ? <ComponentToRender image={image} />
                : 'Click a button to view images'
            }
        </div>
    );
}



function ListImage(props) {
    return (
        <div>
            <h2>Available Images</h2>
            <ul>
                <li>Title: {props.image.title}</li>
                <li><a href={props.image.url}>Link to Image </a></li>
                <li>Description: {props.image.description}</li>
            </ul>
        </div>
    );
}

function Thumbnail(props) {
    return (
        <div>
            <img alt={props.image.title} src={props.image.url} height='100px' width='100px' />
            <h4>{props.image.title}</h4>
        </div>
    );
}

function Gallery(props) {
    return (
        <div>
            <img alt={props.image.title} src={props.image.url} />
        </div>
    );
}

function ViewSelect(props) {
    return (
        <div>
            <button onClick={() => props.handleClick(LISTIMAGE_TYPE)}>  List Images</button>
            <button onClick={() => props.handleClick(THUMBNAIL_TYPE)}> Thumbnail View</button>
            <button onClick={() => props.handleClick(GALLERY_TYPE)}> Gallery View</button>
        </div>
    );
};

export default class GalleryApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewSelected: 'listImage'

        }
        this.handleClick = this.handleClick.bind(this);


    }// end constructor

    handleClick(value) {
        this.setState({ viewSelected: value })
    }


    render() {
        return (
            <div>
                <ViewSelect handleClick={this.handleClick} />
                <ImageView viewSelected={this.state.viewSelected} classname='viewer' />
            </div>
        );
    }
};
