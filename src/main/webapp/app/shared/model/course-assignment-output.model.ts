import { ICourseAssignment } from 'app/shared/model/course-assignment.model';

export interface ICourseAssignmentOutput {
  id?: number;
  output?: string | null;
  courseAssignment?: ICourseAssignment;
}

export const defaultValue: Readonly<ICourseAssignmentOutput> = {};
