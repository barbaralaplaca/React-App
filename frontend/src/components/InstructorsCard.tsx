import { Instructor } from "./types";

type InstructorCardProps = {
  instructors: Instructor[],
}

export const InstructorsCard = (props: InstructorCardProps) => {
  const instructors = props.instructors;

  return (
    <div className='Card'>
        {instructors.map((instructor: Instructor) => (
          <div>
            <p key={instructor.id}>{instructor.name}</p>
            </div>
        ))}
    </div>
  )
}
