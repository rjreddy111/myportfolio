import './index.css'

const Projects = props => {
  const {eachProjectDetails} = props

  const {projectName, projectLink, projectDescription} = eachProjectDetails
  console.log(eachProjectDetails)
  return (
    <li className="list-style">
      <div>
        <h1>{projectName}</h1>
        <p>{projectDescription}</p>
        <a href={projectLink} target="_new">
          <button type="button">View Project</button>{' '}
        </a>
      </div>
    </li>
  )
}

export default Projects
