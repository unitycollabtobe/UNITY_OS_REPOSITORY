// ===========================================
// UNITY OS
// User Model
// Version: 2.0
// ===========================================

import { UserRole } from "../enums/UserRole";
import { AccountStatus } from "../enums/AccountStatus";

/**
 * User
 *
 * Rappresenta l'identità del collaboratore
 * all'interno di Unity.
 *
 * Non contiene informazioni sul Journey,
 * sulle Missioni o sui Progressi, che sono
 * gestiti dai rispettivi domini.
 */
export interface User {

  /**
   * Identificativo interno.
   */
  id: string;

  /**
   * Codice collaboratore Unity.
   */
  unityCode: string;

  /**
   * Nome.
   */
  firstName: string;

  /**
   * Cognome.
   */
  lastName: string;

  /**
   * Email.
   */
  email: string;

  /**
   * Avatar del profilo.
   */
  avatar?: string;

  /**
   * Ruolo dell'utente.
   */
  role: UserRole;

  /**
   * Stato dell'account.
   */
  status: AccountStatus;

  /**
   * Collaboratore che ha invitato
   * questo utente in Unity.
   */
  sponsorId?: string;

  /**
   * Data di creazione dell'account.
   */
  createdAt: Date;

  /**
   * Ultimo aggiornamento.
   */
  updatedAt: Date;

}