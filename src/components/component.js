export default (text = "Hello World, Here is Asia") => {
    const element = document.createElement("div")

    element.innerHTML = text

    return element
}