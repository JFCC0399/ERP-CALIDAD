import { supabase } from './supabase'
import Swal from 'sweetalert2'
import { getIncompleteFields } from '@/components/validationEmptyFiles'

export const query = async () => {
  try {
    const { data, error } = await supabase.from('ActaDescarga').select('*')
    if (error != null) {
      console.log('hubo un error', error)
    }
    if ((data != null) && data.length > 0) {
      console.log(data)
    } else {
      console.log(error)
    }
  } catch (e) {
    console.log('el error es:', e)
  }
}

export const verificationOC = async (oc) => {
  const { data, error } = await supabase.from('ActaDescarga').select('*').eq('oc', oc)

  if (error != null) {
    console.error('Error al verificar la orden de compra:', error)
    return false
  }

  if (data?.length > 0 && data != null) {
    Swal.fire({
      icon: 'warning',
      title: 'Elemento existente',
      text: 'La orden de compra ya fue registrada con este ID.',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#9A3424',
      iconColor: '#9A3424'
    })
    return false
  }

  return true
}

export const insert = async (formData: any) => {
  try {

    const incompleteFiles=getIncompleteFields(formData)
    console.log(incompleteFiles.length)

    const state = await verificationOC(formData.oc)
    

    if (state && incompleteFiles.length<=0) {
      const { data, error } = await supabase
        .from('ActaDescarga')
        .insert([{
          fecha: formData.fecha,
          start_verification: formData.inicioVerificacion,
          end_verification: formData.terminoVerificacion,
          oc: formData.oc,
          provider: formData.proveedor,
          origin: formData.origen,
          bill: formData.factura,
          specie: formData.especie,
          boxes_received: formData.cajasRecibidas,
          varieties: formData.especie,
          cold_disc: formData.frioDescarga,
          carrier_line: formData.lineaTransportista,
          num_cont: formData.numeroContenedor,
          truck_plt: formData.placasCamion,
          box_plt: formData.placasCaja,
          driver: formData.chofer,
          setpoint_temp: formData.tempSetPoint,
          screen_temp: formData.tempPantalla,
          setpoint_obs: formData.observacionesSetPoint,
          screen_obs: formData.observacionesPantalla,
          therm_dst: formData.tempDestino,
          therm_org_obs: formData.tempOrigen,
          therm_dst_obs: formData.tempDestino,
          clean_free: formData.limpio,
          clean_obs: formData.observacionesSetPoint,
          close: formData.cajaCerrada,
          close_obs: formData.observacionesSetPoint,
          box_state: formData.lona,
          box_obs: formData.observacionesSetPoint,
          tarp_state: formData.fauna,
          tarp_obs: formData.observacionesSetPoint,
          pest_free: formData.carga,
          pest_obs: formData.observacionesSetPoint,
          load_state: formData.seguridadCarga,
          load_obs: formData.observacionesSetPoint,
          load_sec: formData.seguridadCarga,
          sec_obs: formData.observacionesSetPoint,
          seal: formData.sellado,
          seal_obs: formData.observacionesSetPoint,
          pallet_dmg: formData.numeroSerie,
          pallet_num: formData.resultadosInv,
          box_id: formData.numeroSerie,
          box_num: formData.resultadosInv,
          box_dmg: formData.numeroSerie,
          dmg_num: formData.resultadosInv,
          tempa_door: formData.tempAPuerta,
          tempa_mid: formData.tempAMedio,
          tempa_back: formData.tempAFondo,
          tempm_door: formData.tempMPuerta,
          tempm_mid: formData.tempMMedio,
          tempm_back: formData.tempMFondo,
          tempb_door: formData.tempBPuerta,
          tempb_mid: formData.tempBMedio,
          tempb_back: formData.tempBFondo,
          temp_min: formData.tempMin,
          temp_max: formData.tempMax,
          temp_ideal: formData.tempIdeal,
          invest_res: formData.resultadosInv,
          insp_name: formData.nombreInspector,
          driver_sign: formData.nombreChofer
        }])
    } else {
      console.log(' is not true ')
    }
  } catch (e) {
    console.log('El error es:', e)
  }
}

export const update = async (formData: any) => {
  try {
    const { data, error } = await supabase
      .from('ActaDescarga')
      .update([{
        fecha: formData.fecha,
        start_verification: formData.inicioVerificacion,
        end_verification: formData.terminoVerificacion,
        oc: formData.oc,
        provider: formData.proveedor,
        origin: formData.origen,
        bill: formData.factura,
        specie: formData.especie,
        boxes_received: formData.cajasRecibidas,
        varieties: formData.especie,
        cold_disc: formData.frioDescarga,
        carrier_line: formData.lineaTransportista,
        num_cont: formData.numeroContenedor,
        truck_plt: formData.placasCamion,
        box_plt: formData.placasCaja,
        driver: formData.chofer,
        setpoint_temp: formData.tempSetPoint,
        screen_temp: formData.tempPantalla,
        setpoint_obs: formData.observacionesSetPoint,
        screen_obs: formData.observacionesPantalla,
        therm_dst: formData.tempDestino,
        therm_org_obs: formData.tempOrigen,
        therm_dst_obs: formData.tempDestino,
        clean_free: formData.limpio,
        clean_obs: formData.observacionesSetPoint,
        close: formData.cajaCerrada,
        close_obs: formData.observacionesSetPoint,
        box_state: formData.lona,
        box_obs: formData.observacionesSetPoint,
        tarp_state: formData.fauna,
        tarp_obs: formData.observacionesSetPoint,
        pest_free: formData.carga,
        pest_obs: formData.observacionesSetPoint,
        load_state: formData.seguridadCarga,
        load_obs: formData.observacionesSetPoint,
        load_sec: formData.seguridadCarga,
        sec_obs: formData.observacionesSetPoint,
        seal: formData.sellado,
        seal_obs: formData.observacionesSetPoint,
        pallet_dmg: formData.numeroSerie,
        pallet_num: formData.resultadosInv,
        box_id: formData.numeroSerie,
        box_num: formData.resultadosInv,
        box_dmg: formData.numeroSerie,
        dmg_num: formData.resultadosInv,
        tempa_door: formData.tempAPuerta,
        tempa_mid: formData.tempAMedio,
        tempa_back: formData.tempAFondo,
        tempm_door: formData.tempMPuerta,
        tempm_mid: formData.tempMMedio,
        tempm_back: formData.tempMFondo,
        tempb_door: formData.tempBPuerta,
        tempb_mid: formData.tempBMedio,
        tempb_back: formData.tempBFondo,
        temp_min: formData.tempMin,
        temp_max: formData.tempMax,
        temp_ideal: formData.tempIdeal,
        invest_res: formData.resultadosInv,
        insp_name: formData.nombreInspector,
        driver_sign: formData.nombreChofer
      }]).eq('oc', formData.oc)

    if (error != null) {
      console.log('Hubo un error:', error)
    } else {
      console.log('Datos insertados correctamente:', data)
    }
  } catch (e) {
    console.log('El error es:', e)
  }
}

export const fetchActas = async () => {
  const { data, error } = await supabase
    .from('ActaDescarga')
    .select(`
      fecha,
      start_verification,
      end_verification,
      oc,
      provider,
      origin,
      bill,
      specie,
      varieties,
      cold_disc,
      boxes_received,
      carrier_line,
      num_cont,
      truck_plt,
      box_plt,
      driver,
      setpoint_temp,
      setpoint_obs,
      screen_temp,
      screen_obs,
      therm_org,
      therm_dst,
      clean_free,
      close,
      tarp_state,
      pest_free,
      load_state,
      load_sec,
      seal,
      box_id,
      invest_res,
      tempa_door,
      tempa_mid,
      tempa_back,
      tempm_door,
      tempm_mid,
      tempm_back,
      tempb_door,
      tempb_mid,
      tempb_back,
      temp_max,
      temp_min,
      temp_ideal,
      insp_name,
      pallet_dmg,
      pallet_num,
      box_num,
      dmg_num,
      specie
    `)

  if (error != null) {
    console.error('Error fetching actas:', error)
    return null
  }

  return data
}
