import { Badge } from '@chakra-ui/react'

interface Props {
  score: number
}
const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? 'green' : score > 60 ? 'yellow' : 'gray'
  return (
    <Badge fontSize='.8rem' colorScheme={color} p='.1rem .5rem' borderRadius='4px'>
      {score}
    </Badge>
  )
}

export default CriticScore
