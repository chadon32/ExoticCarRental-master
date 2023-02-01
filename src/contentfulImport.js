const contentfulImport = require('contentful-import')

const options = {
  contentFile: 'src/data.json',
  spaceId: '<ebw2pi6y5lqk>',
  managementToken: 'vzHm40kcGRyHMNyVRTgiQXwM4yRRYSB50FFYNrw9cho'
}

contentfulImport(options)
  .then(() => {
    console.log('Data imported successfully')
  })
  .catch((err) => {
    console.log('Oh no! Some errors occurred!', err)
  })