
// let feature;



// const respuestaDrive = async()=>{
//     const response = await fetch('https://script.google.com/macros/s/AKfycbxbF90WBTEsu213neYGsgbvpkoJ33OYdWjOtQViQW48rdgJdakeSRxlPSGvbWmo4Epv/exec')
//     const data = await response.json()
//    const features = []
//    data.forEach(feature => {
//     features.push({"geometry": {
//         "coordinates": [feature.Coordinates],
//         "type": feature.Type
//     },
//     "properties": {
//         "Descripcion": feature.Descripcion,
//         "Titulo": feature.Titulo,
//         "Proyecto": feature.Proyecto,
//         "Barrio": feature.Barrio,
//         "Dependencia": feature.Dependencia,
//         "Comuna": feature.Comuna,
//         "Imagen": feature.Imagen,
//     },
//     "type": "Feature"})
    
//    })
   
//    return features
// }
// const data = async ()=>{
//     const geo = await respuestaDrive()
//     console.log(geo);
//     return geo
// }

// let geojson = {
//     "type": "FeatureCollection",
//     "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    
//     "features": [
//         data()
//     ],
//     "type": "FeatureCollection"
// };


// console.log(geojson);
  





// const getDatos = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { resolve (API_URL) }, 3500);
//     });
// }

// async function fetchingData (){
//     const datosFetched = await getDatos();
// }
               
// fetchingData();



// const API_URL = "https://script.google.com/macros/s/AKfycbxbF90WBTEsu213neYGsgbvpkoJ33OYdWjOtQViQW48rdgJdakeSRxlPSGvbWmo4Epv/exec";

// let geoj;

// let geojson;

// let cabezote = `{
//     "type":"FeatureCollection",
//     "crs":{"type": "name", "properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},
//     "features": [`;

// let final = `
//     ], 
//         "type":"FeatureCollection"
//     }`;




// fetch(API_URL).then((response) => response.json()).then((datos) => {

//     let features = datos.map((datos) => 
//                 `{
//                 "geometry":{
//                     "coordinates":[
//                         ${datos.Coordinates}
//                     ],
//                     "type":"${datos.Type}"
//                 },
//                 "properties":{ 
//                     "Descripcion":"${datos.Descripcion}",
//                     "Proyecto":"${datos.Proyecto}",
//                     "Titulo":"${datos.Titulo}",
//                     "Barrio":"${datos.Barrio}",
//                     "Comuna":"${datos.Comuna}",
//                     "Imagen":"${datos.Imagen}",
//                 },
//                 "type":"Feature"
//                 }`,
//     );

//     geoj = dato;
//     console.log (dato)

    // geoj = {
    //     "type":"FeatureCollection",
    //     "crs":{"type": "name", "properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},
    //     "features": `[
    //         ${[datosProyecto]}
    //     ]`, 
    //     "type":"FeatureCollection"
    // };

// });


// setTimeout(function(){
//     // geojson = cabezote + geoj + final;
//     console.log(geoj)
// }, 5000);















// const geojson = {
//     "type": "FeatureCollection",
//     "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    
//       "features": [

//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2971774,
//                     3.5246975
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<br><br>CONVENIO NO. CD-FIP-492-2021.<br>ETAPA: PENDIENTE ACTA DE INICIO. (27/04/2022). 🟡<br>INTERVENCIÓN POR CUADRANTES (4C)<br>- NO SE COBRARÁ EL ARRIENDO DURANTE LA INTERVENCIÓN POR CUADRANTES. (IMDESEPAL).<br>PENDIENTE: CONDICIONES DE INTERVENCIÓN POR PARTE DEL CONTRATISTA.<br><br><br>Mejoramiento de la galería central, en el área de  andenes, reponer toda el área de la cubierta, adecuar la fachada, pintar los muros, realizar las reparaciones locativas en la zona de restaurantes, reposición de redes de alcantarillado, construir red contra incendio y adecuar las redes eléctricas en el área de la Galería central, con el fin de brindar a la comunidad, usuarios y comerciantes un sitio adecuado para la comercialización de los productos de mercado.",
//                 "Titulo": "GALERÍA DE PALMIRA - CORAZÓN DE CIUDAD.",
//                 "Proyecto":"Galeria",
//                 "Barrio":"Central",
//                 "Barrio":"La Trinidad",
//                 "Dependencia":"Desarrollo Institucional",
//                 "Comuna":"6",
//                 "Imagen": "https://doc-0s-2k-mymaps.googleusercontent.com/untrusted/hostedimage/g3l00dkger80g4p7g98074fgv0/c60231s730c41t11o7bpdl0le8/1661097714250/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AFzc1va9V1GofaAzNAhdz7KYQhZ0Dx1u-yNcqeAx40ispKuATuDgETfuxs3le8k6m0CEQKHQHHdKXpvYk-ISMrqvYvYTn5B7MQ6ODH6lOeF-he29F7ttmTV3Ee16Wt88V1dOMQ4LD8oTQOTpGhcoq2LBn9po8k42N6M9p2f1VGzUFd6u9RkaP9qPONpHDakgX9X_C7c?session=0&fife",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2956325,
//                     3.5385626
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "🔴🟡🟢🚦",
//                 "Proyecto": "Semaforo",
//                 "Titulo": "SEMÁFORO"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3132297,
//                     3.5469214
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0o-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/01be7769n2b3h4rr1m3raff31s/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9k_Waq0MOXy23Z6iR4V89NGjqPTn6g9BiMlQkXvgHLRVjdNEUrgD2PIJmcz_veZrJHjwlreQEjDX3JsMTtxaDdKzJmvgM1IIGg2gMzTa-pGz8eNuDK5_naHb9p9J1Hw-xJgIdVVZgBkgZa_YZZ2xXiLqFbC-ne_Phyx1lyHuYv7L6QOWOayRR7d5WO1WtAMMA?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Adecuación de las sedes educativas Antonio Lizarazo, Rosa Zárate de Peña, Harold Eder, José Manuel Groot, Vicente Escobar López y Eduardo Santos en la comuna 1. Sede Antonio Lizarazo: mantenimiento de techos, baterías sanitarias para zona deportiva y adecuación de sala de tenis de mesa. Sede Rosa Zárate de Peña: adecuación de la cubierta y alcantarillado. Sede Harold Eder: mantenimiento de techos y de red eléctrica. Sede José Manuel Groot: adecuación de baterías sanitarias y ampliación de zonas verdes. Sedes Vicente Escobar López y Eduardo Santos: mantenimiento de techos y adecuación de la red de conectividad.<br><br>ETAPA: PUBLICACIÓN DEL PROYECTO DEFINITIVO - ABRIL<br>INICIOS DE OBRA: PRINCIPIO DE JUNIO.<br>EJECUCIÓN DE LAS OBRAS: 6 MESES.",
//                 "Titulo": "PDL(C1) PROYECTO (1/6) - MEJORAMIENTO DE INFRAESTRUCTURA EDUCATIVA - IE ANTONIO LIZARAZO SEDE PRINCIPAL",
//                 "Proyecto": "PDL(C1) PROYECTO (1/6) - MEJORAMIENTO DE INFRAESTRUCTURA EDUCATIVA - IE ANTONIO LIZARAZO SEDE PRINCIPAL",
//                 "Barrio":"El Caimito",
//                 "Comuna":"1",
//                 "Presupuesto":"100.000",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.308815,
//                     3.5534485
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<br><br>Adecuación de las sedes educativas Antonio Lizarazo, Rosa Zárate de Peña, Harold Eder, José Manuel Groot, Vicente Escobar López y Eduardo Santos en la comuna 1. Sede Antonio Lizarazo: mantenimiento de techos, baterías sanitarias para zona deportiva y adecuación de sala de tenis de mesa. Sede Rosa Zárate de Peña: adecuación de la cubierta y alcantarillado. Sede Harold Eder: mantenimiento de techos y de red eléctrica. Sede José Manuel Groot: adecuación de baterías sanitarias y ampliación de zonas verdes. Sedes Vicente Escobar López y Eduardo Santos: mantenimiento de techos y adecuación de la red de conectividad.<br><br>ETAPA:",
//                 "Titulo": "PDL(C1) PROYECTO (2/6) - MEJORAMIENTO DE INFRAESTRUCTURA EDUCATIVA - IE ANTONIO LIZARAZO SEDE ROSA ZARATE DE PEÑA",
//                 "Proyecto": "PDL(C1) PROYECTO (2/6) - MEJORAMIENTO DE INFRAESTRUCTURA EDUCATIVA - IE ANTONIO LIZARAZO SEDE ROSA ZARATE DE PEÑA",
//                 "Dependencia":"Educación",
//                 "Barrio":"",
//                 "Comuna":"1",
//                 "Imagen":"https://doc-0k-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/dmo1sr03ruk9n3suh5vsvv9154/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9nbhrQxV1L8I7s0U-4Uw9Bd-fdMc4cfGgMTuqkiXXCjRVDGlHRdBtYkxHwLvtDvpfIM-hIL1ISTR17icdcPogZ2_5gyP6GYVUt_EWaiibvCE5zJqWVZ85V90o2AOASqcaF4jcAWfdXb5Ft30ibBqqqxCjPrGsUUTWMTfL4iRUrHJ9rrmUjc5ui8HFUTUiPb0w?session=0&fife",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3007381,
//                     3.5562356
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0o-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/9e9foomd1887dto7ftl2uh5kpg/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9kuH9QvMCoFiwQQWbwxz28YUkijocXgf86OGNj4LS70SHiQRIZKk4oZcs6W6aZ7dbohDj4MbDLgS7hsfkNRg89_P_3-ghyxfVPuc9yIM1y9ieeNdC_wbf498eX6HG1WGx3j91TCZKVd0-whRKmjsIlKgLXSsqnFzBL8kGKLSNMX4sleGH0IXCv_BwaDtO_a_g?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Adecuación de las sedes educativas Antonio Lizarazo, Rosa Zárate de Peña, Harold Eder, José Manuel Groot, Vicente Escobar López y Eduardo Santos en la comuna 1. Sede Antonio Lizarazo: mantenimiento de techos, baterías sanitarias para zona deportiva y adecuación de sala de tenis de mesa. Sede Rosa Zárate de Peña: adecuación de la cubierta y alcantarillado. Sede Harold Eder: mantenimiento de techos y de red eléctrica. Sede José Manuel Groot: adecuación de baterías sanitarias y ampliación de zonas verdes. Sedes Vicente Escobar López y Eduardo Santos: mantenimiento de techos y adecuación de la red de conectividad.<br><br>ETAPA:",
//                 "Titulo": "PDL(C1) PROYECTO (3/6) - MEJORAMIENTO DE INFRAESTRUCTURA EDUCATIVA - IE HAROLD EDER SEDE PRINCIPAL",
//                 "Proyecto": "PDL(C1) PROYECTO (3/6) - MEJORAMIENTO DE INFRAESTRUCTURA EDUCATIVA - IE HAROLD EDER SEDE PRINCIPAL",
//                 "Barrio":"Zamorano",
//                 "Comuna":"1",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2997895,
//                     3.5542489
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-14-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/55gp2gdmij745uosncof9mfq80/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9muLFjfBasQ7PeCs3BDxJhO8id8j8bqtn8KZB60jUeTmfNamlVzBwOcuvMsFgp2DmR8iaUpa1fb-DlIigpcqBHbo-VzVzC8ak2ApgEZwjoEPLUElIpfPHeWbBmkjmp9fP0O45hAqCsSzuEe84E2nNRxKyf5BKqdOLzbpcFGJRrpehwPnXbGlOSBvnXE6nJZbA?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Adecuación de las sedes educativas Antonio Lizarazo, Rosa Zárate de Peña, Harold Eder, José Manuel Groot, Vicente Escobar López y Eduardo Santos en la comuna 1. Sede Antonio Lizarazo: mantenimiento de techos, baterías sanitarias para zona deportiva y adecuación de sala de tenis de mesa. Sede Rosa Zárate de Peña: adecuación de la cubierta y alcantarillado. Sede Harold Eder: mantenimiento de techos y de red eléctrica. Sede José Manuel Groot: adecuación de baterías sanitarias y ampliación de zonas verdes. Sedes Vicente Escobar López y Eduardo Santos: mantenimiento de techos y adecuación de la red de conectividad.<br><br>ETAPA:",
//                 "Titulo": "PDL(C1) PROYECTO (4/6) - MEJORAMIENTO DE INFRAESTRUCTURA EDUCATIVA - IE HAROLD EDER SEDE JOSÉ MANIEL GROOT",
//                 "Proyecto": "PDL(C1) PROYECTO (4/6) - MEJORAMIENTO DE INFRAESTRUCTURA EDUCATIVA - IE HAROLD EDER SEDE JOSÉ MANIEL GROOT",
//                 "Barrio":"Zamorano",
//                 "Comuna":"1",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2921384,
//                     3.5588469
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0o-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/fhkm93fjih49ae218ijdb8p8io/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9ks2uSCEKej4rdG1jImsH3x7zUmlJHc8thbyL12rJjXlNfsBoyd55KtyMvzGc44Xl82SQbpC0GKTUNRy15T3J4siDEDn2BlF3iaUbwWw9TS7RZNpq_5wY8AYJOkoV52tK7e-CUbkN4ptgNQA4Efhf9lP3_fw-SCtvGUBT9GfG1SUXiKbsco48DgbbhcIU4wlA?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Adecuación de las sedes educativas Antonio Lizarazo, Rosa Zárate de Peña, Harold Eder, José Manuel Groot, Vicente Escobar López y Eduardo Santos en la comuna 1. Sede Antonio Lizarazo: mantenimiento de techos, baterías sanitarias para zona deportiva y adecuación de sala de tenis de mesa. Sede Rosa Zárate de Peña: adecuación de la cubierta y alcantarillado. Sede Harold Eder: mantenimiento de techos y de red eléctrica. Sede José Manuel Groot: adecuación de baterías sanitarias y ampliación de zonas verdes. Sedes Vicente Escobar López y Eduardo Santos: mantenimiento de techos y adecuación de la red de conectividad.<br><br>ETAPA:",
//                 "Titulo": "PDL(C1) PROYECTO (5/6) - MEJORAMIENTO DE INFRAESTRUCTURA EDUCATIVA - IE HAROLD EDER SEDE VICENTE ESCOBAR LOPEZ",
//                 "Proyecto": "PDL(C1) PROYECTO (5/6) - MEJORAMIENTO DE INFRAESTRUCTURA EDUCATIVA - IE HAROLD EDER SEDE VICENTE ESCOBAR LOPEZ",
//                 "Barrio":"Montecarlo",
//                 "Comuna":"1",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.288532,
//                     3.559611
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-08-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/amaqds9l3hghit35vfeh6plbbc/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9m_Hf-qZ1uYvM1qu5GMNHyvq58D4gqL-0BK6yF57ALaY4n-sBGHnNfoQwOB2bIZfzOZwiPV5oP6QZjaVdULMbtYgZ6ev1aL7ski1qyOmwBpJps4bC8VkytcJJC4E30EI5qY6JDXBz0ZG65_c3mJbrEYXVdPMyzc6XZo_0pDb5ThalBlgY8NrGcuRSZOTNHRng?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Adecuación de las sedes educativas Antonio Lizarazo, Rosa Zárate de Peña, Harold Eder, José Manuel Groot, Vicente Escobar López y Eduardo Santos en la comuna 1. Sede Antonio Lizarazo: mantenimiento de techos, baterías sanitarias para zona deportiva y adecuación de sala de tenis de mesa. Sede Rosa Zárate de Peña: adecuación de la cubierta y alcantarillado. Sede Harold Eder: mantenimiento de techos y de red eléctrica. Sede José Manuel Groot: adecuación de baterías sanitarias y ampliación de zonas verdes. Sedes Vicente Escobar López y Eduardo Santos: mantenimiento de techos y adecuación de la red de conectividad.<br><br>ETAPA: En ejecución.",
//                 "Titulo": "PDL(C1) PROYECTO (5/6) - MEJORAMIENTO DE INFRAESTRUCTURA EDUCATIVA - IE HAROLD EDER SEDE VICENTE ESCOBAR LOPEZ",
//                 "Proyecto": "PDL(C1) PROYECTO (5/6) - MEJORAMIENTO DE INFRAESTRUCTURA EDUCATIVA - IE HAROLD EDER SEDE VICENTE ESCOBAR LOPEZ",
//                 "Barrio":"Montecarlo",
//                 "Comuna":"1",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2882475,
//                     3.5284081
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0c-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/c8k2c5pte474acr20oqr74q010/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9lGRT4eLiUQ9dcWT3O5OzizdgXg_syni7jgMknXWlPre2NSk4zCKnljRud2vQdw-kp7yBiBCZ4Gb2P0Kb491v0fBeN3HKs9DCpqXP5F1nJn_rCn_jKDteVGwOodEcqsLIxloaHQBEzmZ95vBZH-uCfiVqqqKtpeBgTX6rkTzNd6ea2kpO4RVRXCkJ4JuNVKWQ?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Adecuación de dos aulas educativas en el segundo piso de la sede Alfonso López Pumarejo de la comuna 5.<br><br>ETAPA: Proceso de Adjudicación.",
//                 "Titulo": "PDL(C5) - INFRAESTRUCTURA EDUCATIVA - MEJORAMIENTO DE AMBIENTES ESCOLARES - IE ALFONSO LOPEZ PUMAREJO",
//                 "Proyecto": "PDL(C5) - INFRAESTRUCTURA EDUCATIVA - MEJORAMIENTO DE AMBIENTES ESCOLARES - IE ALFONSO LOPEZ PUMAREJO",
//                 "Barrio":"El Bosque",
//                 "Comuna":"5",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2963982,
//                     3.5179836
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-08-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/goifek0iorsteh9b4ag672b1mg/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9kHASYAzOOjJvSjkKBxHk-lVG21V-Crd9yEBVGx4_JlEZq7pjz4o9_ngu0JsNYyeK1RZGRB_rxsL50EquZpZOCA6bEUwIDwdJaJokXDPzOkzAYrj37AHfPDRxpHdTHvkJ2JlKsIaXr8Cuu7seZYE-HDlh8109n-55Aj0bSWsk409FbJoypXslsK-diXvdCT_g?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Mejorar la infraestructura del escenario deportivo del barrio Recreo, a través de la construcción de la cubierta de la cancha múltiple.<br><br>ETAPA: INICIO DE OBRA PARA AGOSTO.<br>SEMANA DEL 14-18 MARZO PUBLICACIÓN DE PLIEGO",
//                 "Titulo": "PDL(C7) - ADECUACIÓN Y MANTENIMIENTO DE PARQUES PARA PRACTICA DEPORTIVA",
//                 "Proyecto": "PDL(C7) - ADECUACIÓN Y MANTENIMIENTO DE PARQUES PARA PRACTICA DEPORTIVA",
//                 "Barrio":"El Recreo",
//                 "Comuna":"7",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.4262227,
//                     3.5848184
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0g-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/0brnbtdem3u80vuhcrlaorb288/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9nvq0QSPCKK2mwL8x1MnvCMJqT7OrCrQwbi8l8SDebfGGiuk6PVFeO3MOBcwuRl34X7dtzh7FiTlwV-_ox0psfxtRgtdpNQGu9GijQU66it6OgsOeMe4v1O7Fq_Zc7UmeSi5sMsNJrJ9tnGiL68JKzqElwrd_3ALzX45Pr6kziuWJYeJs4lfysILq5YxxwSQg?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>En Matapalo se busca ampliar la infraestructura con un nuevo salón, baños y encerramiento, más dotación para optima atención.<br>VALOR INVERSIÓN: $ 93.691.907 m<br>ETAPA: Recepción de conceptos técnicos para radicación del proceso en contratación. (01/07/22).",
//                 "Titulo": "PDL(C9) PROYECTO (1/4) - ADECUACIÓN Y MANTENIMIENTO DE HOGARES INFANTILES - MATAPALO",
//                 "Proyecto": "PDL(C9) PROYECTO (1/4) - ADECUACIÓN Y MANTENIMIENTO DE HOGARES INFANTILES - MATAPALO",
//                 "Barrio":"Matapalo",
//                 "Comuna":"9",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.4049192,
//                     3.5762096
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-14-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/qtuptgtalsq23b26ibhsfj2nck/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9lBSOZ66Vph-D4HTW5reUdmzAdmUsxKwC-U9eJE95sdI4HEALNbGVqFMieehyjB8e8QMii-Iem06aQpihBGj-z9XZYaJlX-Gw5xcx_NlXJGq2jsnHma-zSgoBM36szNOC5__x_hrq_a5oGRtoa5MkVM6oSIFWuGh7DXiT_zqLjngTThQcy89Uh1qc6UttvYZA?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Para Obando se realizará el mantenimiento de un salón de la Institución educativa destinada al Hogar Comunitario, incorporando una Cocina, baños y encerramiento en la parte exterior y entrada independiente.<br>VALOR INVERSIÓN: $ 83.841.061 m<br>ETAPA:  El proceso de adecuaciones se radica en la primera semana de marzo. (VISITA INFRA: SEMANA 14-18 MARZO)",
//                 "Titulo": "PDL(C9) PROYECTO (2/4) - ADECUACIÓN Y MANTENIMIENTO DE HOGARES INFANTILES - OBANDO",
//                 "Proyecto": "PDL(C9) PROYECTO (2/4) - ADECUACIÓN Y MANTENIMIENTO DE HOGARES INFANTILES - OBANDO",
//                 "Barrio":"Obando",
//                 "Comuna":"9",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3509528,
//                     3.5373738
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0o-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/p29a80639megk29rtiv40osjfk/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9mLq9aL_gbiy40O0SpOs_v_DJRFqIBkDTypCj5iCnwfdyw_pp6bXdX1rtw9haklk4bsAMBA1ek7k46bUzXKh9rmVOubBKPnmphW8I2ginPN_TNVzZ8Eq6t6-sJ7QBLkBhRR9gGI2C_0sj7LnlCLzzjClHV2algfX425niA9kk6BkdySE6XCx1qWwtflQyAoKg?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>En La Herradura se espera mejorar la infraestructura nueva destinada al funcionamiento del Hogar Comunitario y asimismo dotarlo.<br>VALOR INVERSIÓN: $ 14.122.360 m<br>ETAPA: El proceso de adecuaciones se radica en la primera semana de marzo. (VISITA INFRA: SEMANA 14-18 MARZO)",
//                 "Titulo": "PDL(C9) PROYECTO (3/4) - ADECUACIÓN Y MANTENIMIENTO DE HOGARES INFANTILES - LA HERRADURA",
//                 "Proyecto": "PDL(C9) PROYECTO (3/4) - ADECUACIÓN Y MANTENIMIENTO DE HOGARES INFANTILES - LA HERRADURA",
//                 "Barrio":"La Herradura",
//                 "Comuna":"9",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.4380781,
//                     3.5115048
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-00-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/ckpuca2i38acelcpgd5rc25n7c/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9mPbrk4eGdsfe-UUGcUPLymXMVhFYfsz_3Zs48wQHYUBWF2sV4RqsE1HdJbii8mfh9nnrjoassHBuHgbW4HEZUsAtGdlxzTjb_MgKjBLDSOqnyyG069kjnuz-Y3G_8QAZVy0IUBKgECK7HqKdnNOAbJxA9wTaVI4ApeAAH0cfXG87EMN37JCHtA1yAtcbDG9A?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>En Palmaseca se está evaluando la opción de realizar gestiones para la adecuación de salones al interior de la institución educativa de Palmaseca.<br>VALOR INVERSIÓN: $ 90.000.000 m<br>ETAPA: El proceso de adecuaciones se radica en la primera semana de marzo. (VISITA INFRA: SEMANA 14-18 MARZO)<br>VISITA: MARTES 15 DE MARZO A PALMASECA.",
//                 "Titulo": "PDL(C9) PROYECTO (4/4) - ADECUACIÓN Y MANTENIMIENTO DE HOGARES INFANTILES - PALMASECA",
//                 "Proyecto": "PDL(C9) PROYECTO (4/4) - ADECUACIÓN Y MANTENIMIENTO DE HOGARES INFANTILES - PALMASECA",
//                 "Barrio":"Palmaseca",
//                 "Comuna":"9",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3154244,
//                     3.4831896
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-04-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/aak5sq7ejdq9vvskk8d8lmftl0/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9lpkBBzaARMStbUtshKVfOOOen8uBNe-rwZd-RxmcTdvwNVwkcQzAzuQyQI1uq11QG00seFw84CspxZ7wKoRobN25Mk7we9Nc7PCHOIWh0H7vlG_D-nRYhercwYYoDj9Gim_x84IEs58HrNHIKD8NIU9Ny6jUkv1xmIB7KoD-dh7iVXlPKDlwfUnWRuEj2hqg?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Mejorar la recolección y disposición de aguas residuales en el corregimiento Bolo La Italia, a través de la construcción de redes de alcantarillado que cubra el tramo comprendido entre la Institución Educativa José Manuel Salcedo sede Luis Eduardo Nieto Caballero hasta el sector Los Domínguez.<br><br>ETAPA: ESTUDIOS Y DISEÑOS. OBRA PARA INICIAR EN SEPTIEMBRE DURACIÓN 4 MESES.",
//                 "Titulo": "PDL(C11) - MEJORAMIENTO DE ALCANTARILLADO",
//                 "Proyecto": "PDL(C11) - MEJORAMIENTO DE ALCANTARILLADO",
//                 "Barrio":"Bolo La Italia",
//                 "Comuna":"11",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2091276,
//                     3.4893358
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0s-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/j97ap9tal4qimoule1p5k8j9bg/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9m9yhKLe5i8ntA9qsTVkGXK52V-6yNknK9bUdlUwielIiyYwbuENgH9mLpXEJe_TagLoc6spu5POLCkFka2bQZ_CzhiXvk5U3dDnXBPHzy_9lVgWMKge533KYubblcU-aBntSA486VzCQgwUlJEtxLPGS_vsbI9yP9U16oSEMBvYt89keX5RQ0DK9UB-i_uXg?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Mejorar las vías terciarias mediante la construcción de cunetas en algunos de estos tramos: Chontaduro: Aguazul a cancha del Chontaduro (1.300 m) Buitrera - Parque del Amor al Puente HH (600 m) La Zapata: Desde donde inicia la segunda placa huella hasta el puente de la Honda (179 m) Aguaclara: Entrada a Aguaclara – Brisas de Aguaclara (1.000 m) Vereda el Líbano: Las dos curvas de la vereda El Arenillo- El Chalet (380 m)<br>ADJUDICADO: 8 DE ABRIL.<br>ETAPA: EJECUCIÓN DE OBRA (29 DE JUNIO 35% DE AVANCE DE LA OBRA).🟢",
//                 "Titulo": "PDL(C14) - CUNETAS PARA VÍAS",
//                 "Proyecto": "PDL(C14) - CUNETAS PARA VÍAS",
//                 "Barrio":"Ayacucho",
//                 "Comuna":"14",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.0838148,
//                     3.6192476
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0o-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/r47jnkov120pddl4tg400et7qo/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9kmSgP5KEpMLN5x6gAvRBCBiyHr5Dmh0vhbO0NiL6JcnpuHaCIrX1ce13MWlWKBWII3uckDfw0mdcxXy4Ru9GMkQCNsd0pn5Fz8uu23sbwXw294DewBjQpZyt8xGibkMzOjPt3fE_8L4_q3Phoqg2AO7wTX48FJsdlny70ZWK50aU-wGGR2du7BYLkPgLcIGw?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Fortalecer la producción pecuaria en 160 predios de pequeños productores, a través del apoyo con el suministro semoviente, insumos y materiales. Nota: Por decisión de la comunidad, el proyecto no será sometido a votación sino que se socializará el perfil construido a partir de la necesidad identificada en el taller de priorización.<br><br>VALOR: 450.000.000 m. (900.000.000 m con VALLE INN).<br><br>ETAPA: CONVENIO FIRMADO CON VALLE INN 🟢<br>AMPLIACIÓN DE FECHA PARA POSTULACIÓN DE LAS PROPUESTAS HASTA EL 30 DE OCTUBRE.",
//                 "Titulo": "PDL(C15) - CAPITAL SEMILLA PARA PROYECTOS PRODUCTIVOS AGROPECUARIOS",
//                 "Proyecto": "PDL(C15) - CAPITAL SEMILLA PARA PROYECTOS PRODUCTIVOS AGROPECUARIOS",
//                 "Barrio":"Toche",
//                 "Comuna":"15",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2000958,
//                     3.5545972
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0k-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/b7hjaqa5q2rc1q23uncep1ehjc/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9myZUo-EDaGKN9wuv7RIonR2YlVhG9oQLvMCC5tmtS9MC9iG7mzFEYwpZdu8rpiVjCIQqHMB8FCgSUjUgxGmhrzTGOGR62ZNbkfr9fgunhP2i4F9bK-vz9lfYMwVuLskT3RwkvHl2hxduvKEpQckkDchrrz1DhUyqBlBv-cBqt98stEydegmeFRc6DYOHpf5Q?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Mejoramiento de la infraestructura física y dotación de los puestos de salud de Potrerillo, Tenjo y La Quisquina: Adecuación de muros y cubierta, instalaciones eléctricas e hidrosanitarias y dotación.<br><br>ETAPA: ESTUDIOS PREVIOS Y AJUSTE DE PRESUPUESTOS<br>INICIO DE OBRA; JUNIO",
//                 "Titulo": "PDL(C16) PROYECTO (1/3) - ADECUACIÓN Y MANTENIMIENTO A PUESTOS DE SALUD - PROTERILLO (INTERVENIDO POR FISCALÍA Y PROCURADURÍA)",
//                 "Proyecto": "PDL(C16) PROYECTO (1/3) - ADECUACIÓN Y MANTENIMIENTO A PUESTOS DE SALUD - PROTERILLO (INTERVENIDO POR FISCALÍA Y PROCURADURÍA)",
//                 "Barrio":"Potrerillo",
//                 "Comuna":"16",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.171142,
//                     3.5207979
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0c-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/pmtqo2q809cavl2tq1g7mc09b4/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9lGM0aZOyfV2t8A-ZGY3CupMkHlwDK1JTY5S8f4CxPFyyn0ykfw7JX8vx9jHn8tNQ_FP8jp6UfRSnZfurRCiW1mK3jZY_MVqriX_VSyQhHJiw0O-BsyVKy9Vf3yoE2EucTJOa41SbF5aTskewuoJR1gYn0ucVxEY9EpXquaBXVVxVqvxHcvCpYHPt7ngx52Kw?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Mejoramiento de la infraestructura física y dotación de los puestos de salud de Potrerillo, Tenjo y La Quisquina: Adecuación de muros y cubierta, instalaciones eléctricas e hidrosanitarias y dotación.<br><br>ETAPA: ESTUDIOS PREVIOS Y AJUSTE DE PRESUPUESTOS<br>INICIO DE OBRA: JUNIO",
//                 "Titulo": "PDL(C16) PROYECTO (2/3) - ADECUACIÓN Y MANTENIMIENTO A PUESTOS DE SALUD - TENJO (INTERVENIDO POR FISCALÍA Y PROCURADURÍA)",
//                 "Proyecto": "PDL(C16) PROYECTO (2/3) - ADECUACIÓN Y MANTENIMIENTO A PUESTOS DE SALUD - TENJO (INTERVENIDO POR FISCALÍA Y PROCURADURÍA)",
//                 "Barrio":"Tenjo",
//                 "Comuna":"16",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2009786,
//                     3.5837467
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0g-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/pbip9oi1r5ivkun8clkg2je3rs/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9mMJMLDkNmbamnH_zLeuWWeqLyteyiUSaPH9NB0JtrAqZgwaqXOe6dkKmwzWWCh918Fz-BNkhzg6NUEgMDP0xXQlYxr08Vclm2iQCIgmNQTOFllNinVYtVcBAFqHi-Dvvj7nA2E2ZNOES3FXnOA3a85IaQW0YRPW3cQins2Dyu-VL2PUQ38t0k7OOKYGbJMdQ?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Mejoramiento de la infraestructura física y dotación de los puestos de salud de Potrerillo, Tenjo y La Quisquina: Adecuación de muros y cubierta, instalaciones eléctricas e hidrosanitarias y dotación.<br><br>ETAPA: ESTUDIOS PREVIOS Y AJUSTE DE PRESUPUESTOS<br>INICIO DE OBRA: JUNIO",
//                 "Titulo": "PDL(C16) PROYECTO (3/3) - ADECUACIÓN Y MANTENIMIENTO DE PUESTOS DE SALUD - LA QUISQUINA (INTERVENIDO POR FISCALÍA Y PROCURADURÍA)",
//                 "Proyecto": "PDL(C16) PROYECTO (3/3) - ADECUACIÓN Y MANTENIMIENTO DE PUESTOS DE SALUD - LA QUISQUINA (INTERVENIDO POR FISCALÍA Y PROCURADURÍA)",
//                 "Barrio":"La Quisquina",
//                 "Comuna":"16",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2972231,
//                     3.5471377
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<br>Cl. 55 #29a-35, Palmira, Valle del Cauca<br><br>La Casa de las Mujeres Empoderadas es un centro de transformación, donde se generan nuevas oportunidades de equidad de género a partir del conocimiento. La prevención y atención de la violencia de género también es uno de los pilares de nuestra casa. Puedes consultar información sobre la oferta de talleres, capacitaciones y programas escribiendo a la dirección de correo electrónico <a href='mailto:integracion.social@palmira.gov.co'>integracion.social@palmira.gov.co</a>",
//                 "Proyecto": "Casa de Mujeres Empoderadas de Palmira",
//                 "Titulo": "Casa de Mujeres Empoderadas<br>de Palmira",
//                 "Barrio":"Mirriñao",
//                 "Comuna":"2",
//                 "Imagen":"https://doc-14-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/8qoqk6niovech669ioaqpg4irc/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9ma_FmqzDgp9wzP3Arq14tKj-jadrPdUZIDqtjKEQb-pHFvS2hoNk9HoLt76OUEcgYNOdku25zvhmJW6ySsUUtd1GnkqFiNv4JojoC9vzqb3mvpKiVu1TuaGD2X_KvZEQsBV-XyJ40U--X3_Uh467iO4XsqhpmIzgeeEOk4-gn6B7UCTN7sSSZ_Hh26tmpg3Fo?session=0&fife",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3034567,
//                     3.5026556
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<br>Dirección:<br>Calle 5°, Palmira, Valle del Cauca<br><br>Este será un Colegio de 10, el cual beneficiará alrededor de 960 niños y jóvenes. Con una inversión de 11.000 millones de pesos, el colegio cuenta con 26 aulas nuevas para preescolar, básica y media, laboratorio integrado, aula de bilingüismo, salón múltiple, comedor, cocina, zona administrativa, 44 baterías sanitarias nuevas y dos canchas deportivas, entre otros ambientes para el aprendizaje.<br><br>Conoce más sobre el estado de la obra ingresando a <a href='https://palmira.gov.co/noticias/desde-el-megacolegio-del-sur-la-alcaldia-y-el-ministerio-se-comprometieron-con-la-educacion-de-palmira/' target='_Blank'>https://palmira.gov.co/noticias/desde-el-megacolegio-del-sur-la-alcaldia-y-el-ministerio-se-comprometieron-con-la-educacion-de-palmira/</a>",
//                 "Proyecto": "Megacolegio",
//                 "Titulo": "MEGACOLEGIO DEL SUR",
//                 "Barrio":"Tulipanes de la Italia",
//                 "Comuna":"7",
//                 "Imagen": "https://doc-0o-2k-mymaps.googleusercontent.com/untrusted/hostedimage/g3l00dkger80g4p7g98074fgv0/ijk357j15oetuchhqbqac359k4/1661097714250/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AFzc1vYuELvqNH4gAehiRoHOmyq3Q_BYXls86Fll6Cl6XSJZm8bFWLrypgjHhEFk7LPyGFCQCm1cTj3N3gG9GRrjGNz4Zze7whYnXU2rJZPlqxMWTF39dRODnh-FOofsID0aO5Atwaaa0DotLqGx1yYYiRZmwEy4NHBBWkD_ZYExSufz4waatHUV_nX7U0p86koDUY0?session=0&fife",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3005282,
//                     3.5416955
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0g-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/b6n2l8qtunqvplc5m7r9v62rlk/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9kHmvHa50YvzM9yVeRSZiYCHggdsBGIRcaukC13DtSntqTp0xFiLA6n3VCIjxA2Tm5KhiyYh90_Bx_ZtpxBwn-d5cgCGlNmhk7fFZIvB9LsoHuv4ePpfWldBIC-ukcc-B6jHgDxJjIts1HFIHhpSkroh8bjKEcKYJkb4lE5HaiTBavAOt1MZRFMU8Qd7z9jvuo?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>ETAPA: EJECUCIÓN 51.7%<br>VALOR INVERSIÓN:: $ 71.260.897 m",
//                 "Titulo": "MEJORAMIENTO CUBIERTAS EDUCATIVAS (1/5) - IE SAN VICENTE - SEDE ROSA VIRGINIA",
//                 "Proyecto": "MEJORAMIENTO CUBIERTAS EDUCATIVAS (1/5) - IE SAN VICENTE - SEDE ROSA VIRGINIA",
//                 "Barrio":"Estonia",
//                 "Comuna":"2",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3120062,
//                     3.5419163
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-08-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/4cm1mon3u8463vfpukmt32tbmk/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9mWqD9mFRAqV5d3cKFf-8vRXta4Y3dfWyIsksWmErDr0zDIjKI8suk6CHbNYh4oLC4X0o8uohGrFw2brTBhGN5xy5YQExBXW3D7ryeOCv_nG3tEspaqZ3GCuHkR-qMOLCuzGtgWGAZO1gyEhBPNNUHgiBOkJzcUCkIBaxty3UMKiN8ubVZWlfm8mhLwYXXvqWc?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>ETAPA: EJECUCIÓN 44.85%<br>VALOR INVERSIÓN: $ 74.783.148 m",
//                 "Titulo": "MEJORAMIENTO CUBIERTAS EDUCATIVAS (2/5) - IE JUAN PABLO II",
//                 "Proyecto": "MEJORAMIENTO CUBIERTAS EDUCATIVAS (2/5) - IE JUAN PABLO II",
//                 "Barrio":"Industrial",
//                 "Comuna":"2",
//                 "Presupuesto":"1.000.000.000"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3110773,
//                     3.5373931
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0o-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/13q9i6khrq8t1ml0pvghpa1v5s/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9mNC6kYzKaEJNA3h0p8x2Z_4_4KtRLC03dKGkuX5O6GWRUOLvffi9YLhi4JzQfgyejJsxcZCHormDeJmmdkO9kyK1wrOm6oBWNHNbu83WKFi15VPg4WMIvJTcnFWIFZ8-sR0m_IAzJsqN0dQCFfBGZpQ1Awpgs82iCS1Wk0SfF0Q8P-h55Yx4vMwxK-f3iBKMM?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>ETAPA: EJECUCIÓN 44%<br>VALOR INVERSIÓN: $ 75.912.637 m",
//                 "Titulo": "MEJORAMIENTO CUBIERTAS EDUCATIVAS (3/5) - IE JORGE ELIECER GAITAN",
//                 "Proyecto": "MEJORAMIENTO CUBIERTAS EDUCATIVAS (3/5) - IE JORGE ELIECER GAITAN",
//                 "Titulo": "MEJORAMIENTO CUBIERTAS EDUCATIVAS (3/5) - IE JORGE ELIECER GAITAN",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2799242,
//                     3.5313016
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-00-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/mj9f7ee19jd574sfu3ojtid0ak/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9lZgc-YlTf8ibcWDoVtX_VHqzPpqWogh088Il1tbMf-hdL4oDOmpb1dYF5DnGxk43xdUY9zVBC9r5uETR1dsed80kPArBI45d1mZbp9961DwE7122zG0Kl6dqO-pLHTAMZtAK8hHdFi2kEuR_xacebJppoOp9KRQDdtK6uX9poB62UOoNjX2KUn-Y9BC3A_T7A?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>ETAPA: EJECUCIÓN 73.18%<br>VALOR INVERSIÓN: $ 118.612.579 m",
//                 "Titulo": "MEJORAMIENTO CUBIERTAS EDUCATIVAS (4/5) - IE MERCEDES ABREGO - SEDE PALMERAS",
//                 "Proyecto": "MEJORAMIENTO CUBIERTAS EDUCATIVAS (4/5) - IE MERCEDES ABREGO - SEDE PALMERAS",
//                 "Barrio":"Palmeras",
//                 "Comuna":"5",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3023199,
//                     3.5356689
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-10-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/b1uqju683vvpkrkofm86jr92ag/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9nmnNtwmcUKwmmKzJFM4eshu7rstzRx9dK0vuXk_MVP3i9yN-CK_HUFRoL2DUQwv0JsLSkN8V82J2Gg--l0iFRWRBfSa4VjHZGjWZJBqBtJzT32qovxGVeaxZAGBipHrWIfdoNQ0-jGRGyR5RKkdP6HQsjVzWGIHjCezHpd4r3sKIYnVSUTWDVbaDv5TmAVvtU?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>ETAPA: EJECUCIÓN 40.91%<br>VALOR INVERSIÓN: $ 89.174.016 m",
//                 "Titulo": "MEJORAMIENTO CUBIERTAS EDUCATIVAS (5/5) - IE JULIO CESAR ARCE",
//                 "Proyecto": "MEJORAMIENTO CUBIERTAS EDUCATIVAS (5/5) - IE JULIO CESAR ARCE",
//                 "Barrio":"Alfonso López",
//                 "Comuna":"4",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2896837,
//                     3.5568652
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "GESTOR/A: Diana Lugo<br>Calle 70 # 26a - 172, Salón comunal<br>BENEFICIARIOS: 60 PERSONAS.<br>OBSERVACIONES: CON EQUIPO DE COCINA.<br>ESTADO: FUNCIONANDO.",
//                 "Titulo": "(1/20) COMEDOR COMUNITARIO MONTECLARO - MONTE-RESISTENCIA.",
//                 "Proyecto": "(1/20) COMEDOR COMUNITARIO MONTECLARO - MONTE-RESISTENCIA.",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3052812,
//                     3.5537185
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "GESTOR/A: Pachito - Rolando - Fabián Salazar<br>Carrera 35a # D 64a - 08<br>BENEFICIARIOS: 45 PERSONAS.<br>OBSERVACIONES: CON EQUIPO DE COCINA.<br>ESTADO: FUNCIONANDO.",
//                 "Titulo": "(2/20) COMEDOR COMUNITARIO ZAMORANO - LA SANGRE DE CRISTO TIENE PODER.",
//                 "Proyecto": "(2/20) COMEDOR COMUNITARIO ZAMORANO - LA SANGRE DE CRISTO TIENE PODER.",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.305532,
//                     3.5482972
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "GESTOR/A: Julia Palacios<br>Calle 57D # 34E - 55<br>BENEFICIARIOS: 40 PERSONAS.<br>OBSERVACIONES: SIN EQUIPO DE COCINA.<br>ESTADO: FUNCIONANDO.",
//                 "Titulo": "(3/20) COMEDOR COMUNITARIO BOSQUES DEL EDÉN - SN.",
//                 "Proyecto": "(3/20) COMEDOR COMUNITARIO BOSQUES DEL EDÉN - SN.",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3120088,
//                     3.5481976
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "GESTOR/A: Zulma Gisela Montaño<br>Calle 58 # 41 - 03<br>BENEFICIARIOS: 55 PERSONAS.<br>OBSERVACIONES: CON EQUIPO DE COCINA.<br>ESTADO: FUNCIONANDO.",
//                 "Titulo": "(4/20) COMEDOR COMUNITARIO VILLA DEL ROSARIO - ASOMUJERES NEGRAS.",
//                 "Proyecto": "(4/20) COMEDOR COMUNITARIO VILLA DEL ROSARIO - ASOMUJERES NEGRAS.",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3102606,
//                     3.5494722
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "GESTOR/A: Claudia Alzate<br>Cra 38a 58c-55<br>BENEFICIARIOS: 40 PERSONAS.<br>OBSERVACIONES: CON EQUIPO DE COCINA.<br>ESTADO: FUNCIONANDO.",
//                 "Titulo": "(5/20) COMEDOR COMUNITARIO BICENTENARIO - AVANCEMOS.",
//                 "Proyecto": "(5/20) COMEDOR COMUNITARIO BICENTENARIO - AVANCEMOS.",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3056358,
//                     3.5496278
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "GESTOR/A: Argenis<br>Calle 59a # 34e - 79<br>BENEFICIARIOS: 40 PERSONAS.<br>OBSERVACIONES: SIN EQUIPO DE COCINA.<br>ESTADO: FUNCIONANDO.",
//                 "Titulo": "(6/20) COMEDOR COMUNITARIO AV. LA CARBONERA - SN.",
//                 "Proyecto": "(6/20) COMEDOR COMUNITARIO AV. LA CARBONERA - SN.",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3123878,
//                     3.5525753
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "GESTOR/A: Sandra Lerma<br>Calle 61b # 42 - 110<br>BENEFICIARIOS: 40 PERSONAS.<br>OBSERVACIONES: SIN EQUIPO DE COCINA.<br>ESTADO: FUNCIONANDO.",
//                 "Titulo": "(7/20) COMEDOR COMUNITARIO MOLINO 100 - PEQUEÑOS DETALLES.",
//                 "Proyecto": "(7/20) COMEDOR COMUNITARIO MOLINO 100 - PEQUEÑOS DETALLES.",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2753094,
//                     3.540506
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "GESTOR/A: Luz Elena López<br>Carrera 7#43A-77<br>BENEFICIARIOS: 65 PERSONAS.<br>OBSERVACIONES: CON EQUIPO DE COCINA.<br>ESTADO: FUNCIONANDO.",
//                 "Titulo": "(8/20) COMEDOR COMUNITARIO ORLIDIA Y CRISTALES - AFRORLIDIA.",
//                 "Proyecto": "(8/20) COMEDOR COMUNITARIO ORLIDIA Y CRISTALES - AFRORLIDIA.",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3088173,
//                     3.5330992
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "GESTOR/A: Andrea Rodas <br>Carrera 39 - Calle 35 y 36<br>BENEFICIARIOS: 50 PERSONAS.<br>OBSERVACIONES: SIN EQUIPO DE COCINA.<br>ESTADO: FUNCIONANDO.",
//                 "Titulo": "(9/20) COMEDOR COMUNITARIO EMILIA - SN.",
//                 "Proyecto": "(9/20) COMEDOR COMUNITARIO EMILIA - SN.",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3059471,
//                     3.5359612
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "GESTOR/A: Jhon Hawer González Gómez <br>Caseta Comunal Loreto.<br>BENEFICIARIOS: 50 PERSONAS.<br>OBSERVACIONES: SIN EQUIPO DE COCINA.<br>ESTADO: FUNCIONANDO.",
//                 "Titulo": "(10/20) COMEDOR COMUNITARIO LORETO - ASOCIACIÓN DE RECICLADORES VILLA DE LAS PALMAS.",
//                 "Proyecto": "(10/20) COMEDOR COMUNITARIO LORETO - ASOCIACIÓN DE RECICLADORES VILLA DE LAS PALMAS.",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2902015,
//                     3.5258469
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "GESTOR/A: Dagoberto Roa<br>Calle 30 # 17-51<br>Caseta Comunal Loreto.<br>BENEFICIARIOS: 45 PERSONAS.<br>OBSERVACIONES: SIN EQUIPO DE COCINA.<br>ESTADO: FUNCIONANDO.",
//                 "Titulo": "(11/20) COMEDOR COMUNITARIO LA COLOMBINA - TIERRA DE REFUGIO CANAAN.",
//                 "Proyecto": "(11/20) COMEDOR COMUNITARIO LA COLOMBINA - TIERRA DE REFUGIO CANAAN.",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2987956,
//                     3.5221946
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "GESTOR/A: Yolanda González Flórez <br>Carrera 27 # 24 - 58<br>BENEFICIARIOS: 50 PERSONAS.<br>OBSERVACIONES: CON EQUIPO DE COCINA.<br>ESTADO: FUNCIONANDO.",
//                 "Titulo": "(12/20) COMEDOR COMUNITARIO LAS DELICIAS - RENACER DE LAS DELICIAS.",
//                 "Proyecto": "(12/20) COMEDOR COMUNITARIO LAS DELICIAS - RENACER DE LAS DELICIAS.",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3990515,
//                     3.6157902
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "GESTOR/A: Felipe Pito<br>Calle 10 # 15 - 385, Discoteca Zona Libre<br>BENEFICIARIOS: 50 PERSONAS.<br>OBSERVACIONES: CON EQUIPO DE COCINA.<br>ESTADO: FUNCIONANDO.",
//                 "Titulo": "(13/20) COMEDOR COMUNITARIO ROZO CENTRO POBLADO - LA PRIMAVERA.",
//                 "Proyecto": "(13/20) COMEDOR COMUNITARIO ROZO CENTRO POBLADO - LA PRIMAVERA.",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.4112672,
//                     3.6174023
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "GESTOR/A: Felipe Pito<br>Callejón La Marina SN 170 Casa 01.<br>BENEFICIARIOS: 50 PERSONAS.<br>OBSERVACIONES: SIN EQUIPO DE COCINA.<br>ESTADO: FUNCIONANDO.",
//                 "Titulo": "(14/20) COMEDOR COMUNITARIO ROZO RURAL DISPERSO - SN.",
//                 "Proyecto": "(14/20) COMEDOR COMUNITARIO ROZO RURAL DISPERSO - SN.",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.4750708,
//                     3.4544526
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "GESTOR/A: Padre Jorge <br>Calle 93 Carrera 7ma (Parroquia Cristo Rey)<br>BENEFICIARIOS: 65 PERSONAS.<br>OBSERVACIONES: CON EQUIPO DE COCINA.<br>ESTADO: FUNCIONANDO.",
//                 "Titulo": "(15/20) COMEDOR COMUNITARIO JUANCHITO URB. LA PEREIRA - PARROQUIA CRISTO REY.",
//                 "Proyecto": "(15/20) COMEDOR COMUNITARIO JUANCHITO URB. LA PEREIRA - PARROQUIA CRISTO REY.",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.4665232,
//                     3.4595439
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "GESTOR/A: Sandra<br>Carrera 28 # 95 - 27<br>BENEFICIARIOS: 50 PERSONAS.<br>OBSERVACIONES: SIN EQUIPO DE COCINA.<br>ESTADO: FUNCIONANDO.",
//                 "Titulo": "(16/20) COMEDOR COMUNITARIO JUANCHITO URB. CIUDAD DEL CAMPO - SN.",
//                 "Proyecto": "(16/20) COMEDOR COMUNITARIO JUANCHITO URB. CIUDAD DEL CAMPO - SN."
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.4792355,
//                     3.5466023
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "GESTOR/A: Kevin Daniel Salazar <br>Vereda Los Piles.<br>BENEFICIARIOS: 65 PERSONAS.<br>OBSERVACIONES: CON EQUIPO DE COCINA.<br>ESTADO: FUNCIONANDO.",
//                 "Titulo": "(17/20) COMEDOR COMUNITARIO LOS PILES - EL PUNTO DEL SABOR.",
//                 "Proyecto": "(17/20) COMEDOR COMUNITARIO LOS PILES - EL PUNTO DEL SABOR.",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2776717,
//                     3.6048125
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "GESTOR/A: José García <br>BARRIO AZUL - AMAIME.<br>BENEFICIARIOS: 50 PERSONAS.<br>OBSERVACIONES: SIN EQUIPO DE COCINA.<br>ESTADO: FUNCIONANDO.",
//                 "Titulo": "(18/20) COMEDOR COMUNITARIO AMAIME - SN.",
//                 "Proyecto": "(18/20) COMEDOR COMUNITARIO AMAIME - SN.",
//                 "Barrio":"Azul",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2288933,
//                     3.5645105
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "GESTOR/A: Clara Inés Rivas<br>LA CASCADA - TIENDA NUEVA.<br>BENEFICIARIOS: 45 PERSONAS.<br>OBSERVACIONES: CON EQUIPO DE COCINA.<br>ESTADO: FUNCIONANDO.",
//                 "Titulo": "(19/20) COMEDOR COMUNITARIO TIENDA NUEVA - LA CASCADA.",
//                 "Proyecto": "(19/20) COMEDOR COMUNITARIO TIENDA NUEVA - LA CASCADA.",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2210477,
//                     3.5752259
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "GESTOR/A: María Monsalve<br>Carrea 10 # 5-39 Río Nima.<br>BENEFICIARIOS: 45 PERSONAS.<br>OBSERVACIONES: SIN EQUIPO DE COCINA.<br>ESTADO: FUNCIONANDO.",
//                 "Titulo": "(20/20) COMEDOR COMUNITARIO TIENDA NUEVA CENTRO POBLADO - AFRONIMA.",
//                 "Proyecto": "(20/20) COMEDOR COMUNITARIO TIENDA NUEVA CENTRO POBLADO - AFRONIMA.",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2909263,
//                     3.5566952
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<br>Dirección:<br>Carrera 27a No. 69c – 63, Barrio Alameda.<br><br>Trámites:<br>- Radicación de solicitud de nueva encuesta.<br>- Inclusión de personas.<br>- Retiros de personas.<br>- Modificación de la ficha, con actualización de datos.<br><br>Horarios:<br>Lunes - Viernes de 8:00 a 12:00 y de 14:00 a 17:00.<br><br>Encuentra los canales de atención ingresando a <a href='https://planeacion.palmira.gov.co/sisben/' target='_Blank'>https://planeacion.palmira.gov.co/sisben/</a>",
//                 "Proyecto": "Sisben",
//                 "Titulo":"OFICINA SISBEN NORTE - BARRIO ALAMEDA",
//                 "Barrio":"Alameda",
//                 "Comuna":"1",
//                 "Imagen":"https://doc-14-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/3ep505bvberrrtor44ufqio0qk/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9mwaZITj9ck2--a2mwVrLfPHJ-kvP6OiWNeSIewsygvPb3cAVh-uH3_Jkv2vtQnvl-EXZ_o54sIv29RmJDhMrsZzra5O1vxWnngHdDy9D4meAQJZOpnu7E79GLgf7lVL7nsZj9Q697wmkVJR82u0H-G0n0BHy8NGcgNR66_ICe_tuK1F0jm9bNi2Xiz0XhRA-Q?session=0&fife",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2969306,
//                     3.5528956
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0o-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/vq9uqb7kv2u0nn80armc19ftks/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9lZIMLjlIhTEozZhUwx_pAhPK68RHEwRnOCwSS89VJab2fwEPensNKHHVs9bwL94gfOpeI5VAef_-eMpTgkowxDqe9xJq2IpL5GfSWXISyj-9yMrhMFaKdYN2v2Y9bmw5O_efreASdp55JX24WWsMkPBjH_K3ZJ1C1dOtL06rYvH9hT0UMDNnNcA3wjyCnUzRU?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>ETAPA:",
//                 "Titulo": "PARQUE DE LA CARBONERA",
//                 "Proyecto": "PARQUE DE LA CARBONERA",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2408605,
//                     3.542893
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0c-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/4s038amk107m3n417ha68oek2c/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9mKv8qNnHriPHTojIytMFxXNNkVKeVO35OqgZMPSl5Zhno_tSlqJZcfjbUF1hELyl6qj02DYxpsy7xiAQmITn3XMZR2CIPdcL32zUs9N6PBfgM1oy3Splf03WZ0XRJoEIDuMNiRlvvfvGNna61M2oQN1WIgAlmGkete8T2c6l2pPs0TtW4nea1Mn_CIoYpE6d4?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>ETAPA:",
//                 "Titulo": "PAVIMENTACIÓN VÍA BARRANCAS",
//                 "Proyecto": "PAVIMENTACIÓN VÍA BARRANCAS",
//                 "Barrio":"Barrancas",
//                 "Comuna":"13",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.4720617,
//                     3.4531294
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-10-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/74vllupo1sej0dqtgpqmeabs2s/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9nKtBr6y5Uaxpi5ynYFib7BFyJ6Rki5gTPKs-UJB_YyEINPkz6JI68XWeoT2wiLh7OrzirZTQL5U8TWk7CVwUZAreIu_vmjvWtKSApbLm3zbtdXn3E3Fxz-NlsRYRAO-miT-GLQlbAbsfXo7nWfVixpxqMUrKLs7MK4-i9yTKJHTVC47m_K77cgf5m2o3DkyhA?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>",
//                 "Titulo": "VÍA CIUDAD DEL CAMPO",
//                 "Proyecto": "VÍA CIUDAD DEL CAMPO",
//                 "Barrio":"Juanchito",
//                 "Comuna":"10",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2668078,
//                     3.6072101
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0c-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/h9k0qj8g1ddcs30f28lnq0gcv4/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9kxWDQQ6WJ5HHLna7DqO41d_MMTKUpKzYf4tMuBDJmeMqnJ5PquJqRhhVorq3V0UDC8NdRpuVbKtjfAQwI9XaIPD378nOZvxSsJZ5JQkaB5TFY_Amih8EpGi-HaBqToQJAaneaLbZn3eimOX9_WqnQXbpNhzvCSF7BZp9OnRcNnwEBh37W2HmlIzvAbq3eaK3s?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>ETAPA: PRECONSTRUCCIÓN",
//                 "Titulo": "PAVIMENTACIÓN AMAIME-BOYACÁ",
//                 "Proyecto": "PAVIMENTACIÓN AMAIME-BOYACÁ",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.297163,
//                     3.5381164
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0s-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/eaj8uio83d6qa8okpsvvlet3kc/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9ne9sVicDUanbXCv1VpcckFjd04blJOj2DT8ZzgGvcxd_YEXh6VTyOG3uJacnBuixdKDDyXUJV0Ta7gV7HwqUozm_CHkaIoL-fVozi6KmHfI2VJpBusMXCtGipB4aPUmy1ZETcXV0wpFJIRvVzIoS5tcVGoOGMNwqwpFwkF_PaexSWiIjAOf9SgYx3y_zxrG6s?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Construcción de la intersección Versalles (glorieta y deprimido) en la calle 42 con carrera 28, hace parte del Paso Nacional Palmira.<br><br>LONGITUD: 5,6 KM.<br>ETAPA: ESTUDIOS Y DISEÑO.",
//                 "Titulo": "MALLA VIAL (1/8): Intersección Versalles",
//                 "Proyecto": "MALLA VIAL (1/8): Intersección Versalles"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3066953,
//                     3.5388886
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-04-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/j93lmjvg8bu0pi97aslfavopqc/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9mSKL7__LbKD38RU_FrAAISF7vLrE-nrW4gMfopspZ3vXCFQm_-WTtE5IVOWYhbUnd5Q9ynBhVpwxAiTUWyEmcdglMGPjxEfHFGA7t7orntIvWfYCpYV3G3tts_H0g8zHOM9t6TRUtrYwRjuy3S1CW7_UwIuKZGwFFMrR_WLcFqJOQ7Myu2_lWx6bo0C3PqPUU?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Construcción de glorieta de la calle 42 con carrera 35, hace parte del Paso Nacional Palmira.<br><br>LONGITUD: 5,6 KM.<br>ETAPA: ESTUDIOS Y DISEÑO.",
//                 "Titulo": "MALLA VIAL (2/8): Intersección Parque del Azúcar.",
//                 "Proyecto": "MALLA VIAL (2/8): Intersección Parque del Azúcar.",
//                 "Barrio":"Jorge Eliécer Gaitán",
//                 "Comuna":"4",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3808899,
//                     3.5151833
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-14-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/09e3pill2jm30j1tiqe8cbqfps/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9l5Yf9tyjpl8nhGee3lha_dU2OdprVCjyGQhD0kAmCbJzSt92NJnep6nVegT9tUdPcom6JoRfm8mvqVRSTAAmwZ3N2pR6WdoC8ZLM9Ko9uE0Cd9RZndRGtIRASRXhHhXNcNx-rp1xkdioXyzQmm8su_3K0HeDEvqkN0FFLUNlx6eWk4uwfuDwIXaN2f52xnEl0?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Doble calzada Cali – Palmira puesta a punto, iluminación y mantenimiento periódico durante la concesión.<br><br>LONGITUD: 19.9 KM. <br>ETAPA: ESTUDIOS Y DISEÑO.",
//                 "Titulo": "MALLA VIAL (3/8): Recta Cali – Palmira: Iluminación",
//                 "Proyecto": "MALLA VIAL (3/8): Recta Cali – Palmira: Iluminación",
//                 "Barrio":"",
//                 "Comuna":"9",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.4290292,
//                     3.5036899
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-04-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/gkc6pet50iq03kr0vihbg698s8/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9m8xSEKxv_T3xfBRRyp3EzZQ-iH2O3IkHh-DMKY3Qzt6hrCWtqWS7Xr___ZPTfkAQenKOLUW2mxF5iSCDDSWuiDt6kCqXrLVCCuiacu3g2j3VlM1ZYgFTtKFFZ7ZG3xffov_tcwLlc08uh-IZwEiZgU7EktQrKdWcDWhdg4-Ncd-VUdcv-suma8341HwGNt5hM?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Obras a realizar: Retorno exclusivo para motocicletas (para ambos sentidos de circulación) en el ingreso a Guanabanal.<br><br>ETAPA: ESTUDIOS Y DISEÑO.",
//                 "Titulo": "MALLA VIAL (4/8): Recta Cali – Palmira: Retorno.",
//                 "Proyecto": "MALLA VIAL (4/8): Recta Cali – Palmira: Retorno."
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.423829,
//                     3.5048432
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0s-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/34mptoiq3lspvlkfiv4vcgtq8s/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9kCKGVeXJaWdO2ZESuhtxKq752SruMKCM7T--aYJDbPJ5dSqoPHcBV1l3jDzV-IWVYbtVtftSj_t3GG5sNhBQysMFuC2Z_wVL2ES1ufuBv0cvajXm-sGjghL6Yih6iIfgTg49PqAOd6Yh0lhBTw2KAr4BMG-_U6-DrQMQBv6Y3CSFANXKDNsZQJppXz57pWNWs?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Obras a realizar: Retorno exclusivo para motocicletas (para ambos sentidos de circulación) en el ingreso a Guanabanal.<br><br>ETAPA: ESTUDIOS Y DISEÑO.",
//                 "Titulo": "MALLA VIAL (4/8): Recta Cali – Palmira: Retorno.",
//                 "Proyecto": "MALLA VIAL (4/8): Recta Cali – Palmira: Retorno.",
//                 "Barrio":"",
//                 "Comuna":"9",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.4101214,
//                     3.5082736
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0c-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/kdge0ftgvmvdmijkfqr338b294/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9nYI16a46CIltBodcQpGiN7A-pO5wkLGWhIG2hWH8JnH6JCwMR3rxLn_3ZBMFP9SkzfIwjeafNL9hMQ8piqm_aqwk4wAz-OPVZxP1S5jsudkQS20M86O5kb0swW_IHDRwZ0XEQ6IQP-IHNmuFUYBDg_qhV7Ew-bllwls73-voMTT_UCoUBfTOV8WsxthKPK9fA?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Obras a realizar: Ampliación de la plataforma para la implementación de dos carriles adicionales que permitan el correcto acceso/salida del Estadio Monumental de Palmaseca.<br><br>ETAPA: ESTUDIOS Y DISEÑO.",
//                 "Titulo": "MALLA VIAL (5/8): Recta Cali – Palmira: Accesos Estadio",
//                 "Proyecto": "MALLA VIAL (5/8): Recta Cali – Palmira: Accesos Estadio"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3179523,
//                     3.5015342
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0o-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/kl23nojnvktb6uhr1dvnm92lmk/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9m_dGnKpSZVBVngCy-bLp8bOrXnhcMjGdKepPOHQoZ61ZVmg0A8fkJxMBlWHkgGFUMB0HX0Wz3WqSEwdhAW9R6_I9r7GyXmu0GthAiahsQDHLrW8LtdNdI_IVdepzcvcsVdFj925vIWZMK3oAPnhXCtJOaLnl9wbgDmQi1Oq2FI51Vq58zu4CZCyorG_1mxGQY?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Se conservan las condiciones geométricas existentes. Se realiza rehabilitación del tramo a nivel de pavimento y señalización.<br><br>LONGITUD: 3.249 KM.<br>ETAPA: ESTUDIOS Y DISEÑO.",
//                 "Titulo": "MALLA VIAL (6/8): Salida a Candelaria: Universidad Nacional – “La Y” de Villa Rica",
//                 "Proyecto": "MALLA VIAL (6/8): Salida a Candelaria: Universidad Nacional – “La Y” de Villa Rica"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.278257,
//                     3.5243688
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-00-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/gdj4grir2l31gi6d50leue5o5c/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9mwYWuZ0OfoVEouym02d-L-yff15dbdCCdMrIGWFni5f9mZ7O8OwVo2mIIh-IbzYJlwUO4GD365FQ3gtc0GBkAM2mJW2ZkTFu376s4ykhTIjIfuCgfODg5RTCdNm1Z0MH4iKOxSrzOpE_M7AKqod994j_6rzT8UMMPwm1FEkR7JfAERzwgjJOltR8lE4xNhdQA?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Construcción de doble calzada (continuación de la doble calzada existente hasta la intersección Bulldozer), incluye intersección.<br><br>LONGITUD: 0.94 KM.<br>ETAPA: ESTUDIOS Y DISEÑO.",
//                 "Titulo": "MALLA VIAL (7/8): Salida Palmira – Pradera",
//                 "Proyecto": "MALLA VIAL (7/8): Salida Palmira – Pradera",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3731263,
//                     3.5563652
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0c-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/72ss9vfalmt977i3vbn2vdtct0/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9krlhttBMaBsftm7BIHpXiJRSPWZJCZTYymiC-ShZai4wua5Z1rIKNImTMbSi0kUkviVJ6lSir-3rQCPzjtqlYV_ah7S6KPYZMGrlDkvAlMZU5bYxjqTK0ufzxmCS4xqD0JGRdyfbnYDWxVQFiVDTdAEHjtwh1AMF7SLCfSF4J6rR2LDs2IVW2lTT3KwqczuHY?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Construcción pavimento en concreto asfáltico, doble sentido de circulación incluye señalización.<br><br>LOGITUD: 14 KM.<br>ETAPA: ESTUDIOS Y DISEÑO.",
//                 "Proyecto": "MALLA VIAL (8/8): Vía La Herradura – Matapalo",
//                 "Titulo": "MALLA VIAL (8/8): Vía La Herradura – Matapalo",
//                 "Barrio":"La Herradura",
//                 "Comuna":"9",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2661298,
//                     3.6073352
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "ETAPA: INICIO DE OBRA EL 9 DE MAYO",
//                 "Titulo": "ALCANTARILLADO BOYACÁ-AMAIME",
//                 "Proyecto": "ALCANTARILLADO BOYACÁ-AMAIME",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.4741412,
//                     3.5034669
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "PLANTA DE TRATAMIENTO DE AGUAS RESIDUALES. <br><br>ETAPA: ESTUDIOS Y DISEÑOS.",
//                 "Proyecto": "ESTUDIOS Y DISEÑOS DE ALCANTARILLADO RESIDUAL Y PLUVIAL - LA DOLORES",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2933925,
//                     3.5169275
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "ETAPA: Tubería instalada: 100% 🟢<br>Cámaras: 25% 🟡<br>Sumideros: 0% 🔴<br>Pavimento: 0% 🔴",
//                 "Proyecto": "OPTIMIZACIÓN ALCANTARILLADO PLUVIAL KRA 21 CLL 20-16. SEMBRADOR.",
//                 "Barrio":"El Sembrador",
//                 "Comuna":"7",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2582921,
//                     3.5846313
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "ESTUDIOS DE OPTIMIZACIÓN PARA LA CONSTRUCCIÓN DE LA PLANTA DE TRATAMIENTOS DE AGUAS RESIDUALES.<br><br>ETAPA: ESTUDIOS Y DISEÑO.",
//                 "Proyecto": "CONSTRUCCIÓN DE PLANTA DE TRATAMIENTO DE AGUAS RESIDUALES (1/2) - LA PAMPA Y AGUACLARA",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2359423,
//                     3.5036289
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "ESTUDIOS DE OPTIMIZACIÓN PARA LA CONSTRUCCIÓN DE LA PLANTA DE TRATAMIENTOS DE AGUAS RESIDUALES.<br><br>ETAPA: PENDIENTE ESTUDIOS Y DISEÑO POR PARTE DE LA EMPRESA CONSULTORA (20 DE JUNIO DE 2022).",
//                 "Proyecto": "CONSTRUCCIÓN DE PLANTA DE TRATAMIENTO DE AGUAS RESIDUALES (2/2) - LA PAMPA Y AGUACLARA",
//                 "Barrio":"Aguaclara",
//                 "Comuna":"14",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.425527,
//                     3.5851923
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "CONSISTE EN CAMBIO DE TUBERÍAS E INSTALACIÓN DE RED PRINCIPAL Y DOMICILIARIAS.<br><br>CALLEJONES: NIEVA, SUR, ZANJÓN NORTE.<br><br>ETAPA: TERMINADO. FASE DE CONFORMACIÓN DE VÍA.",
//                 "Proyecto": "REPOSICIÓN ALCANTARILLADO - MATAPALO",
//                 "Barrio":"Matapalo",
//                 "Comuna":"9",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2098149,
//                     3.4873224
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "ALCANTARILLADOS RURALES.<br><br>LONGITUD: 530 ML.<br>ETAPA: EJECUCIÓN DE OBRA. (INICIO 1 DE JUNIO DE 2022).",
//                 "Proyecto": "ALCANTARILLADOS RURALES 2022 (1/13)  - LA BUITRERA Y CHONTADURO",
//                 "Barrio":"Ayacucho",
//                 "Comuna":"14",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.388331,
//                     3.6146377
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "ALCANTARILLADOS RURALES.<br>CALLEJONES: FERROZA, VILLA ANGELICA, CAICEDO VASQUEZ. CONSTRUCCIÓN DE ALCANTARILLADO.<br><br>LONGITUD TOTAL: 530 ML.<br>ETAPA: ESTRUCTURACIÓN.",
//                 "Proyecto": "ALCANTARILLADOS RURALES 2022 (2/13) - ROZO",
//                 "Barrio":"Rozo",
//                 "Comuna":"8",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3865137,
//                     3.6341895
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "ALCANTARILLADO RURAL.<br>CALLEJÓN: ROA CASTRILLÓN.<br><br>LONGITUD: 70 ML.<br>ETAPA: ESTRUCTURACIÓN.",
//                 "Proyecto": "ALCANTARILLADOS RURALES 2022 (3/13) - ACEQUÍA",
//                 "Barrio":"La Acequia",
//                 "Comuna":"8",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.4226901,
//                     3.6207264
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "ALCANTARILLADOS RURALES.<br>CALLEJONES: EL PAISA, GALARZA I, GALARZA II, JULITA, EL FUERE, EL SILENCIO, LA PALMA, LOS PRADOS, MERA. <br><br>LONGITUD TOTAL: 1524 ML. <br>ETAPA: ESTRUCTURACIÓN.",
//                 "Proyecto": "ALCANTARILLADOS RURALES 2022 (4/13) - LA TORRE",
//                 "Barrio":"La Torre",
//                 "Comuna":"8",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2731246,
//                     3.6070922
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "ETAPA: EVALUACIONES.",
//                 "Proyecto": "ESTUDIOS Y DISEÑOS PARA LA CONSTRUCCIÓN DEL ACUEDUCTO DE ACUEDUCTO DE AMAIME. ",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2215283,
//                     3.5714817
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "CONSTRUCCIÓN DE ALCANTARILLADO Y PTAR, CORREGIMIENTO AMAIME.<br><br>ETAPA: ESTUDIOS Y DISEÑO.",
//                 "Proyecto": "ESTUDIOS Y DISEÑOS DE ALCANTARILLADO Y PTAR - TIENDA NUEVA.",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3151123,
//                     3.4704887
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "CONSTRUCCIÓN DE ALCANTARILLADO Y PTAR, BOLO LA ITALIA.<br><br>ETAPA: ESTUDIOS Y DISEÑO.",
//                 "Proyecto": "ESTUDIOS Y DISEÑOS DE ALCANTARILLADO Y PTAR - BOLO LA ITALIA.",
//                 "Barrio":"Bolo La Italia",
//                 "Comuna":"11",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2961705,
//                     3.5386259
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "NOTA: SE ADELANTARÁ UN PROCESO PARA CONTRATAR LOS MATERIALES PARA LA CONSTRUCCIÓN DE LAS VIVIENDAS.<br><br>ETAPA: VERIFICACIÓN DE LOS REQUISITOS DE POSTULANTES AL BENEFICIO.",
//                 "Proyecto": "MEJORAMIENTO DE VIVIENDA URBANA Y RURAL DEL MUNICIPIO DE PALMIRA - (ESPACIO URBANO POR DEFINIR).",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2078722,
//                     3.5552865
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "NOTA: SE ADELANTARÁ UN PROCESO PARA CONTRATAR LOS MATERIALES PARA LA CONSTRUCCIÓN DE LAS VIVIENDAS.<br><br>ETAPA: VERIFICACIÓN DE LOS REQUISITOS DE POSTULANTES AL BENEFICIO.",
//                 "Proyecto": "MEJORAMIENTO DE VIVIENDA URBANA Y RURAL DEL MUNICIPIO DE PALMIRA - (ESPACIO RURAL POR DEFINIR).",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2948145,
//                     3.5393058
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "ETAPA: PUBLICADO EN SECOP. INICIO EVALUACIÓN.",
//                 "Proyecto": "SUMINISTRO DE MATERIALES PARA REALIZAR EL MANTENIMIENTO DE VÍAS TERCIARIAS, ESTABILIZACIÓN DE TALUDES, CONSTRUCCIÓN DE ANDENES, CICLOINFRAESTRUCTURA Y DE VÍAS URBANAS Y RURALES PAVIMENTADAS DEL MUNICIPIO DE PALMIRA.",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.1138286,
//                     3.5452368
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "ETAPA: ESTRUCTURACIÓN.",
//                 "Proyecto": "CONSTRUCCIÓN Y ESTUDIOS Y DISEÑO DEL MURO DE CONTENCIÓN - VEREDA LA NEVERA.",
//                 "Barrio":"Tenjo",
//                 "Comuna":"16",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2055314,
//                     3.4944845
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "Estudios y diseños para la construcción del puente vehicular ubicado en el corregimiento de Chontaduro, dado el alto grado de deterioro de la estructura, el volumen de vehículos que pasa por la zona, la falta de información frente al proceso constructivo del puente actual y su diseño, se debe demoler y reconstruir.<br><br>ETAPA: ESTRUCTURACIÓN DE LOS ESTUDIOS Y DISEÑO (29 DE JUNIO DE 2022).",
//                 "Proyecto": "ESTUDIOS Y DISEÑOS A NIVEL CONSTRUCTIVO DEL PUENTE VEHICULAR - CORREGIMIENTO DE CHONTADURO. ",
//                 "Barrio":"Ayacucho",
//                 "Comuna":"14",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.1997498,
//                     3.4831824
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "ETAPA: SE ENCUENTRA EN SECOP.",
//                 "Proyecto": "CONSTRUCCIÓN DE CUNETAS EN LA COMUNA 14 DEL MUNICIPIO DE PALMIRA.",
//                 "Barrio":"",
//                 "Comuna":"14",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3911662,
//                     3.6141347
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "LONGITUD: 156 ML.<br>ETAPA: TERMINADO.",
//                 "Proyecto": "REPOSICIÓN ALCANTARILLADO (1/2) - ECHEVERRY",
//                 "Barrio":"Rozo",
//                 "Comuna":"8",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3906405,
//                     3.613337
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "LONGITUD: 209 ML.<br>ETAPA: TERMINADO.",
//                 "Proyecto": "REPOSICIÓN ALCANTARILLADO (2/2) - CALLEJÓN RESTREPO.",
//                 "Barrio":"Rozo",
//                 "Comuna":"8",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.4390588,
//                     3.5120408
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "LONGITUD: 209 ML.<br>ETAPA: 65% DE EJECUCIÓN.",
//                 "Proyecto": "INSTALACIÓN TUBERÍA (1/3) - CALLEJÓN VERGARA. ",
//                 "Barrio":"Palmaseca",
//                 "Comuna":"9",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.4403971,
//                     3.5105853
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "LONGITUD: 106,95 ML.<br>ETAPA: 50% DE EJECUCCIÓN.",
//                 "Proyecto": "INSTALACIÓN TUBERÍA (2/3) - CALLEJÓN MEDINA. ",
//                 "Barrio":"Palmaseca",
//                 "Comuna":"9",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.4358376,
//                     3.5133914
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "LONGITUD: 119 ML.    <br>ETAPA: 0% DE EJECUCCIÓN.",
//                 "Proyecto": "INSTALACIÓN TUBERÍA (3/3) - CALLEJÓN SALITRE",
//                 "Barrio":"Palmaseca",
//                 "Comuna":"9",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.4237852,
//                     3.4841868
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "LONGITUD: 384 ML.<br>ETAPA: 70% DE EJECUCCIÓN.",
//                 "Proyecto": "REPOSICIÓN Y ALCANTARILLADO - CALLE 2DA - GUANABANAL",
//                 "Barrio":"Guanabal",
//                 "Comuna":"10",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.4249198,
//                     3.4840288
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "LONGITUD: 138,56 ML. <br>ETAPA: 80% DE EJECUCCIÓN.",
//                 "Proyecto": "REPOSICIÓN Y ALCANTARILLADO - KRA 12 - GUANABANAL",
//                 "Barrio":"Guanabal",
//                 "Comuna":"10",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.4236055,
//                     3.4844733
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "LONGITUD: 115 ML.<br>ETAPA: 0% DE EJECUCCIÓN.",
//                 "Proyecto": "REPOSICIÓN Y ALCANTARILLADO - KRA 10 - GUANABANAL. ",
//                 "Barrio":"Guanabal",
//                 "Comuna":"10",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.287344,
//                     3.5230316
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "URBANIZACIÓN PAPAYAL, PALMIRA.<br>CONSTRUCCIÓN DE BARRERA DE CONTENCIÓN Y REGULACIÓN TIPO TANQUE SUBTERRANEO CON SELDAS PLASTICAS.<br>PRESUPUESTO APROX: 1674523 M<br>ETAPA: ESTRUCTURACIÓN.",
//                 "Proyecto": "CONTROL DE INUNDACIÓN CALLE 27 ENTRE CARRERA 13 A 14",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3052397,
//                     3.5351539
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0g-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/cfuaq6upnvouai3ps54df3bido/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9lwsFcnrAd7Ov3rWU9SgjIX7PcV9X1DlTTc-QcfP_9qRqFsy0LDXiId0eIHSPYIRM0Twz9IOzg1IZaPpI7KC2GToHV7cscj-TNQHIHl-hRfo8hthesnCB37DEaoZ3zwptpjYSNTyyYpby-D5QKrD2JXUjn9U-s8Omvhr5NjD5A4tWV00d8N6h4Gcf6Mh3lZEpQ?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>La reposición de estas redes permitirá:<br>- Contribuir a la conservación del recurso hídrico en la región. <br>- Reducción de los Índices de Agua No Contabilizada - IANC.<br>- Mejorar la gestión operacional en aspectos técnicos, ambientales y comerciales.<br><br>Longitud total de red a reponer: 3015 metros<br>Inversión primer grupo: $1.019.146.322,76<br>Ejecución del contrato: 92% (Corte febrero) 🟢<br>Fecha de terminación: 24 de marzo de 2022 (Informe de interventoría febrero). Se requirió una ampliación de algunos días, así que se tiene previsto culminar a mediados de abril.",
//                 "Proyecto": "Grupo 1 - Contrato 003-2021 - Barrios: Jorge Eliécer Gaitán, Alfonso López, Loreto y Colombia.",
//                 "Barrio":"Jorge Eliécer Gaitán",
//                 "Barrio":"Colombia",
//                 "Barrio":"Alfonso López",
//                 "Barrio":"Loreto",
//                 "Comuna":"4",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3076879,
//                     3.5347824
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0k-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/dn7e9mo4eblndbcrt8rn3mm89k/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9n6SUhWA6DwtYzUzuaY1teHQiQTxINTRUyNIuzdirr60z6w1oAsQZwjyOtInKcyPGJluMMtgAnoJYQ4bvKHPr3o0I8oMmwSOtkwZI5fWzgZpyVju9pgxD5-4DyvdliBSvacTIwDou37d15Uebyc3xCD_F50icMkK8ePyaEbOw5BAH_DAAdS2Iah55RwFRlL2ZM?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>La reposición de estas redes permitirá:<br>- Contribuir a la conservación del recurso hídrico en la región.<br>- Reducción de los Índices de Agua No Contabilizada - IANC.<br>- Mejorar la gestión operacional en aspectos técnicos, ambientales y comerciales.<br><br>Longitud total de red a reponer: 2180 metros<br>Inversión primer grupo: $1.148.359.012,245<br>Ejecución del contrato: 58% (Con corte a 27/04/2022) 🟢<br>Inicio: 11 de enero de 2022.<br>Fecha de terminación: 11 de mayo de 2022.",
//                 "Proyecto": "Grupo 2 - Contrato 011 - 2021 - Barrio: La Emilia.",
//                 "Barrio":"La Emilia",
//                 "Comuna":"3",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3048966,
//                     3.5509009
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-00-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/1f8pq5uhjno173tpb2ijfmcch8/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9kHqqUbxhICSRw7Lt1UI6d-N-UsWTZrs7bLiv5uPi_pf64_QeVBGfQGTaHXfoDSbZQlw6kqFsow7cv55-pzkF30lGwzaFwTm5lxRRe0ft07F3-WA8OrpaW-lVZDXoWf9eYsNJt7ytSAmLB7pvClxckkN8w70twDM_fWohiER8jDIBqnJklvnUdJjAf3cz3s-1s?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Convenio interadministrativo Alcaldía de Palmira - Findeter.<br>Contrato: “EJECUCIÓN DE ESTUDIOS, DISEÑOS, CONSTRUCCIÓN Y PUESTA EN<br>FUNCIONAMIENTO DE UN SACÚDETE RECREO DEPORTIVO UBICADO EN LA<br>URBANIZACIÓN RESERVA DE ZAMORANO EN EL MUNICIPIO DE PALMIRA<br>DEPARTAMENTO DE VALLE DEL CAUCA\"<br><br>ETAPA: Ejecución de obra.<br><br><img src=\"https://doc-0c-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/svmatjg9pkhld15ao4bfqkrp9c/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9lW1_yubi3gWw4RnUDdLlpBNK72WjU1_7j8HA8tPPJYWalOvBNwfSBZRyDZnKwHaGw3RcDeC-M4B3AiOBMPWbtIpylk54rneZ_6vocEe_urNTe5ecniodrDhUrnsbHl4OEhb59pZv51XJN0P658uvpEbRK8ws5gZFPxJtoQ8eJpTouRYz1Q8ir2IxlbH-sJars?session=0&fife\" height=\"200\" width=\"auto\" />",
//                 "Proyecto": "Sacúdete Recreo Deportivo RESERVAS DE ZAMORANO - FINDETER",
//                 "Barrio":"REserva de Zamorano",
//                 "Comuna":"1",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2994681,
//                     3.5236228
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0c-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/01q5m95e43c1stfibt6dulpis4/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9l7KRDzsE3sv3GdmNQBxkoLkuOB6hxqHQiBwbNxzviTfFV37fIpwUXZ_JJnaR5DmhwXNlW6VAidPC4-iHzYmBzPBKVcyuudGmKKBolZgRWE-cVpe0n4wBg2t5JhInZxHLR-CR2A7FRXa9YMieQOBnPWiKAsRXBZwK2sQyHcLdiDrh1EDXdXhRU-vGiFb_DHa-w?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>",
//                 "Proyecto": "PLAN BACHEO PRO",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3024158,
//                     3.5285184
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-04-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/se0itpvjq77ggj4pp2uv9mst28/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9keFtUZTcjqNrYmVv5uODVH3HL2i3zHHhGkQvIXcbC8fNFw9_1IKzHkwaUEt0HCjivmoErJzeNR3VCcxwzI2Pp8WCFQA5wkmn0ibaN0cR3OmE3X3ieXXSfR9iq0ZdY97vpTILeXbkTcdYjwLhErfb8OZEXlIAhAn7ALrHg1ecpq4_ukb_u8Jz2njrjvMXbsm-o?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>",
//                 "Proyecto": "PLAN BACHEO PRO",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2985854,
//                     3.5287586
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0s-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/j7pip7c0q6muqnav77mgi9v7cg/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9lbhNkZa_aVKBB61yvMkYT40iPC64WeaNKIsQNyy1GDFg1aRKeMDg05KLNdfmKh0hrLAOltk4MHuBmtAPAlEyzPukHKJDCLjX80sECgkoO3n7TEaz0vyaeE9pNar7xfPUBcEhEMpYXzBK5OEiyVVShcTWS7lU5A_0V8x1gbOVpqBY7ZmdPqc3zwmGtSrXEC_Ng?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>",
//                 "Proyecto": "PLAN BACHEO PRO",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2990425,
//                     3.5279587
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0k-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/6je661imf4pni6dd723e7i1ff0/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9ntg3wperPCQ8o9o_19gd7zHxI_fCWWe9sZ1kWTc5p1CNxLc1jxxSMdKOYIcyF9n7GnVogx2kVefU9EXfmGNg8C7XKm1Od9sbv2M2Y-51kxMP-IDwZzXfSeNh5WiStDZ5Q2BxHtFTIozIObRC1kJMHhL82LZL1wyns-ZhOjYKHySRWYZPiCCmLK3AQrD3bHSFw?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>",
//                 "Proyecto": "PLAN BACHEO PRO",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.299993,
//                     3.5258021
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-00-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/fata84vhjt7fa78gkondphr6k4/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9nr7MFdBecE8eGhrQbJeDZlGu5kWoTUmrLNi3XTeKcXnsDGSJnaxoxFlfLwUpa1aGM9FbESO0RiAsFWuijtpQic6TW44U_NJ2gQH3xIiLFhPW8gMa36cY94tg_INb9NUfVOhquykJQRC6uID_76PdMEIEe0aIJoTtJ2z929qPpFs393Q0RHKHZJFKsARgukxRU?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>",
//                 "Proyecto": "PLAN BACHEO PRO",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2998131,
//                     3.5245336
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-10-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/7nj3q1d207r4us8d8ds5a4u3js/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9nuFLPIBLkb5Ic9ldRH-Sf_9xOsFab1Mbu2amVYPqYH66HXnQNAmP8qmsT66tYBj0rSUu0UvhD3hCnu40qHSAHofnW_DLXNo2DDM-3TRnotp2LDQYHEywLNVMIpvNBPR-anrT18Yt6g7EXZ8ebCAVVyU9L4lojwq3DZkFhS6vit4-c9A71SR9gBW1Mx4PTv1Fs?session=0&fife\" height=\"200\" width=\"auto\" /><br><br><br><br><img src=\"https://doc-0c-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/jj8e975vi1mrhntt0alb74s4f8/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9lLFaCi8NsSFwYfNEtC8oJJBQS29aJ3z3n_0-DxS2WPngp_HjEO-AiBoXhULvCNG5bWdVETW3DGs-zUHGRf-XEqYgoWUI_P9oAmjJpXhqd7q4CWabtAt1_avXJUkkuPA1_cqR8_UuSfxtA4p2RKSZLr-JjvK-1Z131bI4yzIh2-weqgj8F3BqIq6Fy0RqwUw9A?session=0&fife\" height=\"200\" width=\"auto\" />",
//                 "Proyecto": "PLAN BACHEO PRO",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3132566,
//                     3.5048571
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-10-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/7546b206a5ja19ecbi2smiutcc/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9msvJFw21LqssoG-ehVJSBXZeyBHbDBSA3d60ZA8T_oZg4bzZJKfG6ku7hFNJLJgvSDjY-KLramKojMc7yhlzuZszZRZ9EVU0V65oh4YZzvmB3ECkkQEvHs_rKj2j5L4TKie7kePEmVxHuvifWFHqEUoSewYCExJ-8ZOBGiCnP279os0CyR5SLhoVZ0zun7_Nk?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>CONVENIO INTERADMINISTRATIVO No. 085 DE 2022, CELEBRADO ENTRE<br>LA FINANCIERA DEL DESARROLLO TERRITORIAL S.A. - FINDETER – Y EL<br>MUNICIPIO DE PALMIRA, VALLE DEL CAUCA<br><br>Contrato “INTERVENTORÍA INTEGRAL (ADMINISTRATIVA,<br>FINANCIERA, CONTABLE, AMBIENTAL, SOCIAL, JURÍDICA Y TÉCNICA) A<br>LA EJECUCIÓN DE ESTUDIOS, DISEÑOS, CONSTRUCCIÓN Y PUESTA EN<br>FUNCIONAMIENTO DE UN SACUDETE RECREO DEPORTIVO INTEGRAL<br>UBICADO EN LA URBANIZACIÓN ALDEA CAMPESTRE ETAPA VII EN EL<br>MUNICIPIO CANDELARIA Y UN SACUDETE RECREO DEPORTIVO EN LA<br>URBANIZACIÓN CHAPINERO SUR EN EL MUNICIPIO DE PALMIRA<br>DEPARTAMENTO DE VALLE DEL CAUCA.”<br><br>ETAPA: Etapa 1 - Consultoría. Fase 1 y 2 Estudios y Diseños. <br><br><img src=\"https://doc-0c-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/6r0r0l1oq26tb0eo7cd1iq6k24/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9mN2lB1ecjjCpKp-4XrXEr-Z-YAVpEC8YqvAXnh01ebf0mj56bU9vgN8i9RHljmmdiMISWkIbiE9yNUkDivu9ZlNc41df_K6LBDLTOov9DsCTS4_eD_MnGaiP7V4KdbfkRnLjx_8y4NOPZoeYOf1uqSWLBp6_A112zqfjtt4aTCRbltoTjJHfg9aBlg71LCvB8?session=0&fife\" height=\"200\" width=\"auto\" />",
//                 "Proyecto": "Sacúdete Recreo Deportivo Chapinero Sur - FINDETER. ",
//                 "Barrio":"Chapinero Sur",
//                 "Comuna":"7",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2983461,
//                     3.5364401
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0c-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/ef10v78n136qmbu1is7lg7rt8g/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9mmeEr7kc4eikvkJdx1nziC3FAT4r4zXkE3Jsc899U6BJCJ-LnCG5a6ExDgeOf_nkXkTIhFBZ9nPHgd11rPp8zx5G7BDLLXPhhwgxtIl4kVQ_oGPLIvNN28lr_PTqdi4ShXAhyvQlsXZN4RvCx-FJPxfCfV6dCPUxEMyXc-MAWlJux39_ALFSzQuNK2ckaoKs8?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>ETAPA:",
//                 "Proyecto": "HROB - ADECUACIÓN SALA PERINATAL",
//                 "Barrio":"Alfonso López",
//                 "Comuna":"4",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3097978,
//                     3.5331114
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-10-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/qshunp4k71atcpcto488qklkv0/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9nkJeaxTZSZwvuqx0mjnjxdXx7Ho4JQLBkfMfOOu2jzfyeui3QMobG2lfmJp5T_ZSdoj7W3Ir6oAY0I0MM99b7PpIbbdZG0h8wOhtBB_jD8yQrblI3XpcAVnUyMyxw2oDR65qM4hVHYV4fib5DpbO6V-j_iCThMvVbht1SLpt_eKlFPMWmrQThi1FioDSZeFnU?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>ETAPA:",
//                 "Proyecto": "HROB LA EMILIA - MEJORAMIENTO CENTRO DE SALUD",
//                 "Barrio":"Emilia",
//                 "Comuna":"3",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3091365,
//                     3.5331113
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0g-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/csjuthe10p14sdoliuclgrauoo/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9nrJPf2_pnXtBDPi-_L-iLMaMZLgAkRTrA5lM9K-Eo6dcs74QLhc4hkZRK9xip4FohcMkOP41OBJ_evuFlXFaaWwGuH-ARLCC15jMx8VeZxvMqg-c8fdwMlvoDeNnQF_eZAKWIKOM8FYzLPx0NjUmavNdbDN86thB2TRgIfiKP4Ru6NsvbwpPNAVKGi5BYTnw?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>ETAPA:",
//                 "Proyecto": "PARQUE DE LA EMILIA - FANALCA",
//                 "Barrio":"Emilia",
//                 "Comuna":"3",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3063361,
//                     3.5278226
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "ETAPA: TERMINADO.",
//                 "Proyecto": "PARQUE PAProyectoRICANO - ADECUACIÓN",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3049084,
//                     3.5249075
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0k-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/6sktmhcqc2seb8mu3q70gk0i4s/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9nk24kv3hjrtnmNQllT8w5ZMUVzUUEFVPZNnSjuoTSw3yOfCQVB_ciq20WvjPUJaf0Z9lBaVET1Ue_1ZHoImeM1GThQk_o7hbIQt-bupk2OKopQq4Clb4VKhkCli1R9-yMeYNhEY3mkIkycsb0fgwmDXz2PPRH2h7IHxD98J4hasFDROkasuR9HWL7i3fORdw?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Proveer al Municipio de Palmira de una infraestructura o sistema de infraestructuras conexas y/o de soporte a la operación del transporte intermunicipal e interdepartamental de pasajeros y su articulación con el servicio de transporte de pasajeros de ámbito municipal (urbano, suburbano y rural).<br><br>De manera que potencie la competitividad de Palmira y su ámbito metropolitano funcional, y contribuya a un desarrollo urbano más sostenible y con ello a la mejora de la calidad de vida de sus habitantes.<br><br>ETAPA: ESTUDIO DE FACTIBILIDAD Y DISEÑOS FASE 2.<br>DURACIÓN: MARZO A DICIEMBRE 2022.",
//                 "Proyecto": "ESTACIÓN DE INTEGRACIÓN MODAL CIT LA ESTACIÓN",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3025976,
//                     3.5419869
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<br>Proveer al Municipio de Palmira de una infraestructura o sistema de infraestructuras conexas y/o de soporte a la operación del transporte intermunicipal e interdepartamental de pasajeros y su articulación con el servicio de transporte de pasajeros de ámbito municipal (urbano, suburbano y rural).<br><br>De manera que potencie la competitividad de Palmira y su ámbito metropolitano funcional, y contribuya a un desarrollo urbano más sostenible y con ello a la mejora de la calidad de vida de sus habitantes.<br><br>ETAPA: ESTUDIO DE FACTIBILIDAD Y DISEÑOS FASE 2.<br>DURACIÓN: MARZO A DICIEMBRE 2022.",
//                 "Proyecto": "TERMINAL DE TRANSPORTE CIT VERSALLES",
//                 "Titulo": "TERMINAL DE TRANSPORTE CIT VERSALLES",
//                 "Imagen":"https://doc-14-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/2nvt1ka14ov624gkurevvkgv3g/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9lwaxPUD7PmBK5F4GXiLjckMtxcQUQI9lAYMo_wow09nTEW9fSBCPD2ySzGtdShw8507ACPoW9VpygICoKA8rcz-GON1-HtaeuyHJzg1mknb4helOzE_R_E-wCSgIJx_ZaBHNbcrVgST-R_wZtSrpB97Piry4F1xu6Swg2agcEjBwFbwmLVKGHFNZi0SsMSHg?session=0&fife",
//                 "Barrio":"Industrial",
//                 "Comuna":"2"

//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3000345,
//                     3.5369073
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-04-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/lkn8fpkj0dijr82o4fbotg5m9o/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9naaiBqONOEZ9mCr3w8ED0Efn2uWuE4Jw3NREL3L34Mz23tSTzEsorp4ELtnv3cHywjSz2IISOtDUatBLvR5jv9OwKBd6GxnO1vpGHhr5PC7ip9iPpr_IpLsgLGqwnb035jvtRXLvUbZrK6SZO2A4vwmDd3RxD7SuSvPvniYpi0S7rhKseRDiTRcmdhYpFzvZk?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Estación de traslado de Estación del Ferrocarril a Sena.<br><br>ETAPA: ESTRUCTURACIÓN DEL PROCESO CONTRACTUAL (23-02-2022)<br><br><img src=\"https://doc-08-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/k2obmr57ghn4u4icnn0q1pc804/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9luQsa3Oo6-RB4VD7IxKiZcFmoNrbKFl1NwD6qOgkD_4Ng9Klom25TrwXttCThfR8_c3ro-hAVeV_HNIF0kAyADLSubBJz8KhoMq98uhdnKGTiFV7bL4F5JZQXCst5GWXGOEreCfK3gq1keeFCDqia5PBaTMlluZYBS0US5ihPoC-HQh1QPoG8qNhb8yYK39hs?session=0&fife\" height=\"200\" width=\"auto\" />",
//                 "Titulo": "PALMIBICI -TRASLADO- (5/6) - DE ESTACIÓN DEL FERROCARRIL AL SENA.",
//                 "Proyecto":"Palmibici",
//                 "Barrio":"Alfonso López",
//                 "Comuna":"4",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2970177,
//                     3.5382301
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0k-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/rk5vuut8i7rnkv3pj850uounq0/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9lZErzq6-wBChJkrQKX8mLir_Gnow35FgFMje7sJGIov-ZlNWjezk_vrgopcltdWK8yi2xFazkiKeP5sFxLR3Xj-d5CqS1zewsyyx9Z55UgujnOEhfsf66ZacrWFwFYmk82w7JsKeQJlYobCE2a8zY9JjKwXtsCY4eseHYF3fkfid4j7_teHotxQw78lHH-mUE?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Estación Olímpica, Metro o Clinica Palma Real.<br><br>ETAPA: ESTRUCTURACIÓN DEL PROCESO CONTRACTUAL (23-02-2022)",
//                 "Titulo": "PALMIBICI -NUEVA ESTACIÓN- (1/6) ROTONDA VERSALLES ",
//                 "Proyecto":"Palmibici",
//                 "Barrio":"Versalles",
//                 "Comuna":"2",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2976511,
//                     3.5296678
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0g-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/ha3kerdtnr8fjig33gqt5vjt8k/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9nnfN5WJ9RAMFKAWlGIUXuSCE8ffM8Ko8U4vSPjoCe-Ths4i7qu2STsJzLLL8LmfHplbNCIepk1byySA8AOrRK5Q503J9fNnFwslpGoz0aT8AP8Zdq2uXtouhKcNuLwidWqohxcHjEXNxPNYubuU_l1FHmJkyEoPlA5uFk6CJTfZpoxfppCzOALBG7nH1Sf8Yg?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Estación nueva (Estación de Policía)<br><br>ETAPA: ESTRUCTURACIÓN DEL PROCESO CONTRACTUAL (23-03-2022)<br><br><img src=\"https://doc-08-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/bk7mrd1q5fpggmp99pai50qepk/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9nf2iFM-QzrDxOf3bkBw8YNqDpbTqArZWCjEpy7JI2mktEdiJh6y6q9ynP-DCNGQZGbQmtKn3dL9Q3fCv1MW1gW45VrxtvT6LSkdC9D2eijRYOfCgT7Xr4Np9wE_yBpHwfUihw4K4gTj82V-ufKiou00MvZj2JCFrMMWpBpluQmv3znxKjrEew0L4qqaiV7Zl0?session=0&fife\" height=\"200\" width=\"auto\" />",
//                 "Titulo": "PALMIBICI -NUEVA ESTACIÓN- (2/6) - PARQUE DE LA FACTORIA (Actualmente Bici parqueadero)",
//                 "Proyecto":"Palmibici",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2949692,
//                     3.5264451
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0s-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/b5eg0oba5loh4qhkts7dda23l8/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9kW4_uxFLVUN79PQCfa8QNM-znWIsjTUOPDYeasWUg7b-PL7kSuGPHZWU205J--XeJUGo4BkHStKRj_JWkkq6epMuPc8inWbI8oMsCGfjnAT7qJwI7ZqpzBn9wAsToglJT23DE3wXJ6x_Blh6Hf5TLZqFscGk09R_9NLv8oRiKy-_SHj0_Y7eTPvrlnajWxfE0?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Estación nueva Casa de la Cultura, actualmente Bici parqueadero.<br><br>ETAPA: ESTRUCTURACIÓN DEL PROCESO CONTRACTUAL (23-02-2022)",
//                 "Titulo": "PALMIBICI -NUEVA ESTACIÓN- (3/6) CASA DE LA CULTURA (Actualmente Bici parqueadero)",
//                 "Proyecto":"Palmibici",
//                 "Barrio":"La Trinidad",
//                 "Comuna":"6",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2870856,
//                     3.526516
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-04-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/8jpj2mmafq75aqcqnjse6va0go/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9lZOYg80yBS6r9lsxjR3KHSMC8rkoNx8uuLCNRbrivCu-RSqgfaSh3ftJydmrWSj_PDAyUpvKVf-TGHo_MCrEaXZ25uOUXRRD1nnu5H7aAjmLqUB7_AF9sCNTvHRXU5mWMX_qr2xLZ_NjmUutkxewv9ZslNP9wql13A5F0FmjrJ4ThE9qSMesk3gXDohtqhgoc?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Estación Bosque municipal.<br><br>ETAPA: ESTRUCTURACIÓN DEL PROCESO CONTRACTUAL (23-02-2022)",
//                 "Titulo": "PALMIBICI -NUEVA ESTACIÓN- (4/6) BOSQUE MUNICIPAL.",
//                 "Proyecto":"Palmibici",
//                 "Barrio":"El Bosque",
//                 "Comuna":"5",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2990258,
//                     3.5518554
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-00-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/hjp0f4snkhrc25bl3n7ad7h738/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9nYtp7qVucLF2L5o_AanLYwUfCcrw5UFcj6oWTImhFr_qh0tS0qxJk4dPgyVRc0IqtssXqipJw2_Hwp7uL4E3bxUM4OiqDgz4bEfgP0hNbGxsF0aeLB-0fTiE-Ah06kXaJ4gPppqSHOXZZzNljcwwhM3ALYGtP3Thne-e4DX2GWuYeHHlJzCM0_gmShq6eFSuY?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Estación Universidad del Valle.<br><br>ETAPA: ESTRUCTURACIÓN DEL PROCESO CONTRACTUAL (23-02-2022)<br><br><img src=\"https://doc-0c-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/0110llvhgk8uvhkh94jtorcha8/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9m7-vXuRtDOaOdpjPVIzxULPQUzyWulF9qTlFAC-T4R5XqtZQYM7meQr4V78AgJ-z1tA8gjzlZZU5i_sPus0BgVBHuYT5se_SEomIrvl2VkjQAB2RqesUOi6Iwu9m1ERJ-je8zNuY-ptCIT9q5QuYwqDx4mUD0DCRGXeUbBDuS-aOfcUXkN0ddQWhXcw_fno4s?session=0&fife\" height=\"200\" width=\"auto\" />",
//                 "Titulo": "PALMIBICI -NUEVA ESTACIÓN- (5/6) - UNIVALLE",
//                 "Proyecto":"Palmibici",
//                 "Barrio":"La Carbonera",
//                 "Comuna":"1",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3173023,
//                     3.5290896
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-04-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/nsvmpamhifvu5qcs1675unqrmc/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9k5QyZL_Z1HIu-1jdxOtrS1YYJ53vaRxkZIAnQBgHyWLPmiJIZPdfeZzHwU4oZsea-H2srTUcPAUaDUVWy2kydwEKJrLTh-LuXitkllQD8n_sdZYK-4235LLDmQ2dzb54EIhd5iuucmxGJrcVE2TWT8Kvv1Y8LUYTs8tiiG_T8mRBfMBIu1i-ZeF78oPv9NfFU?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Estación Centro Comercial Llanogrande.<br><br>ETAPA: ESTRUCTURACIÓN DEL PROCESO CONTRACTUAL (23-02-2022)<br><br><img src=\"https://doc-0s-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/91v201q9hlleh4abk1rc1tnr58/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9l_GRfXoRry6LZ1vMftnnBQjJILL5-iRIlAPTrrQGsoDC8SoM6gdCnM3rFIx1nw5wZf0zGhuFM61My1VF39awGuaExFAnAulnydY_YccxBHTYarKmHFMdh_srUFpaxBD9RRgs1hu3AlHRYUxUEnd9XYWYxVx4XQDAM5Vcyj70bbbWr0X88REPpU_WFlsHdhI1A?session=0&fife\" height=\"200\" width=\"auto\" />",
//                 "Titulo": "PALMIBICI -NUEVA ESTACIÓN- (6/6) - CC LLANOGRANDE",
//                 "Barrio":"Ciudad Santa Bárbara",
//                 "Proyecto":"Palmibici",
//                 "Comuna":"3",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3005744,
//                     3.5272226
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0g-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/cmofcmr1qu2tu4l7ugaqcadqa0/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9kIP7ZXYZaV9myKtoZUxtB_lHci0guuWwlDjF3tfK18aKOF2IZW-1Gn92k6o6WBhd2fznhhCcpFgdH7WoLCKsiLMxrOOwGDgkLZEkIPfvQ_8eV2lYjqY95VdpmDbSgJkoMqMdBXDea6B9vVv5gFlBTonUJUs3dRohYu4Zu8o1cZ2uULgcWGqrUSJabAlKGL4RM?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>ETAPA: FUNCIONANDO.",
//                 "PTitulo": "PALMIBICI (1/5) - PARQUE BOLIVAR.",
//                 "Proyecto":"Palmibici",
//                 "Barrio":"Central",
//                 "Comuna":"6",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3074542,
//                     3.5422895
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-08-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/ns6krof6gh6j348l9t8h593s00/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9m47rSVazOyY-r1UPE4lucAepiad4p6PVucRDNxbppf_A3OdI57CPl-BHm3go28l6B_rTZlcHJotVe4DYXLJNieGpWjbg1fvJPHORTAXFrb1veEKosgHwL69XPdu7bQY57fyKK3eo-vHAWUX7DfyLaZU80AzXQExCgx8W7DD9QJPF9heB6WsJ3FA0x_ONCpH5o?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>ETAPA: FUNCIONANDO.",
//                 "Titulo": "PALMIBICI (2/5) - SECRETARÍA DE TRANSITO",
//                 "Proyecto":"Palmibici",
//                 "Barrio":"Industrial",
//                 "Comuna":"2",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3066932,
//                     3.511782
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-14-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/eshcmucbju3uujp6lpoegfpdsc/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9mPfY7QMEXlbhxecef-pPbvRz8Y5v_Yb4s8bM2UpD3-xYDLucjvn1r8wySFKcuR7mERipeB7NtME5cZPsdT99JPzFLUo1gHtbE1fcUxZm_jpp3JCaKYZbVxB_ngVDllhGS3sE75ZHEZTZk-S3obFho-o-vOjprqMHxD9CtRBJ1FF4Ea6XNXw9E3_Iko4eq-zLU?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>ETAPA: FUNCIONANDO.",
//                 "Titulo": "PALMIBICI (3/5) - UNIVERSIDAD NACIONAL",
//                 "Proyecto":"Palmibici",
//                 "Barrio":"",
//                 "Comuna":"7",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.306319,
//                     3.5255477
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0s-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/p6vksu95fumfsjrfap7oe5mn94/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9k4wdss3HA7dMBd4tMvxVMdd0R7xxWVJwnvrjU5pYp7U5MWJTMEiiWjjilk1_bDxMu4dTiWa-KAAyRg0kzbftdYifipybG4AgDlwXnVJUfPqpK7HFQkZbfBYcv9TXd6_vnj0zyLt1SNFQCYzzgTUvd6eY63Mpc7hj8vnv2EH0afIJcXBRSLu7nPduRRIrG9dyQ?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>ETAPA: FUNCIONANDO.",
//                 "Titulo": "PALMIBICI (4/5) - IMDER",
//                 "Proyecto":"Palmibici",
//                 "Barrio":"Rivera Escobar",
//                 "Comuna":"3",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3045588,
//                     3.5274553
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0o-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/cjhqddeeklladl6bgjb5p927pk/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9lYzLz0V3bPESK2ilVP3tqEPTAV_XgqMX25wduSVWFU6yC4lzblsxdfpsNLtQDOFYC0FIeV1cynYF35303ZyCzi8hd98cPdSlwNINCHVKoV3ERrGfZW_ZrLRZPViIDZDCbG5CCF11A6iaOxI94kiQhfi1fpSoFGFRyl3QaAZxvRHa39gdwh2-fjoN4MY9GnGcM?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>ETAPA: INACTIVO POR VANDALISMO (PENDIENTE TRASLADO).",
//                 "Titulo": "PALMIBICI (5/5) - ESTACIÓN DEL FERROCARRIL.",
//                 "Proyecto":"Palmibici",
//                 "Barrio":"Central",
//                 "Comuna":"6",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3146402,
//                     3.5704431
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-08-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/1iosg1qsqeisqnh4qq167lt7gc/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9lHTSsEcMvuEA8vYXhhFvdyirx1pW3XRH2tyqMQuRqRiNOV5i-36H9r47uiIr4cK20GijC3hgyubx7NiFJl41_pSNMgo_JbDDqQt9Zg5ldnqosXdQr5qNJtwulsvfE8DKWg9pyNgXAALJxThSIDQ2VEPaHSnSR9TW4GgOffdB-jqBoAT4hrybB5smUFQ4c31pE?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Intervención por parte de la Gobernación del Valle con Bacheo. Vía departamental.  <br>ETAPA:",
//                 "Proyecto": "SEÑALIZACIÓN Y DEMARCACIÓN CORONADO-ROZO",
//                 "Barrio":"Coronado",
//                 "Barrio":"Rozo",
//                 "Comuna":"1",
//                 "Comuna":"8",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.308116,
//                     3.5094117
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS EN EL CRUCE DE LAS ITALIAS.",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3051514,
//                     3.5313632
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS EN PARQUE DE LAS BRUJAS.",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2991902,
//                     3.5252683
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "2 postes Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 28 CON CARRERA 28\n",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3000297,
//                     3.5254173
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "1 poste Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 28 CON CARRERA 29\n",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3019409,
//                     3.5257492
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "2 postes Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 28 CON CARRERA 31\n\n",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.302717,
//                     3.5258643
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "2 postes Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 28 CON CARRERA 32",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2981994,
//                     3.5259278
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "1 poste Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 29 CON CARRERA 27\n",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2990636,
//                     3.526037
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "2 postes Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "PTitulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 29 CON CARRERA 28\n",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3015995,
//                     3.5273494
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "1 poste Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 30 CON CARRERA 31\n",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3024615,
//                     3.5274262
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "1 poste Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 30 CON CARRERA 32\n",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2946166,
//                     3.5274356
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "2 postes Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 31 CON CARRERA 23\n",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2970152,
//                     3.5277233
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "1 poste Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 31 CON CARRERA 26\n",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2974428,
//                     3.5301534
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "1 poste Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 33 CON CARRERA 27\n",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2983902,
//                     3.5302931
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "2 poste Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 33 CON CARRERA 28",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3010617,
//                     3.5307397
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "1 poste Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 33 CON CARRERA 31\n",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3020216,
//                     3.5309056
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "2 postes Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 33 CON CARRERA 32\n",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2773038,
//                     3.5312673
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "1 poste Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 35 CON CARRERA 1\n",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2904341,
//                     3.5309793
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "3 postes Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 35 CON CARRERA 19\n",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2904758,
//                     3.5317515
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "1 poste Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 36 CON CARRERA 19\n",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2953993,
//                     3.5324641
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "1 poste Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 36 CON CARRERA 25\n",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2970381,
//                     3.5326114
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "2 postes Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 36 CON CARRERA 27\n",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.298041,
//                     3.5327867
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "1 poste Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 36 CON CARRERA 28",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2988784,
//                     3.5329287
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "2 postes Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 36 CON CARRERA 29",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2996522,
//                     3.5330411
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "2 postes Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 36 CON CARRERA 30\n",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3006431,
//                     3.5331785
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "1 poste Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 36 CON CARRERA 31",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3016089,
//                     3.5333347
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "2 postes Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 36 CON CARRERA 32\n",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2905144,
//                     3.532742
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "2 postes Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 37 CON CARRERA 19\n",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2906239,
//                     3.5370708
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "2 postes Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 42 CON CARRERA 19\n",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2909542,
//                     3.5217001
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "1 poste Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 18 CON CARRERA 24\n",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2907159,
//                     3.5242873
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "1 poste Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 18 CON CARRERA 28",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2998143,
//                     3.5209717
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "2 postes Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 23 CON CARRERA 28\n",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3042973,
//                     3.5287139
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "1 poste Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 31 CON CARRERA 33a",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3057526,
//                     3.5289719
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "3 postes Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 31 CON CARRERA 35",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2977473,
//                     3.5347891
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "2 postes Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 38 CON CARRERA 28",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2945097,
//                     3.53758
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "4 postes Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 42 CON CARRERA 25\n",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2970454,
//                     3.5380832
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "1 poste Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 42 CON CARRERA 28\n",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3008838,
//                     3.5383886
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "3 postes Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 42 CON CARRERA 32",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2955732,
//                     3.542099
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "1 poste Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 47 CON CARRERA 27",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2965951,
//                     3.5421766
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "3 postes Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 48 CON CARRERA 28",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3073219,
//                     3.5425745
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "2 postes Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 47 CON CARRERA 35",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2957328,
//                     3.5466763
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "1 poste Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 54 CON CARRERA 28",
//                 "Proyecto":"Semaforo",
//                 "Barrio":"Las Mercedes",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2974977,
//                     3.5547392
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "2 postes Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 65 CON CARRERA 31\n",
//                 "Proyecto":"Semaforo",
//                 "Barrio":"Villa Diana",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3057226,
//                     3.5340583
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "2 postes Tipo Ménsula<br><br>ETAPA: ESTRUCTURACIÓN Y SOCIALIZACIÓN DEL PROYECTO.",
//                 "Titulo": "MODERNIZACIÓN DE LA RED SEMAFORICA - PUESTA DE SEMAFOROS CALLE 36 CON CARRERA 35\n",
//                 "Proyecto":"Semaforo",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3283465,
//                     3.5792663
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-08-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/je4ljst62tqoi4eb3kqjjeahoo/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9nI8hQoK57m98sgd4i6WTPbSMcfWY-xlbUBLwL6QyW1xVENGf_pcnnCzfNurGwnGuURCKZs_MgtGs3FtLQ0BVoTzE0MVcqOl3kohw18dFuTqf4jlj5_p3FaqCts3vA8WbDYHiWqL4tcCxrlSxbTYJMrA4FnpvWXWWVJVK2mI96PRtLagKPGyd5sj4TwBdhXzOo?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>",
//                 "Proyecto": "CAMÁRA DE SEGURIDAD"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3279602,
//                     3.5799854
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "ILUMINACIÓN INTERSECCIÓN PUENTE MALIBÚ",
//                 "Proyecto": "ILUMINACIÓN INTERSECCIÓN PUENTE MALIBÚ"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2876894,
//                     3.5573791
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0g-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/huk9minu99eenl0f5ou3n00gu8/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9mqswIQ97JI2r20MsxvIFPvTqxUcCptxEGbxoB_Le2Zgzn04bpj8Wv6gzez1t_sGX55P96vG7pJaDc_hQZht_Ia0FBgsTPEZ_Ms3fHMweiv8HQjxaqlnh0v9_ElNLZatRBtqRRk4pAhRapgRk1wugU9NW36drTUjyBij_5eUDnVKdwi88L_45sPvH9w1QCjA6g?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>100% operativa.<br>Se realizaron pruebas de funcionamiento de todos los equipos. Sistema de conexión Provisional sin novedad. En proceso tramite CELSIA montaje de subestaciones sin Novedad durante el Cambio. <br>% AVANCE OBRA: 100%<br>VALOR OBRA: $ 285.720.003<br>ETAPA: Funcionando y entregado por el Alcalde.",
//                 "Proyecto": "(1/7) ILUMINACIÓN POLIDEPÓRTIVO - ALAMEDA.",
//                 "Barrio":"Alameda",
//                 "Comuna":"1"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2884404,
//                     3.5593454
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-04-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/phogc5fklfnrv2oes6dapdkvk4/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9mjeDjE-GKIPSXECt6gTCXkYPqny6u1JlPxtXJQuj_fXHqOszbt3ApYXopa4Kw9stAE_CbgBRFHE6iO7SIWrmMVMAynH0yPuEeEJz0SD6h4Jab-fV3--O1FJ0qx1UOEKjJoq-fzFqOoF6EmzhtcJNU3km1LWLurNpzD62R-BA_2J-jcqA0hgdzdJhECqIfnvY0?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>100% operativa .<br>Se realizaron pruebas de funcionamiento de todos los equipos. Sistema de conexión Provisional sin novedad. En proceso tramite CELSIA montaje de subestaciones sin Novedad durante el Cambio. <br>% AVANCE OBRA: 95%<br>VALOR OBRA: $ 341.879.260<br>ETAPA: Funcionando y entregado por el Alcalde.",
//                 "Proyecto": "(2/7) ILUMINACIÓN POLIDEPÓRTIVO - MONTECLARO.",
//                 "Barrio":"Montecarlo",
//                 "Comuna":"1",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3178255,
//                     3.5318315
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0o-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/erdn01g0eqtum8lk085vu52i88/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9n9EsVpKubgbq-_yepoEHX1OYDEhFxA85jqDYs-xFntn7qdXP0mPHWIIVgs7i1ogWpjZR7w6drOBssp0OUtSy65UnBRqfEuNSv6CMGAPQjoFb0lr5wtYEYEFVmTT45MZ9-MC-sqsIKscKpJoFjSV-rFvol6nUzP1TgyyQ3jFTWcO4z4hLZsweZGeHqE8rfz0G4?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>100% operativa.<br>Se realizaron pruebas de funcionamiento de todos los equipos. Sistema de conexión Provisional sin novedad. En proceso tramite CELSIA montaje de subestaciones sin Novedad durante el Cambio.<br>% AVANCE OBRA: 95%<br>VALOR OBRA: $ 356.878.062<br>ETAPA: Funcionando y entregado por el Alcalde.",
//                 "Proyecto": "(3/7) ILUMINACIÓN POLIDEPÓRTIVO - SANTA ANA.",
//                 "Barrio":"Santa Ana",
//                 "Comuna":"3",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.315739,
//                     3.4715173
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0s-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/4km2egoc4efbc62bimmbpj1nvc/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9maazi5UDpM2aMmekwX3Kf8hSKKaXuMnvDnCcafJNSXxu0geRAHQgweJ2E97wzyADmF5tQkyLQynxAHXjv0INWdSvvv10qMfMC_J8Q9L1KN4kqlTTQgINKRsbb8KnlbYjbnS6qYrJJONUDiBZSEjS03Ktjw8Tim1TRzHhwQfJBtBCnFtvNNltL_iCHNEIsZRzo?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>100% operativa.<br>Se realizaron pruebas de funcionamiento de todos los equipos. Sistema de conexión Provisional sin novedad. En proceso tramite CELSIA montaje de subestaciones sin Novedad durante el Cambio.<br>% AVANCE OBRA: 100%<br>VALOR OBRA: $ 286.321.190<br>ETAPA: Funcionando y entregado por el Alcalde.",
//                 "Proyecto": "(4/7) ILUMINACIÓN POLIDEPÓRTIVO - BOLO LA ITALIA.",
//                 "Barrio":"Bolo La Italia",
//                 "Comuna":"11",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2731493,
//                     3.5269927
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0g-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/193p8duhm03vo4vd2kel8jhfjo/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9l9TFM0koJyA6Qw0aQdefuJmt9caokf44jr3f6MF_TqNGzJXWdBHMCOTwENNQndK_S1P3YDjFxOFOCpfmJG37c1fWDTXYm3J-t-yg_9i6Kr2SoK8WAFmajtb1nNELb8UC9PS3EMhlqCFVWT3cIc1rdn4JiPQeoUi3f_74V-saLxKYsDjybWzTquUqfyhtDu3-c?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>100% operativa.<br>Se realizaron pruebas de funcionamiento de todos los equipos. Sistema de conexión Provisional sin novedad. En proceso tramite CELSIA montaje de subestaciones sin Novedad durante el Cambio.<br>% AVANCE OBRA: 95%<br>VALOR OBRA: $ 352.822.241<br>ETAPA: Funcionando y entregado por el Alcalde.",
//                 "Proyecto": "(5/7) ILUMINACIÓN POLIDEPÓRTIVO - SAN JOSÉ.",
//                 "Barrio":"San José",
//                 "Comuna":"5",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2012063,
//                     3.5994646
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-00-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/5hd87eg46gguoj1gte0tl7pcfg/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9lDX_tqNDtDYMLwj5LT4_xNoddg00BF9WjYceHi_Zy3o08KOdt2xrXi2HUPBRMvm7ya-IMOmHiS-JcoJL3zoOrH34CJTmGKo4MZ27-fxTvNMIALcyczfa_-0Zm43gfpOvBKrG0nrr4GDUCXVRiVUs0SWfUXxG_BnbTkCFP6E08tf62d4TZlNoJZgdVJT6oE_o0?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>100% operativa.<br>Se realizaron pruebas de funcionamiento de todos los equipos. Sistema de conexión Provisional sin novedad. En proceso tramite CELSIA montaje de subestaciones sin Novedad durante el Cambio.<br>% AVANCE OBRA: 95%<br>VALOR OBRA: $ 420.720.991<br>ETAPA: Pendiente entrega por el Alcalde.",
//                 "Proyecto": "(6/7) ILUMINACIÓN POLIDEPÓRTIVO - TIENDA NUEVA ENTRADA A TABLONES.",
//                 "Barrio":"Tienda Nueva",
//                 "Comuna":"13",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2257534,
//                     3.5686619
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0c-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/e4upji46b7mfe53s9cdfk3vmm4/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9nQ8TEWgS2NtzNLpZiVCgPcAXO5AvtuA45AQ9vj8m_bsJIViE4-r8zUDVDa-S4wOzNcLjnfD7wJ6DeDnKjbwgZqWNbrd-FYgV8zSSiXS92FUOFhuFB5sp4b_F6cpD_Cx0f2wKX4ebFu3WaIO1VBSlNktq9-X_GZHHPLWGeLJeIC5TEGOvT1Ha6tVa2K8ugH958?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>100% operativa.<br>Se realizaron pruebas de funcionamiento de todos los equipos. Sistema de conexión Provisional sin novedad. En proceso tramite CELSIA montaje de subestaciones sin Novedad durante el Cambio.<br>% AVANCE OBRA: 95%<br>VALOR OBRA: $ 230.749.256<br>ETAPA: Pendiente entrega por el Alcalde.",
//                 "Proyecto": "(7/7) ILUMINACIÓN POLIDEPÓRTIVO - PALMIRA VÍA TIENDA NUEVA.",
//                 "Barrio":"Tienda Nueva",
//                 "Comuna":"13",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.300201,
//                     3.5275205
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0c-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/4e0ddbks8vcc01hth84cajmpfc/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9k2SI5rDVtQnltkqR8dgGsHj1w0hgEd9EceZRbPcAEWqk7QatUpKWNW0xtUW3R7WzUMToHx96e0_s-whU2GZEodnBVOOx77HczSljjKCis0p9SiVmtrNszyfTJY_DpDwFNH9Wu9qTiPPU1uy6fVt39r33Oz10-lssM_xkLiEyS2pPMBymfqTHdbdRcCtbw7Ros?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Lugar: Parque Bolívar.<br>Operador: Claro.<br>Estado: Activa.",
//                 "Proyecto": "(1/11) Palmira nos Conecta Pa’lante - Parque Bolívar. (ZW Municipal).",
//                 "Barrio":"Central",
//                 "Comuna":"6",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3119973,
//                     3.5350391
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-04-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/2u5fkv8ekeccsgm9tjqdg3g91o/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9maiqevqkgm65Q7Y24S0mcxdJuZgbarSQf73UPPC_t1pcb_Y-0TFWd_20DsZLX9qZUlwrHtfWOb-OJ9ggYn1WzfFZJEik0Knwl2nj1LaTuCWKtx-rFad1ZeWsWI_jD_aaMzewIF36qDpMuVhEh9usKymzTUVJxZU8lXafVGvE9sWXIUlvMcnq3_jMxxv1qu22o?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Lugar: Parque del Prado.<br>Operador: Claro.<br>Estado: Activa.",
//                 "Proyecto": "(2/11) Palmira nos Conecta Pa’lante - Parque del Prado. (ZW Municipal).",
//                 "Barrio":"El Prado",
//                 "Comuna":"3",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3070906,
//                     3.5258833
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0o-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/8r1s9pllik0ri2vh3dce1fdc8c/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9mY5BWKgl5KF2elhZHKEteRbrhnk8okD0QWknvymU-tw2l91xDo3jc1KwQ4_XJSVjQstelW_19arD9RRfIQc5e3AbLfbwV4K5YwbYw25P7VosoHookwc1xsXqfphT4fKUyFkEbwUNaWDJgitbIPK07EyktivoeAeFs5RZWzLLd_gmv7ZF_hQIH8B-2poQ5x7ZQ?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Lugar: IMDER.<br>Operador: Claro.<br>Estado: Activa.",
//                 "Proyecto": "(3/11) Palmira nos Conecta Pa’lante - Ciudadela Deportiva IMDER. (ZW Municipal).",
//                 "Barrio":"Rivera Escobar",
//                 "Comuna":"3",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2978198,
//                     3.5285094
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0o-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/r4vvjs1n69ta5ric1ao75t29s4/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9mgLrmOWV4NkhJFky1Sp-28VPZ7rSlWDvsYCUWHBYjoc1P1zKEMfTzASEwaqhVCDMTLpQVwPKEOZ3cK69fpoluqBRcS6BHkTNOrfRDdjYylcqWPV-tGOLdLwddrn8t7JCCFyU_8T0rz84vQbvb2racXHj2skoT9n71uEGZA-2R7JXzDBN7yG7tBVys8bxp8IxA?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Lugar: Parque de Bomberos.<br>Operador: Claro.<br>Estado: Activa.",
//                 "Proyecto": "(4/11) Palmira nos Conecta Pa’lante - Parque de Bomberos. (ZW Municipal)."
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2978574,
//                     3.5297063
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-08-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/jn4h1bm4r5ijoohst2ef357nt8/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9nFOpO9BfEF59BTDioHGoAkxY3C-aGf4EKOhySzolTjSV2wQ7XcOrRs9QC5duMMg53u5ir0IajZISRaXWAv35KhZCnNJYqYC_NuiuNg_3InhpL28ncuoGI6NRuhxNpZkMnsOE_IpRN6WvB23S3KPcwhABtwXQX0MHVR63B4dqybDHXlgYFwkDbahywcJketUdI?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Lugar: Parque de la Factoría.<br>Operador: Claro.<br>Estado: Activa.",
//                 "Proyecto": "(5/11) Palmira nos Conecta Pa’lante - Parque de la Factoría. (ZW Municipal)."
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3078931,
//                     3.5043769
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0k-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/ag10ri3tnngjikchvtocbq4occ/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9nVlag1MJJmGQCkwHORdyEcyJLgaCnxqz7vLARazFXU5mPbqRZPXnrL5NPl7T6t6mkgxzfnK2JINgh21nR3ONaog3UxEhd5oe-y90ZhXfAyoBqjzX1594wBrp-711MdQPun6SIydAJTa5cXPA94ZEXZ15-aYLepd08cYEwcsxuwADDRpru192ueucYY6Oll9nw?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Lugar: Parque Barrio la Italia.<br>Operador: Claro.<br>Estado: Activa.",
//                 "Proyecto": "(6/11) Palmira nos Conecta Pa’lante - Parque Barrio la Italia. (ZW Municipal).",
//                 "Barrio":"La Italia",
//                 "Comuna":"7",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2959419,
//                     3.5320765
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0s-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/ikak4tjfpagnnhuf0v3vitutck/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9m_k87WZ_o0n54cg2f8kTLOdaY6xB1YNZEe7i-jlyUJ-GXSVTN_TtRnUmnHeOaW2GuE2gV8LQZvI3NiApzwoeTwMmlFGo50Fg7MD7ypK0vXeX7quMDM3viQ3oS3uZlGAdtiFQAgvfmV48EgPuqYcnKDZwSO2QpQF34CwlAX9Hcuaotq4hnOaItJpUFYiXWjjfE?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Lugar: Parque Obrero.<br>Operador: Claro.<br>Estado: Activa.",
//                 "Proyecto": "(7/11) Palmira nos Conecta Pa’lante - Parque Obrero. (ZW Municipal).",
//                 "Barrio":"Obrero",
//                 "Comuna":"4",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.290689,
//                     3.5281568
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-00-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/u43qudoo4bp662509sl6gbss8o/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9lQDb80PsxfjLSMWoOnUe3ehTt29fut6wsCJpfvJvg39lD1vH6e0tf-rqQYrFxDPf0tsDqaVT8jVxX80ehxGDpvGjLHJKcJ38O-i5QyabQVMasWWCF71noRCuHOpN_2lJhbv7z7SlEAKFonYEvEItKVnXKjShv1hR1ryjBAQxrekpY2hBq0TUuTLTPcBvOJtP0?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Lugar: Parque del Amor.<br>Operador: Gobernación del Valle - ERT,<br>Estado: Activa.",
//                 "Proyecto": "(8/11) Palmira nos Conecta Pa’lante - Parque del Amor. (ZW Municipal).",
//                 "Barrio":"Colombia",
//                 "Comuna":"6",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3102931,
//                     3.5436076
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0k-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/lnn1eghr3vs6anpu5fppkahbbk/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9mu3g_Sk8lfTCkviQ-6cbuPiDv08HtllN4zx8YISOE0_hzit5sMwAT7kaJvbI6WpzeC3MkPY67TZsua7VLVBPwDV1fbm3BBE3nz5PeOG_4QzzcjjkWxd_97WGckjegnv7xpgQbPsngpJwHuauXhV5D_XXomp2NlmRzPNhbWcpCT2MnNNR3zA_4ReUkbm7jWEM8?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Lugar: Parque Santa Teresita.<br>Operador: Gobernación del Valle - ERT,<br>Estado: Activa.",
//                 "Proyecto": "(9/11) Palmira nos Conecta Pa’lante - Parque Santa Teresita. (ZW Municipal).",
//                 "Barrio":"Santa Teresita",
//                 "Comuna":"2",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3860597,
//                     3.614767
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-04-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/qspn9hnja2pb04mdno4v9gj9i0/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9lrR7Nv7vgR-VaHCV_CMMXO01LRJBzaV54WKZsiyUCHgUVRQNXPSSwyCSL6tnfChPdXgyekN9CYxPIG_64rgthFT9a0AvKJLg79uIyc0Z2zsIpbOMjklQfM59NoAOUvE9-MtLxwSjJwrgSOiWTDCaP9IO0mlRiaXBYNoHoH0dq960qxITLZSWnvvo5W3Ogtt_4?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Lugar: Parque Principal Rozo.<br>Operador: Gobernación del Valle - ERT,<br>Estado: Activa.",
//                 "Proyecto": "(10/11) Palmira nos Conecta Pa’lante - Parque Principal Rozo. (ZW Municipal).",
//                 "Barrio":"Rozo",
//                 "Comuna":"8",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3151594,
//                     3.54725
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0g-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/n4ehjqr0bm875qf6pn9e8jceh8/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9mFKkHP7eAW_ZY2EQbhfw9dfVcErLMt-mgGyxg2CljQIhJB9VeF-sw9YddNqyzvOTjU-4i6OJGqGsOQXnb8kyKa1cuo9g2HxxPLvOqFHaXENCHqR-FLCaI2B5g9ujIAYwFPfTdQ_asg3rXYmiKjMTMxA44X70oj_ADnjhbN_QHLP1W5jtwI3n5YNyXmPNgPPh8?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Lugar: Parque Villa del Rosario Caimitos.<br>Operador: Gobernación del Valle - ERT,<br>Estado: Inactiva.",
//                 "Proyecto": "(11/11) Palmira nos Conecta Pa’lante - Parque Villa del Rosario Caimitos. (ZW Municipal).",
//                 "Barrio":"El Caimito",
//                 "Comuna":"1",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2861203,
//                     3.5280867
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-14-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/i7eg4atifuhcuv1q0uj7p0493k/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9lP3E96EuG_7RDdSP2KrFlZD8p0z8-VCUdbRE7JHxrwPTkAfEO-E_6i3AQdEJ0-60CqGG--s0IwZ1_dcI_WIvLq8dL-gOvSxgaeQvW26n0a2UUgly3IrJw9r8PsicpOjaXHxhLyguFrgTwxD9xxmsHs8KgTj-O_WHME1lwhxQjI9DShQ99Ikiy8P9hk9U0Grew?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Proyecto que busca crear una experiencia memorable para el disfrute consciente de la naturaleza donde se contempla realizar un total de 36 intervenciones<br><br>El Bosque Municipal se piensa como un centro de Ciencia, Tecnología e Innovación que contribuya fortalecer la cultura CTeI mediante programas y actividades educativas, en las que se puede interpretar, comunicar, narrar, exhibir, conservar, investigar y/o difundir conocimientos científicos y tecnológicos provenientes de diferentes disciplinas.<br><br>ETAPA: Ejecución de la consultoría e interventoría de los estudios y diseños de la Fase 1, Etapa 2 de Prefactibilidad.<br><br>La Alcaldía entregará en enero del 2023 un total de 5 estudios priorizados a detalle para contratar la obra",
//                 "Proyecto": "PROYECTO BOSQUE MUNICIPAL",
//                 "Barrio":"El Bosque",
//                 "Comuna":"5",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3008398,
//                     3.5274896
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-0s-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/bp8kvq00mfai5p5l72gkimua40/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9kgLnq45OkYME4H0kvj-NnyV4t3gCXdN41cxnu9Bn2sX0pm78zSGhWezPa6BQib0QjQ1onGFUcBJIyCQ-iTqSivalwMf1NefkL1L4thOPLqiueVm5AfDtZNX37NmOCLz9JIZo1nD2mcRa0dcZ3HuLZpKGNZjTzq0mCzxSUCh2cdYZqIO-PAyUpmsg_tvzfZTiQ?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Revitalizar esta importante pieza urbana, recuperando la identidad y salvaguardando el patrimonio arquitectónico de Palmira logrando con su recuperación, con articulación entre Secretaría de Cultura en apoyo de la dirección de Patrimonio del Ministerio de Cultura.<br><br>ETAPA: El municipio ha acompañado al Ministerio de Cultura en la elaboración de los diseños arquitectónicos, los diseños hidrosanitarios y de redes eléctricas.<br><br>Se han diligenciado todos los formatos exigidos por el Ministerio de Cultura por ser un proyecto para presentar ante Cocrea.",
//                 "Proyecto": "Restauración y Reforzamiento Estructural del Edificio Consistorial - Palmira",
//                 "Barrio":"Central",
//                 "Comuna":"6",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3383477,
//                     3.4632766
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-00-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/qr5d3ce7qets0b1215sfclhchs/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9ldE_loghCWMHfHEh8C46VJfdW-u7CgX3g7cLlxLR8s3YiwKuwWuwOUplYynWxdHYAq0lih8UwFwF_nx6c6sKbFExpyWJHmMA1lI-QRx_JFk_LT7Woz0Gj_vKnRZ8d8o8KC4lRv6P0KBBWHq89hzmN1q1V-RSmu_2CUkZiy4U2BthnP6pH6qcoQRFoVx8pImKQ?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>El proyecto Museo Arqueológico Malagana en el corregimiento de “El Bolo San Isidro” del Municipio de Palmira, Valle del Cauca, Colombia, que albergará las piezas de la cultura Malagana cuenta con cuatro (4) volúmenes integrados por una gran pérgola que los cohesiona y son el recorrido por el cual estos volúmenes se unen.<br><br>ETAPA: El proyecto se encontraba en viabilización desde el año 2017, la actual administración lo actualizó de acuerdo a los lineamientos brindados por el Ministerio de Cultura",
//                 "Proyecto": "Museo Arqueológico Malagana en el corregimiento El Bolo, Municipio de Palmira, Valle del Cauca",
//                 "Barrio":"Bolo San Isidro",
//                 "Comuna":"11",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3052497,
//                     3.556483
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Descripcion": "<img src=\"https://doc-14-2k-mymaps.googleusercontent.com/untrusted/hostedimage/5nq19dqpls5vakf1j4j6nr5nm4/afvur5kr0g6hmn9g2kcr9oq7og/1667242612750/4MebCTvmYwt3qLtP-h7s1MZLBuCQ52jp/17139692954960655958/5AKgB-9kMZjkm0Ld-gALzDM9gMtvlveoFUsqyVJEMGl6xya22gHmLbVej-gxVSSLaqVIYVSaTUJxIDyrG1kiTjTznDNxjX0du7jurdU6wKy825K36LKK1davnVpbAFRG2xQ2tiECYi-2jLmXzPapVovTf7uDiBlH5r9I0HYv_9QxeH3kTJskpP0xW2_17MzcKL0m5zFc?session=0&fife\" height=\"200\" width=\"auto\" /><br><br>Establecer un escenario que no sólo responde a propósitos culturales sino también incluye componentes de generación de nuevo conocimiento, desarrollo tecnológico e innovación que amplían su espectro de impacto, y establecen un escenario compartido entre la cultura y la ciencia, la tecnología y la innovación.<br><br>ETAPA: El proyecto se encontraba en viabilización desde el año 2017, la actual administración lo actualizó de acuerdo a los lineamientos brindados por el Ministerio de Cultura.",
//                 "Proyecto": "Centro Maker - Casa de la Música en el Municipio de Palmira"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.2464042,
//                         3.5493028
//                     ],
//                     [
//                         -76.2437864,
//                         3.547461
//                     ],
//                     [
//                         -76.2412973,
//                         3.5437345
//                     ],
//                     [
//                         -76.2388511,
//                         3.540779
//                     ],
//                     [
//                         -76.2347313,
//                         3.537695
//                     ],
//                     [
//                         -76.2328859,
//                         3.5358103
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "PAVIMENTACIÓN VÍA BARRANCAS"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.270756,
//                         3.6065837
//                     ],
//                     [
//                         -76.2676124,
//                         3.6073118
//                     ],
//                     [
//                         -76.2655847,
//                         3.6071084
//                     ],
//                     [
//                         -76.2642221,
//                         3.6059627
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "PAVIMENTACIÓN AMAIME-BOYACÁ"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.2987616,
//                         3.5381485
//                     ],
//                     [
//                         -76.2954517,
//                         3.5377095
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "MALLA VIAL (1/8): Intersección Versalles.",
//                 "Barrio":"Versalles",
//                 "Comuna":"2",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.3187565,
//                         3.5381853
//                     ],
//                     [
//                         -76.3250221,
//                         3.5293615
//                     ],
//                     [
//                         -76.3267173,
//                         3.5272627
//                     ],
//                     [
//                         -76.3310947,
//                         3.5259562
//                     ],
//                     [
//                         -76.4002742,
//                         3.5109213
//                     ],
//                     [
//                         -76.4038791,
//                         3.5093793
//                     ],
//                     [
//                         -76.4628448,
//                         3.4960147
//                     ],
//                     [
//                         -76.4679088,
//                         3.4940443
//                     ],
//                     [
//                         -76.4834441,
//                         3.4927592
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "MALLA VIAL (3/8): Recta Cali – Palmira: Iluminación"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.3078028,
//                         3.50948
//                     ],
//                     [
//                         -76.3144332,
//                         3.5058605
//                     ],
//                     [
//                         -76.3269216,
//                         3.4891547
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "MALLA VIAL (6/8): Salida a Candelaria: Universidad Nacional – “La Y” de Villa Rica",
//                 "Comuna":"7",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.2778279,
//                         3.5264463
//                     ],
//                     [
//                         -76.2786218,
//                         3.5228054
//                     ],
//                     [
//                         -76.278536,
//                         3.5221628
//                     ],
//                     [
//                         -76.2782999,
//                         3.5215203
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "MALLA VIAL (7/8): Salida Palmira – Pradera",
//                 "Barrio":"",
//                 "Comuna":"5",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.3485358,
//                         3.5297657
//                     ],
//                     [
//                         -76.348965,
//                         3.5370475
//                     ],
//                     [
//                         -76.3544153,
//                         3.5367048
//                     ],
//                     [
//                         -76.3563035,
//                         3.5367048
//                     ],
//                     [
//                         -76.3594793,
//                         3.5377756
//                     ],
//                     [
//                         -76.3593934,
//                         3.5394033
//                     ],
//                     [
//                         -76.3635991,
//                         3.5526388
//                     ],
//                     [
//                         -76.3731263,
//                         3.5563652
//                     ],
//                     [
//                         -76.3741992,
//                         3.557436
//                     ],
//                     [
//                         -76.3756583,
//                         3.557436
//                     ],
//                     [
//                         -76.3903783,
//                         3.5631756
//                     ],
//                     [
//                         -76.3891338,
//                         3.565103
//                     ],
//                     [
//                         -76.3893483,
//                         3.5674588
//                     ],
//                     [
//                         -76.3981031,
//                         3.5716992
//                     ],
//                     [
//                         -76.399648,
//                         3.5718277
//                     ],
//                     [
//                         -76.42853,
//                         3.5851912
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "MALLA VIAL (8/8): Vía La Herradura – Matapalo"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.2708076,
//                         3.6067141
//                     ],
//                     [
//                         -76.267546,
//                         3.6074423
//                     ],
//                     [
//                         -76.2656363,
//                         3.6072923
//                     ],
//                     [
//                         -76.264027,
//                         3.605986
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "ALCANTARILLADO BOYACÁ-AMAIME"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.293414,
//                         3.5185016
//                     ],
//                     [
//                         -76.2933818,
//                         3.5146787
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "ALCANTARILLADO PLUVIAL KRA 21 CLL 20-16. SEMBRADOR."
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.4253151,
//                         3.5850692
//                     ],
//                     [
//                         -76.425527,
//                         3.5851923
//                     ],
//                     [
//                         -76.4255686,
//                         3.5851
//                     ],
//                     [
//                         -76.4260004,
//                         3.5853436
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "TUBERÍA INSTALADA (1/3) - CALLEJÓN NIEVA."
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.4252539,
//                         3.5851891
//                     ],
//                     [
//                         -76.4257669,
//                         3.5855177
//                     ],
//                     [
//                         -76.4260814,
//                         3.5855973
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "TUBERÍA INSTALADA (2/3) - CALLEJÓN SUR -"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.4202791,
//                         3.5952062
//                     ],
//                     [
//                         -76.421116,
//                         3.5957014
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "TUBERÍA INSTALADA (3/3) - CALLEJÓN ZANJÓN NORTE"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.3099851,
//                         3.5295922
//                     ],
//                     [
//                         -76.3103875,
//                         3.5296484
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "G1. a. INSTALACIÓN DE REDES NUEVAS DE ACUEDUCTOR EN PEAD - Calle 31 Cra 40A - 40.",
//                 "Barrio":"Santa Bárbara",
//                 "Comuna":"3",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.303067,
//                         3.531052
//                     ],
//                     [
//                         -76.3050733,
//                         3.5314268
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "G1. b. INSTALACIÓN DE REDES NUEVAS DE ACUEDUCTO EN PEAD - Calle 33 Cra 33 - 35"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.2996785,
//                         3.5330433
//                     ],
//                     [
//                         -76.305633,
//                         3.5340819
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "G1. c. INSTALACIÓN DE REDES NUEVAS DE ACUEDUCTO EN PEAD - Calle 36 Cra 30 - 33 y Cra 34 - 35"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.3033155,
//                         3.5356244
//                     ],
//                     [
//                         -76.304442,
//                         3.5357315
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "G1. d. INSTALACIÓN DE REDES NUEVAS DE ACUEDUCTO EN PEAD - Calle 38 Cra 34 - 34C"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.3029332,
//                         3.5318932
//                     ],
//                     [
//                         -76.3027964,
//                         3.5326482
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "G1. e. INSTALACIÓN DE REDES NUEVAS DE ACUEDUCTO EN PEAD - Cra 33 Calle 34 - 35"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.3042089,
//                         3.5313129
//                     ],
//                     [
//                         -76.3040694,
//                         3.5320625
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "G1. f. INSTALACIÓN DE REDES NUEVAS DE ACUEDUCTO EN PEAD - Cra 34 Calle 33 - 34"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.3032499,
//                         3.5356992
//                     ],
//                     [
//                         -76.3027161,
//                         3.5384967
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "G1. g. INSTALACIÓN DE REDES NUEVAS DE ACUEDUCTO EN PEAD - Cra 34 Calle 38 - 42"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.3048456,
//                         3.5340372
//                     ],
//                     [
//                         -76.3047115,
//                         3.5347064
//                     ],
//                     [
//                         -76.304631,
//                         3.5346957
//                     ],
//                     [
//                         -76.3044647,
//                         3.5356863
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "G1. h. INSTALACIÓN DE REDES NUEVAS DE ACUEDUCTO EN PEAD - Cra 34C Calle 36 - 38"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.3047148,
//                         3.5314267
//                     ],
//                     [
//                         -76.3046236,
//                         3.5318577
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "G1. i. INSTALACIÓN DE REDES NUEVAS DE ACUEDUCTO EN PEAD - Cra 34A Calle 33 - 34"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.3039369,
//                         3.5346191
//                     ],
//                     [
//                         -76.3037706,
//                         3.5356391
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "G1. i. INSTALACIÓN DE REDES NUEVAS DE ACUEDUCTO EN PEAD - Cra 34A Calle 37 - 38"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.3052394,
//                         3.5316837
//                     ],
//                     [
//                         -76.3066341,
//                         3.5387513
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "G1. j. INSTALACIÓN DE REDES NUEVAS DE ACUEDUCTO EN PEAD - Cra 35 Calle 33 – 42"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.3065524,
//                         3.5379849
//                     ],
//                     [
//                         -76.3073624,
//                         3.5378243
//                     ],
//                     [
//                         -76.3073893,
//                         3.5379421
//                     ],
//                     [
//                         -76.3106401,
//                         3.5378457
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "G2. a. INSTALACIÓN DE REDES NUEVAS DE ACUEDUCTO EN PEAD - Calle 41 Carrera 35 a carrera 40"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.3064226,
//                         3.5371925
//                     ],
//                     [
//                         -76.3095661,
//                         3.5365447
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "G2. b. INSTALACIÓN DE REDES NUEVAS DE ACUEDUCTO EN PEAD - Calle 40 Carrera 35 a carrera 39"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.3062557,
//                         3.5364343
//                     ],
//                     [
//                         -76.3086375,
//                         3.535947
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "G2. c. INSTALACIÓN DE REDES NUEVAS DE ACUEDUCTO EN PEAD - Calle 39 Carrera 35 a carrera 38"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.3061154,
//                         3.5356436
//                     ],
//                     [
//                         -76.3084811,
//                         3.5351457
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "G2. d. INSTALACIÓN DE REDES NUEVAS DE ACUEDUCTO EN PEAD - Calle 37A (calle 38) entre Carrera 35 a carrera 38"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.3059528,
//                         3.5348726
//                     ],
//                     [
//                         -76.3067199,
//                         3.5347012
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "G2. e. INSTALACIÓN DE REDES NUEVAS DE ACUEDUCTO EN PEAD - Calle 37 entre carrera 35 a carrera 36"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.305792,
//                         3.5340679
//                     ],
//                     [
//                         -76.3065672,
//                         3.53391
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "G2. f. INSTALACIÓN DE REDES NUEVAS DE ACUEDUCTO EN PEAD - Calle 36 entre carrera 35 a carrera 36"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.3075447,
//                         3.53876
//                     ],
//                     [
//                         -76.3073784,
//                         3.5379676
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "G2. g. INSTALACIÓN DE REDES NUEVAS DE ACUEDUCTO EN PEAD - Carrera 36 entre calle 42 a calle 41"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.3089954,
//                         3.5378696
//                     ],
//                     [
//                         -76.3081371,
//                         3.5335755
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "G2. h. INSTALACIÓN DE REDES NUEVAS DE ACUEDUCTO EN PEAD - Carrera 38 entre calle 41 a calle 36"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.3095038,
//                         3.5333393
//                     ],
//                     [
//                         -76.3096487,
//                         3.5341076
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "G2. i. INSTALACIÓN DE REDES NUEVAS DE ACUEDUCTO EN PEAD - Carrera 39A entre calle 36 a calle 37"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.2991999,
//                         3.5253147
//                     ],
//                     [
//                         -76.2994681,
//                         3.5236228
//                     ],
//                     [
//                         -76.2996505,
//                         3.521888
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "PLAN BACHEO PRO (Sábado, 24.09.22)",
//                 "Barrio":"",
//                 "Comuna":"6",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.3005226,
//                         3.5281497
//                     ],
//                     [
//                         -76.3014721,
//                         3.52838
//                     ],
//                     [
//                         -76.3043045,
//                         3.5287762
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "PLAN BACHEO PRO (Lunes, 26.09.22)"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.2995035,
//                         3.5289553
//                     ],
//                     [
//                         -76.2977172,
//                         3.5285752
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "PLAN BACHEO PRO (martes, 27.09.22)"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.3002032,
//                         3.5281002
//                     ],
//                     [
//                         -76.2977678,
//                         3.5278003
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "PLAN BACHEO PRO (Miércoles, 28.09.22)"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.3002086,
//                         3.5245989
//                     ],
//                     [
//                         -76.2998975,
//                         3.5261891
//                     ],
//                     [
//                         -76.2997955,
//                         3.5270779
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "PLAN BACHEO PRO (Jueves, 29.09.22)"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.3011972,
//                         3.5247371
//                     ],
//                     [
//                         -76.2985418,
//                         3.5243409
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "PLAN BACHEO PRO (Viernes, 30.09.22)"
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     [
//                         -76.3862084,
//                         3.6144945
//                     ],
//                     [
//                         -76.3837193,
//                         3.6104685
//                     ],
//                     [
//                         -76.3810585,
//                         3.6070421
//                     ],
//                     [
//                         -76.377282,
//                         3.6036156
//                     ],
//                     [
//                         -76.3753937,
//                         3.6008745
//                     ],
//                     [
//                         -76.3746212,
//                         3.5965057
//                     ],
//                     [
//                         -76.3704155,
//                         3.592651
//                     ],
//                     [
//                         -76.3656948,
//                         3.5897385
//                     ],
//                     [
//                         -76.3601158,
//                         3.5881109
//                     ],
//                     [
//                         -76.3505028,
//                         3.5887105
//                     ],
//                     [
//                         -76.3464687,
//                         3.5865689
//                     ],
//                     [
//                         -76.3403748,
//                         3.5862263
//                     ],
//                     [
//                         -76.3284443,
//                         3.5815148
//                     ],
//                     [
//                         -76.3250969,
//                         3.5769747
//                     ],
//                     [
//                         -76.3212345,
//                         3.5737195
//                     ],
//                     [
//                         -76.3168572,
//                         3.5731198
//                     ],
//                     [
//                         -76.3135956,
//                         3.5696076
//                     ],
//                     [
//                         -76.3132523,
//                         3.566181
//                     ],
//                     [
//                         -76.3101624,
//                         3.5647247
//                     ],
//                     [
//                         -76.3110207,
//                         3.5579572
//                     ]
//                 ],
//                 "type": "LineString"
//             },
//             "properties": {
//                 "Proyecto": "SEÑALIZACIÓN Y DEMARCACIÓN CORONADO - ROZO",
//                 "Barrio":"Coronado",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                         -76.2026423,
//                         3.5576995
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"Puesto de Salud Potrerillo, Zona Rural",
//                 "Proyecto": "Presupuesto para el Desarrollo Local",
//                 "Descripcion":"Mejorar la prestación de servicios de salud en los Puestos de Salud de la Comuna 16 (La Quisquina, Potrerillo y Tenjo, del Hospital Raúl Orejuela Bueno E.S.E. del Municipio de Palmira, a través de mejoramiento a la infraestructura física y cambio de Dotación ",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"16",
//                 "Barrio":"Potrerillo",
//                 "Imagen":"",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                         -76.1710855,
//                         3.5204268
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"Puesto de Salud Tenjo, Zona Rural",
//                 "Proyecto": "Presupuesto para el Desarrollo Local",
//                 "Descripcion":"Mejorar la prestación de servicios de salud en los Puestos de Salud de la Comuna 16 (La Quisquina, Potrerillo y Tenjo, del Hospital Raúl Orejuela Bueno E.S.E. del Municipio de Palmira, a través de mejoramiento a la infraestructura física y cambio de Dotación ",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"16",
//                 "Barrio":"Tenjo",
//                 "Imagen":"",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                         -76.2223834,
//                         3.5783765
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"Puesto de salud La Quisquina, Zona Rural",
//                 "Proyecto": "Presupuesto para el Desarrollo Local",
//                 "Descripcion":"Mejorar la prestación de servicios de salud en los Puestos de Salud de la Comuna 16 (La Quisquina, Potrerillo y Tenjo, del Hospital Raúl Orejuela Bueno E.S.E. del Municipio de Palmira, a través de mejoramiento a la infraestructura física y cambio de Dotación ",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"16",
//                 "Barrio":"La Quisquina",
//                 "Imagen":"",
//             },
//             "type": "Feature"
//         },
// ////////////////////////////////////////////////////////////
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3003909,
//                     3.5254058
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"IEO San Vicente",
//                 "Proyecto": "Palmipilos",
//                 "Descripcion":"PALMIPILOS es un programa que nace a partir del convenio entre el Municipio de Palmira y el Banco Interamericano de Desarrollo, el cual busca cerrar brechas de empleabilidad y migración a la educación superior de los egresados del sector educativo oficial del municipio de PALMIRA.<br>Aportando 600 becas de programas técnicos profesionales en los sectores de logística empresarial, diseño multimedia, producción de software, producción agrícola e ingeniería de alimentos, permitiendo el fomento de prácticas y apuestas productivas propias del banco de necesidades tamizadas en el sector productivo con más de 70 empresas aliadas.<br>- Al año 2022, Se dio inicio a los programas técnicos profesionales en (10) Instituciones educativas oficiales beneficiadas en las áreas de: Logística empresarial, Ingeniería de alimentos, Desarrollo de software, Diseño multimedia y Producción agrícola sostenible, con 583 estudiantes matriculados beneficiados de la zona rural y urbana. Adicionalmente, se realizó el proceso de capacitación a 48 docentes con un diplomado de 120 horas en diagnóstico de competencias socioemocionales y estrategias de formación en la media técnica.",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"7",
//                 "Barrio":"Barrio Nuevo",
//                 "Imagen":"https://drive.google.com/open?id=1EFLlW4uJhMllH3KB4_JUdyKcpYCXDeRC",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3106966,
//                     3.5355896
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"IEO Jorge Eliecer Gaitan",
//                 "Proyecto": "Palmipilos",
//                 "Descripcion":"PALMIPILOS es un programa que nace a partir del convenio entre el Municipio de Palmira y el Banco Interamericano de Desarrollo, el cual busca cerrar brechas de empleabilidad y migración a la educación superior de los egresados del sector educativo oficial del municipio de PALMIRA.<br>Aportando 600 becas de programas técnicos profesionales en los sectores de logística empresarial, diseño multimedia, producción de software, producción agrícola e ingeniería de alimentos, permitiendo el fomento de prácticas y apuestas productivas propias del banco de necesidades tamizadas en el sector productivo con más de 70 empresas aliadas.<br>- Al año 2022, Se dio inicio a los programas técnicos profesionales en (10) Instituciones educativas oficiales beneficiadas en las áreas de: Logística empresarial, Ingeniería de alimentos, Desarrollo de software, Diseño multimedia y Producción agrícola sostenible, con 583 estudiantes matriculados beneficiados de la zona rural y urbana. Adicionalmente, se realizó el proceso de capacitación a 48 docentes con un diplomado de 120 horas en diagnóstico de competencias socioemocionales y estrategias de formación en la media técnica.",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"2",
//                 "Barrio":"La Emilia",
//                 "Imagen":"https://drive.google.com/open?id=1EFLlW4uJhMllH3KB4_JUdyKcpYCXDeRC",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2857584,
//                     3.5325455
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"IEO Mercedes Abrego",
//                 "Proyecto": "Palmipilos",
//                 "Descripcion":"PALMIPILOS es un programa que nace a partir del convenio entre el Municipio de Palmira y el Banco Interamericano de Desarrollo, el cual busca cerrar brechas de empleabilidad y migración a la educación superior de los egresados del sector educativo oficial del municipio de PALMIRA.<br>Aportando 600 becas de programas técnicos profesionales en los sectores de logística empresarial, diseño multimedia, producción de software, producción agrícola e ingeniería de alimentos, permitiendo el fomento de prácticas y apuestas productivas propias del banco de necesidades tamizadas en el sector productivo con más de 70 empresas aliadas.<br>- Al año 2022, Se dio inicio a los programas técnicos profesionales en (10) Instituciones educativas oficiales beneficiadas en las áreas de: Logística empresarial, Ingeniería de alimentos, Desarrollo de software, Diseño multimedia y Producción agrícola sostenible, con 583 estudiantes matriculados beneficiados de la zona rural y urbana. Adicionalmente, se realizó el proceso de capacitación a 48 docentes con un diplomado de 120 horas en diagnóstico de competencias socioemocionales y estrategias de formación en la media técnica.",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"5",
//                 "Barrio":"San Pedro",
//                 "Imagen":"https://drive.google.com/open?id=1EFLlW4uJhMllH3KB4_JUdyKcpYCXDeRC",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3088101,
//                     3.5534202
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"IEO Antonio Lizarazo",
//                 "Proyecto": "Palmipilos",
//                 "Descripcion":"PALMIPILOS es un programa que nace a partir del convenio entre el Municipio de Palmira y el Banco Interamericano de Desarrollo, el cual busca cerrar brechas de empleabilidad y migración a la educación superior de los egresados del sector educativo oficial del municipio de PALMIRA.<br>Aportando 600 becas de programas técnicos profesionales en los sectores de logística empresarial, diseño multimedia, producción de software, producción agrícola e ingeniería de alimentos, permitiendo el fomento de prácticas y apuestas productivas propias del banco de necesidades tamizadas en el sector productivo con más de 70 empresas aliadas.<br>- Al año 2022, Se dio inicio a los programas técnicos profesionales en (10) Instituciones educativas oficiales beneficiadas en las áreas de: Logística empresarial, Ingeniería de alimentos, Desarrollo de software, Diseño multimedia y Producción agrícola sostenible, con 583 estudiantes matriculados beneficiados de la zona rural y urbana. Adicionalmente, se realizó el proceso de capacitación a 48 docentes con un diplomado de 120 horas en diagnóstico de competencias socioemocionales y estrategias de formación en la media técnica.",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"1",
//                 "Barrio":"Coronado",
//                 "Imagen":"https://drive.google.com/open?id=1EFLlW4uJhMllH3KB4_JUdyKcpYCXDeRC",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.199916,
//                     3.554727
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"IEO Sagrada Familia Potrerillo",
//                 "Proyecto": "Palmipilos",
//                 "Descripcion":"PALMIPILOS es un programa que nace a partir del convenio entre el Municipio de Palmira y el Banco Interamericano de Desarrollo, el cual busca cerrar brechas de empleabilidad y migración a la educación superior de los egresados del sector educativo oficial del municipio de PALMIRA.<br>Aportando 600 becas de programas técnicos profesionales en los sectores de logística empresarial, diseño multimedia, producción de software, producción agrícola e ingeniería de alimentos, permitiendo el fomento de prácticas y apuestas productivas propias del banco de necesidades tamizadas en el sector productivo con más de 70 empresas aliadas.<br>- Al año 2022, Se dio inicio a los programas técnicos profesionales en (10) Instituciones educativas oficiales beneficiadas en las áreas de: Logística empresarial, Ingeniería de alimentos, Desarrollo de software, Diseño multimedia y Producción agrícola sostenible, con 583 estudiantes matriculados beneficiados de la zona rural y urbana. Adicionalmente, se realizó el proceso de capacitación a 48 docentes con un diplomado de 120 horas en diagnóstico de competencias socioemocionales y estrategias de formación en la media técnica.",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"16",
//                 "Barrio":"Potrerillo",
//                 "Imagen":"https://drive.google.com/open?id=1EFLlW4uJhMllH3KB4_JUdyKcpYCXDeRC",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2946528,
//                     3.5278116
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"IEO Sagrada Familia",
//                 "Proyecto": "Palmipilos",
//                 "Descripcion":"PALMIPILOS es un programa que nace a partir del convenio entre el Municipio de Palmira y el Banco Interamericano de Desarrollo, el cual busca cerrar brechas de empleabilidad y migración a la educación superior de los egresados del sector educativo oficial del municipio de PALMIRA.<br>Aportando 600 becas de programas técnicos profesionales en los sectores de logística empresarial, diseño multimedia, producción de software, producción agrícola e ingeniería de alimentos, permitiendo el fomento de prácticas y apuestas productivas propias del banco de necesidades tamizadas en el sector productivo con más de 70 empresas aliadas.<br>- Al año 2022, Se dio inicio a los programas técnicos profesionales en (10) Instituciones educativas oficiales beneficiadas en las áreas de: Logística empresarial, Ingeniería de alimentos, Desarrollo de software, Diseño multimedia y Producción agrícola sostenible, con 583 estudiantes matriculados beneficiados de la zona rural y urbana. Adicionalmente, se realizó el proceso de capacitación a 48 docentes con un diplomado de 120 horas en diagnóstico de competencias socioemocionales y estrategias de formación en la media técnica.",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"6",
//                 "Barrio":"La Trinidad",
//                 "Imagen":"https://drive.google.com/open?id=1EFLlW4uJhMllH3KB4_JUdyKcpYCXDeRC",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3024487,
//                     3.5342364
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"IEO Nuestra Señora Del Palmar",
//                 "Proyecto": "Palmipilos",
//                 "Descripcion":"PALMIPILOS es un programa que nace a partir del convenio entre el Municipio de Palmira y el Banco Interamericano de Desarrollo, el cual busca cerrar brechas de empleabilidad y migración a la educación superior de los egresados del sector educativo oficial del municipio de PALMIRA.<br>Aportando 600 becas de programas técnicos profesionales en los sectores de logística empresarial, diseño multimedia, producción de software, producción agrícola e ingeniería de alimentos, permitiendo el fomento de prácticas y apuestas productivas propias del banco de necesidades tamizadas en el sector productivo con más de 70 empresas aliadas.<br>- Al año 2022, Se dio inicio a los programas técnicos profesionales en (10) Instituciones educativas oficiales beneficiadas en las áreas de: Logística empresarial, Ingeniería de alimentos, Desarrollo de software, Diseño multimedia y Producción agrícola sostenible, con 583 estudiantes matriculados beneficiados de la zona rural y urbana. Adicionalmente, se realizó el proceso de capacitación a 48 docentes con un diplomado de 120 horas en diagnóstico de competencias socioemocionales y estrategias de formación en la media técnica.",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"4",
//                 "Barrio":"Santa Rita",
//                 "Imagen":"https://drive.google.com/open?id=1EFLlW4uJhMllH3KB4_JUdyKcpYCXDeRC",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3425499,
//                     3.462201
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"IEO Jose Manuel Salcedo",
//                 "Proyecto": "Palmipilos",
//                 "Descripcion":"PALMIPILOS es un programa que nace a partir del convenio entre el Municipio de Palmira y el Banco Interamericano de Desarrollo, el cual busca cerrar brechas de empleabilidad y migración a la educación superior de los egresados del sector educativo oficial del municipio de PALMIRA.<br>Aportando 600 becas de programas técnicos profesionales en los sectores de logística empresarial, diseño multimedia, producción de software, producción agrícola e ingeniería de alimentos, permitiendo el fomento de prácticas y apuestas productivas propias del banco de necesidades tamizadas en el sector productivo con más de 70 empresas aliadas.<br>- Al año 2022, Se dio inicio a los programas técnicos profesionales en (10) Instituciones educativas oficiales beneficiadas en las áreas de: Logística empresarial, Ingeniería de alimentos, Desarrollo de software, Diseño multimedia y Producción agrícola sostenible, con 583 estudiantes matriculados beneficiados de la zona rural y urbana. Adicionalmente, se realizó el proceso de capacitación a 48 docentes con un diplomado de 120 horas en diagnóstico de competencias socioemocionales y estrategias de formación en la media técnica.",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"11",
//                 "Barrio":"Bolo San Isidro",
//                 "Imagen":"https://drive.google.com/open?id=1EFLlW4uJhMllH3KB4_JUdyKcpYCXDeRC",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2838289,
//                     3.52715
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"IEO Paulo VI",
//                 "Proyecto": "Palmipilos",
//                 "Descripcion":"PALMIPILOS es un programa que nace a partir del convenio entre el Municipio de Palmira y el Banco Interamericano de Desarrollo, el cual busca cerrar brechas de empleabilidad y migración a la educación superior de los egresados del sector educativo oficial del municipio de PALMIRA.<br>Aportando 600 becas de programas técnicos profesionales en los sectores de logística empresarial, diseño multimedia, producción de software, producción agrícola e ingeniería de alimentos, permitiendo el fomento de prácticas y apuestas productivas propias del banco de necesidades tamizadas en el sector productivo con más de 70 empresas aliadas.<br>- Al año 2022, Se dio inicio a los programas técnicos profesionales en (10) Instituciones educativas oficiales beneficiadas en las áreas de: Logística empresarial, Ingeniería de alimentos, Desarrollo de software, Diseño multimedia y Producción agrícola sostenible, con 583 estudiantes matriculados beneficiados de la zona rural y urbana. Adicionalmente, se realizó el proceso de capacitación a 48 docentes con un diplomado de 120 horas en diagnóstico de competencias socioemocionales y estrategias de formación en la media técnica.",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"5",
//                 "Barrio":"Popular Modelo",
//                 "Imagen":"https://drive.google.com/open?id=1EFLlW4uJhMllH3KB4_JUdyKcpYCXDeRC",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3828799,
//                     3.6097082
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"IEO Rozo",
//                 "Proyecto": "Palmipilos",
//                 "Descripcion":"PALMIPILOS es un programa que nace a partir del convenio entre el Municipio de Palmira y el Banco Interamericano de Desarrollo, el cual busca cerrar brechas de empleabilidad y migración a la educación superior de los egresados del sector educativo oficial del municipio de PALMIRA.<br>Aportando 600 becas de programas técnicos profesionales en los sectores de logística empresarial, diseño multimedia, producción de software, producción agrícola e ingeniería de alimentos, permitiendo el fomento de prácticas y apuestas productivas propias del banco de necesidades tamizadas en el sector productivo con más de 70 empresas aliadas.<br>- Al año 2022, Se dio inicio a los programas técnicos profesionales en (10) Instituciones educativas oficiales beneficiadas en las áreas de: Logística empresarial, Ingeniería de alimentos, Desarrollo de software, Diseño multimedia y Producción agrícola sostenible, con 583 estudiantes matriculados beneficiados de la zona rural y urbana. Adicionalmente, se realizó el proceso de capacitación a 48 docentes con un diplomado de 120 horas en diagnóstico de competencias socioemocionales y estrategias de formación en la media técnica.",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"8",
//                 "Barrio":"Rozo",
//                 "Imagen":"https://drive.google.com/open?id=1EFLlW4uJhMllH3KB4_JUdyKcpYCXDeRC",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3055971,
//                     3.5269957
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"ACADEMIA COLOMBIANA DE ENSEÑANZA - ACE",
//                 "Proyecto": "Fondo Destacados",
//                 "Descripcion":"Este programa busca fomentar el acceso a la educación superior, técnica, tecnológica y la educación para el trabajo y el desarrollo humano, como una estrategia para el cierre de brechas, a través de dos estrategias:1. Darle continuidad al programa de becas del municipio y 2. Crear una nueva bolsa de becas que asegure que los estudiantes que acceden a él tengan asegurados los recursos para el cumplimiento a cabalidad de su formación terciaria o superior, en programa de alta calidad. Ambas estrategias buscan facilitar el acceso de estudiantes que hayan completado el ciclo de formación básica secundaria y/o media con excelencia académica en las instituciones educativas del Municipio de Palmira",
//                 "Dependencia":"Secretaría de Educación",
//                 "Comuna":"6",
//                 "Barrio":"Central",
//                 "Imagen":"https://drive.google.com/open?id=1bDK9Wdg5bkP4Ue184bWRTwaDGQOSgVlf",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2938838,
//                     3.5423923
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"BRITISH ENGLISH COMPANY",
//                 "Proyecto": "Fondo Destacados",
//                 "Descripcion":"Este programa busca fomentar el acceso a la educación superior, técnica, tecnológica y la educación para el trabajo y el desarrollo humano, como una estrategia para el cierre de brechas, a través de dos estrategias:1. Darle continuidad al programa de becas del municipio y 2. Crear una nueva bolsa de becas que asegure que los estudiantes que acceden a él tengan asegurados los recursos para el cumplimiento a cabalidad de su formación terciaria o superior, en programa de alta calidad. Ambas estrategias buscan facilitar el acceso de estudiantes que hayan completado el ciclo de formación básica secundaria y/o media con excelencia académica en las instituciones educativas del Municipio de Palmira",
//                 "Dependencia":"Secretaría de Educación",
//                 "Comuna":"2",
//                 "Barrio":"Urbanización Altamira",
//                 "Imagen":"https://drive.google.com/open?id=1bDK9Wdg5bkP4Ue184bWRTwaDGQOSgVlf",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2953267,
//                     3.5280554
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"CENTRO DE ASISTENCIAS TÉCNICAS EMPRESARIALES DE SALUD - CENTRA 2000",
//                 "Proyecto": "Fondo Destacados",
//                 "Descripcion":"Este programa busca fomentar el acceso a la educación superior, técnica, tecnológica y la educación para el trabajo y el desarrollo humano, como una estrategia para el cierre de brechas, a través de dos estrategias:1. Darle continuidad al programa de becas del municipio y 2. Crear una nueva bolsa de becas que asegure que los estudiantes que acceden a él tengan asegurados los recursos para el cumplimiento a cabalidad de su formación terciaria o superior, en programa de alta calidad. Ambas estrategias buscan facilitar el acceso de estudiantes que hayan completado el ciclo de formación básica secundaria y/o media con excelencia académica en las instituciones educativas del Municipio de Palmira",
//                 "Dependencia":"Secretaría de Educación",
//                 "Comuna":"6",
//                 "Barrio":"La Trinidad",
//                 "Imagen":"https://drive.google.com/open?id=1bDK9Wdg5bkP4Ue184bWRTwaDGQOSgVlf",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.301961,
//                     3.5254602
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"CENTRO EDUCATIVO PARA JÓVENES Y ADULTOS – CEJAP",
//                 "Proyecto": "Fondo Destacados",
//                 "Descripcion":"Este programa busca fomentar el acceso a la educación superior, técnica, tecnológica y la educación para el trabajo y el desarrollo humano, como una estrategia para el cierre de brechas, a través de dos estrategias:1. Darle continuidad al programa de becas del municipio y 2. Crear una nueva bolsa de becas que asegure que los estudiantes que acceden a él tengan asegurados los recursos para el cumplimiento a cabalidad de su formación terciaria o superior, en programa de alta calidad. Ambas estrategias buscan facilitar el acceso de estudiantes que hayan completado el ciclo de formación básica secundaria y/o media con excelencia académica en las instituciones educativas del Municipio de Palmira",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"7",
//                 "Barrio":"Barrio Nuevo",
//                 "Imagen":"https://drive.google.com/open?id=1bDK9Wdg5bkP4Ue184bWRTwaDGQOSgVlf",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2950572, 
//                     3.5275768
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"CENTRO NACIONAL DE CAPACITACION LABORAL – CENAL",
//                 "Proyecto": "Fondo Destacados",
//                 "Descripcion":"Este programa busca fomentar el acceso a la educación superior, técnica, tecnológica y la educación para el trabajo y el desarrollo humano, como una estrategia para el cierre de brechas, a través de dos estrategias:1. Darle continuidad al programa de becas del municipio y 2. Crear una nueva bolsa de becas que asegure que los estudiantes que acceden a él tengan asegurados los recursos para el cumplimiento a cabalidad de su formación terciaria o superior, en programa de alta calidad. Ambas estrategias buscan facilitar el acceso de estudiantes que hayan completado el ciclo de formación básica secundaria y/o media con excelencia académica en las instituciones educativas del Municipio de Palmira",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"6",
//                 "Barrio":"La Trinidad",
//                 "Imagen":"https://drive.google.com/open?id=1bDK9Wdg5bkP4Ue184bWRTwaDGQOSgVlf",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3007017,
//                     3.5245867
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"COLEGIO COMERCIAL MIXTO – INCANOF",
//                 "Proyecto": "Fondo Destacados",
//                 "Descripcion":"Este programa busca fomentar el acceso a la educación superior, técnica, tecnológica y la educación para el trabajo y el desarrollo humano, como una estrategia para el cierre de brechas, a través de dos estrategias:1. Darle continuidad al programa de becas del municipio y 2. Crear una nueva bolsa de becas que asegure que los estudiantes que acceden a él tengan asegurados los recursos para el cumplimiento a cabalidad de su formación terciaria o superior, en programa de alta calidad. Ambas estrategias buscan facilitar el acceso de estudiantes que hayan completado el ciclo de formación básica secundaria y/o media con excelencia académica en las instituciones educativas del Municipio de Palmira",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"7",
//                 "Barrio":"Barrio Nuevo",
//                 "Imagen":"https://drive.google.com/open?id=1bDK9Wdg5bkP4Ue184bWRTwaDGQOSgVlf",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2922176,
//                     3.5546047
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"CORPORACIÓN EDUCATIVA NACIONAL COLOMBIANA ANDRES BELLO – CENCAB",
//                 "Proyecto": "Fondo Destacados",
//                 "Descripcion":"Este programa busca fomentar el acceso a la educación superior, técnica, tecnológica y la educación para el trabajo y el desarrollo humano, como una estrategia para el cierre de brechas, a través de dos estrategias:1. Darle continuidad al programa de becas del municipio y 2. Crear una nueva bolsa de becas que asegure que los estudiantes que acceden a él tengan asegurados los recursos para el cumplimiento a cabalidad de su formación terciaria o superior, en programa de alta calidad. Ambas estrategias buscan facilitar el acceso de estudiantes que hayan completado el ciclo de formación básica secundaria y/o media con excelencia académica en las instituciones educativas del Municipio de Palmira",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"1",
//                 "Barrio":"",
//                 "Imagen":"https://drive.google.com/open?id=1bDK9Wdg5bkP4Ue184bWRTwaDGQOSgVlf",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2946569,
//                     3.5478715
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"CORPORACIÓN UNIVERSITARIA CENTRO SUPERIOR – CRES",
//                 "Proyecto": "Fondo Destacados",
//                 "Descripcion":"Este programa busca fomentar el acceso a la educación superior, técnica, tecnológica y la educación para el trabajo y el desarrollo humano, como una estrategia para el cierre de brechas, a través de dos estrategias:1. Darle continuidad al programa de becas del municipio y 2. Crear una nueva bolsa de becas que asegure que los estudiantes que acceden a él tengan asegurados los recursos para el cumplimiento a cabalidad de su formación terciaria o superior, en programa de alta calidad. Ambas estrategias buscan facilitar el acceso de estudiantes que hayan completado el ciclo de formación básica secundaria y/o media con excelencia académica en las instituciones educativas del Municipio de Palmira",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"2",
//                 "Barrio":"Las Mercedes",
//                 "Imagen":"https://drive.google.com/open?id=1bDK9Wdg5bkP4Ue184bWRTwaDGQOSgVlf",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.299965,
//                     3.525607
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"CORPORACIÓN UNIVERSITARIA REMINGTON – UNIREMINGTON",
//                 "Proyecto": "Fondo Destacados",
//                 "Descripcion":"Este programa busca fomentar el acceso a la educación superior, técnica, tecnológica y la educación para el trabajo y el desarrollo humano, como una estrategia para el cierre de brechas, a través de dos estrategias:1. Darle continuidad al programa de becas del municipio y 2. Crear una nueva bolsa de becas que asegure que los estudiantes que acceden a él tengan asegurados los recursos para el cumplimiento a cabalidad de su formación terciaria o superior, en programa de alta calidad. Ambas estrategias buscan facilitar el acceso de estudiantes que hayan completado el ciclo de formación básica secundaria y/o media con excelencia académica en las instituciones educativas del Municipio de Palmira",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"7",
//                 "Barrio":"Barrio Nuevo",
//                 "Imagen":"https://drive.google.com/open?id=1bDK9Wdg5bkP4Ue184bWRTwaDGQOSgVlf",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3116568, 
//                     3.5361471
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"ESCUELA GASTRONÓMICA INTERNACIONAL - OBRA CULINARIA",
//                 "Proyecto": "Fondo Destacados",
//                 "Descripcion":"Este programa busca fomentar el acceso a la educación superior, técnica, tecnológica y la educación para el trabajo y el desarrollo humano, como una estrategia para el cierre de brechas, a través de dos estrategias:1. Darle continuidad al programa de becas del municipio y 2. Crear una nueva bolsa de becas que asegure que los estudiantes que acceden a él tengan asegurados los recursos para el cumplimiento a cabalidad de su formación terciaria o superior, en programa de alta calidad. Ambas estrategias buscan facilitar el acceso de estudiantes que hayan completado el ciclo de formación básica secundaria y/o media con excelencia académica en las instituciones educativas del Municipio de Palmira",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"3",
//                 "Barrio":"Emilia",
//                 "Imagen":"https://drive.google.com/open?id=1bDK9Wdg5bkP4Ue184bWRTwaDGQOSgVlf",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.537144,
//                     3.4263542
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"ESCUELA NACIONAL DEL DEPORTE – ENDEPORTE",
//                 "Proyecto": "Fondo Destacados",
//                 "Descripcion":"Este programa busca fomentar el acceso a la educación superior, técnica, tecnológica y la educación para el trabajo y el desarrollo humano, como una estrategia para el cierre de brechas, a través de dos estrategias:1. Darle continuidad al programa de becas del municipio y 2. Crear una nueva bolsa de becas que asegure que los estudiantes que acceden a él tengan asegurados los recursos para el cumplimiento a cabalidad de su formación terciaria o superior, en programa de alta calidad. Ambas estrategias buscan facilitar el acceso de estudiantes que hayan completado el ciclo de formación básica secundaria y/o media con excelencia académica en las instituciones educativas del Municipio de Palmira",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"",
//                 "Barrio":"",
//                 "Imagen":"https://drive.google.com/open?id=1bDK9Wdg5bkP4Ue184bWRTwaDGQOSgVlf",
//             },
//             "type": "Feature"
//         },
        
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2956583,
//                     3.540522
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"FUNDACIÓN UNIVERSITARIA DEL VALLE – FUV",
//                 "Proyecto": "Fondo Destacados",
//                 "Descripcion":"Este programa busca fomentar el acceso a la educación superior, técnica, tecnológica y la educación para el trabajo y el desarrollo humano, como una estrategia para el cierre de brechas, a través de dos estrategias:1. Darle continuidad al programa de becas del municipio y 2. Crear una nueva bolsa de becas que asegure que los estudiantes que acceden a él tengan asegurados los recursos para el cumplimiento a cabalidad de su formación terciaria o superior, en programa de alta calidad. Ambas estrategias buscan facilitar el acceso de estudiantes que hayan completado el ciclo de formación básica secundaria y/o media con excelencia académica en las instituciones educativas del Municipio de Palmira",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"",
//                 "Barrio":"",
//                 "Imagen":"https://drive.google.com/open?id=1bDK9Wdg5bkP4Ue184bWRTwaDGQOSgVlf",
//             },
//             "type": "Feature"
//         },
        
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2956972,
//                     3.5274944
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"INSTITUTO NACIONAL DE TECNOLOGIA EMPRESARIAL – INTE",
//                 "Proyecto": "Fondo Destacados",
//                 "Descripcion":"Este programa busca fomentar el acceso a la educación superior, técnica, tecnológica y la educación para el trabajo y el desarrollo humano, como una estrategia para el cierre de brechas, a través de dos estrategias:1. Darle continuidad al programa de becas del municipio y 2. Crear una nueva bolsa de becas que asegure que los estudiantes que acceden a él tengan asegurados los recursos para el cumplimiento a cabalidad de su formación terciaria o superior, en programa de alta calidad. Ambas estrategias buscan facilitar el acceso de estudiantes que hayan completado el ciclo de formación básica secundaria y/o media con excelencia académica en las instituciones educativas del Municipio de Palmira",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"6",
//                 "Barrio":"La Trinidad",
//                 "Imagen":"https://drive.google.com/open?id=1bDK9Wdg5bkP4Ue184bWRTwaDGQOSgVlf",
//             },
//             "type": "Feature"
//         },
        
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2991862, 
//                     3.5337573
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"INSTITUTO NACIONAL DE TELECOMUNICACIONES – INSTEL",
//                 "Proyecto": "Fondo Destacados",
//                 "Descripcion":"Este programa busca fomentar el acceso a la educación superior, técnica, tecnológica y la educación para el trabajo y el desarrollo humano, como una estrategia para el cierre de brechas, a través de dos estrategias:1. Darle continuidad al programa de becas del municipio y 2. Crear una nueva bolsa de becas que asegure que los estudiantes que acceden a él tengan asegurados los recursos para el cumplimiento a cabalidad de su formación terciaria o superior, en programa de alta calidad. Ambas estrategias buscan facilitar el acceso de estudiantes que hayan completado el ciclo de formación básica secundaria y/o media con excelencia académica en las instituciones educativas del Municipio de Palmira",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"4",
//                 "Barrio":"Santa Rita",
//                 "Imagen":"https://drive.google.com/open?id=1bDK9Wdg5bkP4Ue184bWRTwaDGQOSgVlf",
//             },
//             "type": "Feature"
//         },
        
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.304236,
//                     3.5273475
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"POLITÉCNICO EMPRESARIAL COLOMBIANO – PEC",
//                 "Proyecto": "Fondo Destacados",
//                 "Descripcion":"Este programa busca fomentar el acceso a la educación superior, técnica, tecnológica y la educación para el trabajo y el desarrollo humano, como una estrategia para el cierre de brechas, a través de dos estrategias:1. Darle continuidad al programa de becas del municipio y 2. Crear una nueva bolsa de becas que asegure que los estudiantes que acceden a él tengan asegurados los recursos para el cumplimiento a cabalidad de su formación terciaria o superior, en programa de alta calidad. Ambas estrategias buscan facilitar el acceso de estudiantes que hayan completado el ciclo de formación básica secundaria y/o media con excelencia académica en las instituciones educativas del Municipio de Palmira",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"6",
//                 "Barrio":"Central",
//                 "Imagen":"https://drive.google.com/open?id=1bDK9Wdg5bkP4Ue184bWRTwaDGQOSgVlf",
//             },
//             "type": "Feature"
//         },
        
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2993695,
//                     3.5336342
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"THE EMBASSY EDUCATIONAL CENTER",
//                 "Proyecto": "Fondo Destacados",
//                 "Descripcion":"Este programa busca fomentar el acceso a la educación superior, técnica, tecnológica y la educación para el trabajo y el desarrollo humano, como una estrategia para el cierre de brechas, a través de dos estrategias:1. Darle continuidad al programa de becas del municipio y 2. Crear una nueva bolsa de becas que asegure que los estudiantes que acceden a él tengan asegurados los recursos para el cumplimiento a cabalidad de su formación terciaria o superior, en programa de alta calidad. Ambas estrategias buscan facilitar el acceso de estudiantes que hayan completado el ciclo de formación básica secundaria y/o media con excelencia académica en las instituciones educativas del Municipio de Palmira",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"4",
//                 "Barrio":"Santa Rita",
//                 "Imagen":"https://drive.google.com/open?id=1bDK9Wdg5bkP4Ue184bWRTwaDGQOSgVlf",
//             },
//             "type": "Feature"
//         },
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3202711,
//                     3.5394268
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"UNIVERSIDAD ANTONIO NARIÑO – UAN",
//                 "Proyecto": "Fondo Destacados",
//                 "Descripcion":"Este programa busca fomentar el acceso a la educación superior, técnica, tecnológica y la educación para el trabajo y el desarrollo humano, como una estrategia para el cierre de brechas, a través de dos estrategias:1. Darle continuidad al programa de becas del municipio y 2. Crear una nueva bolsa de becas que asegure que los estudiantes que acceden a él tengan asegurados los recursos para el cumplimiento a cabalidad de su formación terciaria o superior, en programa de alta calidad. Ambas estrategias buscan facilitar el acceso de estudiantes que hayan completado el ciclo de formación básica secundaria y/o media con excelencia académica en las instituciones educativas del Municipio de Palmira",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"",
//                 "Barrio":"",
//                 "Imagen":"https://drive.google.com/open?id=1bDK9Wdg5bkP4Ue184bWRTwaDGQOSgVlf",
//             },
//             "type": "Feature"
//         },
        
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3011619,
//                     3.5524524
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"UNIVERSIDAD DEL VALLE – UNIVALLE",
//                 "Proyecto": "Fondo Destacados",
//                 "Descripcion":"Este programa busca fomentar el acceso a la educación superior, técnica, tecnológica y la educación para el trabajo y el desarrollo humano, como una estrategia para el cierre de brechas, a través de dos estrategias:1. Darle continuidad al programa de becas del municipio y 2. Crear una nueva bolsa de becas que asegure que los estudiantes que acceden a él tengan asegurados los recursos para el cumplimiento a cabalidad de su formación terciaria o superior, en programa de alta calidad. Ambas estrategias buscan facilitar el acceso de estudiantes que hayan completado el ciclo de formación básica secundaria y/o media con excelencia académica en las instituciones educativas del Municipio de Palmira",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"1",
//                 "Barrio":"",
//                 "Imagen":"https://drive.google.com/open?id=1bDK9Wdg5bkP4Ue184bWRTwaDGQOSgVlf",
//             },
//             "type": "Feature"
//         },
        
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.297261,
//                     3.5368764
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"UNIVERSIDAD NACIONAL ABIERTA Y A DISTANCIA – UNAD",
//                 "Proyecto": "Fondo Destacados",
//                 "Descripcion":"Este programa busca fomentar el acceso a la educación superior, técnica, tecnológica y la educación para el trabajo y el desarrollo humano, como una estrategia para el cierre de brechas, a través de dos estrategias:1. Darle continuidad al programa de becas del municipio y 2. Crear una nueva bolsa de becas que asegure que los estudiantes que acceden a él tengan asegurados los recursos para el cumplimiento a cabalidad de su formación terciaria o superior, en programa de alta calidad. Ambas estrategias buscan facilitar el acceso de estudiantes que hayan completado el ciclo de formación básica secundaria y/o media con excelencia académica en las instituciones educativas del Municipio de Palmira",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"2",
//                 "Barrio":"Versalles",
//                 "Imagen":"https://drive.google.com/open?id=1bDK9Wdg5bkP4Ue184bWRTwaDGQOSgVlf",
//             },
//             "type": "Feature"
//         },
        
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.2924261,
//                     3.5416195
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"UNIVERSIDAD PONTIFICIA BOLIVARIANA – UPB",
//                 "Proyecto": "Fondo Destacados",
//                 "Descripcion":"Este programa busca fomentar el acceso a la educación superior, técnica, tecnológica y la educación para el trabajo y el desarrollo humano, como una estrategia para el cierre de brechas, a través de dos estrategias:1. Darle continuidad al programa de becas del municipio y 2. Crear una nueva bolsa de becas que asegure que los estudiantes que acceden a él tengan asegurados los recursos para el cumplimiento a cabalidad de su formación terciaria o superior, en programa de alta calidad. Ambas estrategias buscan facilitar el acceso de estudiantes que hayan completado el ciclo de formación básica secundaria y/o media con excelencia académica en las instituciones educativas del Municipio de Palmira",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"",
//                 "Barrio":"",
//                 "Imagen":"https://drive.google.com/open?id=1bDK9Wdg5bkP4Ue184bWRTwaDGQOSgVlf",
//             },
//             "type": "Feature"
//         },
        
//         {
//             "geometry": {
//                 "coordinates": [
//                     -76.3013689,
//                     3.535275
//                 ],
//                 "type": "Point"
//             },
//             "properties": {
//                 "Titulo":"UNIVERSIDAD SANTIAGO DE CALI – USC",
//                 "Proyecto": "Fondo Destacados",
//                 "Descripcion":"Este programa busca fomentar el acceso a la educación superior, técnica, tecnológica y la educación para el trabajo y el desarrollo humano, como una estrategia para el cierre de brechas, a través de dos estrategias:1. Darle continuidad al programa de becas del municipio y 2. Crear una nueva bolsa de becas que asegure que los estudiantes que acceden a él tengan asegurados los recursos para el cumplimiento a cabalidad de su formación terciaria o superior, en programa de alta calidad. Ambas estrategias buscan facilitar el acceso de estudiantes que hayan completado el ciclo de formación básica secundaria y/o media con excelencia académica en las instituciones educativas del Municipio de Palmira",
//                 "Dependencia":"Secretaría de Salud",
//                 "Comuna":"4",
//                 "Barrio":"Alfonso López",
//                 "Imagen":"https://drive.google.com/open?id=1bDK9Wdg5bkP4Ue184bWRTwaDGQOSgVlf",
//             },
//             "type": "Feature"
//         },
//         ///
//     ],
//     "type": "FeatureCollection"
// }