import React from 'react'
import './TakeNoteOne.css';
import InputBase from '@mui/material/InputBase';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { grey } from '@mui/material/colors';

function TakeNoteOne(props) {

    const openTakeNoteTwo = () =>{
        props.listenToTakeNoteOne()
    }

    return (
        <div onClick={openTakeNoteTwo}>
            <div className="MainContainerOne" >
                <div className="TakeNoteTextOne">
                    <InputBase id="filled-search" placeholder="Take a note..." />
                </div>
                
                <div className="TakeNoteIconsOne">
                    <CheckBoxOutlinedIcon fontSize='medium' sx={{color: grey[600] }}/>
                    <BrushOutlinedIcon fontSize='medium' sx={{color: grey[600] }}/>
                    <ImageOutlinedIcon fontSize='medium' sx={{color: grey[600] }}/>
                </div>
            </div>

        </div>
    )
}

export default TakeNoteOne
