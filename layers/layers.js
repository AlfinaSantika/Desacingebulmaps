var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_gadm41_IDNADM_ADM_4_1 = new ol.format.GeoJSON();
var features_gadm41_IDNADM_ADM_4_1 = format_gadm41_IDNADM_ADM_4_1.readFeatures(json_gadm41_IDNADM_ADM_4_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm41_IDNADM_ADM_4_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_IDNADM_ADM_4_1.addFeatures(features_gadm41_IDNADM_ADM_4_1);
var lyr_gadm41_IDNADM_ADM_4_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm41_IDNADM_ADM_4_1, 
                style: style_gadm41_IDNADM_ADM_4_1,
                popuplayertitle: "gadm41_IDN — ADM_ADM_4",
                interactive: true,
                title: '<img src="styles/legend/gadm41_IDNADM_ADM_4_1.png" /> gadm41_IDN — ADM_ADM_4'
            });
var format_Clipped_2 = new ol.format.GeoJSON();
var features_Clipped_2 = format_Clipped_2.readFeatures(json_Clipped_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_2.addFeatures(features_Clipped_2);
var lyr_Clipped_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_2, 
                style: style_Clipped_2,
                popuplayertitle: "Clipped",
                interactive: true,
                title: '<img src="styles/legend/Clipped_2.png" /> Clipped'
            });
var format_Hutan_3 = new ol.format.GeoJSON();
var features_Hutan_3 = format_Hutan_3.readFeatures(json_Hutan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hutan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hutan_3.addFeatures(features_Hutan_3);
var lyr_Hutan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hutan_3, 
                style: style_Hutan_3,
                popuplayertitle: "Hutan",
                interactive: true,
    title: 'Hutan<br />\
    <img src="styles/legend/Hutan_3_0.png" /> Hutan Pinus<br />\
    <img src="styles/legend/Hutan_3_1.png" /> <br />'
        });
var format_RumahKepalaDesa_4 = new ol.format.GeoJSON();
var features_RumahKepalaDesa_4 = format_RumahKepalaDesa_4.readFeatures(json_RumahKepalaDesa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahKepalaDesa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahKepalaDesa_4.addFeatures(features_RumahKepalaDesa_4);
var lyr_RumahKepalaDesa_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahKepalaDesa_4, 
                style: style_RumahKepalaDesa_4,
                popuplayertitle: "Rumah Kepala Desa",
                interactive: true,
    title: 'Rumah Kepala Desa<br />\
    <img src="styles/legend/RumahKepalaDesa_4_0.png" /> <br />\
    <img src="styles/legend/RumahKepalaDesa_4_1.png" /> Rumah Kepala Desa<br />\
    <img src="styles/legend/RumahKepalaDesa_4_2.png" /> Rumah Kepala Desa Cingebul<br />'
        });
var format_RW_5 = new ol.format.GeoJSON();
var features_RW_5 = format_RW_5.readFeatures(json_RW_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RW_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RW_5.addFeatures(features_RW_5);
var lyr_RW_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RW_5, 
                style: style_RW_5,
                popuplayertitle: "RW",
                interactive: true,
    title: 'RW<br />\
    <img src="styles/legend/RW_5_0.png" /> RW 01 Dusun Karangreja<br />\
    <img src="styles/legend/RW_5_1.png" /> RW 02 Dusun Purbaketa<br />\
    <img src="styles/legend/RW_5_2.png" /> RW 03 Dusun Purbaketa<br />\
    <img src="styles/legend/RW_5_3.png" /> RW 04 Dusun Cilutung<br />\
    <img src="styles/legend/RW_5_4.png" /> RW 05 Dusun Penusupan<br />\
    <img src="styles/legend/RW_5_5.png" /> RW 06 Dusun Cikoas<br />\
    <img src="styles/legend/RW_5_6.png" /> RW 07 Dusun Pengasinan<br />\
    <img src="styles/legend/RW_5_7.png" /> RW 08 Dusun Wanasri<br />\
    <img src="styles/legend/RW_5_8.png" /> RW 09 Dusun Karangbawang<br />\
    <img src="styles/legend/RW_5_9.png" /> <br />'
        });
var format_Sawah_6 = new ol.format.GeoJSON();
var features_Sawah_6 = format_Sawah_6.readFeatures(json_Sawah_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sawah_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_6.addFeatures(features_Sawah_6);
var lyr_Sawah_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sawah_6, 
                style: style_Sawah_6,
                popuplayertitle: "Sawah",
                interactive: true,
    title: 'Sawah<br />\
    <img src="styles/legend/Sawah_6_0.png" /> Sawah<br />\
    <img src="styles/legend/Sawah_6_1.png" /> <br />'
        });
var format_Rt_7 = new ol.format.GeoJSON();
var features_Rt_7 = format_Rt_7.readFeatures(json_Rt_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt_7.addFeatures(features_Rt_7);
var lyr_Rt_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt_7, 
                style: style_Rt_7,
                popuplayertitle: "Rt",
                interactive: true,
    title: 'Rt<br />\
    <img src="styles/legend/Rt_7_0.png" /> RT 01<br />\
    <img src="styles/legend/Rt_7_1.png" /> RT 01 / RW 02<br />\
    <img src="styles/legend/Rt_7_2.png" /> RT 01 / RW 03<br />\
    <img src="styles/legend/Rt_7_3.png" /> RT 01 / RW 04<br />\
    <img src="styles/legend/Rt_7_4.png" /> RT 01 / RW 05<br />\
    <img src="styles/legend/Rt_7_5.png" /> RT 01 / RW 06<br />\
    <img src="styles/legend/Rt_7_6.png" /> RT 01 / RW 08<br />\
    <img src="styles/legend/Rt_7_7.png" /> RT 01 / RW 09<br />\
    <img src="styles/legend/Rt_7_8.png" /> RT 01 RW 07<br />\
    <img src="styles/legend/Rt_7_9.png" /> RT 02 / RW 01<br />\
    <img src="styles/legend/Rt_7_10.png" /> RT 02 / RW 02<br />\
    <img src="styles/legend/Rt_7_11.png" /> RT 02 / RW 03<br />\
    <img src="styles/legend/Rt_7_12.png" /> RT 02 / RW 04<br />\
    <img src="styles/legend/Rt_7_13.png" /> RT 02 / RW 05<br />\
    <img src="styles/legend/Rt_7_14.png" /> RT 02 / RW 06<br />\
    <img src="styles/legend/Rt_7_15.png" /> RT 02 / RW 07<br />\
    <img src="styles/legend/Rt_7_16.png" /> RT 02 / RW 08<br />\
    <img src="styles/legend/Rt_7_17.png" /> RT 02 / RW 09<br />\
    <img src="styles/legend/Rt_7_18.png" /> RT 03 / RW 01<br />\
    <img src="styles/legend/Rt_7_19.png" /> RT 03 / RW 02<br />\
    <img src="styles/legend/Rt_7_20.png" /> RT 03 / RW 06<br />\
    <img src="styles/legend/Rt_7_21.png" /> RT 03 / RW 09<br />\
    <img src="styles/legend/Rt_7_22.png" /> <br />'
        });
var format_Clipped_8 = new ol.format.GeoJSON();
var features_Clipped_8 = format_Clipped_8.readFeatures(json_Clipped_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_8.addFeatures(features_Clipped_8);
var lyr_Clipped_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_8, 
                style: style_Clipped_8,
                popuplayertitle: "Clipped",
                interactive: true,
    title: 'Clipped<br />\
    <img src="styles/legend/Clipped_8_0.png" /> residential<br />\
    <img src="styles/legend/Clipped_8_1.png" /> service<br />\
    <img src="styles/legend/Clipped_8_2.png" /> tertiary<br />\
    <img src="styles/legend/Clipped_8_3.png" /> <br />'
        });
var format_Clipped_9 = new ol.format.GeoJSON();
var features_Clipped_9 = format_Clipped_9.readFeatures(json_Clipped_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_9.addFeatures(features_Clipped_9);
var lyr_Clipped_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_9, 
                style: style_Clipped_9,
                popuplayertitle: "Clipped",
                interactive: true,
                title: '<img src="styles/legend/Clipped_9.png" /> Clipped'
            });
var format_Lapangan_10 = new ol.format.GeoJSON();
var features_Lapangan_10 = format_Lapangan_10.readFeatures(json_Lapangan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_10.addFeatures(features_Lapangan_10);
var lyr_Lapangan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_10, 
                style: style_Lapangan_10,
                popuplayertitle: "Lapangan",
                interactive: true,
    title: 'Lapangan<br />\
    <img src="styles/legend/Lapangan_10_0.png" /> Lapangan Desa Cingebul<br />\
    <img src="styles/legend/Lapangan_10_1.png" /> <br />'
        });
var format_TPU_11 = new ol.format.GeoJSON();
var features_TPU_11 = format_TPU_11.readFeatures(json_TPU_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TPU_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TPU_11.addFeatures(features_TPU_11);
var lyr_TPU_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TPU_11, 
                style: style_TPU_11,
                popuplayertitle: "TPU",
                interactive: true,
    title: 'TPU<br />\
    <img src="styles/legend/TPU_11_0.png" /> TPU Karang Bawang<br />\
    <img src="styles/legend/TPU_11_1.png" /> <br />'
        });
var format_MusholaMasjid_12 = new ol.format.GeoJSON();
var features_MusholaMasjid_12 = format_MusholaMasjid_12.readFeatures(json_MusholaMasjid_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MusholaMasjid_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MusholaMasjid_12.addFeatures(features_MusholaMasjid_12);
var lyr_MusholaMasjid_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MusholaMasjid_12, 
                style: style_MusholaMasjid_12,
                popuplayertitle: "Mushola & Masjid",
                interactive: true,
    title: 'Mushola & Masjid<br />\
    <img src="styles/legend/MusholaMasjid_12_0.png" /> Masjid Baitul Muslimin<br />\
    <img src="styles/legend/MusholaMasjid_12_1.png" /> Masjid Baiturrohim<br />\
    <img src="styles/legend/MusholaMasjid_12_2.png" /> Masjid Baitussalam<br />\
    <img src="styles/legend/MusholaMasjid_12_3.png" /> Masjid Nurul Huda<br />\
    <img src="styles/legend/MusholaMasjid_12_4.png" /> Mushola Al Huda<br />\
    <img src="styles/legend/MusholaMasjid_12_5.png" /> Mushola Al Mutakin<br />\
    <img src="styles/legend/MusholaMasjid_12_6.png" /> Mushola Darul Hikmah<br />\
    <img src="styles/legend/MusholaMasjid_12_7.png" /> Mushola Nurul Iman<br />\
    <img src="styles/legend/MusholaMasjid_12_8.png" /> <br />'
        });
var format_Pendidikan_13 = new ol.format.GeoJSON();
var features_Pendidikan_13 = format_Pendidikan_13.readFeatures(json_Pendidikan_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pendidikan_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pendidikan_13.addFeatures(features_Pendidikan_13);
var lyr_Pendidikan_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pendidikan_13, 
                style: style_Pendidikan_13,
                popuplayertitle: "Pendidikan",
                interactive: true,
    title: 'Pendidikan<br />\
    <img src="styles/legend/Pendidikan_13_0.png" /> SDN 01 Cingebul<br />\
    <img src="styles/legend/Pendidikan_13_1.png" /> SDN 02 Cingebul<br />\
    <img src="styles/legend/Pendidikan_13_2.png" /> SDN 03 Cingebul<br />\
    <img src="styles/legend/Pendidikan_13_3.png" /> SDN 04 Cingebul<br />\
    <img src="styles/legend/Pendidikan_13_4.png" /> SDN 05 Cingebul<br />\
    <img src="styles/legend/Pendidikan_13_5.png" /> SMP PGRI Lumbir<br />\
    <img src="styles/legend/Pendidikan_13_6.png" /> TK Pertiwi 2 Cingebul<br />\
    <img src="styles/legend/Pendidikan_13_7.png" /> <br />'
        });
var format_KelurahanDesa_14 = new ol.format.GeoJSON();
var features_KelurahanDesa_14 = format_KelurahanDesa_14.readFeatures(json_KelurahanDesa_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KelurahanDesa_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KelurahanDesa_14.addFeatures(features_KelurahanDesa_14);
var lyr_KelurahanDesa_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KelurahanDesa_14, 
                style: style_KelurahanDesa_14,
                popuplayertitle: "Kelurahan Desa",
                interactive: true,
    title: 'Kelurahan Desa<br />\
    <img src="styles/legend/KelurahanDesa_14_0.png" /> Kantor Desa Cingebul<br />\
    <img src="styles/legend/KelurahanDesa_14_1.png" /> <br />'
        });
var format_Jalan_15 = new ol.format.GeoJSON();
var features_Jalan_15 = format_Jalan_15.readFeatures(json_Jalan_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_15.addFeatures(features_Jalan_15);
var lyr_Jalan_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_15, 
                style: style_Jalan_15,
                popuplayertitle: "Jalan",
                interactive: true,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_15_0.png" /> JL. Karang Bawang<br />\
    <img src="styles/legend/Jalan_15_1.png" /> JL. Lumbir- Karangpucungr<br />\
    <img src="styles/legend/Jalan_15_2.png" /> <br />\
    <img src="styles/legend/Jalan_15_3.png" /> JL. Lumbir- Karangpucung<br />'
        });
var format_RumahKetuaRWRT_16 = new ol.format.GeoJSON();
var features_RumahKetuaRWRT_16 = format_RumahKetuaRWRT_16.readFeatures(json_RumahKetuaRWRT_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahKetuaRWRT_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahKetuaRWRT_16.addFeatures(features_RumahKetuaRWRT_16);
var lyr_RumahKetuaRWRT_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahKetuaRWRT_16, 
                style: style_RumahKetuaRWRT_16,
                popuplayertitle: "Rumah Ketua RW & RT",
                interactive: true,
    title: 'Rumah Ketua RW & RT<br />\
    <img src="styles/legend/RumahKetuaRWRT_16_0.png" /> Ketua Rt 01<br />\
    <img src="styles/legend/RumahKetuaRWRT_16_1.png" /> Ketua Rt 02<br />\
    <img src="styles/legend/RumahKetuaRWRT_16_2.png" /> Ketua Rt 03<br />\
    <img src="styles/legend/RumahKetuaRWRT_16_3.png" /> Ketua Rw 01<br />\
    <img src="styles/legend/RumahKetuaRWRT_16_4.png" /> Ketua RW 02<br />\
    <img src="styles/legend/RumahKetuaRWRT_16_5.png" /> Ketua RW 03<br />\
    <img src="styles/legend/RumahKetuaRWRT_16_6.png" /> Ketua RW 04<br />\
    <img src="styles/legend/RumahKetuaRWRT_16_7.png" /> Ketua RW 05<br />\
    <img src="styles/legend/RumahKetuaRWRT_16_8.png" /> Ketua RW 06<br />\
    <img src="styles/legend/RumahKetuaRWRT_16_9.png" /> Ketua RW 07<br />\
    <img src="styles/legend/RumahKetuaRWRT_16_10.png" /> Ketua RW 08<br />\
    <img src="styles/legend/RumahKetuaRWRT_16_11.png" /> Ketua RW 09<br />\
    <img src="styles/legend/RumahKetuaRWRT_16_12.png" /> <br />'
        });
var format_RumahSaya_17 = new ol.format.GeoJSON();
var features_RumahSaya_17 = format_RumahSaya_17.readFeatures(json_RumahSaya_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSaya_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSaya_17.addFeatures(features_RumahSaya_17);
var lyr_RumahSaya_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahSaya_17, 
                style: style_RumahSaya_17,
                popuplayertitle: "Rumah Saya",
                interactive: true,
    title: 'Rumah Saya<br />\
    <img src="styles/legend/RumahSaya_17_0.png" /> Rumah Saya<br />\
    <img src="styles/legend/RumahSaya_17_1.png" /> <br />'
        });
var format_UMKM_18 = new ol.format.GeoJSON();
var features_UMKM_18 = format_UMKM_18.readFeatures(json_UMKM_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UMKM_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UMKM_18.addFeatures(features_UMKM_18);
var lyr_UMKM_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UMKM_18, 
                style: style_UMKM_18,
                popuplayertitle: "UMKM",
                interactive: true,
    title: 'UMKM<br />\
    <img src="styles/legend/UMKM_18_0.png" /> Fiz Bengkel<br />\
    <img src="styles/legend/UMKM_18_1.png" /> Jamur Tiram <br />\
    <img src="styles/legend/UMKM_18_2.png" /> Jitao Sayur<br />\
    <img src="styles/legend/UMKM_18_3.png" /> Khitan Pak Puji<br />\
    <img src="styles/legend/UMKM_18_4.png" /> Lumbir Thirifting<br />\
    <img src="styles/legend/UMKM_18_5.png" /> Peternakan Ayam<br />\
    <img src="styles/legend/UMKM_18_6.png" /> Rizki Mart<br />\
    <img src="styles/legend/UMKM_18_7.png" /> Service Motor<br />\
    <img src="styles/legend/UMKM_18_8.png" /> Sinar Mega<br />\
    <img src="styles/legend/UMKM_18_9.png" /> SPBU Cingebul<br />\
    <img src="styles/legend/UMKM_18_10.png" /> Terapi Pijat<br />\
    <img src="styles/legend/UMKM_18_11.png" /> Toko AC<br />\
    <img src="styles/legend/UMKM_18_12.png" /> Toko Bakti Fashon<br />\
    <img src="styles/legend/UMKM_18_13.png" /> Toko Huto<br />\
    <img src="styles/legend/UMKM_18_14.png" /> Toko Kaos Custom<br />\
    <img src="styles/legend/UMKM_18_15.png" /> Toko Rak<br />\
    <img src="styles/legend/UMKM_18_16.png" /> Toko Sembako<br />\
    <img src="styles/legend/UMKM_18_17.png" /> Toko Serba Ada<br />\
    <img src="styles/legend/UMKM_18_18.png" /> Toko Titan<br />\
    <img src="styles/legend/UMKM_18_19.png" /> Warung Juan<br />\
    <img src="styles/legend/UMKM_18_20.png" /> Warung Kiwen<br />\
    <img src="styles/legend/UMKM_18_21.png" /> Yura Fashon<br />\
    <img src="styles/legend/UMKM_18_22.png" /> <br />'
        });
var format_RumahTetangga_19 = new ol.format.GeoJSON();
var features_RumahTetangga_19 = format_RumahTetangga_19.readFeatures(json_RumahTetangga_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahTetangga_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahTetangga_19.addFeatures(features_RumahTetangga_19);
var lyr_RumahTetangga_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahTetangga_19, 
                style: style_RumahTetangga_19,
                popuplayertitle: "Rumah Tetangga",
                interactive: true,
    title: 'Rumah Tetangga<br />\
    <img src="styles/legend/RumahTetangga_19_0.png" /> Bpk Adi<br />\
    <img src="styles/legend/RumahTetangga_19_1.png" /> Bpk Ahmad<br />\
    <img src="styles/legend/RumahTetangga_19_2.png" /> Bpk Basri<br />\
    <img src="styles/legend/RumahTetangga_19_3.png" /> Bpk Deman<br />\
    <img src="styles/legend/RumahTetangga_19_4.png" /> Bpk Dwi<br />\
    <img src="styles/legend/RumahTetangga_19_5.png" /> Bpk Edi<br />\
    <img src="styles/legend/RumahTetangga_19_6.png" /> Bpk Fandi<br />\
    <img src="styles/legend/RumahTetangga_19_7.png" /> Bpk Galih<br />\
    <img src="styles/legend/RumahTetangga_19_8.png" /> Bpk Gito<br />\
    <img src="styles/legend/RumahTetangga_19_9.png" /> Bpk Harun<br />\
    <img src="styles/legend/RumahTetangga_19_10.png" /> Bpk Ijan<br />\
    <img src="styles/legend/RumahTetangga_19_11.png" /> Bpk Jarun<br />\
    <img src="styles/legend/RumahTetangga_19_12.png" /> Bpk Karso<br />\
    <img src="styles/legend/RumahTetangga_19_13.png" /> Bpk Kirman<br />\
    <img src="styles/legend/RumahTetangga_19_14.png" /> Bpk Paridi<br />\
    <img src="styles/legend/RumahTetangga_19_15.png" /> Bpk Rasito<br />\
    <img src="styles/legend/RumahTetangga_19_16.png" /> Bpk Sakur<br />\
    <img src="styles/legend/RumahTetangga_19_17.png" /> Bpk Sarif<br />\
    <img src="styles/legend/RumahTetangga_19_18.png" /> Bpk Sitak<br />\
    <img src="styles/legend/RumahTetangga_19_19.png" /> Bpk Slamet<br />\
    <img src="styles/legend/RumahTetangga_19_20.png" /> Bpk Soleh<br />\
    <img src="styles/legend/RumahTetangga_19_21.png" /> Bpk Subagio<br />\
    <img src="styles/legend/RumahTetangga_19_22.png" /> Bpk Sukir<br />\
    <img src="styles/legend/RumahTetangga_19_23.png" /> Bpk Supriono<br />\
    <img src="styles/legend/RumahTetangga_19_24.png" /> Bpk Takin<br />\
    <img src="styles/legend/RumahTetangga_19_25.png" /> Bpk Toha<br />\
    <img src="styles/legend/RumahTetangga_19_26.png" /> Bpk Tohirin<br />\
    <img src="styles/legend/RumahTetangga_19_27.png" /> Bpk Torik<br />\
    <img src="styles/legend/RumahTetangga_19_28.png" /> Bpk Triono<br />\
    <img src="styles/legend/RumahTetangga_19_29.png" /> Bpk Tusiman<br />\
    <img src="styles/legend/RumahTetangga_19_30.png" /> Bpk Untung<br />\
    <img src="styles/legend/RumahTetangga_19_31.png" /> Bpk Yono<br />\
    <img src="styles/legend/RumahTetangga_19_32.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_gadm41_IDNADM_ADM_4_1.setVisible(true);lyr_Clipped_2.setVisible(true);lyr_Hutan_3.setVisible(true);lyr_RumahKepalaDesa_4.setVisible(true);lyr_RW_5.setVisible(true);lyr_Sawah_6.setVisible(true);lyr_Rt_7.setVisible(true);lyr_Clipped_8.setVisible(true);lyr_Clipped_9.setVisible(true);lyr_Lapangan_10.setVisible(true);lyr_TPU_11.setVisible(true);lyr_MusholaMasjid_12.setVisible(true);lyr_Pendidikan_13.setVisible(true);lyr_KelurahanDesa_14.setVisible(true);lyr_Jalan_15.setVisible(true);lyr_RumahKetuaRWRT_16.setVisible(true);lyr_RumahSaya_17.setVisible(true);lyr_UMKM_18.setVisible(true);lyr_RumahTetangga_19.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_gadm41_IDNADM_ADM_4_1,lyr_Clipped_2,lyr_Hutan_3,lyr_RumahKepalaDesa_4,lyr_RW_5,lyr_Sawah_6,lyr_Rt_7,lyr_Clipped_8,lyr_Clipped_9,lyr_Lapangan_10,lyr_TPU_11,lyr_MusholaMasjid_12,lyr_Pendidikan_13,lyr_KelurahanDesa_14,lyr_Jalan_15,lyr_RumahKetuaRWRT_16,lyr_RumahSaya_17,lyr_UMKM_18,lyr_RumahTetangga_19];
lyr_gadm41_IDNADM_ADM_4_1.set('fieldAliases', {'fid': 'fid', 'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_Clipped_2.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'health_fac': 'health_fac', 'depth': 'depth', 'office': 'office', 'railway': 'railway', 'operator_t': 'operator_t', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'rooms': 'rooms', 'tourism': 'tourism', 'amenity': 'amenity', 'name': 'name', 'staff_coun': 'staff_coun', 'public_tra': 'public_tra', 'width': 'width', 'access': 'access', 'bridge': 'bridge', 'smoothness': 'smoothness', 'beds': 'beds', 'covered': 'covered', 'landuse': 'landuse', 'staff_co_1': 'staff_co_1', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'healthcare': 'healthcare', 'opening_ho': 'opening_ho', 'government': 'government', 'isced_leve': 'isced_leve', 'denominati': 'denominati', 'historic': 'historic', 'status': 'status', 'aeroway': 'aeroway', 'toilets_di': 'toilets_di', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'health_f_1': 'health_f_1', 'emergency': 'emergency', 'highway': 'highway', 'water': 'water', 'surface': 'surface', 'pump': 'pump', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'health_f_2': 'health_f_2', 'layer': 'layer', 'military': 'military', 'shop': 'shop', 'medical_sy': 'medical_sy', 'addr_house': 'addr_house', 'religion': 'religion', });
lyr_Hutan_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_RumahKepalaDesa_4.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_RW_5.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Sawah_6.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Rt_7.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Clipped_8.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_Clipped_9.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'health_fac': 'health_fac', 'depth': 'depth', 'office': 'office', 'railway': 'railway', 'operator_t': 'operator_t', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'rooms': 'rooms', 'tourism': 'tourism', 'amenity': 'amenity', 'name': 'name', 'staff_coun': 'staff_coun', 'public_tra': 'public_tra', 'width': 'width', 'access': 'access', 'bridge': 'bridge', 'smoothness': 'smoothness', 'beds': 'beds', 'covered': 'covered', 'landuse': 'landuse', 'staff_co_1': 'staff_co_1', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'healthcare': 'healthcare', 'opening_ho': 'opening_ho', 'government': 'government', 'isced_leve': 'isced_leve', 'denominati': 'denominati', 'historic': 'historic', 'status': 'status', 'aeroway': 'aeroway', 'toilets_di': 'toilets_di', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'health_f_1': 'health_f_1', 'emergency': 'emergency', 'highway': 'highway', 'water': 'water', 'surface': 'surface', 'pump': 'pump', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'health_f_2': 'health_f_2', 'layer': 'layer', 'military': 'military', 'shop': 'shop', 'medical_sy': 'medical_sy', 'addr_house': 'addr_house', 'religion': 'religion', });
lyr_Lapangan_10.set('fieldAliases', {'id': 'id', 'Lapangan': 'Lapangan', });
lyr_TPU_11.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_MusholaMasjid_12.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Pendidikan_13.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_KelurahanDesa_14.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Jalan_15.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_RumahKetuaRWRT_16.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_RumahSaya_17.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_UMKM_18.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_RumahTetangga_19.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_gadm41_IDNADM_ADM_4_1.set('fieldImages', {'fid': 'TextEdit', 'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_Clipped_2.set('fieldImages', {'osm_id': '', 'osm_type': '', 'health_fac': '', 'depth': '', 'office': '', 'railway': '', 'operator_t': '', 'blockage': '', 'roof_mater': '', 'rooms': '', 'tourism': '', 'amenity': '', 'name': '', 'staff_coun': '', 'public_tra': '', 'width': '', 'access': '', 'bridge': '', 'smoothness': '', 'beds': '', 'covered': '', 'landuse': '', 'staff_co_1': '', 'diameter': '', 'access_roo': '', 'building_m': '', 'healthcare': '', 'opening_ho': '', 'government': '', 'isced_leve': '', 'denominati': '', 'historic': '', 'status': '', 'aeroway': '', 'toilets_di': '', 'waterway': '', 'parking': '', 'tunnel': '', 'building': '', 'operator': '', 'barrier': '', 'capacity': '', 'man_made': '', 'health_f_1': '', 'emergency': '', 'highway': '', 'water': '', 'surface': '', 'pump': '', 'natural': '', 'oneway': '', 'addr_stree': '', 'toilets_ha': '', 'health_f_2': '', 'layer': '', 'military': '', 'shop': '', 'medical_sy': '', 'addr_house': '', 'religion': '', });
lyr_Hutan_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_RumahKepalaDesa_4.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_RW_5.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Sawah_6.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Rt_7.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Clipped_8.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_Clipped_9.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'health_fac': 'TextEdit', 'depth': 'TextEdit', 'office': 'TextEdit', 'railway': 'TextEdit', 'operator_t': 'TextEdit', 'blockage': 'TextEdit', 'roof_mater': 'TextEdit', 'rooms': 'TextEdit', 'tourism': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'staff_coun': 'TextEdit', 'public_tra': 'TextEdit', 'width': 'TextEdit', 'access': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'beds': 'TextEdit', 'covered': 'TextEdit', 'landuse': 'TextEdit', 'staff_co_1': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'building_m': 'TextEdit', 'healthcare': 'TextEdit', 'opening_ho': 'TextEdit', 'government': 'TextEdit', 'isced_leve': 'TextEdit', 'denominati': 'TextEdit', 'historic': 'TextEdit', 'status': 'TextEdit', 'aeroway': 'TextEdit', 'toilets_di': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'health_f_1': 'TextEdit', 'emergency': 'TextEdit', 'highway': 'TextEdit', 'water': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'natural': 'TextEdit', 'oneway': 'TextEdit', 'addr_stree': 'TextEdit', 'toilets_ha': 'TextEdit', 'health_f_2': 'TextEdit', 'layer': 'TextEdit', 'military': 'TextEdit', 'shop': 'TextEdit', 'medical_sy': 'TextEdit', 'addr_house': 'TextEdit', 'religion': 'TextEdit', });
lyr_Lapangan_10.set('fieldImages', {'id': 'TextEdit', 'Lapangan': 'TextEdit', });
lyr_TPU_11.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_MusholaMasjid_12.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Pendidikan_13.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_KelurahanDesa_14.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Jalan_15.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_RumahKetuaRWRT_16.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_RumahSaya_17.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_UMKM_18.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_RumahTetangga_19.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_gadm41_IDNADM_ADM_4_1.set('fieldLabels', {'fid': 'no label', 'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_Clipped_2.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'health_fac': 'no label', 'depth': 'no label', 'office': 'no label', 'railway': 'no label', 'operator_t': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'rooms': 'no label', 'tourism': 'no label', 'amenity': 'no label', 'name': 'no label', 'staff_coun': 'no label', 'public_tra': 'no label', 'width': 'no label', 'access': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'beds': 'no label', 'covered': 'no label', 'landuse': 'no label', 'staff_co_1': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'healthcare': 'no label', 'opening_ho': 'no label', 'government': 'no label', 'isced_leve': 'no label', 'denominati': 'no label', 'historic': 'no label', 'status': 'no label', 'aeroway': 'no label', 'toilets_di': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'health_f_1': 'no label', 'emergency': 'no label', 'highway': 'no label', 'water': 'no label', 'surface': 'no label', 'pump': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'toilets_ha': 'no label', 'health_f_2': 'no label', 'layer': 'no label', 'military': 'no label', 'shop': 'no label', 'medical_sy': 'no label', 'addr_house': 'no label', 'religion': 'no label', });
lyr_Hutan_3.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_RumahKepalaDesa_4.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_RW_5.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Sawah_6.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Rt_7.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Clipped_8.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'railway': 'no label', 'blockage': 'no label', 'amenity': 'no label', 'name': 'no label', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'oneway': 'no label', 'layer': 'no label', 'natural': 'no label', });
lyr_Clipped_9.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'health_fac': 'no label', 'depth': 'no label', 'office': 'no label', 'railway': 'no label', 'operator_t': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'rooms': 'no label', 'tourism': 'no label', 'amenity': 'no label', 'name': 'no label', 'staff_coun': 'no label', 'public_tra': 'no label', 'width': 'no label', 'access': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'beds': 'no label', 'covered': 'no label', 'landuse': 'no label', 'staff_co_1': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'healthcare': 'no label', 'opening_ho': 'no label', 'government': 'no label', 'isced_leve': 'no label', 'denominati': 'no label', 'historic': 'no label', 'status': 'no label', 'aeroway': 'no label', 'toilets_di': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'health_f_1': 'no label', 'emergency': 'no label', 'highway': 'no label', 'water': 'no label', 'surface': 'no label', 'pump': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'toilets_ha': 'no label', 'health_f_2': 'no label', 'layer': 'no label', 'military': 'no label', 'shop': 'no label', 'medical_sy': 'no label', 'addr_house': 'no label', 'religion': 'no label', });
lyr_Lapangan_10.set('fieldLabels', {'id': 'no label', 'Lapangan': 'no label', });
lyr_TPU_11.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_MusholaMasjid_12.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Pendidikan_13.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_KelurahanDesa_14.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Jalan_15.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_RumahKetuaRWRT_16.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_RumahSaya_17.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_UMKM_18.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_RumahTetangga_19.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_RumahTetangga_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});