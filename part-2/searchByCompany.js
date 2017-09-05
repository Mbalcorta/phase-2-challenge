'use strict'

const fs = require('fs')
const companySearchString = process.argv[2]

const jsonContent = (file) => {
  const stringContent =  fs.readFileSync(file, 'utf-8')
  const JsonContent = JSON.parse(stringContent)
  return JsonContent
}

const printToConsole = (companiesArray, companySearchString) => {
  console.log('Finding companies with name '+'"'+companySearchString+'"'+ '...')
  console.log(JSON.stringify(companiesArray, null, 2))
}

const searchByCompany = (companySearchString) => {
  const searchString = companySearchString
  const regex = new RegExp('^'+searchString, 'g')
  const jsonClients = jsonContent('./clients.json')
  const filteredCompaniesArray =
    jsonClients.filter((eachClient)=> {
      return eachClient.company.match(regex)
      }).map((eachClient)=>{
        return {'id': eachClient.id, 'company': eachClient.company, 'phone': eachClient.phone}
      })
   printToConsole(filteredCompaniesArray, companySearchString)
}

searchByCompany(companySearchString)