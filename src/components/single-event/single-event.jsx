import Image from "next/image"
import { useRouter } from "next/router"
import { useRef, useState } from "react"

export default function SingleEvent({ data }) {
  const inputEmail = useRef()
  const router = useRouter()
  const [message, setMessage] = useState("")

  async function onSubmit() {
    const emailValue = inputEmail.current.value
    const eventId = router?.query.id

    const validRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/

    if (!emailValue.match(validRegex)) {
      return setMessage("Please insert a valid e-mail address")
    }

    try {
      // POST fetch request
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailValue,
          eventId,
        }),
      })

      if (!response.ok) throw new Error(`Error: ${response.status}`)
      const data = await response.json()
      setMessage(data.message)
      inputEmail.current.value = ""
    } catch (Error) {
      console.log("Error", Error)
    }
  }

  return (
    <div className="singleEventPage">
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <form onSubmit={onSubmit} className="emailRegistration">
        <label htmlFor="">Get registered for this event!</label>
        <div className="inputGroup">
          <input
            ref={inputEmail}
            type="email"
            id="email"
            placeholder="Please insert your e-mail."
          />
          <button
            type="submit"
            onClick={(event) => {
              event.preventDefault()
              onSubmit()
            }}
          >
            Submit
          </button>
        </div>
      </form>
      <p>{message}</p>
    </div>
  )
}
