export const stringToSlug = (input) => {
  // Step 1: Replace forward slashes with spaces
  const stringWithSpaces = input.replace(/\//g, " ");

  // Step 2: Remove special characters and convert to lowercase
  const cleanedString = stringWithSpaces
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .toLowerCase();

  // Step 3: Replace spaces with hyphens
  const slug = cleanedString.replace(/\s+/g, "-");

  return slug;
};
