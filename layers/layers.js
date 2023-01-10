var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> Граница города'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
    title: 'Этажность<br />\
    <img src="styles/legend/_2_0.png" /> 0,0 - 5,0<br />\
    <img src="styles/legend/_2_1.png" /> 5,0 - 10,0<br />\
    <img src="styles/legend/_2_2.png" /> 10,0 - 15,0<br />\
    <img src="styles/legend/_2_3.png" /> 15,0 - 20,0<br />\
    <img src="styles/legend/_2_4.png" /> 20,0 - 25,0<br />\
    <img src="styles/legend/_2_5.png" /> 25,0 - 27,0<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr__1,lyr__2];
lyr__1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'admin_level': 'admin_level', 'boundary': 'boundary', 'name': 'name', 'waterway': 'waterway', });
lyr__2.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'Unnamed: 0.6': 'Unnamed: 0.6', 'Unnamed: 0.5': 'Unnamed: 0.5', 'Unnamed: 0.4': 'Unnamed: 0.4', 'Unnamed: 0.3': 'Unnamed: 0.3', 'Unnamed: 0.2': 'Unnamed: 0.2', 'Unnamed: 0.1': 'Unnamed: 0.1', 'Unnamed: 0': 'Unnamed: 0', 'index': 'index', 'id': 'id', 'region_id': 'region_id', 'area_id': 'area_id', 'city_id': 'city_id', 'street_id': 'street_id', 'shortname_region': 'shortname_region', 'formalname_region': 'formalname_region', 'shortname_area': 'shortname_area', 'formalname_area': 'formalname_area', 'shortname_city': 'shortname_city', 'formalname_city': 'formalname_city', 'shortname_street': 'shortname_street', 'formalname_street': 'formalname_street', 'house_number': 'house_number', 'building': 'building', 'block': 'block', 'letter': 'letter', 'address': 'address', 'houseguid': 'houseguid', 'management_organization_id': 'management_organization_id', 'built_year': 'built_year', 'exploitation_start_year': 'exploitation_start_year', 'project_type': 'project_type', 'house_type': 'house_type', 'is_alarm': 'is_alarm', 'method_of_forming_overhaul_fund': 'method_of_forming_overhaul_fund', 'floor_count_max': 'floor_count_max', 'floor_count_min': 'floor_count_min', 'entrance_count': 'entrance_count', 'elevators_count': 'elevators_count', 'energy_efficiency': 'energy_efficiency', 'quarters_count': 'quarters_count', 'living_quarters_count': 'living_quarters_count', 'unliving_quarters_count': 'unliving_quarters_count', 'area_total': 'area_total', 'area_residential': 'area_residential', 'area_non_residential': 'area_non_residential', 'area_common_property': 'area_common_property', 'area_land': 'area_land', 'parking_square': 'parking_square', 'playground': 'playground', 'sportsground': 'sportsground', 'other_beautification': 'other_beautification', 'foundation_type': 'foundation_type', 'floor_type': 'floor_type', 'wall_material': 'wall_material', 'basement_area': 'basement_area', 'chute_type': 'chute_type', 'chute_count': 'chute_count', 'electrical_type': 'electrical_type', 'electrical_entries_count': 'electrical_entries_count', 'heating_type': 'heating_type', 'hot_water_type': 'hot_water_type', 'cold_water_type': 'cold_water_type', 'sewerage_type': 'sewerage_type', 'sewerage_cesspools_volume': 'sewerage_cesspools_volume', 'gas_type': 'gas_type', 'ventilation_type': 'ventilation_type', 'firefighting_type': 'firefighting_type', 'drainage_type': 'drainage_type', 'addr_osm': 'addr_osm', 'lon_osm': 'lon_osm', 'lat_osm': 'lat_osm', 'addr_ya': 'addr_ya', 'lon_ya': 'lon_ya', 'lat_ya': 'lat_ya', });
lyr__1.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'admin_level': 'TextEdit', 'boundary': 'TextEdit', 'name': 'TextEdit', 'waterway': 'TextEdit', });
lyr__2.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'Range', 'Unnamed: 0.6': 'Range', 'Unnamed: 0.5': 'Range', 'Unnamed: 0.4': 'Range', 'Unnamed: 0.3': 'Range', 'Unnamed: 0.2': 'Range', 'Unnamed: 0.1': 'Range', 'Unnamed: 0': 'Range', 'index': 'Range', 'id': 'Range', 'region_id': 'TextEdit', 'area_id': 'TextEdit', 'city_id': 'TextEdit', 'street_id': 'TextEdit', 'shortname_region': 'TextEdit', 'formalname_region': 'TextEdit', 'shortname_area': 'TextEdit', 'formalname_area': 'TextEdit', 'shortname_city': 'TextEdit', 'formalname_city': 'TextEdit', 'shortname_street': 'TextEdit', 'formalname_street': 'TextEdit', 'house_number': 'TextEdit', 'building': 'TextEdit', 'block': 'TextEdit', 'letter': 'TextEdit', 'address': 'TextEdit', 'houseguid': 'TextEdit', 'management_organization_id': 'TextEdit', 'built_year': 'TextEdit', 'exploitation_start_year': 'TextEdit', 'project_type': 'TextEdit', 'house_type': 'TextEdit', 'is_alarm': 'TextEdit', 'method_of_forming_overhaul_fund': 'TextEdit', 'floor_count_max': 'TextEdit', 'floor_count_min': 'TextEdit', 'entrance_count': 'TextEdit', 'elevators_count': 'TextEdit', 'energy_efficiency': 'TextEdit', 'quarters_count': 'Range', 'living_quarters_count': 'TextEdit', 'unliving_quarters_count': 'TextEdit', 'area_total': 'TextEdit', 'area_residential': 'TextEdit', 'area_non_residential': 'TextEdit', 'area_common_property': 'TextEdit', 'area_land': 'TextEdit', 'parking_square': 'TextEdit', 'playground': 'Range', 'sportsground': 'Range', 'other_beautification': 'TextEdit', 'foundation_type': 'TextEdit', 'floor_type': 'TextEdit', 'wall_material': 'TextEdit', 'basement_area': 'TextEdit', 'chute_type': 'TextEdit', 'chute_count': 'TextEdit', 'electrical_type': 'TextEdit', 'electrical_entries_count': 'TextEdit', 'heating_type': 'TextEdit', 'hot_water_type': 'TextEdit', 'cold_water_type': 'TextEdit', 'sewerage_type': 'TextEdit', 'sewerage_cesspools_volume': 'TextEdit', 'gas_type': 'TextEdit', 'ventilation_type': 'TextEdit', 'firefighting_type': 'TextEdit', 'drainage_type': 'TextEdit', 'addr_osm': 'TextEdit', 'lon_osm': 'TextEdit', 'lat_osm': 'TextEdit', 'addr_ya': 'TextEdit', 'lon_ya': 'TextEdit', 'lat_ya': 'TextEdit', });
lyr__1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'admin_level': 'no label', 'boundary': 'no label', 'name': 'no label', 'waterway': 'no label', });
lyr__2.set('fieldLabels', {'fid': 'no label', 'field_1': 'no label', 'Unnamed: 0.6': 'no label', 'Unnamed: 0.5': 'no label', 'Unnamed: 0.4': 'no label', 'Unnamed: 0.3': 'no label', 'Unnamed: 0.2': 'no label', 'Unnamed: 0.1': 'no label', 'Unnamed: 0': 'no label', 'index': 'no label', 'id': 'no label', 'region_id': 'no label', 'area_id': 'no label', 'city_id': 'no label', 'street_id': 'no label', 'shortname_region': 'no label', 'formalname_region': 'no label', 'shortname_area': 'no label', 'formalname_area': 'no label', 'shortname_city': 'no label', 'formalname_city': 'no label', 'shortname_street': 'no label', 'formalname_street': 'no label', 'house_number': 'no label', 'building': 'no label', 'block': 'no label', 'letter': 'no label', 'address': 'no label', 'houseguid': 'no label', 'management_organization_id': 'no label', 'built_year': 'no label', 'exploitation_start_year': 'no label', 'project_type': 'no label', 'house_type': 'no label', 'is_alarm': 'no label', 'method_of_forming_overhaul_fund': 'no label', 'floor_count_max': 'no label', 'floor_count_min': 'no label', 'entrance_count': 'no label', 'elevators_count': 'no label', 'energy_efficiency': 'no label', 'quarters_count': 'no label', 'living_quarters_count': 'no label', 'unliving_quarters_count': 'no label', 'area_total': 'no label', 'area_residential': 'no label', 'area_non_residential': 'no label', 'area_common_property': 'no label', 'area_land': 'no label', 'parking_square': 'no label', 'playground': 'no label', 'sportsground': 'no label', 'other_beautification': 'no label', 'foundation_type': 'no label', 'floor_type': 'no label', 'wall_material': 'no label', 'basement_area': 'no label', 'chute_type': 'no label', 'chute_count': 'no label', 'electrical_type': 'no label', 'electrical_entries_count': 'no label', 'heating_type': 'no label', 'hot_water_type': 'no label', 'cold_water_type': 'no label', 'sewerage_type': 'no label', 'sewerage_cesspools_volume': 'no label', 'gas_type': 'no label', 'ventilation_type': 'no label', 'firefighting_type': 'no label', 'drainage_type': 'no label', 'addr_osm': 'no label', 'lon_osm': 'no label', 'lat_osm': 'no label', 'addr_ya': 'no label', 'lon_ya': 'no label', 'lat_ya': 'no label', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});