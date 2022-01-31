import dayjs from 'dayjs';
import { IUser } from 'app/shared/model/user.model';
import { ICourse } from 'app/shared/model/course.model';

export interface ICourseEnrollment {
  id?: number;
  enrollementDate?: string;
  lastAccessedDate?: string;
  user?: IUser;
  course?: ICourse;
}

export const defaultValue: Readonly<ICourseEnrollment> = {};
