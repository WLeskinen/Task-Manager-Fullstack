export interface ActivityModel {
    id?: number;
    title: string;
    description: string;
    url?: string | null;
    startDate?: Date | null;
    endDate?: Date | null; 
    status: string;
    tags: string[]; 
    activityType: string; 
  }
  