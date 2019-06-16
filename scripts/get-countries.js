const fs = require("fs")
const Octokat = require("octokat")

const getCountries = async () => {
  const octo = new Octokat()
  const repo = await octo.repos("hamdiceylan", "ukpopulation.net-data").fetch()

  const england = await repo.contents("countries/england.md").read()
  const wales = await repo.contents("countries/wales.md").read()

  console.log("england", england)

  write("content/country/england.md", england)

  console.log("wales", wales)
}

const write = (file, content) => {
  fs.writeFile(file, content, function(err) {
    if (err) throw err
  })
}

getCountries()
