import { useEffect, useState } from 'react'
import Project from '../../components/Project'
import Title from '../../components/Title'
import { List } from './styles'

export type datasAPI = {
  id: number
  name: string
  html_url: string
  description: string
}

const Projects = () => {
  const [data, setData] = useState<datasAPI[]>([])

  async function API() {
    const res = await fetch('https://api.github.com/users/gctoledo/repos')
    const userInfo = await res.json()

    const userData = userInfo.map(
      ({ id, name, html_url, description }: datasAPI) => {
        return {
          id: id,
          name: name,
          html_url: html_url,
          description: description
        }
      }
    )
    setData(userData)
  }

  useEffect(() => {
    API()
  }, [])

  return (
    <section>
      <Title fontSize={16}>Projetos</Title>
      <List>
        {data.map(({ id, name, description, html_url }) => (
          <li key={id}>
            <Project
              id={id}
              name={name}
              description={description}
              html_url={html_url}
            />
          </li>
        ))}
      </List>
    </section>
  )
}

export default Projects
