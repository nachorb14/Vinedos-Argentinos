const productos = [
    {nombre: "Elementos Cabernet Sauvignon", precio: 960, stock: 10, id: "1", img: "../img/elementos-cabernet.jpg", idCat: "1"},
    {nombre: "Don David Cabernet Sauvignon", precio: 1900, stock: 10, id: "2", img: "../img/don-david-cabernet.jpg", idCat: "1"},
    {nombre: "Navarro Correas Colección Privada Malbec", precio: 2200, stock: 3, id: "3", img: "../img/navarro-correas-malbec.jpg", idCat: "2"},
    {nombre: "Fond de Cave Reserva Malbec", precio: 2130, stock: 10, id: "4", img: "../img/fond-de-cave-reserva-malbec.jpg", idCat: "2"},
    {nombre: "Rutini Merlot", precio: 4375, stock: 10, id: "5", img: "../img/rutini-merlot.jpg", idCat: "3"},
    {nombre: "Chateau Vieux Merlot", precio: 3650, stock: 6, id: "6", img: "../img/chateau-vieux-merlot.jpg", idCat: "3"},
    {nombre: "Demencial Pinot Noir", precio: 3300, stock: 8, id: "7", img: "../img/demencial-pinot-noir.jpg", idCat: "4"},
    {nombre: "Luigi Bosca Pinot Noir", precio: 4450, stock: 10, id: "8", img: "../img/luigi-bosca-pinot-noir.jpg", idCat: "4"}    
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}
export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}