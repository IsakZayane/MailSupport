export function extractEmailAddress(inputString : string) {
    const regex = /<([^>]+)>/;
    const match = regex.exec(inputString);
    if (match && match[1]) {
      return match[1];
    }
    return inputString; // If parsing failed, return the original string
  }
 
  