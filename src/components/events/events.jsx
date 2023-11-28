import Image from "next/image"
import Link from "next/link"

export default function EventsPageComponent({ data }) {
  return (
    <div className="categoryEvent">
      <h1>
        Events in {data[0].city.toString().replace("-", " ").toUpperCase()}
      </h1>
      <div className="contentWrapper">
        <div className="content">
          {data.map((event) => (
            <Link
              className="card"
              key={event.id}
              href={`/events/${event.city}/${event.id}`}
            >
              <Image
                src={event.image}
                width={300}
                height={300}
                alt={event.title}
              ></Image>
              <div className="cardTextWrapper">
                <h2>{event.title}</h2>
                <p>{event.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
