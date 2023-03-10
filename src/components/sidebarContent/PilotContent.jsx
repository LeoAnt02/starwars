import React, { Fragment } from 'react'

const PilotContent = ({ data, pilots }) => {

    return (
        <Fragment>
            <div className="list-card-content single-item">
                <h3>{data?.name}</h3>
                <p>Gender - <strong>{data?.gender}</strong></p>
                <p>Birth Year - <strong>{data?.birth_year}</strong></p>
                <p>Eye Color - <strong>{data?.eye_color}</strong></p>
                <p>Height - <strong>{data?.height}</strong></p>
                <p>Skin Color - <strong>{data?.skin_color}</strong></p>
            </div>
        </Fragment>
    )
}

export default PilotContent