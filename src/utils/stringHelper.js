export function handleStrOverflow(str, maxLen) {
  let len = [...str].length
  if (len > maxLen) {
    return [...str].slice(0, maxLen).join('') + '...'
  }
  return str
}
