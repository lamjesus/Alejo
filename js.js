

const respuestaDrive = async () => {
  const response = await fetch('https://script.google.com/macros/s/AKfycbw9JmUJV1aJolG-96Bn2UzSiEmhAgvvW8f46tvDUtMOo1zCiTQ-Olotr9QqXAmgBPJd/exec')
  const data = await response.json()
  console.log(data);
  const features = []
  data.forEach(feature => {
    features.push({
      "geometry": {
        "coordinates": [feature.coordinates1, feature.coordinates2],
        "type": feature.type
      },
      "properties": {
        "Descripcion": feature.Descripcion,
        "Titulo": feature.Titulo,
        "Proyecto": feature.Proyecto,
        "Barrio": feature.Barrio,
        "Dependencia": feature.Dependencia,
        "Comuna": feature.Comuna,
        "Imagen": feature.Imagen,
      },
      "type": "Feature"
    })

  })

  console.log("feature", features);
  const geo = {
    "type": "FeatureCollection",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": features,
    "type": "FeatureCollection"
  }

  return geo
}

function colorPuntoProyecto(cadaProyectoConColor) {
  let cadaPunto = {
    'Áreas con esquemas de Pago por Servicios Ambientales implementados': "#1565C0",
    'Áreas con servicio ecosistémicos mantenidas (Siembra de Árboles)': "#AB47BC",
    'Campañas de educación Ambiental y participación implementadas (Ruta Verde)': "#00ACC1",
    'PROGRAMA PALMIPILOS EN CONVENIO CON EL  BANCO INTERAMERICANO DE DESARROLLO - BID': "#303F9F",
    'PROGRAMA MUNICIPAL DE BILINGÜISMO - Palmira Moving Palante': "#C62828",
    'ESTRATEGIA ESCUELA SOMOS TODOS': "#FF8F00",
    'FONDO DESTACADOS': "#3D5AFE",
    'GASTOS ADMINISTRATIVOS - DOTACION PARA PERSONAL ADMINISTATIVO Y DOCENTE A CARGO DEL SGP': "#FF4081",
    'GASTOS ADMINISTRATIVOS - BIENESTAR LABORAL': "#00BCD4",
    'INFRAESTRUCTURA EDUCATIVA MEJORAMIENTO DE LOS AMBIENTES ESCOLARES RECURSOS FOME': "#F50057",
    'INFRAESTRUCTURA EDUCATIVA MEJORAMIENTO DE LOS AMBIENTES ESCOLARES - PROYECTO TERMINACION DE CUBIERTAS EN ESCENARIOS DEPORTIVOS': "#FFD600",
    'INFRAESTRUCTURA EDUCATIVA MEJORAMIENTO DE LOS AMBIENTES ESCOLARES CON RECURSOS FINDETER': "#00BCD4",
    'INFRAESTRUCTURA EDUCATIVA MEJORAMIENTO DE LOS AMBIENTES ESCOLARES CON RECURSOS DEL DESARROLLO LOCAL COMUNA 1': "#E57373",
    'PROGRAMA TRANSPORTE ESCOLAR': "#8E24AA",
    'PROGRAMA DE ALIMENTACIÓN ESCOLAR PAE': "#F9A825",
    'PROGRAMA YO ELIJO MI CUPO': "#B71C1C",
    'Palmira Nos Conecta con Zonas WIFI Gratuitas': "#B388FF",
    'Palmira Nos Conecta con los Puntos Vive Digital': "#827717",
    'Capacidad Operativa (Mayor presencia de la policia en comunas)': "#C0CA33",
    'Comparativo (Desarticulación de Bandas Delincuenciales por comuna)': "#E65100",
    'Yo cuido mi barrio': "#D81B60",

  };
  let cadaPunto_default = "#37474F";
  cadaProyectoConColor = cadaPunto[cadaProyectoConColor] || cadaPunto_default;
  return cadaProyectoConColor;
};





const map = L.map('map', { center: [3.5284, -76.2922], zoom: 12, });
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>', }).addTo(map);

const mapaProyectos = L.layerGroup().addTo(map);


function estilo_proyectos(feature) {
  return {
    radius: 5,
    fillColor: colorPuntoProyecto(feature.properties.Proyecto),
    color: colorPuntoProyecto(feature.properties.Proyecto),
    weight: 8,
    opacity: 0.2,
    fillOpacity: 0.8,
  };
};

function popup_proyectos(feature, layer) {
  layer.bindPopup(
    "<div style=text-align:center><h3>" + feature.properties.Titulo + "</h3></div>" +
    "<hr>" +
    
    "<tr><td><span class='bold'>Proyecto:</span></br>" + feature.properties.Proyecto + "</td></tr></br></br>" +

    "<tr><td><span class='bold'>Descripción:</span></br> " + feature.properties.Descripcion + "</br></br></td></tr>" +
    "<tr><td style=text-align:center><img src=" + feature.properties.Imagen + " width='140'> " + "</td></tr></table>",
             
    { minWidth: 200, maxWidth: 250 });
};

let MarkerOptions = {
  radius: 8,
  fillColor: "#ff7800",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};

async function myFunction() {
  const geojson = await respuestaDrive()
  console.log(geojson);
  let proyectos = await L.geoJSON(geojson, {
    pointToLayer: function (feature, latlng) {

      return L.circleMarker(latlng, MarkerOptions);
    },
    style: estilo_proyectos,
    onEachFeature: popup_proyectos
  });
  mapaProyectos.addLayer(proyectos);


}

async function estiloSelect() {

  let seleccion1 = !0;
  let seleccion2 = !0;
  let seleccion3 = !0;
  let seleccion4 = !0;
  let seleccionProyecto = document.getElementById("Proyecto").value;

  let dataPrint = document.getElementById("dataPresupuesto");
  let dataPrint2 = document.getElementById("dataPresupuestoInvertido");


  const geojson = await respuestaDrive()
  let proyectos = L.geoJSON(geojson, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, MarkerOptions);
    },
    filter: function (feature, layer) {


      if (document.getElementById("Dependencia").value) {
        seleccion1 = (feature.properties.Dependencia == document.getElementById("Dependencia").value)
      }


      if (document.getElementById("Proyecto").value) {
        seleccion2 = (feature.properties.Proyecto == document.getElementById("Proyecto").value);
      }


      if (document.getElementById("Comuna").value) {
        seleccion3 = (feature.properties.Comuna == document.getElementById("Comuna").value)
      }


      if (document.getElementById("Barrio").value) {
        seleccion4 = (feature.properties.Barrio == document.getElementById("Barrio").value)
      }


      return (seleccion1 && seleccion2 && seleccion3 && seleccion4);
    },

    style: estilo_proyectos,
    onEachFeature: popup_proyectos

  });

  const presupuestoTotal = {
    "Áreas con esquemas de Pago por Servicios Ambientales implementados": "$ 400,000,000",
    "Áreas con servicio ecosistémicos mantenidas (Siembra de Árboles)": "$ 45,000,000",
    "Campañas de educación Ambiental y participación implementadas (Ruta Verde)": "$ 55,288,000",
    "PROGRAMA PALMIPILOS EN CONVENIO CON EL  BANCO INTERAMERICANO DE DESARROLLO - BID": "$ 2.558.781.930",
    "PROGRAMA MUNICIPAL DE BILINGÜISMO - Palmira Moving Palante": "$ 314.362.539",
    "ESTRATEGIA ESCUELA SOMOS TODOS": "$ 234.000.000",
    "FONDO DESTACADOS": "$ 3.362.493.315",
    "GASTOS ADMINISTRATIVOS - DOTACION PARA PERSONAL ADMINISTATIVO Y DOCENTE A CARGO DEL SGP": "$ 0.00",
    "GASTOS ADMINISTRATIVOS - BIENESTAR LABORAL": "$ 90.000.000",
    "INFRAESTRUCTURA EDUCATIVA MEJORAMIENTO DE LOS AMBIENTES ESCOLARES RECURSOS FOME": "$ 475.587.162",
    "INFRAESTRUCTURA EDUCATIVA MEJORAMIENTO DE LOS AMBIENTES ESCOLARES - PROYECTO TERMINACION DE CUBIERTAS EN ESCENARIOS DEPORTIVOS": "$ 1.579.952.586",
    "INFRAESTRUCTURA EDUCATIVA MEJORAMIENTO DE LOS AMBIENTES ESCOLARES CON RECURSOS FINDETER": "$ 0 (por gestión)",
    "INFRAESTRUCTURA EDUCATIVA MEJORAMIENTO DE LOS AMBIENTES ESCOLARES CON RECURSOS DEL DESARROLLO LOCAL COMUNA 1": "$ 422.377.099",
    "PROGRAMA TRANSPORTE ESCOLAR": "$ 6.092.597.257",
    "PROGRAMA DE ALIMENTACIÓN ESCOLAR PAE": "$ 15.020.899.023",
    "PROGRAMA YO ELIJO MI CUPO": "$ 44.400.000",
    "Palmira Nos Conecta con Zonas WIFI Gratuitas": "$ 0.00",
    "Palmira Nos Conecta con los Puntos Vive Digital": "$ 109.200.000",
    "Capacidad Operativa (Mayor presencia de la policia en comunas)": "$ 5.030.725.532",
    "Comparativo (Desarticulación de Bandas Delincuenciales por comuna)": "$ 508.067.586",
    "Yo cuido mi barrio": "$ 392.284.646",
    "MEJORAMIENTO DEL ACCESO PARA LA POBLACIÓN EN CONDICIÓN DE VULNERABILIDAD DEL MUNICIPIO DE PALMIRA": "$ 500.000.000",
    "Adecuación Mantenimiento y Dotación de Centros de Desarrollo Infantil Ubicados en el Municipio de Palmira": "No hay datos",
    "Mejoramiento de la calidad de vida de adultos mayores en condición de vulnerabilidad en el municipio de Palmira": "$ 655.000.000",
    "Fortalecimiento de los instrumentos para la atención de la población en condición de vulnerabilidad del municipio de Palmira": "$ 3.000.000",
    "prueba": ":)",
  }

  const mostrarPresupuestoTotal = (presupuesto) => {
    dataPrint.innerHTML = (presupuestoTotal[presupuesto] || "Selecciona un Proyecto")
  }
  mostrarPresupuestoTotal(seleccionProyecto);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const presupuestoInvertido = {
    "Áreas con esquemas de Pago por Servicios Ambientales implementados": "$ 193,691.619",
    "Áreas con servicio ecosistémicos mantenidas (Siembra de Árboles)": "$ 33,750,000",
    "Campañas de educación Ambiental y participación implementadas (Ruta Verde)": "$ 0.00",
    "PROGRAMA PALMIPILOS EN CONVENIO CON EL  BANCO INTERAMERICANO DE DESARROLLO - BID": "$ 501.675.000",
    "PROGRAMA MUNICIPAL DE BILINGÜISMO - Palmira Moving Palante": "$ 62.000.000",
    "ESTRATEGIA ESCUELA SOMOS TODOS": "$ 171.200.000",
    "FONDO DESTACADOS": "$ $3.119.310.456",
    "GASTOS ADMINISTRATIVOS - DOTACION PARA PERSONAL ADMINISTATIVO Y DOCENTE A CARGO DEL SGP": "$ 0.00",
    "GASTOS ADMINISTRATIVOS - BIENESTAR LABORAL": "$ 33.700.000",
    "INFRAESTRUCTURA EDUCATIVA MEJORAMIENTO DE LOS AMBIENTES ESCOLARES RECURSOS FOME": "$ 475.587.162",
    "INFRAESTRUCTURA EDUCATIVA MEJORAMIENTO DE LOS AMBIENTES ESCOLARES - PROYECTO TERMINACION DE CUBIERTAS EN ESCENARIOS DEPORTIVOS": "$ 0 (por gestión)",
    "INFRAESTRUCTURA EDUCATIVA MEJORAMIENTO DE LOS AMBIENTES ESCOLARES CON RECURSOS FINDETER": "$ 0 (por gestión)",
    "INFRAESTRUCTURA EDUCATIVA MEJORAMIENTO DE LOS AMBIENTES ESCOLARES CON RECURSOS DEL DESARROLLO LOCAL COMUNA 1": "$ 422.377.099",
    "PROGRAMA TRANSPORTE ESCOLAR": "$ 4.579.394.697",
    "PROGRAMA DE ALIMENTACIÓN ESCOLAR PAE": "$ 9.018.468.704",
    "PROGRAMA YO ELIJO MI CUPO": "$ 37.000.000",
    "Palmira Nos Conecta con Zonas WIFI Gratuitas": "$ 0.00",
    "Palmira Nos Conecta con los Puntos Vive Digital": "$ 79.200.000",
    "Capacidad Operativa (Mayor presencia de la policia en comunas)": "$ 1.420.350.887",
    "Comparativo (Desarticulación de Bandas Delincuenciales por comuna)": "$ 491.500.000,00",
    "Yo cuido mi barrio": "$ 301.553.279",
    "MEJORAMIENTO DEL ACCESO PARA LA POBLACIÓN EN CONDICIÓN DE VULNERABILIDAD DEL MUNICIPIO DE PALMIRA": "$ 500.000.000",
    "Adecuación Mantenimiento y Dotación de Centros de Desarrollo Infantil Ubicados en el Municipio de Palmira": "No hay datos",
    "Mejoramiento de la calidad de vida de adultos mayores en condición de vulnerabilidad en el municipio de Palmira": "$ 655.000.000",
    "Fortalecimiento de los instrumentos para la atención de la población en condición de vulnerabilidad del municipio de Palmira": "$ 3.000.000",
    "prueba": ":)",
  }

  const mostrarPresupuestoTotalInvertido = (presupuesto) => {
    dataPrint2.innerHTML = (presupuestoInvertido[presupuesto] || "Selecciona un Proyecto")
  }
  mostrarPresupuestoTotalInvertido(seleccionProyecto);

  mapaProyectos.clearLayers();
  mapaProyectos.addLayer(proyectos);

}