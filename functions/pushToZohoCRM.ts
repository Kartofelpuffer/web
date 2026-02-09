import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

const serviceMap = {
  oil_change: 'Oil Change',
  brakes: 'Brake Service',
  detailing: 'Auto Detailing',
  preventive_maintenance: 'Preventive Maintenance',
  battery_services: 'Battery Services',
  multi_point_inspection: 'Multi-Point Inspection',
  tire_services: 'Tire Services'
};

async function getZohoAccessToken() {
  const clientId = Deno.env.get('ZOHO_CLIENT_ID');
  const clientSecret = Deno.env.get('ZOHO_CLIENT_SECRET');
  const refreshToken = Deno.env.get('ZOHO_REFRESH_TOKEN');

  const response = await fetch('https://accounts.zoho.com/oauth/v2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken
    }).toString()
  });

  const data = await response.json();
  return data.access_token;
}

async function createZohoLead(leadData) {
  const accessToken = await getZohoAccessToken();

  const response = await fetch('https://www.zohoapis.com/crm/v2/Leads', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data: [leadData]
    })
  });

  return response.json();
}

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);

    const { event, data } = await req.json();

    if (!data) return Response.json({ error: 'No data provided' }, { status: 400 });

    let leadData = {};

    if (event.entity_name === 'ServiceInquiry') {
      const services = (data.service_type || [])
        .map(s => serviceMap[s] || s)
        .join(', ');

      leadData = {
        Last_Name: data.last_name || data.first_name || 'N/A',
        First_Name: data.first_name || '',
        Phone: data.phone,
        Email: data.email,
        Vehicle_Info: data.vehicle_info,
        Service_Type: services,
        Description: data.message,
        Lead_Source: 'Website Form'
      };
    } else if (event.entity_name === 'FleetInquiry') {
      const services = (data.service_type || [])
        .map(s => serviceMap[s] || s)
        .join(', ');

      leadData = {
        Last_Name: data.business_name || 'N/A',
        Phone: data.phone,
        Email: data.email,
        Fleet_Info: data.fleet_info,
        Service_Type: services,
        Description: data.additional_details,
        Lead_Source: 'Fleet Form'
      };
    }

    await createZohoLead(leadData);

    return Response.json({ success: true });
  } catch (error) {
    console.error('Error pushing to Zoho:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});