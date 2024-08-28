import { AttributeDefinition } from '@aws-sdk/client-dynamodb';

export const COURSE_TABLE_NAME = process.env.COURSE_TABLE_NAME || 'NDACourses';
export const COURSE_TABLE_PARTITION_KEY = 'CourseId';
export const COURSE_TABLE_INDEX_KEY_DEFINITIONS: AttributeDefinition[] = [
  { AttributeName: 'InstitutionName', AttributeType: 'S' },
  { AttributeName: 'InterestArea', AttributeType: 'S' },
];

// NOTE
// These will be here until we utilize `zod` or similar validation library
// This helps us to generate a type based on the given attribute values
// and validate/assert based on that as well
export const DEFAULT_COURSE_WITHOUT_ID = {
  InstitutionName: 'Central Queensland University',
  Title: 'Bachelor of Laws',
  Location: 'Sydney',
  Duration: 24,
  Rating: 3.9,
  Tier: 'GOLD',
  Criteria: {
    Faculty: 4,
  },
  Level: 'MASTERS',
  InterestArea: 'Cyber Security',
  Mode: 'Hybrid',
  Neurotypes: [],
};
export const DEFAULT_COURSE = {
  [COURSE_TABLE_PARTITION_KEY]: 'azAz1.!',
  ...DEFAULT_COURSE_WITHOUT_ID,
};

// TODO
// Should throw error if the keys are not part of table
export const COURSE_TABLE_FILTERABLE_NON_INDEX_KEYS = [
  'Title',
  'Level',
  'Location',
  'Mode',
  'Tier',
];
