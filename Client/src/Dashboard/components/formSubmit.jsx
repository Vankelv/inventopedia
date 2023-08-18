import React, { useState, useEffect } from "react";
import Select from "react-select";
import { DatePicker } from "antd";

const FormComponent = () => {
  const [inventionName, setInventionName] = useState("");
  const [inventor, setInventor] = useState("");
  const [year, setYear] = useState("");
  const [category, setCategory] = useState();
  const [categories, setCategories] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState(null);

  const [formData, setFormData] = useState({
    inventionName: "",
    inventor: "",
    year: "",
    category: "",
  });

  const [countries, setCountries] = useState([]);

  const handleInventionNameChange = (event) => {
    const { value } = event.target;
    setInventionName(value);
  };

  const handleInventorChange = (event) => {
    const { value } = event.target;
    setInventor(value);
  };

  const handleYearChange = (event) => {
    const { value } = event.target;
    setYear(value);
  };

  const handleCategoryChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      category: selectedOption.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedFormData = {
      inventionName,
      inventor,
      year,
      category,
      country: selectedCountry ? selectedCountry.value : null,
    };

    fetch("http://localhost:3000/inventions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFormData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Data submitted successfully");
      });

    setInventionName("");
    setInventor("");
    setYear("");
    setCategory("");
    setSelectedCountry(null);
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#6f6af8" : "white",
      color: state.isSelected ? "white" : "black",
      "&:hover": {
        backgroundColor: "#6f6af8",
        cursor: "pointer",
        color: "white",
      },
    }),
    singleValue: (provided, state) => ({
      ...provided,
      backgroundColor:
        state.data && state.data.color ? state.data.color : "white",
    }),
  };

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=name"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);

  useEffect(() => {
    fetch(`https://who-invent-what-81au.vercel.app/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="firstRight flex">
        <div className="fields">
          <label htmlFor="inventionName">Invention Name:</label>
          <input
            type="text"
            id="inventionName"
            name="inventionName"
            value={inventionName}
            onChange={(event) => setInventionName(event.target.value)}
            required
          />
        </div>
        <div className="fields">
          <label htmlFor="inventor">Inventor:</label>
          <input
            type="text"
            id="inventor"
            name="inventor"
            value={inventor}
            onChange={(event) => setInventor(event.target.value)}
            required
          />
        </div>
      </div>
      <div className="secondRight flex">
        <div className="fields">
          <label htmlFor="year">Year:</label>
          <DatePicker
            type="date"
            id="year"
            name="year"
            selected={year}
            onChange={(date) => setYear(date)}
            picker="year"
          />
        </div>
        <div className="fields">
          <label htmlFor="categories">Categories:</label>
          <Select
            className="selectField"
            options={
              categories
                ? categories.map((category) => ({
                    value: category.categoryName,
                    label: category.categoryName,
                  }))
                : []
            }
            value={{ value: category, label: category }}
            onChange={(selectedOption) => setCategory(selectedOption.value)}
            styles={customStyles}
          />
        </div>
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <Select
          options={countries}
          value={selectedCountry}
          onChange={(selectedOption) => setSelectedCountry(selectedOption)}
          className="countryField"
          styles={customStyles}
        />
      </div>

      <div>
        <button type="submit" className="addInSubmit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
