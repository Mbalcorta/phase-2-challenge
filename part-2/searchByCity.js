
const fs = require('fs')
const cityNameArray = process.argv.slice(2);

const jsonContents = (file) => {
  const stringContent =  fs.readFileSync(file, 'utf-8')
  const jsonContent = JSON.parse(stringContent)
  return jsonContent
}

const printToConsole = (companiesArray) => {
  console.log(JSON.stringify(companiesArray, null, 2))
}

const upperCaseCityName = (cityArray) => {
  const upperCasedCityNameArray =
    cityArray.map((eachName) => {
      return eachName[0].toUpperCase()+ eachName.slice(1).toLowerCase()
    })
  const upperCasedCityName = upperCasedCityNameArray.join(' ')
  return upperCasedCityName
}

const filteredCity = (cityNameUpperCased) => {
  const fileContent = jsonContents('./clients.json')
  return  fileContent.filter((eachClient) => {
    return eachClient.city === cityNameUpperCased
      }).map((eachClient) => {
        return {
          'id': eachClient.id,
          'rep_name': eachClient.rep_name,
          'company': eachClient.company,
          'city': eachClient.city,
          'state': eachClient.state}
    })
}

const searchByCity = (cityArray) => {
  const cityNameUpperCased = upperCaseCityName(cityArray)
  console.log('Finding clients \033[31min\x1b[37m City '+'"'+cityNameUpperCased+'"'+ '...')
  const filteredCompaniesArray = filteredCity(cityNameUpperCased)
  printToConsole(filteredCompaniesArray)
}

if(cityNameArray.length > 0){
  searchByCity(cityNameArray)
} else {
  console.error('ERROR: Please enter city name')
}

