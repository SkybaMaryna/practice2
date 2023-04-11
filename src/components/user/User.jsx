import { Paragraph, Span } from "./User.styled"

export const User = ({ user: { name, email } }) => {
    const ValidEmail = email.endsWith('biz')
    return (
    <>
     <Paragraph>Name: <Span>{name}</Span></Paragraph>
     <Paragraph>Email: <Span isRed={ValidEmail}>{email}</Span></Paragraph>
    </>)
}

