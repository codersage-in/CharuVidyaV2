import dayjs from 'dayjs';
import { ICourseSection } from 'app/shared/model/course-section.model';

export interface ICourseSession {
  id?: number;
  sessionTitle?: string;
  sessionDescription?: string | null;
  sessionVideo?: string;
  sessionDuration?: string;
  sessionOrder?: number;
  sessionResource?: string | null;
  isPreview?: boolean;
  isDraft?: boolean;
  isApproved?: boolean;
  isPublished?: boolean;
  courseSection?: ICourseSection;
}

export const defaultValue: Readonly<ICourseSession> = {
  isPreview: false,
  isDraft: false,
  isApproved: false,
  isPublished: false,
};
