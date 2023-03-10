import React, { Fragment } from 'react'

const SpaceshipContent = ({ data, pilots, retrievePilotData }) => {

    return (
        <Fragment>
            <div className="list-card-content single-item">
                <h3>{data?.name}</h3>
                <p>Credit Costs - <strong>{data?.cost_in_credits}</strong></p>
                <p>Length - <strong>{data?.length}</strong></p>
                <p>Manufacturer - <strong>{data?.manufacturer}</strong></p>
                <p>Passengers - <strong>{data?.passengers}</strong></p>
                <p>Passengers - <strong>{data?.passengers}</strong></p>
                {pilots.length && (
                    <p>Pilots:</p>
                )}
                {pilots?.map((pilot) => (
                    <p className='cursor-pointer' onClick={() => retrievePilotData(pilot.url)}><strong>{pilot.name}</strong></p>
                ))}
            </div>
        </Fragment>
    )
}

export default SpaceshipContent