/**
 * ==========================================
 * UNITY OS
 * ARCH-002
 * Context Factory
 * Version: 1.0
 * ==========================================
 */

import { UnityContext } from "./UnityContext";

export interface ContextFactory {

    create(): Promise<UnityContext>;

}