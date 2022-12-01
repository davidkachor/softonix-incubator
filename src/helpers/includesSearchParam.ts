function includesSearchParam (text: string, search: string): boolean {
  const regex = new RegExp(`\\b(${search.trim().split(' ').join('|')})`, 'gmi')
  return regex.test(text)
}

export default includesSearchParam
