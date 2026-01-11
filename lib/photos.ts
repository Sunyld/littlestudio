// Mapeamento de serviços para pastas de fotos
export const serviceFolders = {
  'Casamento': 'Casamento',
  'Noivado': 'Noivado',
  'Gestante': 'Gestante',
  'Ensaios Fotográficos': 'Ensaios Fotográficos',
  'Ensaios Fotográficos ar lento': 'Ensaios Fotográficos ar lento',
};

// Lista de fotos por serviço - será preenchido dinamicamente
export const getPhotosByService = () => {
  const basePath = '/fotos';
  return {
    'Casamento': [
      `${basePath}/Casamento/Litlle Studio🎉🥂 Gilda & Assane🎆 (13).jpg`,
      `${basePath}/Casamento/Litlle Studio🎉🥂 Gilda & Assane🎆 (16).jpg`,
      `${basePath}/Casamento/Litlle Studio🎉🥂 Gilda & Assane🎆 (2).jpg`,
      `${basePath}/Casamento/Litlle Studio🎉🥂 Gilda & Assane🎆 (25).jpg`,
      `${basePath}/Casamento/Litlle Studio🎉🥂 Gilda & Assane🎆 (3).jpg`,
      `${basePath}/Casamento/Litlle Studio🎉🥂 Gilda & Assane🎆 (33).jpg`,
      `${basePath}/Casamento/Litlle Studio🎉🥂 Gilda & Assane🎆 (37).jpg`,
      `${basePath}/Casamento/Litlle Studio🎉🥂 Gilda & Assane🎆 (46).jpg`,
      `${basePath}/Casamento/Litlle Studio🎉🥂 Gilda & Assane🎆 (5).jpg`,
      `${basePath}/Casamento/Litlle Studio🎉🥂 Gilda & Assane🎆 (50).jpg`,
      `${basePath}/Casamento/Litlle Studio🎉🥂 Gilda & Assane🎆 (52).jpg`,
      `${basePath}/Casamento/Litlle Studio🎉🥂 Gilda & Assane🎆 (53).jpg`,
      `${basePath}/Casamento/Litlle Studio🎉🥂 Gilda & Assane🎆 (57).jpg`,
      `${basePath}/Casamento/Litlle Studio🎉🥂 Gilda & Assane🎆 (6).jpg`,
      `${basePath}/Casamento/Litlle Studio🎉🥂 Gilda & Assane🎆 (60).jpg`,
      `${basePath}/Casamento/Litlle Studio🎉🥂 Gilda & Assane🎆 (65).jpg`,
      `${basePath}/Casamento/Litlle Studio🎉🥂 Gilda & Assane🎆 (76).jpg`,
      `${basePath}/Casamento/Litlle Studio🎉🥂 Gilda & Assane🎆 (77).jpg`,
      `${basePath}/Casamento/Litlle Studio🎉🥂 Gilda & Assane🎆 (8).jpg`,
      `${basePath}/Casamento/Litlle Studio🎉🥂 Sandra & Clautino 🎆 (1).jpg`,
      `${basePath}/Casamento/Litlle Studio🎉🥂 Sandra & Clautino 🎆 (215).jpg`,
      `${basePath}/Casamento/Litlle Studio🎉🥂 Sandra & Clautino 🎆 (216).jpg`,
      `${basePath}/Casamento/Litlle Studio🎉🥂 Sandra & Clautino 🎆 (5).jpg`,
      `${basePath}/Casamento/Litlle Studio🎉🥂 Sandra & Clautino 🎆 (6).jpg`,
      `${basePath}/Casamento/Litlle Studio🎉🥂 Sandra & Clautino 🎆 (7).jpg`,
    ],
    'Noivado': [
      `${basePath}/Noivado/Litlle Studio🎉🥂 Sandra & Clautino 🎆 (86).jpg`,
      `${basePath}/Noivado/Litlle Studio🎉🥂 Sandra & Clautino 🎆 (1).jpg`,
      `${basePath}/Noivado/Litlle Studio🎉🥂 Sandra & Clautino 🎆 (49).jpg`,
      `${basePath}/Noivado/Litlle Studio🎉🥂 Sandra & Clautino 🎆 (78).jpg`,
      `${basePath}/Noivado/Litlle Studio🎉🥂 Sandra & Clautino 🎆 (82).jpg`,
      `${basePath}/Noivado/Litlle Studio🎉🥂 Sandra & Clautino 🎆 (93).jpg`,
    ],
    'Gestante': [
      `${basePath}/Gestante/IMG_1922-Recuperado.jpg`,
      `${basePath}/Gestante/IMG_195.jpg`,
      `${basePath}/Gestante/IMG_1978.jpg`,
      `${basePath}/Gestante/IMG_1979.jpg`,
      `${basePath}/Gestante/IMG_1982.jpg`,
      `${basePath}/Gestante/IMG_4202.jpg`,
      `${basePath}/Gestante/IMG_4207.jpg`,
      `${basePath}/Gestante/IMG_422.jpg`,
      `${basePath}/Gestante/IMG_4220.jpg`,
    ],
    'Ensaios Fotográficos': [
      `${basePath}/Ensaios Fotográficos/IMG_0624.jpg`,
      `${basePath}/Ensaios Fotográficos/IMG_1274.jpg`,
      `${basePath}/Ensaios Fotográficos/IMG_1300.jpg`,
      `${basePath}/Ensaios Fotográficos/IMG_1308.jpg`,
      `${basePath}/Ensaios Fotográficos/IMG_1315.jpg`,
      `${basePath}/Ensaios Fotográficos/IMG_183.jpg`,
      `${basePath}/Ensaios Fotográficos/IMG_2303.jpg`,
      `${basePath}/Ensaios Fotográficos/IMG_2311.jpg`,
      `${basePath}/Ensaios Fotográficos/IMG_2318.jpg`,
      `${basePath}/Ensaios Fotográficos/IMG_4528-Recuperado.jpg`,
      `${basePath}/Ensaios Fotográficos/IMG_4529.png`,
      `${basePath}/Ensaios Fotográficos/IMG_4545.jpg`,
      `${basePath}/Ensaios Fotográficos/IMG_4586.jpg`,
      `${basePath}/Ensaios Fotográficos/IMG_6787.jpg`,
      `${basePath}/Ensaios Fotográficos/IMG_6791.jpg`,
      `${basePath}/Ensaios Fotográficos/IMG_6813.jpg`,
      `${basePath}/Ensaios Fotográficos/IMG_6826.jpg`,
      `${basePath}/Ensaios Fotográficos/IMG_6836.jpg`,
    ],
    'Ensaios Fotográficos ar lento': [
      `${basePath}/Ensaios Fotográficos ar lento/IMG_4818.jpg`,
      `${basePath}/Ensaios Fotográficos ar lento/IMG_4819.jpg`,
      `${basePath}/Ensaios Fotográficos ar lento/IMG_4820.jpg`,
      `${basePath}/Ensaios Fotográficos ar lento/IMG_4831.jpg`,
      `${basePath}/Ensaios Fotográficos ar lento/IMG_4870.jpg`,
      `${basePath}/Ensaios Fotográficos ar lento/IMG_4876-Recuperado.jpg`,
      `${basePath}/Ensaios Fotográficos ar lento/Little Studio 3.jpg`,
      `${basePath}/Ensaios Fotográficos ar lento/Little Studio 4.jpg`,
      `${basePath}/Ensaios Fotográficos ar lento/Little Studio 5.jpg`,
      `${basePath}/Ensaios Fotográficos ar lento/Little Studio 6.jpg`,
      `${basePath}/Ensaios Fotográficos ar lento/Little Studio 7.jpg`,
    ],
  };
};

// Função para codificar caminhos de imagem corretamente
// Next.js Image precisa de URLs codificadas para caracteres especiais
export const encodeImagePath = (path: string): string => {
  // Separar o caminho em segmentos e codificar cada parte
  const segments = path.split('/').filter(Boolean);
  // Reconstruir o caminho codificando cada segmento
  const encoded = segments.map(segment => encodeURIComponent(segment)).join('/');
  return `/${encoded}`;
};

export const getServiceImage = (serviceName: string): string => {
  const photos = getPhotosByService();
  const servicePhotos = photos[serviceName as keyof typeof photos];
  if (servicePhotos && servicePhotos.length > 0) {
    // Retorna a primeira imagem como imagem principal, codificando o caminho
    return encodeImagePath(servicePhotos[0]);
  }
  return '';
};

export const getServicePhotos = (serviceName: string): string[] => {
  const photos = getPhotosByService();
  const servicePhotos = photos[serviceName as keyof typeof photos];
  if (servicePhotos && servicePhotos.length > 0) {
    // Retorna todas as fotos do serviço, codificando os caminhos
    return servicePhotos.map(photo => encodeImagePath(photo));
  }
  return [];
};

export const getAllPortfolioItems = () => {
  const photos = getPhotosByService();
  const items: Array<{ id: string; title: string; image_url: string; category: string }> = [];
  
  Object.entries(photos).forEach(([category, imageUrls]) => {
    imageUrls.forEach((url, index) => {
      items.push({
        id: `${category}-${index}`,
        title: `${category} ${index + 1}`,
        image_url: encodeImagePath(url),
        category: category,
      });
    });
  });
  
  return items;
};
