import Image from "next/image"
import Link from "next/link"

export function HomePage({ data }) {
  return (
    <main>
      <div className="homeBody">
        {data.map((event) => (
          <Link className="card" key={event.id} href={`/events/${event.id}`}>
            <div className="cardImage">
              <Image
                src={event.image}
                width={400}
                height={400}
                alt={event.title}
              ></Image>
            </div>
            <div className="homeContent">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
