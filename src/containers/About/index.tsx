import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragraph type="main">
      Lorem iPsum dolor sit, amet consectetur adipisicing elit. Ex animi ipsam
      neque repellat expedita distinctio eum, enim, voluptate soluta in iusto
      atque quaerat quae numquam est pariatur ab vero delectus!
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=gctoledo&theme=merko&hide_border=false&include_all_commits=false&count_private=false" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=gctoledo&theme=merko&hide_border=false&include_all_commits=false&count_private=false&layout=compact" />
    </GithubSection>
  </section>
)

export default About
