
import MapThumbnails from './MapThumbnails';
import MapGallery from './MapGallery';
import MapDetails from './MapDetails';


const GALLERY_TYPE = 'gallery';
const THUMBNAIL_TYPE = 'thumbnail';
const LISTIMAGE_TYPE = 'listImage';

export default {
    [GALLERY_TYPE]: MapGallery,
    [THUMBNAIL_TYPE]: MapThumbnails,
    [LISTIMAGE_TYPE]: MapDetails,
    types: [
        { key: GALLERY_TYPE, label: 'Gallery View' },
        { key: THUMBNAIL_TYPE, label: 'Thumbnail View' },
        { key: LISTIMAGE_TYPE, label: 'Detail View' },
    ]

};


