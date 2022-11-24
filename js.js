// const map = L.map("map", { center: [3.5284, -76.2922], zoom: 15 });
// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// }).addTo(map);

// const circle = L.circle([3.52767, -76.29972], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.8,
//     radius: 20
// }).addTo(map);

// circle.bindPopup("<b>El Teatro Materón</b><br>Es nuestra oficina, bueno un gran espacio en el piso 4");

const respuestaDrive = async()=>{
  const response = await fetch('https://script.google.com/macros/s/AKfycbxbF90WBTEsu213neYGsgbvpkoJ33OYdWjOtQViQW48rdgJdakeSRxlPSGvbWmo4Epv/exec')
  const data = await response.json()
 const features = []
 data.forEach(feature => {
  features.push({"geometry": {
      "coordinates": [feature.Coordinates],
      "type": feature.Type
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
  "type": "Feature"})
  
 })
 
 return features
}
const data = async ()=>{
  return await respuestaDrive()
}


let geojson = {
  "type": "FeatureCollection",
  "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  
  "features": [  data() ],
  "type": "FeatureCollection"
};


console.log(geojson);






const map = L.map('map', {center: [3.5284, -76.2922], zoom: 15,});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',}).addTo(map);

const mapaProyectos = L.layerGroup().addTo(map);

function colorPuntoProyecto(cadaProyectoConColor) {
  let cadaPunto = {
    Galeria: "#D81B60",
    'Aguas de Palmira': "#1565C0",
    'Casa de Mujeres Empoderadas de Palmira': "#AB47BC",
    Megacolegio: "#00ACC1",
    'Palmira Nos Conecta': "#303F9F",
    Sisben: "#C62828",
    ViasPaLante: "#FF8F00",
    'Presupuesto para el Desarrollo Local':"#3D5AFE",
    'Fondo Destacados':"#FF4081",
    Palmipilos:"#00BCD4",
    Semaforo :"#F50057",
    Palmibici:"#FFD600",
    Camaras:"#00BCD4",
  };
  
  let cadaPunto_default = "#37474F";
  cadaProyectoConColor = cadaPunto[cadaProyectoConColor] || cadaPunto_default;
  return cadaProyectoConColor;
};

function estilo_proyectos (feature) {
  return{
    radius: 5,
    fillColor: colorPuntoProyecto(feature.properties.Proyecto), 
    color: colorPuntoProyecto(feature.properties.Proyecto), 
    weight: 8,
    opacity : 0.2,
    fillOpacity : 0.8,
  };
};

function popup_proyectos (feature, layer) {
  layer.bindPopup(
  "<div style=text-align:center><h3>"+feature.properties.Titulo+"</h3></div>"+
  "<hr>"+
  // "<table><tr><td><span class='bold'>Familia:</span></br>"+feature.properties.Familia+"</td></tr>"+

  // "<tr><td><span class='bold'>Barrio:</span></br> "+feature.properties.Barrio+"</td></tr>"+
  // "</td></tr><tr><td><span class='bold'>Comuna:</span></br> "+feature.properties.Comuna+
  "<tr><td><span class='bold'>Proyecto:</span></br>"+feature.properties.Proyecto+"</td></tr></br></br>"+

  "<tr><td><span class='bold'>Descripción:</span></br> "+feature.properties.Descripcion+"</br></br></td></tr>"+
  "<tr><td style=text-align:center><img src="+feature.properties.Imagen+" width='140'> "+"</td></tr></table>",
  // "</td></tr><tr><td>"+feature.properties.Link+               
  {minWidth: 200, maxWidth: 250});				
};

let MarkerOptions = {
  radius: 8,
  fillColor: "#ff7800",
  color: "#000",
  weight: 1,
  opacity: 1,
 fillOpacity: 0.8
};

function myFunction() { 
  let proyectos = L.geoJSON(geojson, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, MarkerOptions);
    },	
    style:estilo_proyectos,
    onEachFeature: popup_proyectos	
  });		
mapaProyectos.addLayer(proyectos);


}

function estiloSelect() {
  let miSelect = document.getElementById("Proyecto").value;
  let miSelect2 = document.getElementById("Comuna").value;
  let miSelect3 = document.getElementById("Barrio").value;
  let miSelect4 = document.getElementById("Dependencia").value;
  let miSelect5 = document.getElementById("semaforo").checked;
  let miSelect6 = document.getElementById("palmibici").checked;
  let miSelect7 = document.getElementById("camara").checked;

  let dataPrint = document.getElementById("dataPresupuesto");

  let proyectos = L.geoJSON(geojson, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, MarkerOptions);
    },
    filter: function(feature, layer) {								
      if(miSelect != "TODOS")	{
        return (feature.properties.Proyecto == miSelect );
      }	
      if(miSelect2 != "TODOS")	{
        return (feature.properties.Comuna == miSelect2);
      }	
      if(miSelect3 != "TODOS")	{
        return (feature.properties.Barrio == miSelect3 );
      }	
      if(miSelect4 != "TODOS")	{
        return (feature.properties.Dependencia == miSelect4 );
      }
      if(miSelect5 == true )  {
        return (feature.properties.Proyecto == "Semaforo" );                                
      }
      if(miSelect6 == true )  {
        return (feature.properties.Proyecto == "Palmibici" );                                
      }
      if(miSelect7 == true )  {
        return (feature.properties.Proyecto == "Camaras" );                                
      }
      else
        return true
      },
      style:estilo_proyectos,
      onEachFeature:popup_proyectos	
  });

  if(miSelect2 == '1' ) {
    dataPrint.innerHTML = "100";
  }
  else if(miSelect2 == '2' ) {
    dataPrint.innerHTML = "200";
  }
  else if(miSelect2 == '3' ) {
    dataPrint.innerHTML = "300";
  }
    else if(miSelect2 == '4' ) {
    dataPrint.innerHTML = "400";
  }
    else if(miSelect2 == '5' ) {
    dataPrint.innerHTML = "500";
  }
    else if(miSelect2 == '6' ) {
    dataPrint.innerHTML = "600";
  }
    else if(miSelect2 == '7' ) {
    dataPrint.innerHTML = "700";
  }
    else if(miSelect2 == '8' ) {
    dataPrint.innerHTML = "800";
  }
    else if(miSelect2 == '9' ) {
    dataPrint.innerHTML = "900";
  }
    else if(miSelect2 == '10' ) {
    dataPrint.innerHTML = "1.000";
  }
    else if(miSelect2 == '11' ) {
    dataPrint.innerHTML = "11.000";
  }
    else if(miSelect2 == '12' ) {
    dataPrint.innerHTML = "12.000";
  }
    else if(miSelect2 == '13' ) {
    dataPrint.innerHTML = "13.000";
  }
    else if(miSelect2 == '14' ) {
    dataPrint.innerHTML = "14.000";
  }
    else if(miSelect2 == '15' ) {
    dataPrint.innerHTML = "15.000";
  }
    else if(miSelect2 == '16' ) {
    dataPrint.innerHTML = "16.000";
  }
  else
    dataPrint.innerHTML = "500.000.000.000";

  mapaProyectos.clearLayers();
  mapaProyectos.addLayer(proyectos);

}