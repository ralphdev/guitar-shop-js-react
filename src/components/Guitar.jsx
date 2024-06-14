export default function Guitar({ guitar, addToCart }) {

    const { id, name, image, description, price } = guitar;

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={`public/img/${image}.jpg`} alt="imagen guitarra" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 f    w-bold text-uppercase">{name}</h3>
                <p>{ description }</p>
                <p className="fw-black text-primary fs-3">${ price }</p>

                <button
                    className="btn btn-dark w-100"
                    type="button"
                    onClick={() => addToCart(guitar)}
                >Agregar al Carrito</button>
            </div>
        </div>
    )
}
