import Image from "next/image"
import Link from "next/link"

export default function EventLocationsComponent({ data }) {
  return (
    <div className="eventLocation">
      {data.map((event) => (
        <Link className="card" key={event.id} href={`/events/${event.id}`}>
          <Image
            src={event.image}
            width={400}
            height={400}
            alt={event.title}
          ></Image>
          <h2>{event.title}</h2>
        </Link>
      ))}
    </div>
  )
}
