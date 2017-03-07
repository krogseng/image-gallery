import React, { Component } from 'react';

let galleryImages = [{
    title: 'Cute Bunny',
    description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
    url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
}];

function ImageView(props) {
    if (props.viewSelected === 'listImage') {
        return (<ListImage />)
    } else if (props.viewSelected === 'thumbnail') {
        return (<Thumbnail />)
    } else if (props.viewSelected === 'gallery') {
        return (<Gallery galleryImages={galleryImages} />)
    }
}

function ListImage() {
    return (
        <ul>
            <li>Image information goes here</li>
            <li>Maybe the description goes here</li>
            <li>and the image url would go around here</li>
        </ul>

    );
}

function Thumbnail() {
    return (
        <p>
            <img alt="this is the cutest bunny" src='http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg' height='100px' width='100px' />
            <caption>This is the image caption</caption>
        </p>
    );
}

function Gallery(props) {
    const showImage = props.galleryImages.map(image => {
        return (
            <img alt="this is the cutest bunny" src={image.url} />
        )
    })
    return (
        <div>{showImage}</div>
    )
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
        return (
            <img alt="this is the cutest bunny" src='http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg' />
        )
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
