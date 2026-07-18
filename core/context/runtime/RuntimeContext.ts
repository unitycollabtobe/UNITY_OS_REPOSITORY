/**
 * ARCH-002
 * Runtime Context
 *
 * Contesto dinamico del collaboratore.
 *
 * Versione: 1.0
 */

export interface RuntimeContext {

  lastLogin: Date | null;

  inactiveDays: number;

  pendingNotifications: number;

  pendingMeetings: number;

  pendingUploads: number;

  pendingRaffronti: number;

}