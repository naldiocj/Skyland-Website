import React, { useState } from "react";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../../components/Footer";
import api from "../../../services/api";
import { Container, Main } from "./styles";

function SingleEvent() {
  const [isOpen, setIsOpen] = useState("");
  const location = useLocation();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [project, setProject] = useState({});

  useEffect(() => {
    (async () => {
      const [, , id] = location.pathname.split("/");
      const res = await api.get(`/projects/${id}`);
      setProject(res.data || {});
    })();
  });

  return (
    <>
      <div id="events">
        <Container>
          <header>
            <div className="back">
              <FaArrowLeft />
              <Link to="/events">Voltar</Link>
            </div>

            <span>{project.name}</span>
          </header>
        </Container>
        <Main>
          <div className="cover">
            <img
              src="https://images.pexels.com/photos/3285716/pexels-photo-3285716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt={project.name}
            />
          </div>
          <Container>
            <div className="content-item">
              <div className="detail-item">
                <h3>Evento</h3>
                <p>{project.name}</p>
                <div className="line"></div>
                <h3 className="desc">Data</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <div className="gallery-item">
                <h3>Descrição</h3>
                <p>&nbsp;</p>
                <div className="line"></div>

                <div className="description-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  ratione eveniet modi dolorum, unde reprehenderit sed tempore
                  itaque nulla veritatis corporis laudantium! Veritatis quia
                  voluptas assumenda saepe dolore sequi porro!
                </div>
              </div>
            </div>
          </Container>
        </Main>
      </div>
      <Footer />
    </>
  );
}

export default SingleEvent;
