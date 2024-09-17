// "unknown" type use-case

interface ISearchFilter {
  age: number[]
  occupation: string[]
  // ....
}

function getSearchFilters () {
  const ls = localStorage.getItem('SEARCH_FILTERS')
  const filters: unknown = JSON.parse(ls ?? '[]')

  if (Array.isArray(filters) && filters.every(f => 'age' in f && Array.isArray(f.age))) {
    return filters
  }

  return []
}

function setSearchFilters (data: ISearchFilter[]) {
  localStorage.setItem('SEARCH_FILTERS', JSON.stringify(data))
}

const filters = getSearchFilters()

filters.push({ age: [20, 21, 23], occupation: ['IT specialist'] })

setSearchFilters(filters)
