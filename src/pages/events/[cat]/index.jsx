import { Header } from "./../../../components/header/header.jsx"
import { Footer } from "./../../../components/footer/footer.jsx"
import EventsPageComponent from "../../../components/events/events.jsx"

export default function EventsCatPage({ data }) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="mainEventsCity">
        <EventsPageComponent data={data} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const { events_categories } = await import("../../../data/data.json")

  const allPaths = events_categories.map((event) => {
    return {
      params: {
        cat: event.id.toString(),
      },
    }
  })

  return {
    paths: allPaths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const id = context?.params.cat
  const { allEvents } = await import("../../../data/data.json")

  const data = allEvents.filter((event) => {
    if (event.city === id) {
      return event
    }
  })

  return {
    props: { data },
  }
}
