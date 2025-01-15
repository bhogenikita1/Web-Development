import '../styles/menu.css'

const dishes = [
    { name: 'Alu Tikki', price: '250' },
    { name: 'Pizza', price: '550' },
    { name: 'Burger', price: '750' },
    { name: 'Sandwich', price: '1050' },
    { name: 'American Mud', price: '1500' },
]
function Menu() {
    return (
        <>
            <section id="menu" className="menu">
                <h2>OUR MENU</h2>
                <ul>
                    {dishes.map((dish, index) => (
                        <li key={index}>
                            <span>{dish.name}</span>
                            <span>{dish.price}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};
export default Menu;