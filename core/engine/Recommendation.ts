/**
 * ==========================================
 * UNITY OS
 * Recommendation
 * Version: 1.0
 * ==========================================
 */

export interface Recommendation {

  id: string;

  title: string;

  description: string;

  priority: "LOW" | "MEDIUM" | "HIGH";

  action: string;

}