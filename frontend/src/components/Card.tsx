import { Bootcamp, CardProps, Developer, Instructor } from "./types";

export default function Card(props: CardProps) {
    const { instructors, developers, bootcamps } = props;

  return (
    <div>
         {bootcamps.map((bootcamp: Bootcamp) => (
        <h3 key={bootcamp.bootcamp}>{bootcamp.bootcamp}</h3>
        ))}
        <h3>Instructors</h3>
        {instructors.map((instructor: Instructor) => (
            <div className='instructors-card'>
                <p key={instructor.id}>{instructor.name}</p>
                </div>
        ))}
        <h3>Developers</h3>
        {developers.map((developer: Developer) => (
            <div className='developers-card'>
                <p key={developer.id}>{developer.name}</p>
                <button onClick={() => props.handleDelete(developer.id)}>Delete</button>
            </div>
          ))}
    </div>
  )
}
