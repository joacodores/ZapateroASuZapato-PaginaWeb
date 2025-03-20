function ajustarContenido() {
    let modal_body_malbec = document.getElementById("modal-body-malbec");
    let modal_body_cabernet  = document.getElementById("modal-body-cabernet");
    let modal_body_blend = document.getElementById("modal-body-blend");
    let modal_body_torrontes  = document.getElementById("modal-body-torrontes");
    let anchoPantalla = window.innerWidth;

     if (anchoPantalla <= 650) {
        // Agregar contenido extra a caja1
        modal_body_malbec.innerHTML = `
            <div class="modal-description" id="modal-description">
            <li ><strong>Ubicación de los viñedos:</strong> Vista Flores, Valle de Uco. Mendoza, Argentina.</li>
            <li ><strong>Maridaje sugerido:</strong> Ideal para pastas con tuco o salsa boloñesa, pizzas y carnes.</li>
            <li ><strong>Notas de cata:</strong> <a> púrpura intenso. Su aroma remite a notas de frutos rojos y negros, como así también a especias.</a> En boca es frutado y complejo, de taninos redondos. Su
              final es persistente. Es un vino elegante y complejo.</li>
            <div class="modal-image">
              <img id="image-vino1" src="assets/vinos/png/malbec_rotado.png" alt="Vino Malbec">
            </div>
          </div>  
          <div class="modal-abajo" >
            <div class="modal-description-2" id="modal-description-2">
              <li ><strong>Suelo:</strong> Franco arenoso de origen aluvional, con gravas en  
              subsuelo y sedimentos calcáreos.</li>
              <li ><strong>Vinificación:</strong> Se realiza una maceración en frío a 7° C durante 
                5 días. Luego se procede a realizar la fermentación 
                alcohólica a temperatura controlada en tanques de acero 
                inoxidable. La fermentación maloláctica se realiza en 
                barricas de roble francés.</li>
              <li ><strong>Cosecha:</strong> Manual en pequeñas cajas plásticas de 12 kg.
                En busca de una excelente calidad de uva realizamos una 
                doble selección de racimos y bayas.</li>
              <li ><strong>Crianza:</strong> 100% del vino posee 12 meses en barricas de roble 
                  francés de 2° y 3° uso de 225 litros. Posteriormente reposa 
                  en botella durante 6 meses.</li>
              <li ><strong>Altura:</strong> 1000 m.s.n.m</li>
              <li ><strong>Alcohol:</strong> 14.8°</li>
              <li ><strong>Temperatura recomendada:</strong> 14-16°C</li>
              <li ><strong>Winemaker:</strong> José Mounier</li>
              <li ><strong>Fincas:</strong> Agustín  Vicente</li>
            </div>
            </div>

        `
        modal_body_blend.innerHTML = `
          <div class="modal-description" id="modal-description-blend">
            <li><strong>Composición:</strong> 39% Malbec – 50% Merlot – 8% Syrah – 3% Cab Franc.</li>
            <li><strong>Ubicación de los viñedos:</strong> Vista Flores, Valle de Uco. Mendoza, Argentina.</li>
            <li><strong>Maridaje sugerido:</strong>Se recomienda para acompañar quesos de pasta dura, guisados y carnes rojas</li>
            <div class="modal-image-blend">
                <img id="image-vino1" src="assets/vinos/png/blend_rotado.png" alt="Vino Cabernet">
              </div>
            <li><strong>Notas de cata:</strong>  De color rojo violáceo profundo e intenso. Su nariz es compleja, remite a notas
              de frutos rojos y negros, a su vez presenta aromas de pimiento. 
              En boca presenta taninos redondos y equilibrados. Es un vino elegante  y persistente</li>
            </div>  
            <div class="modal-abajo">
              <div class="modal-description-2" id="modal-description-2-blend">
                <li><strong>Suelo:</strong> Franco arenoso de origen aluvional, con gravas en  
                subsuelo y sedimentos calcáreos.</li>
                <li><strong>Vinificación:</strong> Se realiza una maceración en frío a 7° C durante 
                5 días. Luego se procede a realizar la fermentación 
                alcohólica a temperatura controlada en tanques de acero 
                inoxidable. La fermentación maloláctica se realiza en 
                barricas de roble francés.</li>
                <li><strong>Cosecha:</strong>Manual en pequeñas cajas plásticas de 12 kg. </li>
                <li><strong>Crianza:</strong> 100% del vino posee 12 meses en barricas de roble 
                  francés de 2° y 3° uso de 225 litros. Posteriormente reposa 
                  en botella durante 6 meses.</li>
                <li><strong>Altura:</strong> 1100 m.s.n.m</li>
                <li><strong>Alcohol:</strong> 14.8°</li>
                <li ><strong>Temperatura recomendada:</strong> 14-16°C</li>
                <li ><strong>Winemaker:</strong> José Mounier</li>
                <li ><strong>Fincas:</strong> Agustín  Vicente</li>
              </div>
              </div>
        `;
        modal_body_cabernet.innerHTML = `
            <div class="modal-description" id="modal-description-cabernet">
            <li  ><strong>Ubicación de los viñedos:</strong> Vista Flores, Valle de Uco. Mendoza, Argentina.</li>
            <li ><strong>Maridaje sugerido:</strong> Se recomienda para acompañar quesos de pasta dura, guisados y carnes rojas.</li>
            <li ><strong>Notas de cata:</strong> De color profundo con matices de color purpura, muy brillantes.
              Se aprecia gran tipicidad varietal y especias. Es un vino con centro de boca expresivo, gran equilibrio y complejidad
              proveniente de la guarda. Es profundo y elegante, por lo que persiste en boca, tiene un final largo.</li>
                <div class="modal-image-cabernet">
              <img id="image-vino1" src="assets/vinos/png/cabernet_rotado.png" alt="Vino Cabernet">
            </div>
          </div>  
          <div class="modal-abajo">
            <div class="modal-description-2" id="modal-description-2-cabernet">
              <li ><strong>Suelo:</strong> Franco arenoso de origen aluvional, con gravas en  
              subsuelo y sedimentos calcáreos.</li>
              <li ><strong>Vinificación:</strong> Se realiza una maceración en frío a 7° C durante 
                5 días. Luego se procede a realizar la fermentación 
                alcohólica a temperatura controlada en tanques de acero 
                inoxidable. La fermentación maloláctica se realiza en 
                barricas de roble francés.</li>
              <li ><strong>Cosecha:</strong>Manual en pequeñas cajas plásticas de 12 kg.
                En busca de una excelente calidad de uva realizamos una 
                doble selección de racimos y bayas.</li>
              <li ><strong>Crianza:</strong> 100% del vino posee 12 meses en barricas de roble 
                  francés de 2° y 3° uso de 225 litros. Posteriormente reposa 
                  en botella durante 6 meses.</li>
              <li ><strong>Altura:</strong> 1100 m.s.n.m</li>
              <li ><strong>Alcohol:</strong> 14.8°</li>
              <li ><strong>Temperatura recomendada:</strong> 14-16°C</li>
              <li ><strong>Winemaker:</strong> José Mounier</li>
              <li ><strong>Fincas:</strong> Agustín  Vicente</li>
            </div>
            </div>

              

        `;

        modal_body_torrontes.innerHTML = `
                  <div class="modal-description" id="modal-description-torrontes">
            <li><strong>Composición:</strong> 39% Malbec – 50% Merlot – 8% Syrah – 3% Cab Franc.</li>
            <li><strong>Ubicación de los viñedos:</strong> Chilecito, La Rioja. Argentina.</li>
            <li><strong>Maridaje sugerido:</strong>Aperitivo ideal. Agrada con platos especiados, como así también con comida
              asiática, peruana tahi y sushi.</li>
                <div class="modal-image-torrontes">
                <img id="image-vino1" src="assets/vinos/png/torrentes_rotado.png" alt="Vino Torrontes">
              </div>
            <li><strong>Notas de cata:</strong>  De color amarillo cristalino brillante, con leves reflejos verdosos. En nariz presenta
              notas florales y fruta citirica. En boca se percibe su frescura. Es un vino equilibrado,
              fresco y frutado, con excelente tipicidad varietal.</li>
            </div>  
            <div class="modal-abajo">
              <div class="modal-description-2" id="modal-description-2-torrontes">
                <li><strong>Suelo:</strong> Arenoso con mica</li>
                <li><strong>Vinificación:</strong> La cosecha es manual, luego se realiza una doble
                  selección de racimos y granos. El despalillado se realiza sin
                  estrujar los granos para favorecer la obtención de aromas
                  frutales. El prensado se realiza en prensa neumática con una
                  leve maceración de los granos. Este prensado es suave para obtener un mosto de gran calidad. 
                  La fermentación alcohólica se realiza a una temperatura controlada entre 13° y 15° en
                  tanques de acero inoxidables con movimiento de lías en forma diaria para obtener
                  un equilibrio en boca y preservar la fruta y su frescura. El vino obtenido permanece
                  un tiempo breve con las lías finas para luego ser filtrado y embotellado.</li>
                <li><strong>Cosecha:</strong>Manual en pequeñas cajas plásticas de 12 kg. </li>
                <li><strong>Crianza:</strong> Sin añejamiento en barrica</li>
                <li><strong>Altura:</strong> 1080 m.s.n.m</li>
                <li><strong>Alcohol:</strong> 12.5°</li>
                <li ><strong>Temperatura recomendada:</strong> 8-10°C</li>
                <li ><strong>Winemaker:</strong> José Mounier</li>
                <li ><strong>Fincas:</strong> Agustín  Vicente</li>
              </div>

            </div>
          
            `;
        
       
    } else {
        // Restaurar contenido original cuando la pantalla es más grande
        modal_body_malbec.innerHTML = `          <div class="modal-description" id="modal-description">
            
            <li ><strong>Ubicación de los viñedos:</strong> Vista Flores, Valle de Uco. Mendoza, Argentina.</li>
            <li ><strong>Maridaje sugerido:</strong> Ideal para pastas con tuco o salsa boloñesa, pizzas y carnes.</li>
            <li ><strong>Notas de cata:</strong> <a> púrpura intenso. Su aroma remite a notas de frutos rojos y negros, como así también a especias.</a> En boca es frutado y complejo, de taninos redondos. Su
              final es persistente. Es un vino elegante y complejo.</li>
          </div>  
          <div class="modal-abajo" >
            <div class="modal-description-2" id="modal-description-2">
              <li ><strong>Suelo:</strong> Franco arenoso de origen aluvional, con gravas en  
              subsuelo y sedimentos calcáreos.</li>
              <li ><strong>Vinificación:</strong> Se realiza una maceración en frío a 7° C durante 
                5 días. Luego se procede a realizar la fermentación 
                alcohólica a temperatura controlada en tanques de acero 
                inoxidable. La fermentación maloláctica se realiza en 
                barricas de roble francés.</li>
              <li ><strong>Cosecha:</strong> Manual en pequeñas cajas plásticas de 12 kg.
                En busca de una excelente calidad de uva realizamos una 
                doble selección de racimos y bayas.</li>
              <li ><strong>Crianza:</strong> 100% del vino posee 12 meses en barricas de roble 
                  francés de 2° y 3° uso de 225 litros. Posteriormente reposa 
                  en botella durante 6 meses.</li>
              <li ><strong>Altura:</strong> 1000 m.s.n.m</li>
              <li ><strong>Alcohol:</strong> 14.8°</li>
              <li ><strong>Temperatura recomendada:</strong> 14-16°C</li>
              <li ><strong>Winemaker:</strong> José Mounier</li>
              <li ><strong>Fincas:</strong> Agustín  Vicente</li>
            </div>
            <div class="modal-image">
              <img id="image-vino1" src="assets/vinos/png/malbec.png" alt="Vino Malbec">
            </div>
          </div>
        </div>
        `;
        modal_body_cabernet.innerHTML = `          <div class="modal-description" id="modal-description-cabernet">
            <li  ><strong>Ubicación de los viñedos:</strong> Vista Flores, Valle de Uco. Mendoza, Argentina.</li>
            <li ><strong>Maridaje sugerido:</strong> Se recomienda para acompañar quesos de pasta dura, guisados y carnes rojas.</li>
            <li ><strong>Notas de cata:</strong> De color profundo con matices de color purpura, muy brillantes.
              Se aprecia gran tipicidad varietal y especias. Es un vino con centro de boca expresivo, gran equilibrio y complejidad
              proveniente de la guarda. Es profundo y elegante, por lo que persiste en boca, tiene un final largo.</li>
          </div>  
          <div class="modal-abajo">
            <div class="modal-description-2" id="modal-description-2-cabernet">
              <li ><strong>Suelo:</strong> Franco arenoso de origen aluvional, con gravas en  
              subsuelo y sedimentos calcáreos.</li>
              <li ><strong>Vinificación:</strong> Se realiza una maceración en frío a 7° C durante 
                5 días. Luego se procede a realizar la fermentación 
                alcohólica a temperatura controlada en tanques de acero 
                inoxidable. La fermentación maloláctica se realiza en 
                barricas de roble francés.</li>
              <li ><strong>Cosecha:</strong>Manual en pequeñas cajas plásticas de 12 kg.
                En busca de una excelente calidad de uva realizamos una 
                doble selección de racimos y bayas.</li>
              <li ><strong>Crianza:</strong> 100% del vino posee 12 meses en barricas de roble 
                  francés de 2° y 3° uso de 225 litros. Posteriormente reposa 
                  en botella durante 6 meses.</li>
              <li ><strong>Altura:</strong> 1100 m.s.n.m</li>
              <li ><strong>Alcohol:</strong> 14.8°</li>
              <li ><strong>Temperatura recomendada:</strong> 14-16°C</li>
              <li ><strong>Winemaker:</strong> José Mounier</li>
              <li ><strong>Fincas:</strong> Agustín  Vicente</li>
            </div>
            <div class="modal-image-cabernet">
              <img id="image-vino1" src="assets/vinos/png/cabernet.png" alt="Vino Cabernet">
            </div>
          </div>
        </div>

        `;
        modal_body_blend.innerHTML = `<div class="modal-description" id="modal-description-blend">
            <li><strong>Composición:</strong> 39% Malbec – 50% Merlot – 8% Syrah – 3% Cab Franc.</li>
            <li><strong>Ubicación de los viñedos:</strong> Vista Flores, Valle de Uco. Mendoza, Argentina.</li>
            <li><strong>Maridaje sugerido:</strong>Se recomienda para acompañar quesos de pasta dura, guisados y carnes rojas</li>
            <li><strong>Notas de cata:</strong>  De color rojo violáceo profundo e intenso. Su nariz es compleja, remite a notas
              de frutos rojos y negros, a su vez presenta aromas de pimiento. 
              En boca presenta taninos redondos y equilibrados. Es un vino elegante  y persistente</li>
            </div>  
            <div class="modal-abajo">
              <div class="modal-description-2" id="modal-description-2-blend">
                <li><strong>Suelo:</strong> Franco arenoso de origen aluvional, con gravas en  
                subsuelo y sedimentos calcáreos.</li>
                <li><strong>Vinificación:</strong> Se realiza una maceración en frío a 7° C durante 
                5 días. Luego se procede a realizar la fermentación 
                alcohólica a temperatura controlada en tanques de acero 
                inoxidable. La fermentación maloláctica se realiza en 
                barricas de roble francés.</li>
                <li><strong>Cosecha:</strong>Manual en pequeñas cajas plásticas de 12 kg. </li>
                <li><strong>Crianza:</strong> 100% del vino posee 12 meses en barricas de roble 
                  francés de 2° y 3° uso de 225 litros. Posteriormente reposa 
                  en botella durante 6 meses.</li>
                <li><strong>Altura:</strong> 1100 m.s.n.m</li>
                <li><strong>Alcohol:</strong> 14.8°</li>
                <li ><strong>Temperatura recomendada:</strong> 14-16°C</li>
                <li ><strong>Winemaker:</strong> José Mounier</li>
                <li ><strong>Fincas:</strong> Agustín  Vicente</li>
              </div>
              <div class="modal-image-blend">
                <img id="image-vino1" src="assets/vinos/png/blend.png" alt="Vino Cabernet">
              </div>
            </div>
          </div>
        `;
        modal_body_torrontes.innerHTML = `
          <div class="modal-description" id="modal-description-torrontes">
            <li><strong>Composición:</strong> 39% Malbec – 50% Merlot – 8% Syrah – 3% Cab Franc.</li>
            <li><strong>Ubicación de los viñedos:</strong> Chilecito, La Rioja. Argentina.</li>
            <li><strong>Maridaje sugerido:</strong>Aperitivo ideal. Agrada con platos especiados, como así también con comida
              asiática, peruana tahi y sushi.</li>
            <li><strong>Notas de cata:</strong>  De color amarillo cristalino brillante, con leves reflejos verdosos. En nariz presenta
              notas florales y fruta citirica. En boca se percibe su frescura. Es un vino equilibrado,
              fresco y frutado, con excelente tipicidad varietal.</li>
            </div>  
            <div class="modal-abajo">
              <div class="modal-description-2" id="modal-description-2-torrontes">
                <li><strong>Suelo:</strong> Arenoso con mica</li>
                <li><strong>Vinificación:</strong> La cosecha es manual, luego se realiza una doble
                  selección de racimos y granos. El despalillado se realiza sin
                  estrujar los granos para favorecer la obtención de aromas
                  frutales. El prensado se realiza en prensa neumática con una
                  leve maceración de los granos. Este prensado es suave para obtener un mosto de gran calidad. 
                  La fermentación alcohólica se realiza a una temperatura controlada entre 13° y 15° en
                  tanques de acero inoxidables con movimiento de lías en forma diaria para obtener
                  un equilibrio en boca y preservar la fruta y su frescura. El vino obtenido permanece
                  un tiempo breve con las lías finas para luego ser filtrado y embotellado.</li>
                <li><strong>Cosecha:</strong>Manual en pequeñas cajas plásticas de 12 kg. </li>
                <li><strong>Crianza:</strong> Sin añejamiento en barrica</li>
                <li><strong>Altura:</strong> 1080 m.s.n.m</li>
                <li><strong>Alcohol:</strong> 12.5°</li>
                <li ><strong>Temperatura recomendada:</strong> 8-10°C</li>
                <li ><strong>Winemaker:</strong> José Mounier</li>
                <li ><strong>Fincas:</strong> Agustín  Vicente</li>
              </div>
              <div class="modal-image-torrontes">
                <img id="image-vino1" src="assets/vinos/png/torrentes.png" alt="Vino Torrontes">
              </div>
            </div>
          </div>
        `;

    }
}
// Ejecutar la función al cargar la página y cuando se cambie el tamaño de la ventana
window.addEventListener("load", ajustarContenido);
window.addEventListener("resize", ajustarContenido);