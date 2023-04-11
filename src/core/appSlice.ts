import { Reducer, Slice } from "@reduxjs/toolkit"

export abstract class AppSlice<T> {
  protected abstract initialState: T
  protected abstract slice: Slice
  public abstract reducer: Reducer
}