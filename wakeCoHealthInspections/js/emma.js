const scoreSelect = (fetch("https://opendata.arcgis.com/datasets/ebe3ae7f76954fad81411612d7c4fb17_1.geojson").then(function(response){
  response.json().then(function(data){
for (var i = 0; i < 100; i++) {
// console.log(data);
      let businessID = data.features[i].properties.HSISID;
      let score = data.features[i].properties.Score;
      return score;
      console.log(businessID + " " + "restaurant has a score of " + score + " ");
}



  });
}));

// fetch("http://maps.wakegov.com/arcgis/rest/services/Inspections/RestaurantInspectionsOpenData/MapServer/2/query?where=1%3D1&outFields=HSISID,InspectDate,comments&outSR=4326&f=json").then(function(response){
//   response.json().then(function(data){
//     for (var i = 0; i < data.features.length; i++) {
//           let hsisidViolation = data.features[i].attributes.HSISID;
//           console.log(hsisidViolation);
//     }
//
//   });
// });

const nameData = (fetch("https://opendata.arcgis.com/datasets/124c2187da8c41c59bde04fa67eb2872_0.geojson").then(function(response){
  response.json().then(function(data){
    for (var i = 0; i < 100; i++) {
      // console.log(data);
          let businessRestaurantID = data.features[i].properties.HSISID;
          const businessName = data.features[i].properties.Name;
          let businessName;
          console.log(businessRestaurantID + " " + businessName)
    }

  });
}));

console.log(nameData.businessRestaurantID)






//"http://data-wake.opendata.arcgis.com/datasets/124c2187da8c41c59bde04fa67eb2872_0/geoservice?geometry=-86.516%2C34.22%2C-70.695%2C37.339"
