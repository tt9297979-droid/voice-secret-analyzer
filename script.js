async function upload(){

let file=document.getElementById("video").files[0]

let formData=new FormData()

formData.append("video",file)

let res=await fetch("https://YOUR-API.onrender.com/analyze",{
method:"POST",
body:formData
})

let data=await res.json()

document.getElementById("result").innerHTML=`

<h3>Speech To Text</h3>
${data.text}

<h3>Morse Detection</h3>
${data.morse}

`

}
