import React from 'react'

const Tabs = ({ tabIndex, setTabIndex, setIsOpen, setPage }) => {

    const changeTab = (tabIndex) => {
        setPage({ type: "", number: 1 })
        setIsOpen(false)
        setTabIndex(tabIndex)
    }

    const checkTabIndex = (index) => {
        if (tabIndex === index) {
            return { color: "green", borderBottom: "1px solid green" }
        } else {
            return null
        }
    }

    return (
        <div className="tabs">
            <div onClick={() => changeTab(1)} className="tab">
                <p style={checkTabIndex(1)}>Spaceships</p>
            </div>
            <div onClick={() => changeTab(2)} className="tab">
                <p style={checkTabIndex(2)}>Planets</p>
            </div>
            <div onClick={() => changeTab(3)} className="tab">
                <p style={checkTabIndex(3)}>Films</p>
            </div>
        </div>
    )
}

export default Tabs