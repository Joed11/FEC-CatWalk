import exampleAction from '../actions/example.action.js'
import store from '../store/store.js'

const mapDispatchToProps = (dispatch) => {
    return {
        functionName: (element) => {
            dispatch(exampleAction(element))
        }
    }
}

const mapStateToProps = (store) => ({
    elements: store.elementList
})

var exampleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component)

export default exampleContainer;