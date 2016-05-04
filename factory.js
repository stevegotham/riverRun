angular.module('riverRun')
  .factory('myFactory', ['$localStorage', factoryFunction])

  function factoryFunction($localStorage) {
    listOfRuns = [
      {
        riverName: 'Arkansas River',
        runName: 'Royal Gorge',
        riverClass: 'IV',
        riverType: 'river',
        notes: null,
        riverLocation: ['38.4861078','-105.3727707'],
        stationId: '07094500'
      },
      {
        riverName: 'Arkansas River',
        runName: 'Bighorn Sheep Canyon',
        riverClass: 'III',
        riverType: 'river',
        notes: null,
        riverLocation: ['38.447475','-105.522723'],
        stationId: '07094500'
      },
      {
        riverName:'Animas River',
        runName: 'Upper Animas',
        riverClass: 'IV-V',
        riverType: 'river',
        notes: null,
        riverLocation: ['37.802641','-107.672806'],
        stationId: '09359020'
      },
      {
        riverName:'Arkansas River',
        runName: 'Brown\'s Canyon',
        riverClass: 'II-IV',
        riverType: 'river',
        notes: null,
        riverLocation: ['38.7528617163','-106.0700207949'],
        stationId: '07091200'
      },
      {
        riverName:'Clear Creek, S. Platte',
        runName: 'Black Rock',
        riverClass: 'V',
        riverType: 'creek',
        notes: null,
        riverLocation: ['39.741437','-105.329157'],
        stationId: '06719505'
      },
      {
        riverName:'Clear Creek, S. Platte',
        runName: 'Upper Clear Creek',
        riverClass: 'IV',
        riverType: 'creek',
        notes: null,
        riverLocation: ['39.745562','-105.434856'],
        stationId: '06719505'
      },
      {
        riverName:'Colorado River',
        runName: 'Gore Canyon',
        riverClass: 'IV-V',
        riverType: 'river',
        notes: null,
        riverLocation: ['40.043085','-106.395889'],
        stationId: '09058000'
      },
      {
        riverName:'Dolores River',
        runName: 'Dolores Canyon',
        riverClass: 'III-IV',
        riverType: 'river',
        notes: null,
        riverLocation: ['37.795352','-108.826227'],
        stationId: '09169500'
      },
      {
        riverName:'Eagle River',
        runName: 'Upper Eagle',
        riverClass: 'III',
        riverType: 'river',
        notes: null,
        riverLocation: ['39.588027','-106.430115'],
        stationId: '09064600'
      },

    ]
    return {
      listOfRuns : $localStorage.runs ? $localStorage.runs : listOfRuns,
    }
  }
