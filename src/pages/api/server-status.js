export default function serverStatus(req, res) {
  res.status(200).json({
    data: "O servidor está online!",
  })
}
