function User(data) {
  const { name, age, birthday } = data
  this.name = name
  this.age = age
  this.birthday = birthday
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
