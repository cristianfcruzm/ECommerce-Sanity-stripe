import mercadopago from 'mercadopago';

let mercadoPagoPromise = mercadopago.configure({
    access_token: process.env.NEXT_PRIVATE_MERCADOPAGO_ACCESS_TOKEN,
  });

const getMercadoPago = async (preference) => {
    const response = await mercadopago.preferences.create(preference);
    const preferenceId = response.body.id;
  return preferenceId;
}

export default {mercadoPagoPromise, getMercadoPago};