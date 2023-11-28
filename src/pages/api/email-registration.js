import path from "path"
import fs from "fs"

function buildPath() {
  return path.join(process.cwd(), "src", "data", "data.json")
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath)
  const data = JSON.parse(jsonData)
  return data
}

export default function handleEmailRegistration(req, res) {
  const { method } = req

  const filePath = buildPath()
  const { events_categories, allEvents } = extractData(filePath)

  if (!allEvents) {
    return res.status(404)
  }

  if (method === "POST") {
    const { email, eventId } = req.body

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid e-mail address" })

      return
    }

    const newAllEvents = allEvents.map((event) => {
      console.log(event.id, eventId, "aqui")

      if (event.id === eventId) {
        if (event.emails_registered.includes(email)) {
          res
            .status(409)
            .json({ message: "This e-mail has already been registered" })

          return event
        }
        return {
          ...event,
          emails_registered: [...event.emails_registered, email],
        }
      }

      return event
    })

    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents: newAllEvents })
    )

    return res.status(200).json({
      message: `Your email has been registered successfully, on the address: ${email}, for the event:${eventId}`,
    })
  }
}
