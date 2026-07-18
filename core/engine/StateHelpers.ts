import { UnityState } from "./StateTypes";

let state: UnityState | null = null;

export function getState() {
  return state;
}

export function setState(newState: UnityState) {
  state = newState;
}

export function hasState() {
  return state !== null;
}

export function clearState() {
  state = null;
}