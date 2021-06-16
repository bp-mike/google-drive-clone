import React from 'react'

const FilesView = () => {
    return (
        <div className='fileView'>
            <div className='fileView__row'></div>
            <div className='fileView__title'>
                <div className='fileView__titles--left'> <p>Name</p></div>
                <div className='fileView__titles--right'>
                    <p>Last modeified</p>
                    <p>File size</p>
                </div>
            </div>
        </div>
    )
}

export default FilesView
