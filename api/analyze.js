export default function handler(req, res) {

  if (req.method === "POST") {

    res.status(200).json({
      text: "นี่คือข้อความจาก AI",
      morse: "... --- ..."
    })

  } else {

    res.status(405).json({
      error: "Method not allowed"
    })

  }

}
