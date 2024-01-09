async function fetchCars(){
    const response = await fetch("cars.json")
    const data = await response.json()

    let output = ""

    data.map((info) => {
        output += `<div class='car'>
            <p>Autó márkája: ${info.brand}</p>
            <p>Autó típusa: ${info.type}</p>
            <p>Autó típusa: ${info.factoryYear}</p>
        </div>`

    })

    document.getElementById("results").innerHTML = output
}

fetchCars()