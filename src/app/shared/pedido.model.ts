export interface IPedido {
    id: number
    cod: number
    name: string
    promo?: string
    tipoPrecio: string
    precio: number
    puntaje?: number
    stock: number
    segment: string
    total:number
    cantidad:number
  }