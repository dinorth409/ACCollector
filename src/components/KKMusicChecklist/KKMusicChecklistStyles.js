import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    gridList: {
        width: '80%',
        height: '590px',
        backgroundColor: 'rgb(134, 201, 163)',
        overflow: 'auto',
        borderRadius: '15px',
    },
    bodyDiv: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    midContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '40px'
    },
    tile: {
        height: '40% !important',
        '&:hover': {
            transform: 'scale(1.1)'
        },
    },
    cardChecked: {
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'grey',
    },
    card: {
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'rgb(248, 248, 241)',
    },
    imgChecked: {
        WebkitFilter: 'grayscale(100%)',
        filter: 'grayscale(100%)'
    },
    checkbox: {
        color: '#7986cb'
    },
    checkboxChecked: {
        color: 'rgb(241, 225, 118)'
    },
    audio: {
        width: '100%',
        backgroundColor: 'rgb(232, 245, 236)'
    },
    audioChecked: {
        width: '100%',
        backgroundColor: 'grey',
        color: 'grey',
    },
    title: {
        fontSize: '18px',
        fontFamily: 'Nunito'
    },
    titleChecked: {
        color: 'white',
        textDecoration: 'line-through',
        fontSize: '18px',
        fontFamily: 'Nunito'
    },
    header: {
        color: '#f5bb1d',
        fontFamily: 'Enriqueta',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#946637',
        borderRadius: '15px',
        padding: '0 20px'
    },
    listContainer: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'gray',
        borderRadius: '15px',
        marginLeft: '30px',
    },
    gridContainer: {
        display: 'flex',
        width: '70%',
        justifyContent: 'center'
    },
    ul: {
        listStyleType: 'none',
        color: 'white',
        fontFamily: 'Nunito'
    },
    leftContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '30%',
        fontFamily: 'Nunito'
    },
    text: {
        fontFamily: 'Nunito'
    }
}))

export default useStyles