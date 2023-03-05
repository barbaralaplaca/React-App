import { Bootcamp, CardProps, Developer, Instructor } from "./types";

export default function Card(props: CardProps) {
    const { instructors, developers, bootcamps } = props;

  return (
    <div>
         {bootcamps.map((bootcamp: Bootcamp) => (
        <h3 key={bootcamp.bootcamp}>{bootcamp.bootcamp}</h3>
        ))}
        <div className='instructors-card'>
        <h3>Instructors</h3>
        {instructors.map((instructor: Instructor) => (
                <li className="card-list" key={instructor.id}>
                <p>{instructor.name}</p>
                </li>
                ))}
        </div>
        <div className='developers-card'>
        <h3>Developers</h3>
           <ul>
        {developers.map((developer: Developer) => (
                <li className="card-list" key={developer.id}>
                <p>{developer.name}</p>
                <button onClick={() => props.handleDelete(developer.id)}>Delete</button>
                </li>
                ))}
          </ul>
        </div>
    </div>
  )
}
