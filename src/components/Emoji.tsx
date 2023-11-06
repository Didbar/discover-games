import { Image, ImageProps, Tooltip } from '@chakra-ui/react'
import bullsEye from '../assets/Emojis/bulls-eye.webp'
import meh from '../assets/Emojis/meh.webp'
import thumbsUp from '../assets/Emojis/thumbs-up.webp'

interface Props {
  rating: number
}
const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh' },
    4: { src: thumbsUp, alt: 'recommended' },
    5: { src: bullsEye, alt: 'exceptional' }
  }

  if (rating < 3) return null

  return (
    <Tooltip label={emojiMap[rating].alt} aria-label='A tooltip'>
      <Image
        {...emojiMap[rating]}
        boxSize='25px'
        _hover={{
          transform: 'scale(1.5)'
        }}
      />
    </Tooltip>
  )
}

export default Emoji
