import { ContactUsEmailProps } from "@/types";


export default function ContactUsTemplate({ fullName, email, phoneNumber, subject, message }: ContactUsEmailProps) {
  return (
    <>
    <p>Hi Team,</p>
    <p>There is a new contact form submission:</p>
    <ul>
      <li><strong>Full Name:</strong> {fullName}</li>
      <li><strong>Email:</strong> {email}</li>
      <li><strong>Phone Number:</strong> {phoneNumber}</li>
      <li><strong>Subject:</strong> {subject}</li>
      <li><strong>Message:</strong> {message}</li>
    </ul>
    </>
  )
}
