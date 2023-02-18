async function loadingImg() {

    let key = "N3XBTV2-CJ04X89-P3H5DSB-Q8G7D6A"
    let linkValue = document.getElementById('link').value
    let url = `https://shot.screenshotapi.net/screenshot?token=${key}&url=${linkValue}`

    const response = await fetch(url)
    const object = await response.json()

    let img = document.createElement('img')

    img.className = 'screen'
    img.setAttribute('src', object.screenshot)

    let container = document.querySelector('.image')
    let ref = document.querySelector('.ref')

    if (document.images.length >= 1) {
        let screenshot = document.querySelector('.screen')
        container.replaceChild(img, screenshot)
    } else {
        container.insertBefore(img, ref)
    }
}

let btn = document.getElementById('button')

btn.addEventListener("click", async (e) => {

    e.preventDefault()

    try {
        loadingImg()
    } catch (e) {
        console.log("Error");
        console.log(e);
    }
})