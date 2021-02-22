import { loadModules } from "esri-loader";

export function loadMap(container, basemap) {
    return loadModules(
        ["esri/Map", "esri/views/SceneView"],
        // this stylesheet is only loaded once
        { css: "https://js.arcgis.com/4.10/esri/css/main.css" }
    ).then(([Map, SceneView]) => {
       // const map = new Map({ basemap });

        var map = new Map({
            basemap: "hybrid",
            ground: "world-elevation"
        });

        const view = new SceneView({
            container,
            map,
            zoom: 4,
            camera: {
                position: [7.654, 45.919, 5184],
                tilt: 80
            }
        });
        return view;
    });
}
