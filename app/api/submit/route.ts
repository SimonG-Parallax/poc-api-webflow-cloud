// This is a test to see if we can hit an endpoint then redirect back to web flow success/fail/form pages with errors
export async function POST(request: Request) {

    try {
        // Check if request has a body
        const contentLength = request.headers.get('content-length');
        if (!contentLength || contentLength === '0') {
            return Response.redirect("https://parall.ax/careers", 302);
        }

        const body = await request.json();
        
        // Validate required fields
        if (!body || typeof body !== 'object') {
            return Response.redirect("https://parall.ax/careers", 302);
        }

        const { name } = body;
        
        if (!name) {
            return new Response(JSON.stringify({ error: 'Name is required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        return Response.redirect("https://parall.ax/", 302);
    } catch (error) {
        return Response.redirect("https://parall.ax/insights", 302);
    }
}