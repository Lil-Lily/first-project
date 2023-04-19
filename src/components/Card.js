import photo1 from '../img/photo1.jpg';
import './Card.css';

const Card = ({cardItem}) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="card w-100 position-relative">
                <div className="card-image">
                    <img src={photo1} className="card-img-top w-100" alt="..." />
                </div>
                <div className="card-body">
                    <h6 className="card-title">{cardItem.title}</h6>
                    <p className="card-text fw-bold" >{cardItem.description}</p>
                </div>
                <div className="price-btn mb-3">
                    <div className="price">{`$${cardItem.price}`}</div>
                    <button type="button" className="btn btn-primary">
                        <i className="fa-solid fa-cart-shopping" />
                        Buy
                    </button>
                </div>
                <div>
                    <div className="new">New</div>
                    <div>
                        <i className="fa-sharp fa-regular fa-heart heart" />
                    </div>
                </div>
            </div>

        </div>
    );
};
export {Card};