import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const defaultValue = "";
  const [inputValue, setInputValue] = useState(defaultValue);
  const handleInputChange = (e) => setInputValue(e.target.value);
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita recarga de la pagina cuando envia el formulario
    if (inputValue.trim().length > 2) {
      setCategories((categories) => [inputValue, ...categories]);
      setInputValue(defaultValue);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = { setCategories: PropTypes.func.isRequired };
