import React, { useState } from 'react'
import { Card, Typography, CardMedia, Checkbox, GridList, 
    GridListTile, List, ListItemText } from '@material-ui/core'
import ReactAudioPlayer from 'react-audio-player'
import useStyles from './KKMusicChecklistStyles'

const KKMusicChecklist = (data) => {

    const songs = []
    for (const [, value] of Object.entries(data.songs)) {
        songs.push([value.name['name-USen'], value['music_uri'], value['image_uri']])
    }

    const classes = useStyles()
    const [checkedCards, setCheckedCards] = useState([])
    const [isFiltered, setIsFiltered] = useState(true)

    const check = (id) => {
        setCheckedCards(prevList => {
            const index = checkedCards.indexOf(id)
            if (index === -1) {
                return [...prevList, id]
            } else {
                return prevList.filter((_, i) => i !== index)
            }
        })
    }

    return (
        <div className={classes.bodyDiv}>
            <div className={classes.header}>
                <Typography variant='h3' className={classes.header}>K.K. Slider Music Checklist</Typography>
                <Typography variant='h6' className={classes.header}>Click on an image to add it to the list</Typography>
            </div>
            <div className={classes.midContainer} >
                <div className={classes.leftContainer}>
                    <div style={{ display: 'flex' , justifyContent: 'center', alignItems: 'center' }}>
                        <Typography className={classes.text}>Switch to {isFiltered ? '"Remaining Items" ' : '"Collected Items" '} 
                            view:</Typography><Checkbox onChange={() => setIsFiltered(prevBool => !prevBool)} />
                    </div>
                    <div className={classes.listContainer}>
                        {isFiltered ? 
                        <div>
                            <Typography className={classes.text}>Collected items:</Typography>
                            <List className={classes.ul}>
                                {checkedCards.map(item => {
                                    return (
                                        <ListItemText className={classes.text}>{songs[item][0]}</ListItemText>
                                    )
                                })}
                            </List> 
                        </div> :
                        <div>
                            <Typography className={classes.text}>Remaining items:</Typography>
                            <List className={classes.ul}> 
                                {songs.map((song, i) => {
                                const inList = checkedCards.indexOf(i) === -1
                                return (
                                    <ListItemText className={classes.text}>
                                        {inList ? song[0] : null}
                                    </ListItemText>
                                )
                                })}
                            </List>
                        </div>
                        }
                    </div>
                </div>
                <div className={classes.gridContainer}>
                    <GridList cols={5} spacing={20} className={classes.gridList}>
                        {songs.map((song, i) => {
                            const inList = checkedCards.indexOf(i) !== -1
                            return (
                                <GridListTile cols={1} key={i} className={classes.tile} >
                                    <Card className={inList ? classes.cardChecked : classes.card} id={i} onClick={() => check(i)} >
                                        <Typography variant='h6' className={inList ? classes.titleChecked : classes.title} >
                                            {song[0]}
                                        </Typography>
                                        <CardMedia>
                                            <img src={song[2]} alt='' width='100' height='100' className={inList ? classes.imgChecked : undefined} />
                                        </CardMedia>
                                        <ReactAudioPlayer src={song[1]} controls className={inList ? classes.audioChecked : classes.audio} />
                                    </Card>
                                </GridListTile>
                            )
                        })}
                    </GridList>
                </div>
            </div>
        </div>
    )
}

export default KKMusicChecklist