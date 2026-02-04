Deno.serve(async (req) => {
  try {
    const clientId = Deno.env.get('ZOHO_CLIENT_ID');
    const clientSecret = Deno.env.get('ZOHO_CLIENT_SECRET');
    const refreshToken = Deno.env.get('ZOHO_REFRESH_TOKEN');

    if (!clientId || !clientSecret || !refreshToken) {
      return Response.json(
        { error: 'Missing Zoho credentials' },
        { status: 400 }
      );
    }

    const response = await fetch('https://accounts.zoho.com/oauth/v2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
        grant_type: 'refresh_token'
      }).toString()
    });

    const result = await response.json();
    if (!response.ok) {
      return Response.json(
        { error: 'Failed to get Zoho token' },
        { status: 400 }
      );
    }

    return Response.json({ access_token: result.access_token });
  } catch (error) {
    console.error('Zoho auth error:', error);
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
});