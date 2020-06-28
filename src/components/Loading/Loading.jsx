import React from 'react'
import useStyles from './LoadingStyles'

const Loading = () => {
    const classes = useStyles()

    return (
        <div className={classes.loading}>
          <h2>Loading...</h2>
        </div>
    )
}

export default Loading