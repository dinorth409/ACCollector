import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    loading: {
        display: 'flex', 
        height: '80vh', 
        fontFamily: 'Nunito', 
        justifyContent: 'center', 
        alignItems: 'center'
    }
}))

export default useStyles