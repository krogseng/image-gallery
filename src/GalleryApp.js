import React, { Component } from 'react';

let image = {
    title: 'Cute Bunny',
    description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
    url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
};

function ImageView(props) {
    if (props.viewSelected === 'listImage') {
        return (<ListImage image={image} />)
    } else if (props.viewSelected === 'thumbnail') {
        return (<Thumbnail image={image} />)
    } else if (props.viewSelected === 'gallery') {
        return (<Gallery image={image} />)
    }
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
            <img alt={props.image.title} src={props.image.url} />
        </div>
    );
}

function Gallery(props) {
    return (
        <div>
            <img alt="this is the cutest bunny" src={props.image.url} />
        </div>
    );
}

function ViewSelect(props) {
    return (
        <div>
            <button onClick={() => props.onListImage()}>  List Images</button>
            <button onClick={() => props.onThumbnail()}> Thumbnail View</button>
            <button onClick={() => props.onGallery()}> Gallery View</button>
        </div>
    );
};

export default class GalleryApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewChoice: 'listImage'
        }
        this.onListImage = this.onListImage.bind(this);
        this.onThumbnail = this.onThumbnail.bind(this);
        this.onGallery = this.onGallery.bind(this);

    }// end constructor
    onListImage() {
        this.setState({ viewChoice: 'listImage' })
    }
    onThumbnail() {
        this.setState({ viewChoice: 'thumbnail' })
    }
    onGallery() {
        this.setState({ viewChoice: 'gallery' })
    }

    render() {
        return (
            <div>
                <ViewSelect onListImage={this.onListImage}
                    onThumbnail={this.onThumbnail}
                    onGallery={this.onGallery}
                />
                <ImageView viewSelected={this.state.viewChoice} classname='viewer' />
            </div>
        );
    }
};
