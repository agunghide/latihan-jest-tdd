const { User } = require('./user')

describe('Entity: User', () => {
  let user
  beforeEach(() => {
    user = new User({
      name: 'adrian',
      age: 17,
      birthday: new Date(1991, 0, 29),
    })
  })
  it('correctly set name, age, and birthday via ctor', () => {
    expect(user.name).toBe('adrian')
    expect(user.age).toBe(17)
    expect(user.birthday).toEqual(expect.any(Date))

    user.name = 'abang jago'
  })

  it('correctly update name', () => {
    user.setName('padmodihardjo')
    expect(user.name).toBe('padmodihardjo')
  })

  it('correctly update age', () => {
    user.setAge(30)
    expect(user.age).toBe(30)
  })
})