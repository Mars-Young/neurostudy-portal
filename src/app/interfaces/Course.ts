import {
  DEFAULT_COURSE,
  DEFAULT_COURSE_DETAILS,
  DEFAULT_COURSE_DETAILS_WITHOUT_ID,
  DEFAULT_COURSE_WITHOUT_ID,
} from '../utilities/db/constants';

export type CourseProps = typeof DEFAULT_COURSE;
export type CourseWithoutIdProps = typeof DEFAULT_COURSE_WITHOUT_ID;
export type CourseDetailsProps = Partial<typeof DEFAULT_COURSE_DETAILS>;
export type CourseDetailsWithoutIdProps = Partial<
  typeof DEFAULT_COURSE_DETAILS_WITHOUT_ID
>;

export type CoursePrimaryFilterType = {
  Neurotypes: CourseProps['Neurotypes'];
  InterestArea: CourseProps['InterestArea'][];
  Location: CourseProps['Location'][];
};

export type CourseSecondaryFilterType = {
  Level: CourseProps['Level'][];
  InstitutionName: CourseProps['InstitutionName'][];
  Mode: CourseProps['Mode'][];
};

export type FilterCourseProps = CoursePrimaryFilterType &
  CourseSecondaryFilterType;
