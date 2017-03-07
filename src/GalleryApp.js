import React, { Component, PropTypes } from 'react';

const ListButton = props => {
    return (
        <div>
            <button
                onClick={() => props.onListImage(props.whatGoesHere)}
            >
                List Images
                </button>
        </div>
    );
};

function ImageView(props) {

}

// the buttons live here
function ViewSelect(props) {
    return (
        <div>
            <ListButton onList={props.onList} />
            <button onClick={props.state} > List Images</button>
        </div>
    );
};

class GalleryApp extends Component {
    render() {
        return (
            <div>
                <ViewSelect />
                <ImageView images={this.props.images} />
            </div>
        );
    }
}