import ProceduralMap from 'procedural-gl-react';
import React, {useRef, useEffect} from 'react'
import Procedural from 'procedural-gl'

const datasource = {
    elevation: {
        apiKey: '1b045ec93f5b94db894037db8d297128e'
    },
    imagery: {
        urlFormat: 'https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=cZQg2QaktSnI18BSAxZX',
            attribution: '<a href="https://www.maptiler.com/copyright/">Maptiler</a> <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
}

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (JSON.stringify(this.props.location) === JSON.stringify(nextProps.location)) {
            return false;
        } else {
            return true;
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        Procedural.focusOnLocation (this.props.location);
    }

    render() {
        return <div className={'Map'}><ProceduralMap
            ref={this.myRef}
            datasource={datasource}
            compassVisible={false}
            displayLocation={ this.props.location}
        /></div>
    }
}

