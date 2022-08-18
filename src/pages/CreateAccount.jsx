
import Container from '@/components/DivContainer'
import Section from '@/components/Section'
import Title from '@/components/Title'
import Label from '@/components/Label'
import Input from '@/components/Input'
import '@/styles/Button.scss'
import '@/styles/Form.scss'

const CreateAccount = () => {
  return (
    <Section>
      <Container className="Container__mobile">
        <Title className="Title__create">My account</Title>
        <form className='Form'>
          <Label htmlFor="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Your name" />
          <Label htmlFor="name">Email</Label>
          <Input type="email" name="name" id="email" placeholder="email@/example.com" />
          <Label htmlFor="pass">Password</Label>
          <Input type="password" name="pass" id="pass" placeholder="**********" />
        </form>
        <button className="Button" type="submit">Create</button>
      </Container>
    </Section>
  )
}

export default CreateAccount