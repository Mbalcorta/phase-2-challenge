'use strict'

const fs = require('fs')
const companySearchString = process.argv[2]

const readFileParse = (file) => {
  const stringContent =  fs.readFileSync(file, 'utf-8')
  const jsonContent = JSON.parse(stringContent)
  return jsonContent
}

const printToConsole = (companiesArray, companySearchString) => {
  console.log(JSON.stringify(companiesArray, null, 2))
}

const upperCaseArgument = (string) => {
  return string[0].toUpperCase()+string.slice(1).toLowerCase()
}

const filteredClients = (searchString) => {
  const jsonClients = readFileParse('./clients.json')
  const regex = new RegExp('^'+searchString, 'g')
  return jsonClients.filter((eachClient)=> {
      return eachClient.company.match(regex)
        }).map((eachClient)=>{
          return {'id': eachClient.id, 'company': eachClient.company, 'phone': eachClient.phone}
      })
}

const searchByCompany = (companySearchString) => {
  const searchString = upperCaseArgument(companySearchString)
  console.log('Finding companies with name '+'"'+searchString+'"'+ '...')
  const filteredCompaniesArray = filteredClients(searchString)
  printToConsole(filteredCompaniesArray, companySearchString)
}

if(companySearchString){
  searchByCompany(companySearchString)
} else {
  console.error('ERROR: Please enter a company')
}
