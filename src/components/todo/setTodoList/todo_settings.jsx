import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Select from 'react-select'

export const TodoSettings = () => {

    const Countries = [
        { label: "Albania" },
        { label: "Argentina" },
        { label: "Austria" },
        { label: "Cocos Islands" },
        { label: "Kuwait", value: 965 },
        { label: "Sweden" },
        { label: "Venezuela" }
    ];

    return (
        <div className="todo-list__settings">
            <Popup trigger={<button> Trigger</button>} position="right center">
                <div>Popup content here !!</div>
                <Select options={Countries} />
            </Popup>

        </div>
    )
}