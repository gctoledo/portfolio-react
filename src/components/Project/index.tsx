import { datasAPI } from '../../containers/Projects'
import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, Button } from './styles'

const Project = ({ name, html_url, description }: datasAPI) => {
  return (
    <Card>
      <Title>{name}</Title>
      <Paragraph type="second">{description || 'Sem descrição'}</Paragraph>
      <Button href={html_url} target="_blank">
        Visualizar
      </Button>
    </Card>
  )
}

export default Project
