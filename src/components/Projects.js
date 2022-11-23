import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';

export const Projects = () => {
  const projects = [
    {
      title: 'Business Stratup',
      description: 'Desing & Development',
      imgUrl: projImg1,
    },

    {
      title: 'Business Stratup',
      description: 'Desing & Development',
      imgUrl: projImg2,
    },

    {
      title: 'Business Stratup',
      description: 'Desing & Development',
      imgUrl: projImg3,
    },

    {
      title: 'Business Stratup',
      description: 'Desing & Development',
      imgUrl: projImg1,
    },

    {
      title: 'Business Stratup',
      description: 'Desing & Development',
      imgUrl: projImg2,
    },

    {
      title: 'Business Stratup',
      description: 'Desing & Development',
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>123</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="thiird">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">kkkkkkkkkk</Tab.Pane>
                <Tab.Pane eventKey="third">kkkkkkkkkk</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
