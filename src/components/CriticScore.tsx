import { Badge } from '@chakra-ui/react'

interface Props {
  score: number
}
const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? 'green' : score > 60 ? 'yellow' : 'gray'
  return (
    <Badge
      colorScheme={color}
      p='.1rem .5rem'
      borderRadius='4px'
      fontSize={{
        base: '1.2rem',
        lg: '.75rem'
      }}>
      {score}
    </Badge>
  )
}

export default CriticScore
