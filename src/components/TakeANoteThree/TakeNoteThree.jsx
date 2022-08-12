import React from 'react'
import './TakeNoteThree.css';
import { grey } from '@mui/material/colors';
import InputBase from '@mui/material/InputBase';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
// import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ColorPopper from '../ColorPopper/ColorPopper';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { archiveNotes } from '../../services/dataService';

function TakeNoteThree(props) {
    //console.log(props, 'Props printed')

    const listenToColorUpdate =  () => {
        props.autoRefreshing()
    }

    const updateArchive = (id) => {
        let archiveObj = {noteIdList: [id], isArchived: true}
        archiveNotes(archiveObj).then((response) => {
            console.log(response)
            // props.autoRefreshing()
        }).catch((error) => console.log(error))
    }

    return (
        <div>
            <div className="MainContainerThree" style={{backgroundColor: props.note.color}}>
                {/* <CheckCircleIcon id='Check' fontSize='medium' /> */}
                <div className="TitleRowThree">
                    <div className="TitleTextThree">
                        <InputBase id="filled-search" placeholder={props.note.title} />
                    </div>
                    <div className="PinIconThree">
                        <PushPinOutlinedIcon fontSize='medium' sx={{ color: grey[600] }} />
                    </div>
                </div>
                <div className="TakeNoteTextThree">
                    <InputBase id="filled-search" placeholder={props.note.description} />
                </div>
                <div className="IconsThree">
                    <AddAlertOutlinedIcon fontSize='small' sx={{ color: grey[800] }} />
                    <PersonAddAltOutlinedIcon fontSize='small' sx={{ color: grey[800] }} />
                    {/* <PaletteOutlinedIcon fontSize='small' sx={{ color: grey[800] }} /> */}
                    <ColorPopper id = {props.note.id} action = "update" listenToColorUpdate = {listenToColorUpdate} 
                    // autoRefreshing = {props.autoRefreshing()}
                    />
                    <ImageOutlinedIcon fontSize='small' sx={{ color: grey[800] }} />
                    <ArchiveOutlinedIcon fontSize='small' sx={{ color: grey[800] }} onClick={() =>updateArchive(props.note.id)}/>
                    <MoreVertOutlinedIcon fontSize='small' sx={{ color: grey[800] }} />
                </div>
            </div>
        </div>
    )
}

export default TakeNoteThree
