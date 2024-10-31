function crearNodo(elemento) {
    var nodo = document.createElement(elemento)
    return nodo
}

function enlace(texto, ruta, objetivo) {
    var link = crearNodo("a")
    var nodoTexto = document.createTextNode(texto)
    link.href = ruta
    link.target = objetivo
    link.appendChild(nodoTexto)
    return link
}

function crearNodoConTexto(elemento, texto) {
    var nodo = crearNodo(elemento)
    var nodoTexto = document.createTextNode(texto)
    nodo.appendChild(nodoTexto)
    return nodo
}

function crearImagen(ruta, alt, width, height) {
    var imagen = crearNodo("img")
    imagen.src = ruta
    imagen.alt = alt
    imagen.style.width = width
    imagen.style.height = height
    return imagen
}

function crearVideo(ruta) {
    var video = crearNodo("video")
    var fuente = crearNodo("source")
    fuente.src = ruta
    video.setAttribute("controls", "controls")
    video.setAttribute("autoplay", "autoplay")
    video.appendChild(fuente)
    return video
}

function crearAbbr(abreviacion, texto) {
    var abbr = crearNodo("abbr")
    abbr.textContent = texto
    abbr.title = abreviacion
    return abbr
}

function adicionarNodoABody(nodo) {
    document.body.appendChild(nodo)
}

function adicionarNodoAContenedor(nodo, contenedor) {
    contenedor.appendChild(nodo)
}

