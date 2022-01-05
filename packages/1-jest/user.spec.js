const { User } = require('./user')

describe('Entity: User', () => {
  it('correctly set name, age, and birthday via ctor', () => {
    const user = new User({
      name: 'adrian',
      age: 17,
      birthday: new Date(1991, 0, 29),
    })
    expect(user.name).toBe('adrian')
    expect(user.age).toBe(17)
    expect(user.birthday).toEqual(expect.any(Date))
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