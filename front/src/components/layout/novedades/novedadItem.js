import React from 'react';

const NovedadItem = (props) => {
  const { title, subtitle, imagen, body } = props;

  return (
    <div className="novedades">
      <h1>{title}</h1>   {/* Cambié 'nombre' por 'title' */}
      <h2>{subtitle}</h2> {/* Cambié 'descripcion' por 'subtitle' */}
      <img src={imagen} alt={title} /> {/* Es recomendable agregar un 'alt' para accesibilidad */}
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <hr />
    </div>
  );
}

export default NovedadItem;
