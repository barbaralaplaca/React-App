import { Instructor } from "./types";


type InstructorProps = {
  instructor: Instructor,
}

export const InstructorCard = (props: InstructorProps) => {
  const instructor = props.instructor;

  return (
    <>
    <div className='Instructor-Card'>Instructor</div>
    <p>{instructor.name}</p>
    </>
  )
}
