  export type Developer = {
    id: string,
    firstName: string | undefined,
    lastName: string | undefined,
    bootcampId: string | undefined,
  }
  
  export type fetchedDeveloper = {
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