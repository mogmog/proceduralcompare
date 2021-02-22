import React from "react";
import { loadMap } from "./util";

class EsriMap extends React.Component {
    constructor(props) {
        super(props);
        this.mapDiv = React.createRef();
    }
    componentDidMount() {
        const container = this.mapDiv.current;

        loadMap(container, 'gray').then(view => {
            this._view = view; // hold on to the view for later
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (JSON.stringify(prevProps.location) !== JSON.stringify(this.props.location)) {
           this._view.goTo(this.props.location);
        }
    }

    render() {
        return <div className="esri-map" ref={this.mapDiv} />;
    }
}

export default EsriMap;
