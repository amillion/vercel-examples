import { Layout, Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <Text variant="h1">FinLyte - your financial co-pilot</Text>
        <Text className="text-zinc-600">
          We tell you what the banks won&rsquo;t
        </Text>
      </section>

      <section className="flex flex-col gap-3">
        <div className="lg:w-2/3">
          <Chat />
        </div>
      </section>
    </Page>
  )
}

Home.Layout = Layout

export default Home
