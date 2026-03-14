# EmailJS Setup Instructions

To enable the contact form functionality, you need to configure EmailJS:

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email
5. Note down your **Service ID**

## Step 3: Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use the following template variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Phone number
   - `{{company}}` - Company name
   - `{{service}}` - Service interested in
   - `{{message}}` - Message content

Example template:
```
New Contact Form Submission

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Service: {{service}}

Message:
{{message}}
```

4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" in your dashboard
2. Find your **Public Key** (also called API Key)
3. Copy this key

## Step 5: Update the Contact Form

Open `src/pages/Contact.tsx` and replace the placeholders:

```typescript
await emailjs.send(
  'YOUR_SERVICE_ID',      // Replace with your Service ID
  'YOUR_TEMPLATE_ID',     // Replace with your Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    company: formData.company,
    service: formData.service,
    message: formData.message,
  },
  'YOUR_PUBLIC_KEY'       // Replace with your Public Key
);
```

## Step 6: Test the Form

1. Start the development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your connected email inbox for the message

## Important Notes

- EmailJS free tier allows 200 emails per month
- Make sure to whitelist your domain in EmailJS settings
- Keep your Public Key secure but note it's meant to be used in frontend code
- For production, consider implementing rate limiting to prevent spam

## Troubleshooting

If emails aren't sending:
1. Check browser console for errors
2. Verify all IDs and keys are correct
3. Ensure your email service is properly connected in EmailJS
4. Check EmailJS dashboard for usage limits
5. Verify the template variables match exactly
