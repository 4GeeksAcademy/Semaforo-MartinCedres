import React, { useState } from "react";

const Home = () => {
	// Defino un estado llamado "color" con un valor inicial de 'green'
    // La función setColor se usará para actualizar el valor de "color"
	const [color, setColor] = useState('green');
	return (
		<div>
			<div className="card" style={{ width: "18rem" }}>
				<div className="card-body bg-dark d-flex flex-column align-items-center">
					<button className={`btn btn-success w-50 p-5 my-2 rounded-circle ${color != "green" && "opacity-25"}`} onClick={() => setColor("green")}></button>
					<button className={`btn btn-warning w-50 p-5 my-2 rounded-circle ${color != "yellow" && "opacity-25"}`} onClick={() => setColor("yellow")}></button>
					<button className={`btn btn-danger w-50 p-5 my-2 rounded-circle ${color != "red" && "opacity-25"}`} onClick={() => setColor("red")}></button>
				</div>
			</div>
		</div>

	);
};


export default Home;
