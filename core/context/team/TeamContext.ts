/**
 * ARCH-002
 * Team Context
 *
 * Stato della rete del collaboratore.
 *
 * Versione: 1.0
 */

export interface TeamContext {

  collaborators: number;

  activeCollaborators: number;

  invitedCollaborators: number;

  pendingInvitations: number;

}