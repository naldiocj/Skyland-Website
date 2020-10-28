import React, { useState } from "react";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
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

function Events() {
  const [isOpen, setIsOpen] = useState("");

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await api.get("/projects");
      setProjects(res.data || []);
    })();
  });

  return (
    <>
      <div id="projects">
        <Container>
          <header>
            <div className="back">
              <FaArrowLeft />
              <Link to="/">Voltar</Link>
            </div>

            <span>Eventos</span>
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
                    <span className="event-date">12-12-2020</span>
                  </div>
                  <Link className="button" to={`/events/${project._id}`}>
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

export default Events;
