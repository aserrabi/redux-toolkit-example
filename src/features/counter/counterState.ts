export class CounterState {
  count: number = 0

  constructor(partial?: Partial<CounterState>) {
    if(partial) {
      Object.assign(this, partial)
    }

    console.log(this)
  }
}