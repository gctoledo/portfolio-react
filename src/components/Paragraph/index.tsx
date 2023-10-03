import { P } from './styles'

export type Props = {
  children: string
  type?: 'main' | 'second'
  fontSize?: number
}

const Paragraph = ({ children, type = 'main', fontSize }: Props) => (
  <P type={type} fontSize={fontSize}>
    {children}
  </P>
)

export default Paragraph
