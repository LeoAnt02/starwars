import React from 'react'

const Planets = ({ data, setIsOpen, setSingleItemData }) => {

    const handleItemClick = (item) => {
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
                            <p>Climate - <strong>{item.climate}</strong></p>
                            <p>Diameter - <strong>{item.diameter}</strong></p>
                            <p>Gravity - <strong>{item.gravity}</strong></p>
                            <p>Terrain - <strong>{item.terrain}</strong></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Planets