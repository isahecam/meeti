import {
  Html,
  Button,
  Head,
  Preview,
  Hr,
  Tailwind,
  Container,
  Section,
  Body,
  Heading,
  Text,
  Img,
  toPlainText,
  render,
} from "react-email"

interface Props {
  name: string
  url: string
}

export function PasswordResetEmail({ name, url }: Props) {
  const currentYear = new Date().getFullYear()

  return (
    <Html lang="es">
      <Head>
        <title>Recupera tu contraseña</title>
      </Head>
      <Preview>Recupera tu contraseña para acceder a Meeti</Preview>

      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto my-8 max-w-[600px] rounded-lg bg-white">
            <Section className="p-8 text-center">
              <Img
                src="https://valentines-day-app.vercel.app/liebe-verbindet.webp"
                alt="Meeti"
                width={120}
                className="mx-auto aspect-auto object-contain"
              />
            </Section>

            <Section className="px-8 pb-8">
              <Heading className="mb-4 text-2xl font-bold text-gray-900">Recupera tu contraseña</Heading>

              <Text className="mb-6 text-base leading-6 text-gray-600">
                Hola {name}, haz clic en el botón para recuperar tu contraseña.
              </Text>

              <Section className="my-8 text-center">
                <Button href={url} className="rounded-md bg-blue-600 px-6 py-3 font-semibold text-white">
                  Recuperar contraseña
                </Button>
              </Section>
            </Section>

            <Hr className="my-4 border-gray-200" />

            <Section className="px-8 pb-8 text-center">
              <Text className="text-sm text-gray-400">Si no creaste una cuenta, ignora este mensaje.</Text>
              <Text className="text-xs text-gray-400">©{currentYear} Meeti</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export async function renderPasswordResetEmailText({ name, url }: Props) {
  const html = await render(<PasswordResetEmail name={name} url={url} />)
  const text = toPlainText(html)
  return { text }
}
