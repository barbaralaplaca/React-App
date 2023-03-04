import { fetchedDeveloper } from './types';

type DeveloperCardProps = {
    developers: fetchedDeveloper[],
  }

export const DevelopersCard = (props: DeveloperCardProps) => {
    const developers = props.developers;
  
    return (
      <div className='Card'>
          {developers.map((developer: fetchedDeveloper) => (
            <div>
              <p key={developer.id}>{developer.name}</p>
              </div>
          ))}
      </div>
  )
}
