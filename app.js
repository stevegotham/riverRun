(function() {
  angular.module('riverRun', ['ui.bootstrap','ngMap'])
    .controller('riverController', ['$http','NgMap', riverControllerFunction])

    function riverControllerFunction($http,NgMap) {
      var rc = this

      // ============  variables  ============

      rc.listOfRuns = []
      rc.riverName
      rc.riverClass
      rc.riverType
      rc.rating
      rc.notes
      rc.riverLocation
      rc.classRating

      // ============  create new river objects   ============

      class River {
        constructor(riverName, runName, riverClass, riverType, notes, riverLocation, stationId) {
          this.riverName = riverName
          this.runName = runName
          this.riverClass = riverClass
          this.riverType = riverType
          this.notes = notes
          this.riverLocation = riverLocation
          this.stationId = stationId
          this.waterLevel = ''
        }
        save () {
          rc.listOfRuns.push(this)
        }

      }

      //  ============ populate the list of runs ===============

      rc.run1 = new River('Arkansas River', 'Royal Gorge', 'IV', 'river',null, null, '07094500').save()
      rc.run2 = new River('Arkansas River', 'Bighorn Sheep Canyon', 'III', 'river','Great fun run', null, '07094500').save()
      rc.run3 = new River('Animas, Upper', 'Upper Animas', 'IV-V','river', null, null, '09359020').save()
      rc.run4 = new River('Arkansas River','Brown\'s Canyon','II-IV','river', null, null, '07091200').save()
      rc.run5 = new River('Clear Creek, S. Platte','Black Rock','V','creek', null, null, '06719505').save()
      rc.run6 = new River('Clear Creek, S. Platte', 'Upper Clear Creek', 'IV', 'creek', null, null, '06719505').save()
      rc.run7 = new River('Colorado', 'Gore Canyon', 'IV-V', 'river', null, null, '09058000').save()
      rc.run8 = new River('Dolores', 'Dolores Canyon', 'III-IV', 'river', null, null, '09169500').save()
      rc.run9 = new River('Eagle', 'Upper Eagle', 'III', 'river', null, null, '09064600').save()

      // ============  functions  ============

      rc.addRiver = function() {
        var river = new River(rc.riverName, rc.runName, rc.riverClass, rc.riverType, rc.notes, rc.riverLocation, rc.stationId).save()
        rc.riverName = ''
        rc.runName = ''
        rc.riverClass = ''
        rc.riverType = ''
        rc.notes = ''
        rc.riverLocation = ''
        rc.myLatLng = {lat: null, lng: null}
        $('#myModal').modal('hide')
      }

      rc.getRiverLevel = function(obj) {
        $http.get('http://waterservices.usgs.gov/nwis/iv/?format=json&sites=' + obj.stationId + '&parameterCd=00060')
          .then(function(response) {
            obj.waterLevel = (response.data.value.timeSeries[0].values[0].value[0].value)
          })
      }

      rc.getAllLevels = function() {
        for (var i=0; i<rc.listOfRuns.length; i++) {
          rc.getRiverLevel(rc.listOfRuns[i])
        }
      }
      rc.getAllLevels();

      // =============== map functions =============
      rc.makeMap = function() {
        console.log('working')
        NgMap.getMap().then(function(map) {
          // map.center = '{lat:39.736011, lng:-105.019184}'
          console.log(map.getCenter());
          console.log('markers', map.markers);
        });
      }
      rc.makeMap();
      // rc.initMap = function () {
      //   var mapDiv = document.getElementById('map')
      //   var map = new google.maps.Map(mapDiv, {
      //     center: {lat:39.736011, lng:-105.019184},
      //     zoom: 7,
      //   });
      //   var marker = new google.maps.Marker({
      //     position: {
      //     lat:39.73, lng:-105.019
      //     },
      //     map: map
      //   });
      // }
      // rc.initMap();

// ============================== closing tag ============================= //
    }
})();
