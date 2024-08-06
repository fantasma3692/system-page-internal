
import React, { Suspense } from 'react';

export const DynamicComponents = ({item}) => {
  // Define una función para la carga dinámica del componente desde una URL
  // const LazyComponent = React.lazy(() => import(`https://whwourhkfiihlrdgaxhn.supabase.co/storage/v1/object/public/archivos/componentes/Test1.jsx?t=2024-05-01T18%3A44%3A25.795Z`).catch(() => ({})));
  const DynamicComponent = eval(`(${item.componente})`);

  return (
    <div >
     <DynamicComponent />
    </div>
  );
}


