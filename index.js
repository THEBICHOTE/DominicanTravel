function showContent(section) {
    const contentDiv = document.getElementById('content');
    let content = '';

    switch (section) {
        case 'inicio':
            content = `
                <h1>Bienvenido a la página de inicio</h1>
                <h2>¡Bienvenidos a Descubre República Dominicana!</h2>
                <strong>Sumérgete en la belleza y la diversidad de nuestro paraíso caribeño. Desde sus playas de arena blanca y aguas turquesas hasta sus vibrantes ciudades llenas de cultura y tradición, la República Dominicana es un destino que enamora a todos sus visitantes.</p>
                <br>
                 <strong>Explora nuestras guías de viaje, descubre los mejores destinos turísticos, infórmate sobre nuestra rica historia y cultura, y disfruta de nuestras recomendaciones para aprovechar al máximo tu visita. Ya sea que busques aventuras al aire libre, una escapada relajante o sumergirte en nuestra vibrante vida nocturna, aquí encontrarás todo lo que necesitas para planificar tu viaje ideal.</p>
                 <br>
                 <strong>¡Bienvenido y disfruta de tu visita!</p>
                `;
            break;
        case 'lugares':
            content = `
                <h1>Lugares</h1>
                <p>Explora diferentes lugares interesantes.</p>
                <ul>
                    <li>Playa del Carmen</li>
                    <li>Cancún</li>
                    <li>Tulum</li>
                </ul>
                <img src="path/to/lugares-image.jpg" alt="Lugares Image">
            `;
            break;
        case 'platillos':
            content = `
                <h1>Platillos</h1>
                <p>Descubre deliciosos platillos.</p>
                <h2>Platillos populares:</h2>
                <ol>
                    <li>Tacos al Pastor</li>
                    <li>Chiles en Nogada</li>
                    <li>Enchiladas</li>
                </ol>
                <img src="path/to/platillos-image.jpg" alt="Platillos Image">
            `;
            break;
        case 'atracciones':
            content = `
                <h1>Atracciones</h1>
                <p>Conoce las atracciones más populares.</p>
                <p>Desde parques temáticos hasta museos históricos, hay algo para todos.</p>
                <img src="path/to/atracciones-image.jpg" alt="Atracciones Image">
            `;
            content = `
            <h1>Salto Bayaguana</h1>
            <p>Conoce las atracciones más populares.</p>
            <p>Desde parques temáticos hasta museos históricos, hay algo para todos.</p>
            <img src="el salto.jpg" alt="el salto  Image"> `;
            break;
        default:
            content = `
                <h1>Inicio</h1>
                <p>Bienvenido a la página de inicio.</p>
            `;
            break;
    }

    contentDiv.innerHTML = content;
}
