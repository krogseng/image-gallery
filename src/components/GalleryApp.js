import React, { Component } from 'react';
import views from './viewTypes';
import ImageView from './ImageView';

let image = {
    title: 'Cute Bunny',
    description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
    url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
};



function ViewSelect(props) {
    return (
        <div>
            {views.types.map(type => (
                <button
                    key={type.key}
                    onClick={() => props.handleClick(type.key)}
                >
                    {type.label}
                </button>
            ))}
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
                <ImageView viewSelected={this.state.viewSelected} classname='viewer' image={image} />
            </div>
        );
    }
};
