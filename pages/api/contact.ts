import type { NextApiRequest, NextApiResponse } from 'next'
import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  console.log("Sending...")
  try {
    await sendgrid.send({
      to: "contact@mouadbnl.com",
      from: "contact@mouadbnl.com",
      subject: `Portfolio message: ${req.body.subject}`,
      html: `
      <body>
        <div style="margin-left: 20px;margin-right: 20px;">
          <h3>New message from ${req.body.fullname}, email is: ✉️${req.body.email} </h3>
          <div style="font-size: 16px;">
            <p>Message:</p>
            <p>${req.body.message}</p>
            <br>
          </div>
        </div>
      </body>`
    })
    console.log("message sent!")
  } catch (err: any) {
    console.log("Error sending!")
    console.log(err.message)
    console.log(err.response.body)
    return res.status(err.statusCode || 500).json({
      error: "Error sending your email."
    })
  }
  return res.status(200).json({
    message: "Message sent"
  })
}
