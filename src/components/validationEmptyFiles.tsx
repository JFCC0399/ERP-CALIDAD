export const getIncompleteFields = (data: FormData): string[] => {
  // Filtra las claves cuyo valor sea `undefined`, vacío, o no válido, excluyendo las de imágenes y opciones
  const excludedFields = [
    'imagecumpletermografo', 'imageCajaCerrada', 'imageCargaBuenEstado',
    'imagestarimasDanadas', 'imagecumpletermografo2', 'imageLonaBuenEstado',
    'imageSeguridadCarga', 'imagescajasIdentificadas', 'imageLimpio',
    'imageLibreFauna', 'imageSellado', 'imagesdanadasManiobra'
  ]

  return Object.keys(data).filter((key) => {
    // Ignorar claves que estén en el array `excludedFields`
    if (excludedFields.includes(key)) return false

    const value = data[key]
    return value === undefined || value === null || value === '' ||
        (Array.isArray(value) && value.length === 0)
  })
}
