import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import '../../styles/SideIcons.css'

const index = () => {
    return (
        <div className='sideIcons'>
            <div className='sideIcons__top'>
                <img src ='https://i.pinimg.com/originals/6e/09/90/6e099088b3deb805b68d83676af6f067.png' alt='icon calender' />
                <img src ='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Keep_icon_%282015-2020%29.svg/2048px-Google_Keep_icon_%282015-2020%29.svg.png' alt='icon keep' />
                <img src ='https://cdn6.aptoide.com/imgs/0/9/d/09d7059874ac55089ed9bfcc7a287165_icon.png' alt='icon tasks' />
                <img src ='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1200px-Google_Contacts_icon.svg.png' alt='icon contacts' />
            </div>
            <hr />
            <div className='sideIcons__plusIcon'>
                <AddIcon />
            </div>
        </div>
    )
}

export default index
