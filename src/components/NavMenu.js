import React from 'react';
import MenuItem from './MenuItem';

class NavMenu extends React.Component {

    constructor(props) {
        super(props);
        const items = props.items;

        if (items) {
            this.state = {
                items: items
            };
        } else {
            this.state = { items: null };
        }
    }

    render() {
        const items = this.state.items;
        if (items) {
            return (
                <div className="navMenu">
                    <ul>
                        {items.map((item, index) => 
                            <MenuItem item={item} onClick={console.log("Clicked an item")} />)}
                    </ul>
                </div>
            );
        } else {
            return <p>No items</p>;
        }
    }
}

export default NavMenu;