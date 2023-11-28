import { Header } from "./../../components/header/header.jsx"
import { HomePage } from "./../../components/home/home-page.jsx"
import { Footer } from "./../../components/footer/footer.jsx"

export default function Home({ data }) {
  return (
    <>
      <Header />
      <div>
        <HomePage data={data} />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const { events_categories } = await import("../../data/data.json")

  return {
    props: {
      data: events_categories,
    },
  }
}
