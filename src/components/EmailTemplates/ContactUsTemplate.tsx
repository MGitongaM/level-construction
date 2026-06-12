import { Html, Body, Container, Heading, Text,Section,Row, Column, Hr} from 'react-email';
import { ContactUsEmailProps } from "@/types";


export default function ContactUsTemplate({ fullName, email, phone, subject, message }: ContactUsEmailProps) {
  return (
    <Html>
        <Body>
            <Container>
                <Heading>New Contact Inquiry</Heading>
                <Text>Hi Team,</Text>
                <Text>There is a new contact form submission inquiry.</Text>
                <Text>Here are their contact details along side their message</Text>
                <Hr className="my-4 border-gray-300 border-t-2"/>
                <Section>
                    <Row>
                        <Column>
                            <Text>Full Name: <strong>{fullName}</strong> </Text>
                        </Column>
                    </Row>
                    <Row>
                        <Column>
                            <Text>Email: <strong>{email}</strong> </Text>
                        </Column>
                    </Row>
                    <Row>
                        <Column>
                            <Text>Phone Number:     <strong>{phone}</strong> </Text>
                        </Column>
                    </Row>
                    <Row>
                        <Column>
                            <Text>Subject: <strong>{subject}</strong> </Text>
                        </Column>
                    </Row>
                    <Row>
                        <Column>
                            <Text>Message: <strong>{message}</strong> </Text>
                        </Column>
                    </Row>
                </Section>
                <Hr className="my-4 border-gray-300 border-t-2"/>
            </Container>

    </Body>
    </Html>
  )
}
