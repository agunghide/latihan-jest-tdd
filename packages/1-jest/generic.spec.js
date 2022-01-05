const { Generic } = require('./generic')

describe('Entity: Generic', () => {
  it('correctly set each ctor argument', () => {
    const gen = new Generic({
      str: 'today',
      int: 42,
      bool: true,
      fn: (arg) => console.log(arg),
      arr: [6, 1, 2022],
      obj: {
        date: '6th',
        month: 'Jan',
        year: 2022,
      } 
    })
    expect(gen).toMatchSnapshot()
  })
})
