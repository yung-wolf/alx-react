import { schema, normalize } from 'normalizr';

// Define the course schema
const course = new schema.Entity('courses');

// Create a function to normalize data
export const coursesNormalizer = (data) => {
  return normalize(data, [course]);
};
