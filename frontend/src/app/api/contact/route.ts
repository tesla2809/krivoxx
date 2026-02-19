import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/utils/validators';
import type { ContactFormData } from '@/types';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the form data
    const validatedData = contactFormSchema.parse(body);

    // TODO: Replace this with actual backend integration
    // Options for backend integration:
    // 1. Send email using services like SendGrid, Mailgun, or Resend
    // 2. Save to database (MongoDB, PostgreSQL, etc.)
    // 3. Send to CRM (Salesforce, HubSpot, etc.)
    // 4. Send notification to Slack/Discord
    // 5. Trigger automation workflow

    // For now, we'll just log the data and return success
    console.log('Contact form submission:', validatedData);

    // Example: Send email (uncomment when ready)
    /*
    const emailResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email: 'info@krivox.com' }],
          subject: `New Contact Form: ${validatedData.service}`,
        }],
        from: { email: 'noreply@krivox.com' },
        content: [{
          type: 'text/html',
          value: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Phone:</strong> ${validatedData.phone}</p>
            <p><strong>Company:</strong> ${validatedData.company || 'N/A'}</p>
            <p><strong>Service:</strong> ${validatedData.service}</p>
            <p><strong>Budget:</strong> ${validatedData.budget || 'N/A'}</p>
            <p><strong>Message:</strong></p>
            <p>${validatedData.message}</p>
          `,
        }],
      }),
    });

    if (!emailResponse.ok) {
      throw new Error('Failed to send email');
    }
    */

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for contacting us! We will get back to you soon.',
        data: validatedData,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Contact form error:', error);

    // Handle validation errors
    if (error.name === 'ZodError') {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid form data',
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong. Please try again later.',
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request: Request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}