import moment from 'moment'
import React, { Fragment } from 'react'

const FilmsContent = ({ data }) => {

    return (
        <Fragment>
            <div className="list-card-content single-item">
                <h3>{data?.title}</h3>
                <p>Created - <strong>{moment(data?.created).format("YYYY-MM-DD")}</strong></p>
                <p>Director - <strong>{data?.director}</strong></p>
                <p>Producer - <strong>{data?.producer}</strong></p>
                <p>Release Date - <strong>{moment(data?.release_date).format("YYYY-MM-DD")}</strong></p>
            </div>
        </Fragment>
    )
}

export default FilmsContent