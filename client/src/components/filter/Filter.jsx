import "./filter.scss";

function Filter() {
  return (
    <div className="filter">
      <h1>
        Search results for <b>London</b>
      </h1>
      <div className="top">
        <InputBox id="city" text="Location" placeholder="City Location" type="text" />
      </div>
      <div className="bottom">
        <SelectBox id="type" options={["buy", "rent"]} />
        <SelectBox id="property" options={["apartment", "house", "condo", "land"]} />
        <InputBox id="minPrice" text="Min Price" type="number" />
        <InputBox id="maxPrice" text="Max Price" type="text" />
        <InputBox id="bedroom" text="Bedroom" type="text" />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

function SelectBox({id, options}) {
  return (
    <div className="item">
      <label htmlFor={id}>{id}</label>
      <select name={id} id={id}>
        <option value="">any</option>
        {options.map((opt)=>(
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function InputBox({ id, text, placeholder = "any", type }) {
  return (
    <div className="item">
      <label htmlFor={id}>{text}</label>
      <input type={type} id={id} name={id} placeholder={placeholder} />
    </div>
  );
}

export default Filter;
