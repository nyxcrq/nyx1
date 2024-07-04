import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="carousel carousel-dark slide" id="carouselExample">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/public/img/card1.png" className="d-block w-100" alt="Image 1" />
        </div>
        <div className="carousel-item">
          <img src="/public/img/card3.png" className="d-block w-100" alt="Image 2" />
        </div>
        <div className="carousel-item">
          <img src="/public/img/card1.png" className="d-block w-100" alt="Image 3" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}