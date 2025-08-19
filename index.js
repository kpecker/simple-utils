/**
 * Simple Text Utils - A utility library for text manipulation
 * @version 1.0.0
 */

/**
 * Capitalizes the first letter of a string
 * @param {string} str - The string to capitalize
 * @returns {string} The capitalized string
 */
function capitalize(str) {
  if (typeof str !== "string") return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Converts string to title case (capitalizes first letter of each word)
 * @param {string} str - The string to convert
 * @returns {string} The title case string
 */
function titleCase(str) {
  if (typeof str !== "string") return "";
  return str.toLowerCase().split(" ").map(capitalize).join(" ");
}

/**
 * Converts string to camelCase
 * @param {string} str - The string to convert
 * @returns {string} The camelCase string
 */
function camelCase(str) {
  if (typeof str !== "string") return "";
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

/**
 * Converts string to kebab-case
 * @param {string} str - The string to convert
 * @returns {string} The kebab-case string
 */
function kebabCase(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

/**
 * Converts string to snake_case
 * @param {string} str - The string to convert
 * @returns {string} The snake_case string
 */
function snakeCase(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/\s+/g, "_")
    .toLowerCase();
}

/**
 * Truncates a string to specified length with ellipsis
 * @param {string} str - The string to truncate
 * @param {number} maxLength - Maximum length (default: 50)
 * @returns {string} The truncated string
 */
function truncate(str, maxLength = 50) {
  if (typeof str !== "string") return "";
  if (str.length <= maxLength) return str;
  return str.substring(0, maxLength - 3) + "...";
}

/**
 * Counts words in a string
 * @param {string} str - The string to count
 * @returns {number} Number of words
 */
function wordCount(str) {
  if (typeof str !== "string") return 0;
  return str
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
}

/**
 * Removes extra whitespace and trims string
 * @param {string} str - The string to clean
 * @returns {string} The cleaned string
 */
function cleanWhitespace(str) {
  if (typeof str !== "string") return "";
  return str.replace(/\s+/g, " ").trim();
}

/**
 * Reverses a string
 * @param {string} str - The string to reverse
 * @returns {string} The reversed string
 */
function reverse(str) {
  if (typeof str !== "string") return "";
  return str.split("").reverse().join("");
}

/**
 * Checks if string is a palindrome
 * @param {string} str - The string to check
 * @returns {boolean} True if palindrome, false otherwise
 */
function isPalindrome(str) {
  if (typeof str !== "string") return false;
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

// Export all functions
module.exports = {
  capitalize,
  titleCase,
  camelCase,
  kebabCase,
  snakeCase,
  truncate,
  wordCount,
  cleanWhitespace,
  reverse,
  isPalindrome,
};
