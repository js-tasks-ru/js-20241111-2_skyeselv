/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (!string) return "";
  if (size == 0) return "";
  if (!size) return string;

  let count = 1;

  return [...string]
    .reduce((result, char, index) => {
      if (index == 0 || string[index - 1] !== char) {
        count = 1;
        result.push(char);
      } else {
        if (count < size) {
          result.push(char);
          count++;
        }
      }
      return result;
    }, [])
    .join("");
}
