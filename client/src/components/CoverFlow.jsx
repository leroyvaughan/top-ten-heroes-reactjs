import Radium from 'radium';
import newMod from 'react-coverflow';


delete newMod['handleFigureClick'];

newMod._handleFigureClick = (index, action, e) => {
    console.log("override!!!");

    if (!this.props.clickable) {
        e.preventDefault();
        return;
    }
    if (this.state.current === index) {
        // If on the active figure
        if (typeof action === 'string') {
            // If action is a URL (string), follow the link
            // window.location = action;
            console.log("clicked?");
        }

        this._removePointerEvents();
    } else {
        // Move to the selected figure
        e.preventDefault();
        const { displayQuantityOfSide } = this.props;
        const { width } = this.state;
        const baseWidth = width / (displayQuantityOfSide * 2 + 1);
        const distance = this._center() - index;
        const move = distance * baseWidth;
        this.setState({ current: index, move });
    }
};


export default Radium(newMod)