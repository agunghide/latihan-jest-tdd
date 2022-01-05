const { User } = require('./user')

describe('Entity: User', () => {
  it('correctly set name and age via ctor', () => {
    const user = new User({
      name: 'adrian',
      age: 17,
    })
    expect(user.name).toBe('adrian')
    expect(user.age).toBe(17)
  })

  it('correctly update name', () => {
    const user = new User({
      name: 'adrian',
      age: 17,
    })
    user.setName('padmodihardjo')
    expect(user.name).toBe('padmodihardjo')
  })

  it('correctly update age', () => {
    const user = new User({
      name: 'adrian',
      age: 17,
    })
    user.setAge(30)
    expect(user.age).toBe(30)
  })
})