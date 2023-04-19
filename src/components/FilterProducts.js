import './FilterProducts.css';

const FilterProducts = () => {
    return (
        <ul className="nav nav-pills filter-products col-md-6">
            <li className="nav-item">
                <a className="nav-link first">Popular</a>
            </li>
            <li className="nav-item">
                <a className="nav-link">High to Low</a>
            </li>
            <li className="nav-item">
                <a className="nav-link">Low to High</a>
            </li>
            <li className="nav-item">
                <a className="nav-link">New</a>
            </li>
        </ul>
    );
};
export {FilterProducts};
