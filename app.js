(function() {
  angular.module('riverRun', ['ui.bootstrap','ngMap','ngAnimate','ngStorage'])
    .controller('riverController', ['$http','NgMap', '$localStorage', 'myFactory', riverControllerFunction])

    function riverControllerFunction($http, NgMap, $localStorage, myFactory) {
      var rc = this

      // ============  variables  ============

      rc.listOfRuns = myFactory.listOfRuns
      rc.riverName
      rc.riverClass
      rc.riverType
      rc.notes
      rc.riverLocation
      rc.destination
      rc.mapCenter = 'current-location'
      rc.zoom = 4
      rc.show = false
      rc.ok = true

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
          $localStorage.runs = rc.listOfRuns
        }

      }

      // ============  functions  ============

      // hides #myModal
      rc.hideModal = function() {
        $('#myModal').modal('hide')
      }

      // hides #myModal2
      rc.hideModal2 = function() {
        $('#myModal2').modal('hide')
      }

      // removes the informational div
      rc.gotcha = function() {
        rc.ok = false
      }

      // creates a new River object and adds the river from the form to the array and then clears the form
      rc.addRiver = function() {
        var river = new River(rc.riverName, rc.runName, rc.riverClass, rc.riverType, rc.notes, rc.riverLocation, rc.stationId).save()
        rc.riverName = ''
        rc.runName = ''
        rc.riverClass = ''
        rc.riverType = ''
        rc.notes = ''
        rc.riverLocation = ''
        // gets water level once added
        rc.getAllLevels()
        // exits the modal on submit
        rc.hideModal()
      }

      // gets the index of the run you want to edit, to be used in the "edit run" form
      rc.portRun = function(run) {
        rc.runIndex = rc.listOfRuns.indexOf(run)
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

      // removes the run from the list of runs
      rc.remove = function(run) {
        rc.listOfRuns.splice(rc.listOfRuns.indexOf(run),1)
        // exits modal on submit
        rc.hideModal2()
      }

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

      // opens the directions to run marker, shows route on map
      rc.getDirections = function(run) {
        rc.destination = run.riverLocation
        rc.show = true
        $('#directions').css('background-color', '#fff')
      }

      // clears/hides the directions div
      rc.removeDirections = function() {
        rc.show = false
      }

// ============================== closing tags ============================= //
    }
})();
