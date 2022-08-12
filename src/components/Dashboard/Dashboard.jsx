import React, { useEffect, useState } from 'react'
import './Dashboard.css';
import Header from '../Header/Header'
import TakeNoteOne from '../TakeANoteOne/TakeNoteOne'
import TakeNoteTwo from '../TakeANoteTwo/TakeNoteTwo'
import TakeNoteThree from '../TakeANoteThree/TakeNoteThree'
import { getNotesList } from '../../services/dataService'
import { Drawer } from '@mui/material';
import Drawer1 from '../Drawer/drawer';

function Dashboard() {

    const [toggle, setToggle] = useState(false)
    const [notesList, setNotesList] = useState([])
    const [drawerToggle, setDrawerToggle] = useState(false)

    const listenToTakeNoteOne = () => {
        setToggle(true)
    }

    const listenToTakeNoteTwo = () => {
        setToggle(false)
    }

    const getNote = () => {
        getNotesList().then((response) => {
            console.log(response)
            setNotesList(response.data.data.data)
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        getNote()
    }, [])

    //console.log(notesList, 'printed')

    const autoRefreshing = () => {
        getNote()
    }

    const listenToHeader = () => {
        setDrawerToggle(!drawerToggle)
    }

    return (
        <div className='DashboardMainContainer'>
            <Header listenToHeader = {listenToHeader}/>
            <Drawer1 drawerToggle = {drawerToggle} />
            <div>
                {
                    toggle ? <TakeNoteTwo listenToTakeNoteTwo={listenToTakeNoteTwo} autoRefreshing = {autoRefreshing} /> : <TakeNoteOne listenToTakeNoteOne={listenToTakeNoteOne} />
                }
            </div>
            <div style={{ width: '70vw', height: '50vh', marginTop: '200px', marginLeft: '300px', display: 'flex', flexWrap: 'wrap' }}>
                {
                    notesList.map((note) => (<TakeNoteThree note={note} autoRefreshing = {autoRefreshing} />))
                }
            </div>


            {/* <div className="NotesContainer">
                {
                    notesList.map((note) => (<TakeNoteThree note={note} />))
                }
            </div> */}
        </div>
    )
}

export default Dashboard
