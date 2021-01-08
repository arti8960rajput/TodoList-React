import React from'react';
import './ListItems.css';
import { FontAwesomeIcon, fontAwesomeIcon} from '@fortawesome/react-fontawesome';


function ListItems(props){
    const items =props.items;
    const listItems=items.map(item =>
        {
            return <div className="list" key={item.key}>
            <p>
                <input type="checkbox" 
                    id = {item.key}
                    checked = {!item.isChecked}
                    onChange = {
                        (e) => {
                            props.handleCheckboxChange(!item.isChecked,item.key)
                        }
                    }
                />
                <input type="text" 
                id={item.key} 
                value={item.text}
                onChange ={
                    (e) =>{
                        props.setUpdate(e.target.value, item.key)
                    }
                }/>
            <span>
                <FontAwesomeIcon className="faicons"
                icon='trash'
                onClick={ () => props.deleteItem(item.key)
                }/>
            </span>
            </p>
            
            </div>
        })
        return(
            <div>{listItems}</div>
        )
}
export default ListItems;