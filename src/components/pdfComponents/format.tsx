export const formInitial = {
  fecha: '',
  inicioVerificacion: '',
  terminoVerificacion: '',
  oc: '',
  proveedor: '',
  origen: '',
  factura: '',
  especie: '',
  variedades: '',
  frioDescarga: '',
  cajasRecibidas: '',
  lineaTransportista: '',
  numeroContenedor: '',
  placasCamion: '',
  placasCaja: '',
  chofer: '',
  tempSetPoint: '',
  observacionesSetPoint: '',
  tempPantalla: '',
  observacionesPantalla: '',
  tempOrigen: '',
  tempDestino: '',
  limpio: '',
  cajaCerrada: '',
  lona: '',
  fauna: '',
  carga: '',
  seguridadCarga: '',
  sellado: '',
  resultadosInv: '',
  tempAPuerta: '',
  tempAMedio: '',
  tempAFondo: '',
  tempMPuerta: '',
  tempMMedio: '',
  tempMFondo: '',
  tempBPuerta: '',
  tempBMedio: '',
  tempBFondo: '',
  tempMax: '',
  tempMin: '',
  tempIdeal: '',
  nombreInspector: '',
  nombreChofer: '',
  option: '',
  option2: '',
  optionLimpio: '',
  optionCaja: '',
  optionLona: '',
  optionLibre: '',
  optionCarga: '',
  optionSeguridad: '',
  optionSellado: '',
  optiontarimasDanadas: '',
  optioncajasIdentificadas: '',
  optiondanadasManiobra: '',
  imagecumpletermografo: [],
  imagecumpletermografo2: [],
  imageLimpio: [],
  imageCajaCerrada: [],
  imageLonaBuenEstado: [],
  imageLibreFauna: [],
  imageCargaBuenEstado: [],
  imageSeguridadCarga: [],
  imageSellado: [],
  imagestarimasDanadas: [],
  imagescajasIdentificadas: [],
  imagesdanadasManiobra: [],
  tarimasDanadas: '',
  cajasIdentificadas: '',
  danadasManiobra: ''
}

export interface FormData {
  [key: string]: string | number | string[] | undefined
  fecha?: string
  inicioVerificacion?: string
  terminoVerificacion?: string
  oc?: string
  proveedor?: string
  origen?: string
  factura?: string
  especie?: string
  variedades?: string
  frioDescarga?: string
  cajasRecibidas?: string
  lineaTransportista?: string
  numeroContenedor?: string
  placasCamion?: string
  placasCaja?: string
  chofer?: string
  tempSetPoint?: string
  observacionesSetPoint?: string
  tempPantalla?: string
  observacionesPantalla?: string
  option?: string
  option2?: string
  tempOrigen?: string
  tempDestino?: string
  optionLimpio?: string
  limpio?: string
  optionCaja?: string
  cajaCerrada?: string
  optionLona?: string
  lona?: string
  optionLibre?: string
  fauna?: string
  optionCarga?: string
  carga?: string
  optionSeguridad?: string
  seguridadCarga?: string
  optionSellado?: string
  sellado?: string
  tarimasDanadas?: string
  cajasIdentificadas?: string
  danadasManiobra?: string
  tempAPuerta?: string
  tempMPuerta?: string
  tempBPuerta?: string
  tempAMedio?: string
  tempMMedio?: string
  tempBMedio?: string
  tempAFondo?: string
  tempMFondo?: string
  tempBFondo?: string
  tempMin?: string
  tempMax?: string
  tempIdeal?: string
  resultadosInv?: string
  nombreInspector?: string
  nombreChofer?: string
  imageLimpio?: string[]
  imageLibreFauna?: string[]
  imageCajaCerrada?: string[]
  imageLonaBuenEstado?: string[]
  imageCargaBuenEstado?: string[]
  imageSeguridadCarga?: string[]
  imageSellado?: string[]
  imagescajasIdentificadas?: string[]
  imagestarimasDanadas?: string[]
  imagesdanadasManiobra?: string[]
  imagecumpletermografo?: string[]
  imagecumpletermografo2?: string[]
  optiontarimasDanadas?: string
  optioncajasIdentificadas?: string
  optiondanadasManiobra?: string
}

export interface Acta {
  fecha: string
  start_verification: string
  end_verification: string
  oc: string
  provider: string
  origin: string
  bill: string
  varieties: string
  cold_disc: string
  boxes_received: string
  carrier_line: string
  num_cont: string
  truck_plt: string
  box_plt: string
  driver: string
  setpoint_temp: string
  setpoint_obs: string
  screen_temp: string
  screen_obs: string
  therm_org: string
  therm_dst: string
  clean_free: string
  close: string
  tarp_state: string
  pest_free: string
  load_state: string
  load_sec: string
  seal: string
  box_id: string
  invest_res: string
  tempa_door: string
  tempa_mid: string
  tempa_back: string
  tempm_door: string
  tempm_mid: string
  tempm_back: string
  tempb_door: string
  tempb_mid: string
  tempb_back: string
  temp_max: string
  temp_min: string
  temp_ideal: string
  insp_name: string
  clean_obs: string
  close_obs: string
  tarp_obs: string
  pest_obs: string
  load_obs: string
  sec_obs: string
  seal_obs: string
  pallet_dmg: string
  box_num: string
  dmg_num: string
  especie: string
}
