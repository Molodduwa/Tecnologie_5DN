export class Auto{
    public nome:string;
    public velocitaMassima:string;
    public accelerazione: string;
    public postiEporte: string;
    public descrizione: string;
    public prezzo: number;
    public immagine: string;
    constructor(nome:string, velocitaMassima:string,  accelerazione:string, postiEporte:string, descrizione:string,  prezzo:number, immagine: string){
        this.nome = nome;
        this.velocitaMassima = velocitaMassima;
        this.accelerazione = accelerazione;
        this.postiEporte = postiEporte;
        this.descrizione = descrizione;
        this.prezzo = prezzo;
	this.immagine = immagine;

    }
}