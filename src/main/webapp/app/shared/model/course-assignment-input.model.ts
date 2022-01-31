import { ICourseAssignment } from 'app/shared/model/course-assignment.model';
import { IUser } from 'app/shared/model/user.model';

export interface ICourseAssignmentInput {
  id?: number;
  input?: string | null;
  courseAssignment?: ICourseAssignment;
  user?: IUser;
}

export const defaultValue: Readonly<ICourseAssignmentInput> = {};
