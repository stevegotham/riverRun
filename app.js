(function() {
  angular.module('riverRun', ['ui.bootstrap'])
    .controller('riverController', [riverControllerFunction])

    function riverControllerFunction() {
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
        constructor(riverName, runName, riverClass, riverType, rating, notes, riverLocation) {
          this.riverName = riverName
          this.runName = runName
          this.riverClass = riverClass
          this.riverType = riverType
          this.rating = rating
          this.notes = notes
          this.riverLocation = riverLocation
          this.riverId = rc.listOfRuns.length+1
        }
        save () {
          rc.listOfRuns.push(this)
        }
      }

      //  ============ populate the list of runs ===============

      rc.run1 = new River('Arkansas River', 'Royal Gorge', 'IV', 'river', 8).save()
      rc.run2 = new River('Arkansas River', 'Bighorn Sheep Canyon', 'III', 'river', 7, 'Great fun run').save()
      rc.run3 = new River('Animas, Upper', 'Upper Animas', 'IV-V','river').save()
      rc.run4 = new River('Arkansas River','Brown\'s Canyon','II-IV','river').save()
      rc.run5 = new River('Clear Creek, S. Platte','Black Rock','V','creek').save()
      rc.run6 = new River('Clear Creek, S. Platte', 'Upper Clear Creek', 'IV', 'creek').save()
      rc.run7 = new River('Colorado', 'Gore Canyon', 'IV-V', 'river').save()
      rc.run8 = new River('Dolores', 'Dolores Canyon', 'III-IV', 'river').save()
      rc.run9 = new River('Eagle', 'Upper Eagle', 'III', 'river').save()

      // ============  functions  ============

      rc.addRiver = function() {
        var bob = new River(rc.riverName, rc.runName, rc.riverClass, rc.riverType, rc.rating, rc.notes, rc.riverLocation).save()
        rc.riverName = ''
        rc.runName = ''
        rc.riverClass = ''
        rc.riverType = ''
        rc.rating = ''
        rc.notes = ''
        rc.riverLocation = ''
        return bob
      }

    }
})();
