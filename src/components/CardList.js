import {Card} from "./Card";

const CardList = () => {
    const cardList = [
        {
            id: 'c1',
            title: 'Card title',
            description: 'Some quick example text',
            price: '122.51'

        },
        {
            id: 'c2',
            title: 'Card title',
            description: 'Some quick example text',
            price: '122.51'

        },
        {
            id: 'c3',
            title: 'Card title',
            description: 'Some quick example text',
            price: '122.51'

        },
        {
            id: 'c4',
            title: 'Card title',
            description: 'Some quick example text',
            price: '122.51'

        },
        {
            id: 'c5',
            title: 'Card title',
            description: 'Some quick example text',
            price: '122.51'

        },
        {
            id: 'c6',
            title: 'Card title',
            description: 'Some quick example text',
            price: '122.51'

        },
        {
            id: 'c7',
            title: 'Card title',
            description: 'Some quick example text',
            price: '122.51'

        },
        {
            id: 'c8',
            title: 'Card title',
            description: 'Some quick example text',
            price: '122.51'

        }
    ];

    return (
        <div className='row gy-4 mt-1'>
            {cardList.map(cardItem =>
                <Card key={cardItem.id} cardItem={cardItem}/>
            )}
        </div>
    );
};
export {CardList};