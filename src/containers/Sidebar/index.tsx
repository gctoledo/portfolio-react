import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { Description, ThemeButton, SidebarContainer } from './styles'

type Props = {
  toggleTheme: () => void
}

const Sidebar = (props: Props) => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Title fontSize={20}>Gabriel</Title>
        <Paragraph type="second" fontSize={16}>
          gctoledo
        </Paragraph>
        <Description type="main" fontSize={12}>
          Engenheiro Fullstack Java
        </Description>
        <ThemeButton onClick={props.toggleTheme}>Trocar tema</ThemeButton>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
