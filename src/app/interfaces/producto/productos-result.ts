import { Producto } from "./producto";
export interface ProductosResult {
    code?:string,
    message?:string,
    items?:Producto[],
}
