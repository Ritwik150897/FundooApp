import React, { useState } from 'react'
import './TakeNoteTwo.css';
import { grey } from '@mui/material/colors';
import InputBase from '@mui/material/InputBase';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
// import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Button from '@mui/material/Button';
import { postNote } from '../../services/dataService';
import ColorPopper from '../ColorPopper/ColorPopper';

function TakeNoteTwo(props) {

    const [userInput, setUserInput] = useState({ title: '', description: '' , color: '', isArchived: false})

    const openTakeNoteOne = () => {
        props.listenToTakeNoteTwo()
        // console.log(userInput)
        postNote(userInput).then((response) => {
            console.log(response)
            props.autoRefreshing()
        }).catch((error) => console.log(error))
    }

    const takingTitle = (event) => {
        setUserInput(previousState => ({ ...previousState, title: event.target.value }))
    }

    const takingDescription = (event) => {
        setUserInput(previousState => ({ ...previousState, description: event.target.value }))
    }

    const listenToColorPopper = (color) => {
        setUserInput(previousState => ({ ...previousState, color: color }))
    }

    const archiveNote = () => {
        setUserInput(previousState => ({ ...previousState, isArchived: true }))
        console.log('Note Archived')
    }

    return (
        <div>
            <div className="MainContainerTwo" style={{backgroundColor: userInput.color}}>
                <div className="TitleRowTwo">
                    <div className="TitleTextTwo">
                        <InputBase id="filled-search" placeholder="Title" onChange={takingTitle} />
                    </div>
                    <div className="PinIconTwo">
                        <PushPinOutlinedIcon fontSize='medium' sx={{ color: grey[600] }} />
                    </div>
                </div>
                <div className="TakeNoteTextTwo">
                    <InputBase id="filled-search" placeholder="Take a note..." onChange={takingDescription} />
                </div>
                <div className="TakeNoteIconsTwo">
                    <div className="IconsTwo">
                        <AddAlertOutlinedIcon fontSize='small' sx={{ color: grey[800] }} />
                        <PersonAddAltOutlinedIcon fontSize='small' sx={{ color: grey[800] }} />
                        {/* <PaletteOutlinedIcon fontSize='small' sx={{ color: grey[800] }} /> */}
                        <ColorPopper listenToColorPopper = {listenToColorPopper} action = "create"/>
                        <ImageOutlinedIcon fontSize='small' sx={{ color: grey[800] }} />
                        <ArchiveOutlinedIcon fontSize='small' sx={{ color: grey[800] }}  onClick = {archiveNote}/>
                        <MoreVertOutlinedIcon fontSize='small' sx={{ color: grey[800] }} />
                        <UndoOutlinedIcon fontSize='small' sx={{ color: grey[600] }} />
                        <RedoOutlinedIcon fontSize='small' sx={{ color: grey[600] }} />
                    </div>
                    <div className="CloseText">
                        <Button variant="text" onClick={openTakeNoteOne}>close</Button>
                        {/* <span id='close'>Close</span> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TakeNoteTwo
