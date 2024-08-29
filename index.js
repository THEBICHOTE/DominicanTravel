function showContent(section) {
  const contentDiv = document.getElementById("content");
  let content = "";

  switch (section) {
    case "inicio":
      content = `
                <h1>Bienvenido a la página de inicio</h1>
                <h2>¡Dominican Travel!</h2> 
                <video width="640" height="360" controls>
      <source src="/src/assets/video/Presentacion.mp4" type="video/mp4">
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
    case "lugares":
      content = `
                <h1>Lugares</h1>
                <p>Explora diferentes lugares interesantes.</p>
                <ul>
                    <li>Samana</li>
                    <p>Descripción: Una provincia ubicada en la península de Samaná, conocida por sus playas hermosas, el avistamiento de ballenas jorobadas y el Parque Nacional Los Haitises. La ciudad principal, Santa Bárbara de Samaná, es un destino turístico popular.</p>
                    <li>La Romana</li>
                    <p>Descripción: Esta ciudad es un importante centro turístico gracias a su proximidad a las playas de Bayahibe y a la famosa isla Saona. La Romana también alberga el complejo turístico Casa de Campo, conocido por su campo de golf y el anfiteatro Altos de Chavón.</p>
                    <li>Higuey</li>
                    <p>Descripción: Es la capital de la provincia La Altagracia y un importante centro religioso debido a la Basílica Catedral Nuestra Señora de la Altagracia, un lugar de peregrinación para muchos dominicanos. Además, Higüey es la puerta de entrada a los destinos turísticos de Punta Cana y Bávaro.</p>
                    <li>Puerto Plata</li>
                    <p>Descripción: Ubicada en la costa norte, Puerto Plata es conocida por sus playas, como Playa Dorada y Sosúa, y por la montaña Isabel de Torres, que ofrece vistas panorámicas y un teleférico. La ciudad es un destino clave para los cruceros y el turismo de aventura.</p>
                    <li>Peravia</li>
                    <p>Descripción: Provincia cuya capital es Baní, conocida como la "Capital del Mango". Es famosa por su rica producción agrícola y su tradición en la elaboración de dulces de leche. También es conocida por la playa de Salinas y las Dunas de Baní.</p>
                    <li>Azua</li>
                    <p>Descripción: Una provincia en el suroeste del país, famosa por su producción agrícola y sus playas vírgenes, como Playa Blanca. Azua también tiene importancia histórica por su papel en las batallas de independencia.</p>
                    <li>El Seibo</li>
                    <p>Descripción: Provincia situada en el este de la República Dominicana, conocida por su producción ganadera y agrícola. Es menos turística pero tiene un gran valor cultural, especialmente durante sus festividades tradicionales.</p>
                    <li>La Vega</li>
                    <p>Descripción: Ciudad ubicada en el centro del país, famosa por su Carnaval de La Vega, uno de los más tradicionales y vibrantes de la República Dominicana. También es conocida por su agricultura y su entorno montañoso.</p>
                    <li>Santo Domingo</li>
                    <p>Descripción: La capital de la República Dominicana y la ciudad más grande del país. Es una ciudad rica en historia, con la Zona Colonial declarada Patrimonio de la Humanidad por la UNESCO, y es un centro económico y cultural clave.</p>
                    <li>Santiago</li>
                    <p>Descripción: Santiago de los Caballeros es la segunda ciudad más grande del país y el centro de la región del Cibao. Es conocida por su papel en la industria del tabaco y la producción de ron, así como por el Monumento a los Héroes de la Restauración.</p>
                    <li>San Francisco de Macoris</li>
                    <p>Descripción: Ciudad situada en la región del Cibao, es un importante centro agrícola y económico. Es conocida por la producción de cacao y por su influencia en la cultura dominicana.</p>
                    <li>Barahona</li>
                    <p>Descripción: Provincia ubicada en el suroeste, conocida por sus paisajes naturales, como el Lago Enriquillo y la Bahía de las Águilas. Barahona es un destino ecoturístico emergente.</p>
                    <li>Bonao</li>
                    <p>Descripción: Ciudad en la provincia Monseñor Nouel, conocida por su belleza natural, incluyendo ríos y montañas. Bonao es famosa por su Carnaval y por ser un centro de producción agrícola.</p>
                    <li>Salcedo</li>
                    <p>Descripción: Ciudad conocida por ser la cuna de las Hermanas Mirabal, figuras clave en la lucha contra la dictadura de Trujillo. El Museo Hermanas Mirabal es un punto de interés histórico y cultural.</p>
                    <li>Hato Mayor</li>
                    <p>Descripción: Provincia en la región este del país, conocida por su producción agrícola y ganadera. Hato Mayor es famosa por sus cuevas y senderos naturales, ideales para el ecoturismo.</p>
                    <li>jarabacoa</li>
                    <p>Descripción: Conocida como la "Ciudad de la Eterna Primavera", Jarabacoa es un destino popular por su clima fresco y sus actividades de aventura, como el rafting, el senderismo y las cascadas.</p>
                    <li>Constanza</li>
                    <p>Descripción: Ubicada en un valle montañoso, es la ciudad más alta del Caribe y conocida por su clima fresco y su producción agrícola, especialmente de flores, fresas y vegetales. Constanza es un destino ideal para el ecoturismo.</p>
                    <li>San Pedro de Macoris</li>
                    <p>Descripción: Ciudad en la costa este, conocida históricamente por su industria azucarera. Es también la cuna de muchos jugadores de béisbol destacados en las Grandes Ligas de los Estados Unidos.</p>
                    <br>
                    <p>Estas ciudades y provincias ofrecen una rica diversidad cultural, histórica y natural, cada una con sus características únicas que reflejan la esencia de la República Dominicana.</p>
                </ul>
            `;
      break;
    case "platillos":
      content = `
                <h1>Platillos</h1>
                <p>Descubre deliciosos platillos.</p>
                <h2>Platillos populares:</h2>
                <ol>
                    <li>La Bandera Dominicana</li>
                    <p>El plato más representativo, compuesto de arroz blanco, habichuelas (frijoles) guisadas y carne (pollo, res o cerdo), acompañado de una ensalada.</p>
                    <img src="/src/assets/images/La Bandera Dominicana.jpeg" alt=" La Bandera Dominicana food Image">
                    <li>Mofongo</li>
                    <p>Puré de plátanos verdes fritos, mezclados con ajo, chicharrones de cerdo o camarones.</p>
                    <img src="/src/assets/images/mofogo dominicano.jpeg" alt="mofongo Image">
                    <li>Mangú</li>
                    <p>Puré de plátanos verdes hervidos, acompañado generalmente con cebollas rojas salteadas, queso frito, salami y huevo frito.</p>
                    <img src="/src/assets/images/los tres golpes 2.jpeg" alt=" los tres golpes Image">
                    <li>Sancocho</li>
                    <p>Un guiso espeso de carnes variadas (pollo, res, cerdo) con tubérculos como yuca, ñame y plátano, acompañado de arroz blanco y aguacate.</p>
                    <img src="/src/assets/images/sancocho dominicano .jpg" alt=" sancocho dominicano Image">
                    <li>Pica Pollo</li>
                    <p>Pollo frito sazonado con una mezcla de especias, comúnmente servido con tostones (plátanos verdes fritos).</p>
                    <img src="/src/assets/images/Picapollo.jpeg" alt="Picapollo Image">
                    <li>Pastelón de Plátano Maduro</li>
                    <p>Un pastel hecho de capas de plátano maduro frito, relleno de carne molida y queso.</p>
                    <img src="/src/assets/images/Pastelon Dominicano.jpeg" alt="Pastelon Dominicano Image">
                    <li>Chivo Guisado</li>
                    <p>Carne de chivo cocida a fuego lento con una mezcla de especias, acompañada de arroz y habichuelas.</p>
                    <img src="/src/assets/images/chivo Guisado.jpeg" alt=" chivo Guisado Image">
                    <li>Locrio</li>
                    <p>Un plato similar a la paella, hecho de arroz cocido con carne (pollo, cerdo o mariscos) y verduras.</p>
                    <img src="/src/assets/images/locrio.jpeg" alt=" locrio Image">
                    <li>Ensalada Rusa</li>
                    <p>Una ensalada de papas, zanahorias, guisantes y mayonesa, a veces se le añade manzana o remolacha.</p>
                    <img src="/src/assets/images/ensalada rusa.jpeg" alt="ensalada rusa Image">
                    <li>Yaniqueque</li>
                    <p>Tortillas fritas de harina de trigo, crujientes y doradas, perfectas como snack o acompañamiento.</p>
                    <img src="/src/assets/images/Yaniqueque dominicano.jpeg" alt="Yaniqueque dominicano Image">
                    <li>Morir Soñando</li>
                    <p>Una bebida refrescante hecha con jugo de naranja, leche y azúcar, ideal para los días calurosos.</p>
                    <img src="/src/assets/images/morisoñando.jpeg" alt="morisoñando Image">
                    <li>Arepa Dominicana</li>
                    <p>Una torta dulce hecha de harina de maíz, coco y leche, horneada hasta que quede dorada.</p>
                    <img src="/src/assets/images/Arepa de maíz.jpeg" alt="Arepa de maíz Image">
                    <li>Pernil</li>
                    <p> Pierna de cerdo asada, marinada con una mezcla de especias y ajo, típica en celebraciones y ocasiones especiales.</p>
                    <img src="/src/assets/images/pernil.jpeg" alt="pernil Image">
                    <li>Yaroa</li>
                    <p>platillo preparado con una base de papas fritas o puré de plátano maduro que lleva encima carne de pierna de cerdo desmenuzada, carne de pollo desmenuzada o molida o una combinación de ambas que se aderezan con ketchup y mayonesa y se «arropa» con varias lonjas de queso danés. </p>
                    <img src="/src/assets/images/Yaroa de Platano Maduro.jpeg" alt="Yaroa Image">
                    </ol>
                    <h1>Postres</h1>
                <p>Descubre deliciosos Postres.</p>
                <h2>Postres populares:</h2>
                   <ol>
                   <li>Habichuelas con Dulce</li>
                    <p>Un postre tradicional hecho de habichuelas rojas, leche, azúcar, coco, especias y pequeños trozos de batata o galletas.</p>
                    <img src="/src/assets/images/habichuelas con dulce.jpeg" alt="habichuelas con dulce Image">
                    <li>Dulce de coco tierno</li>
                     <p>Un postre hecho con coco rallado y leche, cocinado a fuego lento hasta alcanzar una textura cremosa</p>
                     <img src="/src/assets/images/Dulce de coco tierno.jpeg" alt="Dulce de coco tierno Image">
                    <li>Dulce de batata con coco</li>
                    <p>Hecho con batata (camote) y coco, este dulce es cremoso y dulce, perfecto para los amantes de la batata.</p>
                    <img src="/src/assets/images/Dulce de batata con coco.jpeg" alt="Dulce de batata con coco Image">
                    <li>Jalao</li>
                    <p> Un dulce tradicional hecho con coco rallado y miel de caña, muy popular en toda la región del Cibao.</p>
                    <img src="/src/assets/images/Jalao.jpeg" alt="Jalao Image">
                    <li>Mazamorra</li>
                    <p>Un postre hecho con maíz, leche y azúcar, típico en las zonas rurales y muy popular en Higüey.</p>
                    <img src="/src/assets/images/Mazamorra.jpeg" alt="Mazamorra Image">
                    <li>Dulce de leche</li>
                    <p>Una variante de este dulce, conocido por su textura suave y cremosa, es muy apreciada en la provincia del Seibo.</p>
                    <img src="/src/assets/images/Dulce de leche.jpeg" alt="Dulce de leche Image">
                    <li>Chaca</li>
                    <p>Un postre hecho a base de maíz cocido en leche con azúcar, similar a un pudín, y que es muy popular en toda la región Este especialmente en La Romana .</p>
                    <img src="/src/assets/images/Postre Chaca.jpeg" alt="Chaca Image">
                    <li>Arepa de maíz</li>
                    <p>Aunque es popular en todo el país, la arepa de maíz dulce, hecha con maíz, leche de coco, azúcar y pasas, es especialmente destacada en San Cristóbal.</p>
                    <img src="/src/assets/images/Arepa de maíz.jpeg" alt="Image">
                    <li>Dulce de piña con batata</li>
                    <p>Un postre que combina la acidez de la piña con la dulzura de la batata en una mezcla deliciosa.</p>
                    <img src="/src/assets/images/Dulce de piña con batata.jpg" alt="Dulce de piña con batata Image">
                    <li>Dulce de cajuil</li>
                    <p>Hecho con la fruta del cajuil (marañón o anacardo), cocida en almíbar, es un manjar en la región de Dajabon </p>
                    <img src="/src/assets/images/Dulce de cajuil.jpeg" alt="Dulce de cajuil Image">
                    <li>Dulce de mango</li>
                    <p>Aprovechando la abundancia de mangos en la región, este postre es una delicia para los amantes de las frutas tropicales.</p>
                    <img src="/src/assets/images/Dulce de mango.jpeg" alt="Dulce de mango Image">
                    </li>
                    
                </ol>
            `;
      break;
    case "atracciones":
      content = `
            <h1>Salto Bayaguana</h1>
            <img src="/src/assets/images/el salto.jpg" alt="el salto Image"> 
            <h1>Hotel Punta cana</h1>
            <img src="/src/assets/images/hotel punta cana .jpg" alt="Hotel punta cana Image">
            <h1>Muelle Turistico</h1>
            <img src="/src/assets/images/muelle Turistico.jpg" alt="Muelle Image">
            <h1>Bahia De Samana</h1>
            <img src="/src/assets/images/bahia samana .jpg" alt="Bahia Image">
            <h1>Casa de Campo</h1>
            <img src="/src/assets/images/Casa de Campo.jpg" alt=" Casa de campo Image">
            <h1>Dunas de Baní</h1>
            <img src="/src/assets/images/Dunas de Baní.jpg" alt="Dunas de Baní Image">
            <h1>Salto el Limon </h1>
            <img src="/src/assets/images/el salto.jpg" alt=" el salto Image">
            <h1>Monumento a Pedro Santana</h1>
            <img src="/src/assets/images/Monumento a Pedro Santana.jpg" alt="Monumento a Pedro Santana Image">
            <h1>Museo Casa Hermanas Mirabal</h1>
            <img src="/src/assets/images/Museo Casa Hermanas Mirabal.jpg" alt=Museo Casa Hermanas Mirabal Image">
            <h1>Altos de Chavon </h1>
            <img src="/src/assets/images/Altos de Chavon .jpg" alt="Altos de Chavon Image">
            <h1>Zona Colonial </h1>
            <img src="/src/assets/images/Zona Colonial .jpg" alt="Río Yuna en Bonao Image">`;  
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

}
