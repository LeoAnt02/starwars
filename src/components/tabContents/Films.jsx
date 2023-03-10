import moment from 'moment'
import React from 'react'

const Films = ({ data, setIsOpen, setSingleItemData }) => {

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
                            <h3>{item?.title}</h3>
                            <p>Created - <strong>{moment(item.created).format("MM-DD-YYYY")}</strong></p>
                            <p>Director - <strong>{item?.director}</strong></p>
                            <p>Producer - <strong>{item?.producer}</strong></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Films