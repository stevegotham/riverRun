(function() {
  angular.module('riverRun', ['ui.bootstrap','ngMap','ngAnimate'])
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
      rc.mapCenter = [39.736011,-105.019184]
      rc.zoom = 6

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
          this.open = false
        }
        save () {
          rc.listOfRuns.push(this)
        }

      }

      //  ============ populate the list of runs ===============

      rc.run1 = new River('Arkansas River', 'Royal Gorge', 'IV', 'river',null, ['38.4861078','-105.3727707'], '07094500').save()
      rc.run2 = new River('Arkansas River', 'Bighorn Sheep Canyon', 'III', 'river','Great fun run', ['38.447475','-105.522723'], '07094500').save()
      rc.run3 = new River('Animas River, Upper', 'Upper Animas', 'IV-V','river', null, ['37.802641','-107.672806'], '09359020').save()
      rc.run4 = new River('Arkansas River','Brown\'s Canyon','II-IV','river', null, ['38.7528617163','-106.0700207949'], '07091200').save()
      rc.run5 = new River('Clear Creek, S. Platte','Black Rock','V','creek', null, ['39.741437','-105.329157'], '06719505').save()
      rc.run6 = new River('Clear Creek, S. Platte', 'Upper Clear Creek', 'IV', 'creek', null, ['39.745562','-105.434856'], '06719505').save()
      rc.run7 = new River('Colorado River', 'Gore Canyon', 'IV-V', 'river', null, ['40.043085','-106.395889'], '09058000').save()
      rc.run8 = new River('Dolores River', 'Dolores Canyon', 'III-IV', 'river', null, ['37.795352','-108.826227'], '09169500').save()
      rc.run9 = new River('Eagle River', 'Upper Eagle', 'III', 'river', null, ['39.588027','-106.430115'], '09064600').save()

      // ============  functions  ============

      // creates a new River object and adds the river from the form to the array and then clears the form
      rc.addRiver = function() {
        var river = new River(rc.riverName, rc.runName, rc.riverClass, rc.riverType, rc.notes, rc.riverLocation, rc.stationId).save()
        rc.riverName = ''
        rc.runName = ''
        rc.riverClass = ''
        rc.riverType = ''
        rc.notes = ''
        rc.riverLocation = ''
        // exits the modal on submit
        $('#myModal').modal('hide')
      }

      // the function to get a water level from usgs database
      rc.getRiverLevel = function(obj) {
        $http.get('http://waterservices.usgs.gov/nwis/iv/?format=json&sites=' + obj.stationId + '&parameterCd=00060')
          .then(function(response) {
            obj.waterLevel = (response.data.value.timeSeries[0].values[0].value[0].value)
          })
      }

      // gets water levels for all existing runs on page load
      rc.getAllLevels = function() {
        for (var i=0; i<rc.listOfRuns.length; i++) {
          rc.getRiverLevel(rc.listOfRuns[i])
        }
      }
      rc.getAllLevels();

      // =============== map functions =============

       // creates the map
      NgMap.getMap()

      // centers the map on the run selected
      rc.centerMap = function(run) {
        rc.mapCenter = run.riverLocation
        rc.zoom = 10
      }

      // opens the display list for the corresponding marker
      rc.focus = function(evt, run) {
        run.open = true
      }

// ============================== closing tag ============================= //
    }
})();
