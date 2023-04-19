import './AccordionItem.css';

const AccordionItem = ({item}) => {

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={item.class1}>
                <button className={item.class2} type="button" data-bs-toggle="collapse"
                        data-bs-target={`#${item.class3}`} aria-expanded="false"
                        aria-controls={item.class3}>
                    <i className="fa-regular fa-user" style={{marginRight: '0.4rem'}}/>
                    {item.text}
                </button>
            </h2>
            <div id={item.class3} className={item.class4}
                 aria-labelledby={item.class1}>
                <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>
                </div>
            </div>
        </div>
    );
};
export {AccordionItem};