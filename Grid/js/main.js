var basarLayer = new L.TileLayer("http://bms.basarsoft.com.tr/Service/api/v1/map/ProMap?accId=iZJ6Uh1yB0qjgY2eYYkcaA&appCode=E-Ca2liKfUCtcYTLMKyf_g&x={x}&y={y}&z={z}", {
    attribution: "&copy; <a href='http://www.basarsoft.com.tr'>Başarsoft</a> contributors"
}); var osmUrl = '"http://bms.basarsoft.com.tr/Service/api/v1/map/ProMap?accId=iZJ6Uh1yB0qjgY2eYYkcaA&appCode=E-Ca2liKfUCtcYTLMKyf_g&x={x}&y={y}&z={z}"',
    osmAttrib = "&copy; <a href='http://www.basarsoft.com.tr'>Başarsoft</a> contributors",
    osm = L.tileLayer(osmUrl, { maxZoom: 18, attribution: osmAttrib }),
    map = new L.Map('map', { center: new L.LatLng(38.0619, 35.5), zoom: 7 }),
    drawnItems = L.featureGroup().addTo(map); L.control.layers({
        'BaşarMap': basarLayer.addTo(map),
        //'Basar': osm.addTo(map),
        "google": L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}', {
            attribution: 'google'
        })
    }, { 'Grid': drawnItems }, { position: 'topleft', collapsed: false }).addTo(map);
var options = {
    gridType: 'distance',
    showMetric: false,
};
var scale = L.control.gridscale(options);
scale.addTo(map);
//L.grids.distance.metric().addTo(map);
L.grids.distance.imperial().addTo(map);
                    //L.grids.dms().addTo(map);
                    //L.grids.dd().addTo(map);
                    //L.grids.mgrs().addTo(map);
                    //L.grids.utm().addTo(map);
