/**
 * ARCH-002
 * State Context
 *
 * Stato operativo corrente del collaboratore.
 *
 * Versione: 1.0
 */

export interface StateContext {

  current: string;

  previous: string | null;

  next: string | null;

  updatedAt: Date;

}