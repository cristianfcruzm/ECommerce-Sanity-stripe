import mercadopago from 'mercadopago';

mercadopago.configure({
    access_token: process.env.NEXT_PRIVATE_MERCADOPAGO_ACCESS_TOKEN,
  });


  export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        let items = req.body.map(function(item) {
            return {
                title: item.name,
                unit_price: item.price * 100,
                quantity: item.quantity
             }
          });
        let preference = {
            items: items,
            back_urls: {
              success: `${req.headers.origin}/success`,
              failure: `${req.headers.origin}/canceled`,
              pending: `${req.headers.origin}/success`,
            },
            auto_return: "approved",
          };
  
        // Create Checkout Sessions from body params.
        const response = await mercadopago.preferences.create(preference);
  
        res.status(200).json(response);
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
    } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
    }
  }




/* const getMercadoPago = async (preference) => {
    const response = await mercadopago.preferences.create(preference);
    const preferenceId = response.body.id;
  return preferenceId;
}

export default getMercadoPago; */