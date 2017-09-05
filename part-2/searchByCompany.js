const fs = require('fs')
const company = process.argv[2];

const jsonContent = (file) => {
  const stringContent =  fs.readFileSync(file, 'utf-8')
  const JsonContent = JSON.parse(stringContent)
  return JsonContent
}


const searchByCompany = (company) => {
  //finds all clients who have a company that starts with the company string
  //prints the id, company and phone of each matching client
    //-use filter to filter through client json
    const jsonClients = jsonContent('./clients.json')
    const filteredCompanies =  jsonClients.filter((eachClient)=> {
      return eachClient.company === 'DuBuque, Roob and Berge'
    })
    console.log(filteredCompanies)
}

searchByCompany(company)