import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const payload = await req.json();

        // Handle entity automation payload
        const entityData = payload.data;
        const entityType = payload.event?.entity_name;

        if (!entityData) {
            return Response.json({ error: 'No data provided' }, { status: 400 });
        }

        // Get Zoho credentials from environment
        const clientId = Deno.env.get('ZOHO_CLIENT_ID');
        const clientSecret = Deno.env.get('ZOHO_CLIENT_SECRET');
        const refreshToken = Deno.env.get('ZOHO_REFRESH_TOKEN');

        if (!clientId || !clientSecret || !refreshToken) {
            return Response.json({ error: 'Zoho credentials not configured' }, { status: 500 });
        }

        // Get access token using refresh token
        const tokenResponse = await fetch(
            `https://accounts.zoho.com/oauth/v2/token?refresh_token=${refreshToken}&client_id=${clientId}&client_secret=${clientSecret}&grant_type=refresh_token`,
            { method: 'POST' }
        );

        if (!tokenResponse.ok) {
            const errorText = await tokenResponse.text();
            return Response.json({ 
                error: 'Failed to get Zoho access token', 
                details: errorText 
            }, { status: 500 });
        }

        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;

        // Format service types as readable text
        const formatServiceTypes = (types) => {
            if (!types || !Array.isArray(types)) return 'N/A';
            return types.map(t => t.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())).join(', ');
        };

        // Prepare lead data based on entity type
        let leadData;
        
        if (entityType === 'FleetInquiry') {
            leadData = {
                data: [{
                    Last_Name: entityData.business_name || 'Fleet Inquiry',
                    First_Name: 'Fleet',
                    Email: entityData.email || '',
                    Phone: entityData.phone,
                    Description: `Fleet Services Request\n\nBusiness: ${entityData.business_name}\nServices: ${formatServiceTypes(entityData.service_type)}\n\nFleet Info: ${entityData.fleet_info || 'N/A'}\n\nAdditional Details: ${entityData.additional_details || 'N/A'}`,
                    Lead_Source: 'Website - Fleet Services',
                    Company: entityData.business_name
                }]
            };
        } else {
            // ServiceInquiry
            leadData = {
                data: [{
                    Last_Name: entityData.last_name || entityData.first_name,
                    First_Name: entityData.first_name,
                    Email: entityData.email || '',
                    Phone: entityData.phone,
                    Description: `Service Request\n\nServices: ${formatServiceTypes(entityData.service_type)}\nVehicle: ${entityData.vehicle_info || 'N/A'}\n\nMessage: ${entityData.message || 'N/A'}`,
                    Lead_Source: 'Website - Service Inquiry',
                    Company: 'Individual'
                }]
            };
        }

        // Send to Zoho CRM
        const crmResponse = await fetch('https://www.zohoapis.com/crm/v2/Leads', {
            method: 'POST',
            headers: {
                'Authorization': `Zoho-oauthtoken ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(leadData)
        });

        const crmResult = await crmResponse.json();

        if (!crmResponse.ok) {
            return Response.json({ 
                error: 'Failed to create lead in Zoho CRM', 
                details: crmResult 
            }, { status: 500 });
        }

        return Response.json({ 
            success: true, 
            zoho_response: crmResult,
            message: 'Lead created successfully in Zoho CRM'
        });

    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});