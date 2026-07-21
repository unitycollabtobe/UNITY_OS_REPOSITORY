// ===========================================
// UNITY OS
// Dashboard Widget
// Version: 1.1
// ===========================================

export interface DashboardWidget {

  id: string;

  type: string;

  title: string;

  description?: string;

  visible: boolean;

  order: number;

  createdAt: string;

  updatedAt: string;

}