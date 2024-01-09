async function fetchCars(){
    const response = await fetch("cars.json")
    const data = await response.json()

    let output = ""

    data.map((info) => {
        output += `<div class='car'>
            <p>Autó márkája: <b> ${info.brand} </b> </p>
            <p>Autó típusa: <b>${info.type}</b></p>
            <p>Autó típusa: <b>${info.factoryYear}</b></p>
        </div>`

    })

    document.getElementById("results").innerHTML = output
}

fetchCars()