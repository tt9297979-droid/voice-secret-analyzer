async function upload(){

let file = document.getElementById("video").files[0]

let formData = new FormData()

formData.append("video", file)

let res = await fetch("/api/analyze",{
method:"POST",
body:formData
})

let data = await res.json()

document.getElementById("result").innerHTML =

`
<h3>Speech</h3>
${data.text}

<h3>Morse</h3>
${data.morse}
`
}
