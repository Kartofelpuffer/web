import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
  if (req.method !== 'POST') {
    return Response.json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const base44 = createClientFromRequest(req);
    const payload = await req.json();
    const { event, data } = payload;

    // Get Zoho credentials from environment
    const clientId = Deno.env.get('ZOHO_CLIENT_ID');
    const clientSecret = Deno.env.get('ZOHO_CLIENT_SECRET');
    const refreshToken = Deno.env.get('ZOHO_REFRESH_TOKEN');

    if (!clientId || !clientSecret || !refreshToken) {
      console.error('Missing Zoho credentials');
      return Response.json({ error: 'Zoho credentials not configured' }, { status: 500 });
    }

    // Get access token
    const tokenResponse = await fetch('https://accounts.zoho.com/oauth/v2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
        grant_type: 'refresh_token'
      }).toString()
    });

    if (!tokenResponse.ok) {
      const error = await tokenResponse.text();
      console.error('Token error:', error);
      return Response.json({ error: 'Failed to get Zoho access token' }, { status: 500 });
    }

    const { access_token } = await tokenResponse.json();

    // Format service types
    const formatServiceTypes = (types) => {
      const serviceMap = {
        oil_change: 'Oil Change',
        brakes: 'Brake Service',
        detailing: 'Auto Detailing',
        preventive_maintenance: 'Preventive Maintenance',
        tire_services: 'Tire Services',
        battery_services: 'Battery Services',
        multi_point_inspection: 'Multi-Point Inspection'
      };
      return (types || []).map(t => serviceMap[t] || t).join(', ');
    };

    // Prepare lead data based on entity type
    let leadData;
    if (event.entity_name === 'FleetInquiry') {
      leadData = {
        Last_Name: data.business_name,
        Phone: data.phone,
        Email: data.email,
        Description: `Fleet Info: ${data.fleet_info}\n\nServices: ${formatServiceTypes(data.service_type)}\n\nAdditional: ${data.additional_details || ''}`
      };
    } else {
      leadData = {
        First_Name: data.first_name || '',
        Last_Name: data.last_name || '',
        Phone: data.phone,
        Email: data.email,
        Description: `Vehicle: ${data.vehicle_info || ''}\n\nServices: ${formatServiceTypes(data.service_type)}\n\nMessage: ${data.message || ''}`
      };
    }

    // Submit to Zoho CRM
    const crmResponse = await fetch('https://www.zohoapis.com/crm/v2/Leads', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: [leadData] })
    });

    if (!crmResponse.ok) {
      const error = await crmResponse.text();
      console.error('CRM error:', error);
      return Response.json({ error: 'Failed to create lead in Zoho CRM' }, { status: 500 });
    }

    const result = await crmResponse.json();
    return Response.json({
      success: true,
      message: 'Lead created successfully in Zoho CRM',
      zoho_response: result
    });
  } catch (error) {
    console.error('sendToZohoCRMVercel error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});