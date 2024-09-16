// "unknown" type use-case

interface ISearchFilter {
  age: number[]
  occupation: string[]
  // ....
}

function getSearchFilters () {
  const ls = localStorage.getItem('SEARCH_FILTERS')
  const filters = JSON.parse(ls ?? '{}') as ISearchFilter
  return filters
}

function setSearchFilters (data: ISearchFilter) {
  localStorage.setItem('SEARCH_FILTERS', JSON.stringify(data))
}

const filters = getSearchFilters()

filters.age = [20, 21, 23]
filters.occupation = ['IT specialist']

setSearchFilters(filters)
