/**
 * Plural forms for russian words
 * @param {number} count quantity for word
 * @param {string[]} words Array of words. Example: ['депутат', 'депутата', 'депутатов'], ['коментарий', 'коментария', 'комментариев']
 * @return {string} Count + plural form for word
 */
export function plural(count: number, words: string[]): string {
  const c = Math.round(count);
  const cases = [2, 0, 1, 1, 1, 2];
  const selected = c % 100 > 4 && c % 100 < 20 ? 2 : cases[Math.min(c % 10, 5)];

  return `${String(count).split(".").join(",")} ${words[selected]}`;
}
