import React, { Fragment } from 'react'

const PlanetContent = ({ data }) => {

    return (
        <Fragment>
            <div className="list-card-content single-item">
                <h3>{data?.name}</h3>
                <p>Climate - <strong>{data?.climate}</strong></p>
                <p>Diameter - <strong>{data?.diameter}</strong></p>
                <p>Gravity - <strong>{data?.gravity}</strong></p>
                <p>Terrain - <strong>{data?.terrain}</strong></p>
            </div>
        </Fragment>
    )
}

export default PlanetContent