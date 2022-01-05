const { User } = require('./user')

const me = new User({
  name: 'Adrian',
  age: 17,
})

console.log(`Before update: ${me.toString()}`)

me.setName('Padmodihardjo')
  .setAge(30)

console.log(`After  update: ${me.toString()}`)
