  export type Developer = {
    id: string,
    name: string | undefined,
    bootcampId: string | undefined,
  }

  export type Instructor = {
    id: string,
    bootcampId: string,
    name: string | undefined,
    favouriteColour?: string,
  }