import React, { useState } from "react";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Hero from "../../components/sections/Hero";
import Info from "../../components/sections/Info";
import Newsletter from "../../components/sections/Newsletter";
import Services from "../../components/sections/Services";
import Sidebar from "../../components/Sidebar";
import api from "../../services/api";
import {
  homeSection1,
  homeSection2,
  homeSection3,
  homeSection4,
  homeSection5,
} from "../../services/data";
import { Container, Main } from "./styles";

function ProjectsByProject() {
  const [isOpen, setIsOpen] = useState("");

  const [province, setProvince] = useState("");
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      setProvince(history.location.pathname.split("/")[2]);

      const res = await api.get(
        `/projects?name=${history.location.pathname.split("/")[2]}`
      );
      setProjects(res.data || []);
      setLoading(false);
    })();
  }, []);

  if (loading === true) {
    return (
      <>
        <div id="project">
          <Container>
            <header>
              <div className="back">
                <FaArrowLeft />
                <Link to="/">Voltar</Link>
              </div>

              <span>{province}</span>
            </header>
          </Container>

          <Main>
            <Container>
              <h1>Carregando ...</h1>
            </Container>
          </Main>
        </div>
        <Footer />
      </>
    );
  }

  if (!loading && projects && projects.length === 0) {
    return (
      <>
        <div id="project">
          <Container>
            <header>
              <div className="back">
                <FaArrowLeft />
                <Link to="/">Voltar</Link>
              </div>

              <span>{province}</span>
            </header>
          </Container>

          <Main>
            <Container>
              <h1>Não existe projecto em {province}</h1>
            </Container>
          </Main>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div id="projects">
        <Container>
          <header>
            <div className="back">
              <FaArrowLeft />
              <Link to="/">Voltar</Link>
            </div>

            <span>{province}</span>
          </header>
        </Container>
        <Main>
          <Container>
            <div className="projects">
              {projects.map((project) => (
                <div className="project" key={project._id}>
                  <img
                    src="https://images.pexels.com/photos/3285716/pexels-photo-3285716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt={project.name}
                  />
                  <div className="detail">
                    <strong>{project.name}</strong>
                    <p>{project.description}</p>
                  </div>
                  <Link className="button" to={`/projects/${project._id}`}>
                    Saiba mais
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </Main>
      </div>
      <Footer />
    </>
  );
}

export default ProjectsByProject;
