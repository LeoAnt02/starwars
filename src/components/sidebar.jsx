import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { ClipLoader } from 'react-spinners'
import FilmsContent from './sidebarContent/FilmsContent'
import PilotContent from './sidebarContent/PilotContent'
import PlanetContent from './sidebarContent/PlanetContent'
import SpaceshipContent from './sidebarContent/SpaceshipContent'

const Sidebar = ({ isOpen, data, setIsOpen, setSingleItemData, pilotData, setPilotData, tabIndex }) => {
    const [loading, setLoading] = useState(false)
    const [pilots, setPilots] = useState([])

    const close = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        setPilots([])
        retrievePilots()
    }, [data])

    const retrievePilots = () => {
        setLoading(true)
        setPilots([])
        data?.pilots?.map(async (x) => {
            const response = await axios.get(x)
            let arr = pilots
            arr.push(response.data)
            setPilots(arr)
        })

        setLoading(false)
    }

    const retrievePilotData = async (url) => {
        setPilotData(true)
        setLoading(true)
        const response = await axios.get(url)
        console.log(response, "pilot")
        setSingleItemData(response.data)
        setLoading(false)
    }

    return (
        <div className="sidebar" style={{ right: isOpen ? 0 : "-5000px" }}>
            {loading ?
                <div className="loading">
                    <ClipLoader color="#000" size={50} />
                    <p style={{ color: "#000" }}>Loading Data</p>
                </div>
                :
                <Fragment>
                    <div onClick={close} className="close cursor-pointer">
                        <FaTimes size={30} color="#000" />
                    </div>
                    {tabIndex === 1 ?
                        pilotData ?
                            <PilotContent data={data} />
                            :
                            <SpaceshipContent data={data} pilots={pilots} retrievePilotData={retrievePilotData} />

                        : tabIndex === 2 ?
                            <PlanetContent data={data} />
                            :
                           <FilmsContent data={data} />
                    }
                </Fragment>
            }
        </div>
    )
}

export default Sidebar