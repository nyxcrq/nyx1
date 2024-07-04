import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="carousel carousel-dark slide" id="carouselExample">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image src="/img/card1.png" className="d-block w-100" alt="Image 1" layout="fill" objectFit="cover" />
        </div>
        <div className="carousel-item">
          <Image src="/img/card3.png" className="d-block w-100" alt="Image 2" layout="fill" objectFit="cover" />
        </div>
        <div className="carousel-item">
          <Image src="/img/card1.png" className="d-block w-100" alt="Image 3" layout="fill" objectFit="cover" />
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
