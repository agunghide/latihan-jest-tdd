function User(data) {
  const { name, age } = data
  this.name = name
  this.age = age
}

User.prototype.setName = function(name) {
  this.name = name
  return this
}

User.prototype.setAge = function(age) {
  this.age = age
  return this
}

User.prototype.toString = function() {
  return `Name's ${this.name}, whose age is ${this.age}`
}

module.exports = {
  User,
}
