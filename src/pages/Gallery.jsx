
export default function Gallery(){
    return(
        <div>
            <h2 className="w-100 text-center mt-5">Select a Breed</h2>
            <select id="breedSelect"
                className="form-select form-select-lg my-1 mx-auto"
                aria-label="form-select-lg">
            </select>
            <div id="carouselExampleControls" className="carousel" data-bs-ride="carousel">
      <div id="carouselInner" className="carousel-inner"></div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
        
        </div>
    );
}