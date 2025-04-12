ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-78.776194, -12.721272, -75.155928, -10.317516]);
var wms_layers = [];


        var lyr_EsriTopographic_0 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_LIMA_1 = new ol.format.GeoJSON();
var features_LIMA_1 = format_LIMA_1.readFeatures(json_LIMA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LIMA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMA_1.addFeatures(features_LIMA_1);
var lyr_LIMA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIMA_1, 
                style: style_LIMA_1,
                popuplayertitle: 'LIMA',
                interactive: true,
                title: '<img src="styles/legend/LIMA_1.png" /> LIMA'
            });
var format_CORTE_LIMA_2 = new ol.format.GeoJSON();
var features_CORTE_LIMA_2 = format_CORTE_LIMA_2.readFeatures(json_CORTE_LIMA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CORTE_LIMA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORTE_LIMA_2.addFeatures(features_CORTE_LIMA_2);
var lyr_CORTE_LIMA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORTE_LIMA_2, 
                style: style_CORTE_LIMA_2,
                popuplayertitle: 'CORTE_LIMA',
                interactive: true,
    title: 'CORTE_LIMA<br />\
    <img src="styles/legend/CORTE_LIMA_2_0.png" /> Ad-c<br />\
    <img src="styles/legend/CORTE_LIMA_2_1.png" /> Ao-b<br />\
    <img src="styles/legend/CORTE_LIMA_2_2.png" /> C_poblados<br />\
    <img src="styles/legend/CORTE_LIMA_2_3.png" /> C-d<br />\
    <img src="styles/legend/CORTE_LIMA_2_4.png" /> Fv3-a<br />\
    <img src="styles/legend/CORTE_LIMA_2_5.png" /> Lagunas<br />\
    <img src="styles/legend/CORTE_LIMA_2_6.png" /> Ll-a<br />\
    <img src="styles/legend/CORTE_LIMA_2_7.png" /> Lld-c<br />\
    <img src="styles/legend/CORTE_LIMA_2_8.png" /> Llo-b<br />\
    <img src="styles/legend/CORTE_LIMA_2_9.png" /> Nv<br />\
    <img src="styles/legend/CORTE_LIMA_2_10.png" /> V-a<br />\
    <img src="styles/legend/CORTE_LIMA_2_11.png" /> Vc-d<br />\
    <img src="styles/legend/CORTE_LIMA_2_12.png" /> Vc-e<br />\
    <img src="styles/legend/CORTE_LIMA_2_13.png" /> Vg-a<br />\
    <img src="styles/legend/CORTE_LIMA_2_14.png" /> Vs1-d<br />\
    <img src="styles/legend/CORTE_LIMA_2_15.png" /> Vs1-e<br />\
    <img src="styles/legend/CORTE_LIMA_2_16.png" /> Vs2-d<br />\
    <img src="styles/legend/CORTE_LIMA_2_17.png" /> Vs2-e<br />\
    <img src="styles/legend/CORTE_LIMA_2_18.png" /> Vs3-d<br />\
    <img src="styles/legend/CORTE_LIMA_2_19.png" /> Vs3-e<br />\
    <img src="styles/legend/CORTE_LIMA_2_20.png" /> Vsa-b<br />\
    <img src="styles/legend/CORTE_LIMA_2_21.png" /> Vso-c<br />' });

lyr_EsriTopographic_0.setVisible(true);lyr_LIMA_1.setVisible(true);lyr_CORTE_LIMA_2.setVisible(true);
var layersList = [lyr_EsriTopographic_0,lyr_LIMA_1,lyr_CORTE_LIMA_2];
lyr_LIMA_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'Lista': 'Lista', });
lyr_CORTE_LIMA_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SIMBOLO_': 'SIMBOLO_', 'REGION': 'REGION', 'FORMAS_DEL': 'FORMAS_DEL', 'Area': 'Area', 'Perimetro': 'Perimetro', });
lyr_LIMA_1.set('fieldImages', {'ID_0': 'Hidden', 'ISO': 'Hidden', 'NAME_0': 'TextEdit', 'ID_1': 'Hidden', 'NAME_1': 'TextEdit', 'Lista': 'Hidden', });
lyr_CORTE_LIMA_2.set('fieldImages', {'OBJECTID': 'Hidden', 'SIMBOLO_': 'TextEdit', 'REGION': 'Hidden', 'FORMAS_DEL': 'Hidden', 'Area': 'TextEdit', 'Perimetro': 'TextEdit', });
lyr_LIMA_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'inline label - always visible', 'ID_1': 'no label', 'NAME_1': 'inline label - always visible', 'Lista': 'no label', });
lyr_CORTE_LIMA_2.set('fieldLabels', {'SIMBOLO_': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perimetro': 'inline label - visible with data', });
lyr_CORTE_LIMA_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});