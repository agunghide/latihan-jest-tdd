const { Generic } = require('./generic')

describe('Entity: Generic', () => {
  it('#1: correctly set each ctor argument', () => {
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

    expect(gen.str).toBe('today')
    expect(gen.int).toBe(42)
    expect(gen.bool).toBe(true)
    expect(gen.fn).toEqual(expect.any(Function))
    expect(gen.arr[0]).toEqual(6)
    expect(gen.arr[1]).toEqual(1)
    expect(gen.arr[2]).toEqual(2022)
    expect(gen.obj.date).toEqual('6th')
    expect(gen.obj.month).toEqual('Jan')
    expect(gen.obj.year).toEqual(2022)
  })

  it('#2: correctly set each ctor argument', () => {
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

    expect(gen.str).toBe('today')
    expect(gen.int).toBe(42)
    expect(gen.bool).toBe(true)
    expect(gen.fn).toEqual(expect.any(Function))
    expect(gen.arr).toEqual(expect.arrayContaining([2022, 1, 6]))
    expect(gen.obj).toEqual(expect.objectContaining({
      year: 2022,
      date: '6th',
      month: 'Jan',
    }))
  })

  it('#3: correctly set each ctor argument', () => {
    const args = {
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
    }
    const gen = new Generic(args)

    expect(gen).toEqual(args)
  })
})
