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
        notes: 'Where I learned to guide. Still one of my favorite runs ever. Simply awesome in a 5 foot kayak at 5400 cfs',
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
      {
        riverName:'Selway River',
        runName: 'Paradise to Selway Falls',
        riverClass: 'IV',
        riverType: 'river',
        notes: 'Hands down the most amazing trip I\'ve ever taken. Four days with my brother and seven other rafting buddies. Favorite quote from the trip: "People in Idaho must love that their state is know for potatoes, instead of having the sickest fucking wilderness in the west." - Kirchner',
        riverLocation: ['45.861434','-114.738511'],
        stationId: '13336500'
      },
      {
        riverName:'Smith River',
        runName: 'Steven Memorial Bridge',
        riverClass: 'III-V',
        riverType: 'river',
        notes: 'Gorgeous river. I dream of a three week fly fishing trip there someday.',
        riverLocation: ['41.796878','-124.054392'],
        stationId: '11532500'
      },
      {
        riverName:'Gauley River',
        runName: 'Upper Gauley',
        riverClass: 'IV-V',
        riverType: 'river',
        notes: 'Had the time of my life with Greg, Dylan, and Spencer, and have the scars to prove it',
        riverLocation: ['38.222332','-80.890654'],
        stationId: '03189600'
      },

    ]
    return {
      listOfRuns : $localStorage.runs ? $localStorage.runs : listOfRuns,
    }
  }
