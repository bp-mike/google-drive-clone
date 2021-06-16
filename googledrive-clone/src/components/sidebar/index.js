import React from 'react'
import NewFile from './NewFile'
import SidebarItem from './sidebarItem'
import '../../styles/sidebar.css'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import PeopleIcon from '@material-ui/icons/People';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import StorageIcon from '@material-ui/icons/Storage';

const index = () => {
    return (
        <div className='sideBar'>
            <NewFile />
            <div className='sideBar__itemsContainer'>
                <SidebarItem arrow icon={(<InsertDriveFileIcon />)} label={'My Drive'}/>
                <SidebarItem arrow icon={(<ImportantDevicesIcon />)} label={'Computers'}/>
                <SidebarItem icon={(<PeopleIcon />)} label={'Shares with me'}/>
                <SidebarItem icon={(<QueryBuilderIcon />)} label={'Recent'}/>
                <SidebarItem icon={(<StarBorderIcon />)} label={'Starred'}/>
                <SidebarItem icon={(<DeleteOutlineIcon />)} label={'Bin'}/>
                <hr />
                <SidebarItem icon={(<StorageIcon />)} label={'Bin'}/>

            </div>
        </div>
    )
}

export default index