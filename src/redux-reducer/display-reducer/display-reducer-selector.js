import {createSelector} from 'reselect';
import rootStateReducer from '../../redux-reducer/root-reducer-selector';

class DisplayReducerSelector {
    getPopoverAnchorElement = createSelector(
        rootStateReducer.getDisplayReducer,
        (displayReducer) => displayReducer.popoverAnchorElement
    )
}

const displayReducerSelector = new DisplayReducerSelector();
export default displayReducerSelector;