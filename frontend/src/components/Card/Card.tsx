import { DeleteButtonToggle } from "../DeleteButtonToggle/DeleteButtonToggle";
import { Bootcamp, CardProps, Developer, Instructor } from "../types";
import './Card.css';

export default function Card(props: CardProps) {
    const { instructors, developers, bootcamps, handleDelete } = props;

  return (
    <div className="bootcamp">
         {bootcamps.map((bootcamp: Bootcamp) => (
        <h3 key={bootcamp.bootcamp} className='card-title'>{bootcamp.bootcamp}</h3>
        ))}
        <div className='instructors-card cardList'>
        <h3>Instructors</h3>
          <ul className="cardList">
          {instructors.map((instructor: Instructor) => (
                  <li className="cardList 'card-instructor-name'" key={instructor.id}>
                  <p>{instructor.name}</p>
                  </li>
                  ))}
          </ul>
        </div>
        <div className='developers-card cardList'>
          <h3>Developers</h3> 
          <ul className="cardList">
            {developers.map((developer: Developer, i) => (
            <DeleteButtonToggle
              key ={i} 
              student={developer} 
              handleDelete={handleDelete}
              />
            ))}
            </ul>
        </div>
    </div>
  )
}
