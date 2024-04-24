export interface TaskModel {
    id?: number;
    name: string;
    content: string; 
    start_date?: Date; 
    end_date?: Date | null; 
    status_id: number;
    tag_id: number; 
    activity_type_id: number; 
}
