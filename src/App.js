import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [itemList, setItemList] = useState([]);
  const [update, setUpdate] = useState(false);
  const [item, setItem] = useState();

  const handleChange = (e) => {
    setItem(e.target.value);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    setItemList([...itemList, item]);
    setItem("");
    setUpdate(false);
  };

  const handleDelete = (id) => {
    const rem = itemList.filter((item, key) => key !== id);
    setItemList(rem);
  };
  const handleEdit = (id) => {
    const rem = itemList.filter((item, key) => key !== id);
    const toEdit = itemList.find((item, key) => key === id);

    setItemList(rem);
    setItem(toEdit);
    setUpdate(true);
  };
  return (
    <div className="App">
      <h1 className="heading">Todo App</h1>
      <div className="content">
        <div>
          <form onSubmit={handleAdd}>
            <input
            required
              type="text"
              onChange={(e) => handleChange(e)}
              value={item}
              name="item"
              className="text"
            ></input>
            <button type="submit" name="Addtodo" className="button">
              {!update ? "Add" : "Update"}
            </button>
          </form>
        </div>
        <div>
          {itemList.map((value, key) => {
            return (
              <>
                <table>
                  <tbody>
                    <tr>
                      <td key={key} width={200}>
                        {value}
                      </td>
                      <td>
                        <button
                          className="button-delete"
                          onClick={() => handleDelete(key)}
                        >
                          X
                        </button>
                      </td>
                      <td>
                        <button onClick={() => handleEdit(key)}>Edit</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
