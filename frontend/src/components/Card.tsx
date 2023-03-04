import Person from './Person'

type CardProps = {
    gallery: () => void,
    title: string,
}

export const Card = (props: CardProps) => {
  return (
    <div className='Card'>
        <div>Card</div>
        <Person />
        <Person />
        <Person />
    </div>
  )
}
