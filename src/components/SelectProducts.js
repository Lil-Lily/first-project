import {FilterProducts} from "./FilterProducts";
import './SelectProducts.css';
import {ShowProducts} from "./ShowProducts";

const  SelectProducts = () => {
    return (
        <div className="row select-products">
            <div className="text col-md-3" >
                <span>Showing 12 of 250 Results</span>
            </div>
            <FilterProducts />
            <ShowProducts />
        </div>
    );
};
export {SelectProducts};