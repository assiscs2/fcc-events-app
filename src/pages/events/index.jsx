import { Header } from "./../../components/header/header.jsx"
import { Footer } from "./../../components/footer/footer.jsx"
import EventLocationsComponent from "../../components/event-locations/event-locations.jsx"

export default function EventsPage({ data }) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="eventsPageTitle">
        <h1>Events Page</h1>
      </div>
      <div className="mainEvents">
        <EventLocationsComponent data={data} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const { events_categories } = await import("../../data/data.json")

  return {
    props: {
      data: events_categories,
    },
  }
}
