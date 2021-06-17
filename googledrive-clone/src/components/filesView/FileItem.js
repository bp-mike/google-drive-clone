import React from 'react'
import '../../styles/FileItem.css'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const Fileitem = ({id, caption, timestamp, fileUrl, size}) => {

    const fileDate = `${timestamp?.toDate().getDate()} ${monthNames[timestamp?.toDate().getMonth() + 1]} ${timestamp?.toDate().getFullYear()}`

    const getReadableFileSizeString = (fileSizeInBytes) =>{ //____ stack overflow code to turn bits to readable bytes, kb,mb,bg.....
        let i = -1
        const byteUnits = ['kb','mb','gb','tb','pb','eb','zb','tb'];
        do{
            fileSizeInBytes = fileSizeInBytes / 1024;
            i++;
        } while(fileSizeInBytes > 1024);
        return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i]
    }
    return (
        <div className='fileItem'>
            <a href={fileUrl} target='_blank' download>
                <div className='fileItem--left'>
                    <InsertDriveFileIcon />
                    <p>{caption}</p>
                </div>
                <div className='fileItem--right'>
                    <p>{fileDate}</p>
                    <p>{getReadableFileSizeString(size)}</p>
                </div>
            </a>
        </div>
    )
}

export default Fileitem
