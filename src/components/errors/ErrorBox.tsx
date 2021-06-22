import { memo } from 'react'
import { Message, Transition } from 'semantic-ui-react'

interface Props {
  message: string;
  visible: boolean;
}

const ErrorBox = ({ message, visible }: Props) => {
  return (
    <Transition visible={visible} animation='fade down' duration={500}>
      <Message negative>{message}</Message>
    </Transition>
  )
}

export default memo(ErrorBox)
