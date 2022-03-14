import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import gif from '../../Components/159.gif';




const Loading = () => {
    return (
        <div className='col-12 p-3 py-5'>
            {/* <i class=" fa-spinner"></i> */}
            {/* <FontAwesomeIcon icon="fa-solid fa-spinner" /> */}
            <img src={gif} alt="Loading.." />
        </div>
    );
};

export default Loading;