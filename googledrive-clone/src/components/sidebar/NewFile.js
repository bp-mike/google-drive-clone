import React, {useState} from 'react'
import '../../styles/NewFile.css'
import AddIcon from '@material-ui/icons/Add';

import firebase from 'firebase'
import {storage, db} from '../../firebase'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle(){
    return {
        top:`50%`,
        left:`50%`,
        transform:`translate(-50%, -50%)`
    }
}

const useStyles = makeStyles((theme) =>({
    paper:{
        position: 'absolute',
        width:400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3)
    }
}))

const NewFile = () => {

    const classes = useStyles()

    const [modalStyle] = useState(getModalStyle)
    const [open, setOpen] = useState(false)
    const [file, setFile] = useState(null)
    const [uploading, setUploading] = useState(false)

    const handleOpen = ()=>{
        setOpen(true)
    }
    const handleClose = ()=>{
        setOpen(false)
    }
    const handleChange = (e)=>{
        if(e.target.files[0]){
            setFile(e.target.files[0])
        }
    }
    const handleUpload = ()=>{
        setUploading(true)

        storage.ref('files/${file.name}').put(file).then(snapshot =>{
            console.log(snapshot);
            storage.ref('file').child(file.name).getDownloadURL().then(url=>{
                db.collection('myfiles').add({
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    caption:file.name,
                    fileUrl:url,
                    size:snapshot._delegate.bytesTransferred
                })
                setUploading(false)
                setOpen(false)
                setFile(null)
            })
        })
    }

    return (
        <div className='newFile'>
            <div className='newFile__container' onClick={handleOpen}>
                <AddIcon />
                <p>New</p>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.paper} style={modalStyle}>
                    <p>Select files you want to upload</p>
                    {
                        uploading ? (<p>uploading ..</p>):(<>
                                <input type='file' onChange={handleChange} />
                                <button onClick={handleUpload}>upload</button>
                            </>
                        )
                    }
                </div>
            </Modal>
        </div>
    )
}

export default NewFile