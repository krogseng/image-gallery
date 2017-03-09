import React from 'react';
import views from './viewTypes';

// not real sure how the outputs works, but it does
export default function ImageView(props) {
    const ViewComponent = views[props.viewSelected];

    return (
        <div>
            {ViewComponent
                ? <ViewComponent images={props.images} />
                : 'Click a button to view images'
            }
        </div>
    );
}

