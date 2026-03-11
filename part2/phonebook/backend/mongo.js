const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://uselesstrash06_db_user:${password}@cluster0.6vrzgad.mongodb.net/noteApp?appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url, { family: 4 })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv[3] && process.argv[4]) {
    // 3 args passed in, to add the name
    const name = process.argv[3]
    const number = process.argv[4]

    const person = new Person({
    name: name,
    number: number
    })

    person.save().then(result => {
    console.log(`added ${name} number ${number} to phonebook!`)
    mongoose.connection.close()
    })
} else {
    // only password passed in, just display
    Person.find({}).then(result => {
    result.forEach(person => {
        console.log(person)
    })
    mongoose.connection.close()
    })
}






