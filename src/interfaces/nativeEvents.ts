export interface InputEventInterface extends Event {
  target: HTMLInputElement
}

export interface PromiseAllSettledInterface<T> {
  status: string
  value: T
}