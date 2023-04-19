import React from 'react';
import {AccordionItem} from "./AccordionItem";
import photo from '../img/photo1.jpg';
import './Accordion.css';

const Accordion = () => {

    const accordionData = [
        {
            id: '1',
            class1: 'panelsStayOpen-headingOne',
            class2: 'accordion-button',
            class3: 'panelsStayOpen-collapseOne',
            class4: 'accordion-collapse collapse show',
            text: 'Accordion Item 1',
        },

        {
            id: '2',
            class1: 'panelsStayOpen-headingTwo',
            class2: 'accordion-button collapsed',
            class3: 'panelsStayOpen-collapseTwo',
            class4: 'accordion-collapse collapse',
            text: 'Accordion Item 2',
        },
        {
            id: '3',
            class1: 'panelsStayOpen-headingThree',
            class2: 'accordion-button collapsed',
            class3: 'panelsStayOpen-collapseThree',
            class4: 'accordion-collapse collapse',
            text: 'Accordion Item 3',
        },
        {
            id: '4',
            class1: 'panelsStayOpen-headingFor',
            class2: 'accordion-button collapsed',
            class3: 'panelsStayOpen-collapseFor',
            class4: 'accordion-collapse collapse',
            text: 'Accordion Item 4',
        },
        {
            id: '5',
            class1: 'panelsStayOpen-headingFive',
            class2: 'accordion-button collapsed',
            class3: 'panelsStayOpen-collapseFive',
            class4: 'accordion-collapse collapse',
            text: 'Accordion Item 5',
        },
        {
            id: '6',
            class1: 'panelsStayOpen-headingSix',
            class2: 'accordion-button collapsed',
            class3: 'panelsStayOpen-collapseSix',
            class4: 'accordion-collapse collapse',
            text: 'Accordion Item 6',
        },
        {
            id: '7',
            class1: 'panelsStayOpen-headingSeven',
            class2: 'accordion-button collapsed',
            class3: 'panelsStayOpen-collapseSeven',
            class4: 'accordion-collapse collapse',
            text: 'Accordion Item 7',
        },
        {
            id: '8',
            class1: 'panelsStayOpen-headingEight',
            class2: 'accordion-button collapsed',
            class3: 'panelsStayOpen-collapseEight',
            class4: 'accordion-collapse collapse',
            text: 'Accordion Item 8',
        },
        {
            id: '9',
            class1: 'panelsStayOpen-headingNine',
            class2: 'accordion-button collapsed',
            class3: 'panelsStayOpen-collapseNine',
            class4: 'accordion-collapse collapse',
            text: 'Accordion Item 9',
        },
        {
            id: '10',
            class1: 'panelsStayOpen-headingTen',
            class2: 'accordion-button collapsed',
            class3: 'panelsStayOpen-collapseTen',
            class4: 'accordion-collapse collapse',
            text: 'Accordion Item 10',
        },
    ];
    return (
        <React.Fragment>
            <div className="accordion example w-100" id="accordionPanelsStayOpenExample">
                {accordionData.map(item => <AccordionItem key={item.id} item={item} />)}
                <div className="example-image text-center">
                    <img src={photo} alt="image"/>
                </div>
            </div>
        </React.Fragment>
    );
};
export {Accordion};

