var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoads_1 = new ol.layer.Tile({
            'title': 'Google Roads',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_2 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_BingSatlite_3 = new ol.layer.Tile({
            'title': 'Bing Satélite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=0&dir=dir_n’'
            })
        });

        var lyr_ESRIImagery_4 = new ol.layer.Tile({
            'title': 'ESRI Imagery',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenStreetMap_5 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_StamenTerrain_6 = new ol.layer.Tile({
            'title': 'Stamen Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png'
            })
        });
var format_COBERTURA_NACIONAL_z_20_7 = new ol.format.GeoJSON();
var features_COBERTURA_NACIONAL_z_20_7 = format_COBERTURA_NACIONAL_z_20_7.readFeatures(json_COBERTURA_NACIONAL_z_20_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COBERTURA_NACIONAL_z_20_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COBERTURA_NACIONAL_z_20_7.addFeatures(features_COBERTURA_NACIONAL_z_20_7);
var lyr_COBERTURA_NACIONAL_z_20_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COBERTURA_NACIONAL_z_20_7, 
                style: style_COBERTURA_NACIONAL_z_20_7,
                interactive: true,
                title: '<img src="styles/legend/COBERTURA_NACIONAL_z_20_7.png" /> COBERTURA_NACIONAL_z_20'
            });
var format_GAIOCs_WGS84_Z20s_8 = new ol.format.GeoJSON();
var features_GAIOCs_WGS84_Z20s_8 = format_GAIOCs_WGS84_Z20s_8.readFeatures(json_GAIOCs_WGS84_Z20s_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GAIOCs_WGS84_Z20s_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GAIOCs_WGS84_Z20s_8.addFeatures(features_GAIOCs_WGS84_Z20s_8);
var lyr_GAIOCs_WGS84_Z20s_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GAIOCs_WGS84_Z20s_8, 
                style: style_GAIOCs_WGS84_Z20s_8,
                interactive: true,
                title: '<img src="styles/legend/GAIOCs_WGS84_Z20s_8.png" /> GAIOCs_WGS84_Z20s'
            });
var format_Cuerpos_de_Agua_SENAMHI_z20s2_9 = new ol.format.GeoJSON();
var features_Cuerpos_de_Agua_SENAMHI_z20s2_9 = format_Cuerpos_de_Agua_SENAMHI_z20s2_9.readFeatures(json_Cuerpos_de_Agua_SENAMHI_z20s2_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuerpos_de_Agua_SENAMHI_z20s2_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuerpos_de_Agua_SENAMHI_z20s2_9.addFeatures(features_Cuerpos_de_Agua_SENAMHI_z20s2_9);
var lyr_Cuerpos_de_Agua_SENAMHI_z20s2_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cuerpos_de_Agua_SENAMHI_z20s2_9, 
                style: style_Cuerpos_de_Agua_SENAMHI_z20s2_9,
                interactive: true,
                title: '<img src="styles/legend/Cuerpos_de_Agua_SENAMHI_z20s2_9.png" /> Cuerpos_de_Agua_SENAMHI_z20s2'
            });
var format_LIMITESLEY_10 = new ol.format.GeoJSON();
var features_LIMITESLEY_10 = format_LIMITESLEY_10.readFeatures(json_LIMITESLEY_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITESLEY_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITESLEY_10.addFeatures(features_LIMITESLEY_10);
var lyr_LIMITESLEY_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMITESLEY_10, 
                style: style_LIMITESLEY_10,
                interactive: true,
                title: '<img src="styles/legend/LIMITESLEY_10.png" /> LIMITES LEY'
            });
var format_ComunidadesLey24deSeptiembrede1938z20s_11 = new ol.format.GeoJSON();
var features_ComunidadesLey24deSeptiembrede1938z20s_11 = format_ComunidadesLey24deSeptiembrede1938z20s_11.readFeatures(json_ComunidadesLey24deSeptiembrede1938z20s_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComunidadesLey24deSeptiembrede1938z20s_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComunidadesLey24deSeptiembrede1938z20s_11.addFeatures(features_ComunidadesLey24deSeptiembrede1938z20s_11);
var lyr_ComunidadesLey24deSeptiembrede1938z20s_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ComunidadesLey24deSeptiembrede1938z20s_11, 
                style: style_ComunidadesLey24deSeptiembrede1938z20s_11,
                interactive: true,
                title: '<img src="styles/legend/ComunidadesLey24deSeptiembrede1938z20s_11.png" /> Comunidades Ley 24 de Septiembre de 1938 z20s'
            });
var format_Limites_Pando_12 = new ol.format.GeoJSON();
var features_Limites_Pando_12 = format_Limites_Pando_12.readFeatures(json_Limites_Pando_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limites_Pando_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limites_Pando_12.addFeatures(features_Limites_Pando_12);
var lyr_Limites_Pando_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limites_Pando_12, 
                style: style_Limites_Pando_12,
                interactive: true,
                title: '<img src="styles/legend/Limites_Pando_12.png" /> Limites_Pando'
            });
var format_PisoFirme_13 = new ol.format.GeoJSON();
var features_PisoFirme_13 = format_PisoFirme_13.readFeatures(json_PisoFirme_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PisoFirme_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PisoFirme_13.addFeatures(features_PisoFirme_13);
var lyr_PisoFirme_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PisoFirme_13, 
                style: style_PisoFirme_13,
                interactive: true,
                title: '<img src="styles/legend/PisoFirme_13.png" /> Piso Firme'
            });
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_GoogleRoads_1,lyr_GoogleMaps_2,lyr_BingSatlite_3,lyr_ESRIImagery_4,lyr_OpenStreetMap_5,lyr_StamenTerrain_6,],
                                title: "Mapas Base"});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleRoads_1.setVisible(true);lyr_GoogleMaps_2.setVisible(true);lyr_BingSatlite_3.setVisible(true);lyr_ESRIImagery_4.setVisible(true);lyr_OpenStreetMap_5.setVisible(true);lyr_StamenTerrain_6.setVisible(true);lyr_COBERTURA_NACIONAL_z_20_7.setVisible(true);lyr_GAIOCs_WGS84_Z20s_8.setVisible(true);lyr_Cuerpos_de_Agua_SENAMHI_z20s2_9.setVisible(true);lyr_LIMITESLEY_10.setVisible(true);lyr_ComunidadesLey24deSeptiembrede1938z20s_11.setVisible(true);lyr_Limites_Pando_12.setVisible(true);lyr_PisoFirme_13.setVisible(true);
var layersList = [group_MapasBase,lyr_COBERTURA_NACIONAL_z_20_7,lyr_GAIOCs_WGS84_Z20s_8,lyr_Cuerpos_de_Agua_SENAMHI_z20s2_9,lyr_LIMITESLEY_10,lyr_ComunidadesLey24deSeptiembrede1938z20s_11,lyr_Limites_Pando_12,lyr_PisoFirme_13];
lyr_COBERTURA_NACIONAL_z_20_7.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'SUPERF_KM2': 'SUPERF_KM2', 'DEPARTAMEN': 'DEPARTAMEN', 'PROVINCIA': 'PROVINCIA', 'CAPITAL': 'CAPITAL', 'F_LEY_PROV': 'F_LEY_PROV', 'LEY_MUN': 'LEY_MUN', 'F_LEY_MUN': 'F_LEY_MUN', 'COD_MUN': 'COD_MUN', 'COD_PROV': 'COD_PROV', 'SHAPE_Leng': 'SHAPE_Leng', 'MUN_TIOC': 'MUN_TIOC', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_GAIOCs_WGS84_Z20s_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'C_UT': 'C_UT', 'DEPARTAMEN': 'DEPARTAMEN', 'SEC_PROV': 'SEC_PROV', 'PROVINCIA': 'PROVINCIA', 'MUNICIPIO': 'MUNICIPIO', 'N°_LEY': 'N°_LEY', 'FECHA_LEY': 'FECHA_LEY', 'ID_ESTADO': 'ID_ESTADO', 'ESTADO': 'ESTADO', 'ZONA': 'ZONA', 'ID_UT': 'ID_UT', 'BL_COMLIT_': 'BL_COMLIT_', 'BL_COMLIT1': 'BL_COMLIT1', 'BL_COMLI_M': 'BL_COMLI_M', 'CAPITAL': 'CAPITAL', 'C_SIOT': 'C_SIOT', 'OBS_': 'OBS_', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Cuerpos_de_Agua_SENAMHI_z20s2_9.set('fieldAliases', {'gml_id': 'gml_id', 'NBHIDROGRA': 'NBHIDROGRA', 'CATEG_DES': 'CATEG_DES', 'SUBCUENCA': 'SUBCUENCA', 'COCLASIFHI': 'COCLASIFHI', 'COESCALA': 'COESCALA', 'IDELEMENTO': 'IDELEMENTO', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LIMITESLEY_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_LIMITE': 'ID_LIMITE', 'ID_TRAMO': 'ID_TRAMO', 'DIST_KM': 'DIST_KM', 'ESTADO': 'ESTADO', 'Z_UTM': 'Z_UTM', 'N_LEY': 'N_LEY', 'FECHA_LEY': 'FECHA_LEY', 'ID_ARCHIVO': 'ID_ARCHIVO', });
lyr_ComunidadesLey24deSeptiembrede1938z20s_11.set('fieldAliases', {'Name': 'Name', 'ESTE_WGS84': 'ESTE_WGS84', 'NORTE_WGS8': 'NORTE_WGS8', 'LAT_WGS84': 'LAT_WGS84', 'LON_WGS84': 'LON_WGS84', });
lyr_Limites_Pando_12.set('fieldAliases', {'FID_Depart': 'FID_Depart', 'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'ID_UT_D': 'ID_UT_D', 'DEPARTAMEN': 'DEPARTAMEN', 'B_LEGAL_D': 'B_LEGAL_D', 'SUP_KM2': 'SUP_KM2', });
lyr_PisoFirme_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_SIOT': 'COD_SIOT', 'ID_LIMITE': 'ID_LIMITE', 'ID_TRAMO': 'ID_TRAMO', 'DIST_KM': 'DIST_KM', 'FECHA_LEY': 'FECHA_LEY', 'ID_EXP': 'ID_EXP', 'LIMITE': 'LIMITE', 'ESTADO': 'ESTADO', 'TIPO_LIMIT': 'TIPO_LIMIT', 'Z_UTM': 'Z_UTM', 'LEY': 'LEY', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_COBERTURA_NACIONAL_z_20_7.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'SUPERF_KM2': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'PROVINCIA': 'TextEdit', 'CAPITAL': 'TextEdit', 'F_LEY_PROV': 'DateTime', 'LEY_MUN': 'TextEdit', 'F_LEY_MUN': 'DateTime', 'COD_MUN': 'TextEdit', 'COD_PROV': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'MUN_TIOC': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_GAIOCs_WGS84_Z20s_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'C_UT': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'SEC_PROV': 'TextEdit', 'PROVINCIA': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'N°_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'ID_ESTADO': 'TextEdit', 'ESTADO': 'TextEdit', 'ZONA': 'TextEdit', 'ID_UT': 'TextEdit', 'BL_COMLIT_': 'TextEdit', 'BL_COMLIT1': 'TextEdit', 'BL_COMLI_M': 'TextEdit', 'CAPITAL': 'TextEdit', 'C_SIOT': 'TextEdit', 'OBS_': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Cuerpos_de_Agua_SENAMHI_z20s2_9.set('fieldImages', {'gml_id': 'TextEdit', 'NBHIDROGRA': 'TextEdit', 'CATEG_DES': 'TextEdit', 'SUBCUENCA': 'TextEdit', 'COCLASIFHI': 'TextEdit', 'COESCALA': 'TextEdit', 'IDELEMENTO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LIMITESLEY_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID_LIMITE': 'TextEdit', 'ID_TRAMO': 'TextEdit', 'DIST_KM': 'TextEdit', 'ESTADO': 'TextEdit', 'Z_UTM': 'TextEdit', 'N_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'ID_ARCHIVO': 'TextEdit', });
lyr_ComunidadesLey24deSeptiembrede1938z20s_11.set('fieldImages', {'Name': 'TextEdit', 'ESTE_WGS84': 'TextEdit', 'NORTE_WGS8': 'TextEdit', 'LAT_WGS84': 'TextEdit', 'LON_WGS84': 'TextEdit', });
lyr_Limites_Pando_12.set('fieldImages', {'FID_Depart': 'TextEdit', 'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'ID_UT_D': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'B_LEGAL_D': 'TextEdit', 'SUP_KM2': 'TextEdit', });
lyr_PisoFirme_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_SIOT': 'TextEdit', 'ID_LIMITE': 'TextEdit', 'ID_TRAMO': 'TextEdit', 'DIST_KM': 'TextEdit', 'FECHA_LEY': 'DateTime', 'ID_EXP': 'TextEdit', 'LIMITE': 'TextEdit', 'ESTADO': 'TextEdit', 'TIPO_LIMIT': 'TextEdit', 'Z_UTM': 'TextEdit', 'LEY': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_COBERTURA_NACIONAL_z_20_7.set('fieldLabels', {'OBJECTID_1': 'inline label', 'OBJECTID': 'inline label', 'SUPERF_KM2': 'inline label', 'DEPARTAMEN': 'inline label', 'PROVINCIA': 'inline label', 'CAPITAL': 'inline label', 'F_LEY_PROV': 'inline label', 'LEY_MUN': 'inline label', 'F_LEY_MUN': 'inline label', 'COD_MUN': 'inline label', 'COD_PROV': 'inline label', 'SHAPE_Leng': 'inline label', 'MUN_TIOC': 'inline label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_GAIOCs_WGS84_Z20s_8.set('fieldLabels', {'OBJECTID': 'inline label', 'C_UT': 'inline label', 'DEPARTAMEN': 'inline label', 'SEC_PROV': 'inline label', 'PROVINCIA': 'inline label', 'MUNICIPIO': 'inline label', 'N°_LEY': 'inline label', 'FECHA_LEY': 'inline label', 'ID_ESTADO': 'inline label', 'ESTADO': 'inline label', 'ZONA': 'inline label', 'ID_UT': 'inline label', 'BL_COMLIT_': 'inline label', 'BL_COMLIT1': 'inline label', 'BL_COMLI_M': 'inline label', 'CAPITAL': 'inline label', 'C_SIOT': 'inline label', 'OBS_': 'inline label', 'SHAPE_Leng': 'inline label', 'SHAPE_Area': 'header label', });
lyr_Cuerpos_de_Agua_SENAMHI_z20s2_9.set('fieldLabels', {'gml_id': 'inline label', 'NBHIDROGRA': 'inline label', 'CATEG_DES': 'inline label', 'SUBCUENCA': 'inline label', 'COCLASIFHI': 'inline label', 'COESCALA': 'inline label', 'IDELEMENTO': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_LIMITESLEY_10.set('fieldLabels', {'OBJECTID': 'inline label', 'ID_LIMITE': 'inline label', 'ID_TRAMO': 'inline label', 'DIST_KM': 'inline label', 'ESTADO': 'inline label', 'Z_UTM': 'inline label', 'N_LEY': 'inline label', 'FECHA_LEY': 'inline label', 'ID_ARCHIVO': 'inline label', });
lyr_ComunidadesLey24deSeptiembrede1938z20s_11.set('fieldLabels', {'Name': 'inline label', 'ESTE_WGS84': 'inline label', 'NORTE_WGS8': 'inline label', 'LAT_WGS84': 'inline label', 'LON_WGS84': 'inline label', });
lyr_Limites_Pando_12.set('fieldLabels', {'FID_Depart': 'inline label', 'OBJECTID': 'inline label', 'SHAPE_Leng': 'inline label', 'SHAPE_Area': 'inline label', 'ID_UT_D': 'inline label', 'DEPARTAMEN': 'inline label', 'B_LEGAL_D': 'inline label', 'SUP_KM2': 'inline label', });
lyr_PisoFirme_13.set('fieldLabels', {'OBJECTID': 'inline label', 'COD_SIOT': 'inline label', 'ID_LIMITE': 'inline label', 'ID_TRAMO': 'inline label', 'DIST_KM': 'inline label', 'FECHA_LEY': 'inline label', 'ID_EXP': 'inline label', 'LIMITE': 'inline label', 'ESTADO': 'inline label', 'TIPO_LIMIT': 'inline label', 'Z_UTM': 'inline label', 'LEY': 'inline label', 'SHAPE_Leng': 'inline label', });
lyr_PisoFirme_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});