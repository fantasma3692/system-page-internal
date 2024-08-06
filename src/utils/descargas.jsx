export function downloadSVG(url) {
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      const fileNameWithExtension = url.substring(url.lastIndexOf("/") + 1);
      const fileName = fileNameWithExtension.split(".")[0];
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch((error) => console.error("Error al descargar SVG:", error));
}

export function extractSVGAsCSS(url) {
  // Cargar el archivo SVG
  
 return fetch(url)
    .then((response) => response.text())
    .then((svgData) => {
      // Convertir el SVG en una cadena base64
      const base64Data = btoa(svgData);
      // Formatear la cadena base64 para usarla en CSS como una URL de imagen
      const css = `
            background-image: url('data:image/svg+xml;base64,${base64Data}');
            background-size: contain; /* Ajusta el tamaño de la imagen según sea necesario */
            background-repeat: no-repeat;
        `;
      
      return css;

      // Aquí puedes hacer lo que quieras con la cadena de texto CSS, como aplicarla al DOM o copiarla al portapapeles
    })
    .catch((error) =>
      console.error("Error al cargar y convertir el SVG:", error)
    );
  
}
