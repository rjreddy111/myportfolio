// Write your JS code here
// Write your JS code here

import {Component} from 'react'

import './index.css'
import Projects from '../Projects'

const initalProjectList = [
  {
    id: 1,
    projectName: 'Todos List',
    projectLink: 'http://reddy43todolist.ccbp.tech',
    projectDescription:
      'User can add list of todos which he/she like to do and has option to strike and delete the todos whichever user has finished',
  },
  {
    id: 2,
    projectName: 'Wikipedia',
    projectLink: 'http://reddywiki43.ccbp.tech',
    projectDescription:
      'It is like search engine, user needs to enter data which needs to be searched and the results will be displayed',
  },
  {
    id: 3,
    projectName: 'nxtWatch',
    projectLink: 'http://rahul43nxtwatch.ccbp.tech',
    projectDescription:
      'This is similar to Netflix, user can stream the videos and save the videos and saved videos will appear in saved section of navigation bar for login username-rahul and password - rahul@2021',
  },
]

class Home extends Component {
  state = {
    projectName: '',
    projectLink: '',
    projectDescription: '',
    projectList: initalProjectList,
  }

  onChangename = event => {
    this.setState({projectName: event.target.value})
  }

  onChangeLink = event => {
    this.setState({projectLink: event.target.value})
  }

  onChangeDiscription = event => {
    this.setState({projectDescription: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {
      projectName,
      projectLink,
      projectDescription,
      projectList,
    } = this.state

    const newProject = {
      projectName,
      projectLink,
      projectDescription,
      id: projectList.length + 1,
    }
    this.setState(prevState => ({
      projectList: [...prevState.projectList, newProject],
      projectName: '',
      projectLink: '',
      projectDescription: '',
    }))
  }

  onClickProject = () => {}

  render() {
    const {projectList} = this.state

    return (
      <div className="home-container">
        <div className="top-contaern">
          <div className="left-container">
            <h2>Hello, my name is Rahul Reddy,</h2>
            <p>
              Am from Humnabad dist Bidar Karnataka, am graduated in the field
              of Mechanical Engineering in the year of 2018 from Reva college
              Bengaluru,
              <br />I am having a work experience of 2 years in the field of
              Mechanical Engineering as an Automobile Data Analyst in ClearQuote
              Technologies Pvt Ltd.
              <br />
              My job role includes:
              <li>
                Annotations of Automobile outer body panels and damage
                annotations using VGG and Catia tool{' '}
              </li>
              <li>Trainig to new interns</li>
              <li>Data seggregation</li>
            </p>
            <p>
              By seeing the growth in the IT industry, am decided to shift my
              carrier in IT domain, I have enrolled in Fullstack developer and
              keep on upgrading my skills from day one in order to fit my
              carrier in IT sector
            </p>
            <h4>My skills : </h4>
            <ul>
              <li>FrontEnd : HTML, CSS, Javascript and React.js</li>
              <li>BackEnd : Python, Node.js</li>
              <li>Database: Sqlite</li>
            </ul>
            <button
              type="button"
              className="primary-buttton"
              onClick={this.onClickProject}
            >
              Projects
            </button>
            <a href="https://www.linkedin.com/in/rahulreddy43/" target="_new">
              <button type="button" className="secondary-button">
                Linkedln
              </button>
            </a>
          </div>
          <div className="right-container">
            <img
              src="https://res.cloudinary.com/dookgusbq/image/upload/v1709301401/szdqp4oq9xs1jh2toni2.jpg"
              className="mian-image"
              alt="profilePic"
            />
          </div>
        </div>

        <form className="form-container" onSubmit={this.submitForm}>
          <h1 className="add-project-heading">Add Project</h1>
          <label htmlFor="projectNAme">Project Name</label>
          <br />
          <input type="text" id="projectNAme" onChange={this.onChangename} />
          <br />
          <br />
          <label htmlFor="projectLink">Project Link</label>
          <br />
          <input type="text" id="projectLink" onChange={this.onChangeLink} />
          <br />
          <br />
          <label htmlFor="textareaId">Description</label>
          <br />
          <textarea
            id="textareaId"
            rows="10"
            cols="50"
            onChange={this.onChangeDiscription}
          />
          <br />
          <button type="submit" className="add-button">
            Add
          </button>
        </form>
        <ul>
          {projectList.length > 0
            ? projectList.map(eachProject => (
                <Projects
                  eachProjectDetails={eachProject}
                  key={eachProject.id}
                />
              ))
            : null}
        </ul>
      </div>
    )
  }
}

export default Home
