function showContent(section) {
    const contentDiv = document.getElementById('content');
    let content = '';

    switch (section) {
        case 'inicio':
            content = `
                <h1>Bienvenido a la página de inicio</h1>
                <h2>¡Dominican Travel!</h2> 
                <video width="640" height="360" controls>
      <source src="presentacion.mp4" type="video/mp4">
      <source src="presentacion.ogg" type="video/ogg">
    Your browser does not support the video tag.
    </video>
    <br>
              <h2>  <strong>Sumérgete en la belleza y la diversidad de nuestro paraíso caribeño.</h2><br> Desde sus playas de arena blanca y aguas turquesas hasta sus vibrantes ciudades llenas de cultura y tradición, la República Dominicana es un destino que enamora a todos sus visitantes.</p>
                <br>
                 <strong>Explora nuestras guías de viaje, descubre los mejores destinos turísticos, infórmate sobre nuestra rica historia y cultura, y disfruta de nuestras recomendaciones para aprovechar al máximo tu visita. Ya sea que busques aventuras al aire libre, una escapada relajante o sumergirte en nuestra vibrante vida nocturna, aquí encontrarás todo lo que necesitas para planificar tu viaje ideal.</p>
                 <br>
                 <strong>¡Bienvenido y disfruta de tu visita!</p>
                `;
            break;
        case'lugares':
            content = `
                <h1>Lugares</h1>
                <p>Explora diferentes lugares interesantes.</p>
                <ul>
                    <li>Samana</li>
                    <li>La Romana</li>
                    <li>Higuey</li>
                    <li>Puerto Plata</li>
                    <li>Peravia</li>
                    <li>Azua</li>
                    <li>El Seibo</li>
                    <li>La Vega</li>
                    <li>Santo Domingo</li>
                    <li>Santiago</li>
                    <li>San Francisco de Macoris</li>
                    <li>Barahona</li>
                    <li>Bonao</li>
                    <li>Salcedo</li>
                    <li>Hato Mayor</li>
                    <li>jarabacoa</li>
                    <li>Constanza</li>
                    <li>San Pedro de Macoris</li>
                </ul>
            `;
            break;
        case 'platillos':
            content = `
                <h1>Platillos</h1>
                <p>Descubre deliciosos platillos.</p>
                <h2>Platillos populares:</h2>
                <ol>
                    <li>La Bandera Dominicana</li>
                    <p>El plato más representativo, compuesto de arroz blanco, habichuelas (frijoles) guisadas y carne (pollo, res o cerdo), acompañado de una ensalada.</p>
                    <img src="img/La Bandera Dominicana.jpeg" alt=" La Bandera Dominicana food Image">
                    <li>Mofongo</li>
                    <p>Puré de plátanos verdes fritos, mezclados con ajo, chicharrones de cerdo o camarones.</p>
                    <img src="img/mofogo dominicano.jpeg" alt="mofongo Image">
                    <li>Mangú</li>
                    <p>Puré de plátanos verdes hervidos, acompañado generalmente con cebollas rojas salteadas, queso frito, salami y huevo frito.</p>
                    <img src="img/los tres golpes 2.jpeg" alt=" los tres golpes Image">
                    <li>Sancocho</li>
                    <p>Un guiso espeso de carnes variadas (pollo, res, cerdo) con tubérculos como yuca, ñame y plátano, acompañado de arroz blanco y aguacate.</p>
                    <img src="img/sancocho dominicano .jpg" alt=" sancocho dominicano Image">
                    <li>Pica Pollo</li>
                    <p>Pollo frito sazonado con una mezcla de especias, comúnmente servido con tostones (plátanos verdes fritos).</p>
                    <img src="img/Picapollo.jpeg" alt="Picapollo Image">
                    <li>Pastelón de Plátano Maduro</li>
                    <p>Un pastel hecho de capas de plátano maduro frito, relleno de carne molida y queso.</p>
                    <img src="img/Pastelon Dominicano.jpeg" alt="Pastelon Dominicano Image">
                    <li>Chivo Guisado</li>
                    <p>Carne de chivo cocida a fuego lento con una mezcla de especias, acompañada de arroz y habichuelas.</p>
                    <img src="img/chivo Guisado.jpeg" alt=" chivo Guisado Image">
                    <li>Locrio</li>
                    <p>Un plato similar a la paella, hecho de arroz cocido con carne (pollo, cerdo o mariscos) y verduras.</p>
                    <img src="img/locrio.jpeg" alt=" locrio Image">
                    <li>Ensalada Rusa</li>
                    <p>Una ensalada de papas, zanahorias, guisantes y mayonesa, a veces se le añade manzana o remolacha.</p>
                    <img src="img/ensalada rusa.jpeg" alt="ensalada rusa Image">
                    <li>Yaniqueque</li>
                    <p>Tortillas fritas de harina de trigo, crujientes y doradas, perfectas como snack o acompañamiento.</p>
                    <img src="img/Yaniqueque dominicano.jpeg" alt="Yaniqueque dominicano Image">
                    <li>Morir Soñando</li>
                    <p>Una bebida refrescante hecha con jugo de naranja, leche y azúcar, ideal para los días calurosos.</p>
                    <img src="img/morisoñando.jpeg" alt="morisoñando Image">
                    <li>Arepa Dominicana</li>
                    <p>Una torta dulce hecha de harina de maíz, coco y leche, horneada hasta que quede dorada.</p>
                    <img src="img/Arepa de maíz.jpeg" alt="Arepa de maíz Image">
                    <li>Pernil</li>
                    <p> Pierna de cerdo asada, marinada con una mezcla de especias y ajo, típica en celebraciones y ocasiones especiales.</p>
                    <img src="img/pernil.jpeg" alt="pernil Image">
                    <li>Yaroa</li>
                    <p>platillo preparado con una base de papas fritas o puré de plátano maduro que lleva encima carne de pierna de cerdo desmenuzada, carne de pollo desmenuzada o molida o una combinación de ambas que se aderezan con ketchup y mayonesa y se «arropa» con varias lonjas de queso danés. </p>
                    <img src="img/Yaroa de Platano Maduro.jpeg" alt="Yaroa Image">
                    </ol>
                    <h1>Postres</h1>
                <p>Descubre deliciosos Postres.</p>
                <h2>Postres populares:</h2>
                   <ol>
                   <li>Habichuelas con Dulce</li>
                    <p>Un postre tradicional hecho de habichuelas rojas, leche, azúcar, coco, especias y pequeños trozos de batata o galletas.</p>
                    <img src="img/habichuelas con dulce.jpeg" alt="habichuelas con dulce Image">
                    <li>Dulce de coco tierno</li>
                     <p>Un postre hecho con coco rallado y leche, cocinado a fuego lento hasta alcanzar una textura cremosa</p>
                     <img src="img/Dulce de coco tierno.jpeg" alt="Dulce de coco tierno Image">
                    <li>Dulce de batata con coco</li>
                    <p>Hecho con batata (camote) y coco, este dulce es cremoso y dulce, perfecto para los amantes de la batata.</p>
                    <img src="img/Dulce de batata con coco.jpeg" alt="Dulce de batata con coco Image">
                    <li>Jalao</li>
                    <p> Un dulce tradicional hecho con coco rallado y miel de caña, muy popular en toda la región del Cibao.</p>
                    <img src="img/Jalao.jpeg" alt="Jalao Image">
                    <li>Mazamorra</li>
                    <p>Un postre hecho con maíz, leche y azúcar, típico en las zonas rurales y muy popular en Higüey.</p>
                    <img src="img/Mazamorra.jpeg" alt="Mazamorra Image">
                    <li>Dulce de leche</li>
                    <p>Una variante de este dulce, conocido por su textura suave y cremosa, es muy apreciada en la provincia del Seibo.</p>
                    <img src="img/Dulce de leche.jpeg" alt="Dulce de leche Image">
                    <li>Chaca</li>
                    <p>Un postre hecho a base de maíz cocido en leche con azúcar, similar a un pudín, y que es muy popular en toda la región Este especialmente en La Romana .</p>
                    <img src="img/Postre Chaca.jpeg" alt="Chaca Image">
                    <li>Arepa de maíz</li>
                    <p>Aunque es popular en todo el país, la arepa de maíz dulce, hecha con maíz, leche de coco, azúcar y pasas, es especialmente destacada en San Cristóbal.</p>
                    <img src="img/Arepa de maíz.jpeg" alt="Image">
                    <li>Dulce de piña con batata</li>
                    <p>Un postre que combina la acidez de la piña con la dulzura de la batata en una mezcla deliciosa.</p>
                    <img src="img/Dulce de piña con batata.jpg" alt="Dulce de piña con batata Image">
                    <li>Dulce de cajuil</li>
                    <p>Hecho con la fruta del cajuil (marañón o anacardo), cocida en almíbar, es un manjar en la región de Dajabon </p>
                    <img src="img/Dulce de cajuil.jpeg" alt="Dulce de cajuil Image">
                     <li>Dulce de mango</li>
                    <p>Aprovechando la abundancia de mangos en la región, este postre es una delicia para los amantes de las frutas tropicales.</p>
                    <img src="img/Dulce de mango.jpeg" alt="Dulce de mango Image">
                    </li>
                    
                </ol>
            `;
            break;
        case 'atracciones':
            content = `
            <h1>Salto Bayaguana</h1>
            <img src="img/el salto.jpg" alt="el salto Image"> 
            <h1>Hotel Punta cana</h1>
            <img src="img/hotel punta cana .jpg" alt="Hotel punta cana Image"> `;
            break;
            case 'Playa Turistica':
            content = `
            <h1>Playa Turistica</h1>
            <img src="img/playa.jpeg" alt="Playa Image"> 
            `;
            break;
            case 'Muelle Turistico':
            content = `
            <h1>Muelle Turistico</h1>
            <img src="img/muelle.jpg" alt="Muelle Image">
            `;
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
