export class NewVehicle {
    id: number;
    patente: string;
    id_marca: string;
    id_modelo: string;
    anio: Date;
    id_estado: number;

    constructor(id: number, patente: string, id_marca: string, id_modelo: string, anio: Date, id_estado: number) {
        this.id = id;
        this.patente = patente;
        this.id_marca = id_marca;
        this.id_modelo = id_modelo;
        this.anio = anio;
        this.id_estado = id_estado;
    }
}