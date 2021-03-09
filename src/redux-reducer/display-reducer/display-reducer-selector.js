import {createSelector} from 'reselect';
import rootStateReducer from '../../redux-reducer/root-reducer-selector';

class DisplayReducerSelector {
    getPopover = createSelector(
        rootStateReducer.getDisplayReducer,
        (displayReducer) => displayReducer.anchorEl
    )
}

const displayReducerSelector = new DisplayReducerSelector();
export default displayReducerSelector;