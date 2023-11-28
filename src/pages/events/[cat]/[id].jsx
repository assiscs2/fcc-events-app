import { Header } from "./../../../components/header/header.jsx"
import { Footer } from "../../../components/footer/footer.jsx"
import SingleEvent from "../../../components/single-event/single-event.jsx"

export default function EventPage({ data }) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="mainEventPage">
        <SingleEvent data={data} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const data = await import("../../../data/data.json")
  const allEvents = data.allEvents

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    }
  })

  return {
    paths: allPaths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const id = context.params.id
  const { allEvents } = await import("../../../data/data.json")

  const eventData = allEvents.find((event) => {
    if (id === event.id) {
      return event
    }
  })

  return {
    props: { data: eventData },
  }
}
