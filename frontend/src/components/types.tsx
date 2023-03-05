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

  export type Bootcamp = {
    bootcamp: string,
    id: string,
  }
  
  export type CardProps = {
    instructors: Instructor[],
    developers: Developer[],
    bootcamps: Bootcamp[],
    handleDelete: (p: string) => void,
  }

  export type PropsForm = {
    addToState: (p: Developer) => void,
}

  export type PersonProps = {
    student: Developer,
    handleDelete: (p: string) => void,
  }

