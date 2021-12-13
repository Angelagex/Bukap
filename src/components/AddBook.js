import React from "react";
import { useForm } from "../hooks/useForm";
import { Link } from "react-router-dom";
import { useAlerts} from "../helpers/useAlerts"

export const AddBook = () => {
  const [formValue, handleInputChange, reset] = useForm({
    title: "",
    author: "",
    description: "",
    pages: "",
  });

  const { title, author, description, pages } = formValue;

  const [TitleAlert, DescriptionAlert, PagesAlert, Success] = useAlerts()

  const handleSave = (e) => {
    e.preventDefault()

    if (title.length > 100) {
      return TitleAlert()
    }
    else if (description.length > 800) {
      return DescriptionAlert()
    }
    else if (pages%1!==0||pages<=0) {
      return PagesAlert()
    }
    else if (title.length<=100&&description.length<=800&&pages%1===0&&pages>0){
      reset()
      return Success()
    }

  }

  return (
    <div className="ABContainer">
      <h2>Agregar nuevo libro</h2>
      <form className="ABForm" onSubmit={(e) => handleSave(e)}>
        <div className="form">
        <p className="titleL">{title.length}/100</p>
          <input
            type="text"
            name="title"
            className="titles"
            placeholder=" Nombre"
            value={title}
            onChange={handleInputChange}
          />
        </div>

        <div className="form">
          <select
            name="author"
            className="authors"
            value={author}
            onChange={handleInputChange}
          >
            <option>Eugenia Bahit</option>
            <option>Mark Natson</option>
            <option>Rafael Alberto Moreno</option>
            <option>William E. Shotts Jr.</option>
            <option>Bruce Eckel</option>
          </select>
        </div>

        <div className="form-group">
        <p className="descriptionL">{description.length}/800</p>
          <input
            type="textarea"
            name="description"
            className="descriptions"
            placeholder=" Descripción"
            value={description}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label for="pages">Páginas: </label>
          <input
            id="pages"
            type="number"
            min="1"
            pattern="^[0-9]+"
            autoComplete="off"
            name="pages"
            className="addpages"
            placeholder=" Número"
            value={pages}
            onChange={handleInputChange}
          />
        </div>
        <div className="buttons">
          <Link to="/">
            <button className="cancelBtn">Cancelar</button>
          </Link>
          <button type="submit" className="submitBtn">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};
