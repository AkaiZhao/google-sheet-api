/**
 * 由標題建立sheetID雜湊
 * @param {string} char
 * @returns {number} sheetId
 */
const hashCode = (char = '') => {
  let hash = 0
  if (char.length === 0) return hash
  for (let i = 0; i < char.length; i++) {
    const chr = char.charCodeAt(i)
    hash = ((hash << 5) - hash) + chr
    hash |= 0 // Convert to 32bit integer
  }
  return Math.abs(hash)
}

module.exports = hashCode
