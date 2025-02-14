import React from 'react';
import './menu-item.styles.css';


const MenuItem = ( {title, imageUrl, size, history, linkUrl, match }) => {
    return (
        <div className={`${size} menu-item`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
            >
            <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
          >
            <div className='content-1'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>ORDER NOW</span>

            </div>
          </div>

        </div>
    );
}

export default MenuItem;