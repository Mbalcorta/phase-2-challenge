'use strict'

const fs = require('fs')
const companySearchString = process.argv[2]

const jsonContents = (file) => {
  const stringContent =  fs.readFileSync(file, 'utf-8')
  const jsonContent = JSON.parse(stringContent)
  return jsonContent
}

const printToConsole = (companiesArray, companySearchString) => {
  console.log(JSON.stringify(companiesArray, null, 2))
}

const searchByCompany = (companySearchString) => {
  console.log('Finding companies with name '+'"'+companySearchString+'"'+ '...')
  const searchString = companySearchString
  const regex = new RegExp('^'+searchString, 'g')
  const jsonClients = jsonContents('./clients.json')
  const filteredCompaniesArray =
    jsonClients.filter((eachClient)=> {
      return eachClient.company.match(regex)
      }).map((eachClient)=>{
        return {'id': eachClient.id, 'company': eachClient.company, 'phone': eachClient.phone}
      })
   printToConsole(filteredCompaniesArray, companySearchString)
}

if(companySearchString){
  searchByCompany(companySearchString)
} else {
  console.error('ERROR: Please enter a company')
}
