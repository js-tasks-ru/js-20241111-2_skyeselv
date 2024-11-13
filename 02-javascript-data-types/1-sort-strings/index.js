/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = "asc") {
  return [...arr].sort((first, second) =>
    param == "asc"
      ? first.localeCompare(second, ["ru", "en"], { caseFirst: "upper" })
      : second.localeCompare(first, ["ru", "en"], { caseFirst: "upper" })
  );
}
