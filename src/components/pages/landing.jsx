import React from 'react'
import SpaceShips from '../tabContents/SpaceShips'
import Planets from '../tabContents/Planets'
import Films from '../tabContents/Films'
import { ClipLoader } from 'react-spinners'

const LandingPage = ({ tabIndex, data, setIsOpen, setSingleItemData, setPilotData, localLoading }) => {
    return (
        localLoading ?
            <div className="loading">
                <ClipLoader color="#000" size={50} />
                <p style={{ color: "#000" }}>Loading Data</p>
            </div>
            :
            tabIndex === 1 ?
                <SpaceShips tabIndex={tabIndex} data={data} setIsOpen={setIsOpen} setSingleItemData={setSingleItemData} setPilotData={setPilotData} />
                :
                tabIndex === 2 ?
                    <Planets tabIndex={tabIndex} data={data} setIsOpen={setIsOpen} setSingleItemData={setSingleItemData} />
                    : <Films tabIndex={tabIndex} data={data} setIsOpen={setIsOpen} setSingleItemData={setSingleItemData} />
    )
}

export default LandingPage