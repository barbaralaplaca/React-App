import { Developer } from "./types";


type DeveloperCardProps = {
    developers: Developer[],
  }

export const DevelopersCard = (props: DeveloperCardProps) => {
    const developers = props.developers;
  
    return (
      <div className='Card'>
          {developers.map((developer: Developer) => (
            <div>
              <p key={developer.id}>{developer.name}</p>
              </div>
          ))}
      </div>
  )
}
