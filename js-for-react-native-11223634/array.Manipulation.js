function processArray(numbers){
    return numbers.map(number => {
        if (number % 2 === 0) {
          return number ** 2;
        } else {
          return number * 3;
        }
      });
}
function formatArrayStrings(strings, processedNumbers){
    return strings.map((string, index) => {
        if (processedNumbers[index] % 2 === 0) {
          return string.toUpperCase();
        } else {
          return string.toLowerCase();
        }
      });
}