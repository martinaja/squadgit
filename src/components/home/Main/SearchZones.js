import { useSearch } from "../../../hooks/useSearch";

const SearchZones = () => {
  const [values, setValues, handleSubmit] = useSearch();

  return (
    <div className="col-xl-6 card">
      <div>
        <h1
          className="text-center d-sm-flex justify-content-sm-center align-items-sm-end"
          style={{
            fontSize: "19.46px",
            marginTop: "0px",
            height: "30px",
          }}
        >
          Seleccioná la zona
        </h1>
        <div className="row">
          <div className="col d-sm-flex justify-content-sm-center divider">
            <div
              style={{
                height: "2px",
                marginTop: "auto",
                background: "#072147",
                width: "300px",
                marginRight: "2rem",
              }}
            ></div>
          </div>
        </div>
        <label
          className="form-label"
          style={{
            width: "190px",
            textAlign: "left",
            color: "var(--bs-gray-600)",
          }}
        >
          País
        </label>
        <div
          className="d-sm-flex justify-content-sm-center align-items-sm-center"
          style={{ height: "60px" }}
        >
          <input
            onChange={(e) => {
              setValues({ ...values, country: e.target.value }); // Seteo el valor del pais
            }}
            className="form-control"
            style={{ width: "300px" }}
          />
        </div>
        <label
          className="form-label"
          style={{
            width: "190px",
            textAlign: "left",
            color: "var(--bs-gray-600)",
          }}
        >
          Ciudad
        </label>
        <div
          className="d-sm-flex justify-content-sm-center align-items-sm-center"
          style={{ height: "60px" }}
        >
          <input
            onChange={(e) => {
              // Funcion que trae los codigos de pais y ciudad
              setValues({ ...values, city: e.target.value }); // Seteo los parametros de la api
            }}
            className="form-control"
            style={{ alignItems: "center", width: "300px" }}
          />
        </div>
        <div
          className="d-sm-flex justify-content-sm-center align-items-sm-center"
          style={{ height: "54px", alignSelf: "center" }}
        >
          <button
            onClick={handleSubmit} // Funcion que trae los codigos de pais y ciudad
            className="btn btn-primary d-md-flex justify-content-sm-center  align-items-sm-center"
            type="button"
            style={{
			  
              background: "#ff685b",
		width: "300px",
	display: "block",
            }}
          >
            BUSCAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchZones;
