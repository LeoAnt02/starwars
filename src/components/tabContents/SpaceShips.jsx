import React from 'react'

const SpaceShips = ({ data, setIsOpen, setSingleItemData, setPilotData }) => {

    const handleItemClick = (item) => {
        setPilotData(false)
        setSingleItemData(item)
        setIsOpen(true)
    }

    return (
        <div className="flex">
            {data?.results?.map((item, index) => (
                <div onClick={() => handleItemClick(item)} className="list-card spaceship-bg">
                    <div className="list-card-container">
                        <div key={index} className="list-card-content">
                            <h3>{item.name}</h3>
                            <p>Credit Costs - <strong>{item.cost_in_credits}</strong></p>
                            <p>Length - <strong>{item.length}</strong></p>
                            <p>Manufacturer - <strong>{item.manufacturer}</strong></p>
                            <p>Passengers - <strong>{item.passengers}</strong></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SpaceShips