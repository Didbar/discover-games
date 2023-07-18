import bullsEye from '../assets/Emojis/bulls-eye.webp'
import thumbsUp from '../assets/Emojis/thumbs-up.webp'
import meh from '../assets/Emojis/meh.webp'
import { Image, ImageProps, Tooltip } from '@chakra-ui/react'

interface Props {
  rating: number
}
const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh' },
    4: { src: bullsEye, alt: 'recommended' },
    5: { src: thumbsUp, alt: 'exceptional' }
  }

  if (rating < 3) return null

  return (
    <Tooltip label={emojiMap[rating].alt} aria-label='A tooltip'>
      <Image {...emojiMap[rating]} boxSize='20px' />
    </Tooltip>
  )
}

export default Emoji
