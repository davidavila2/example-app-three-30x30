export interface Projects {
  id: number,
  title: string,
  details: string
}

export const emptyProject: Projects = {
  id: null,
  title: '',
  details: ''
}
