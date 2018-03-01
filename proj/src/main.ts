function count(_chuoi:string):number {
    let chuoi:string = _chuoi.trim() .replace(/\s+/g, " ");
    let dem:number = 0;
    for (let i=0;i<chuoi.length;i++){
        if(chuoi[i] == " "){
            dem++;
        }
    }
    return dem+1;
}
let chuoi:string = "  Cộng    Hòa Xã Hội Chủ Nghĩa Việt Nam";

console.log("Chuoi ban vua nhap co : "+count(chuoi)+ " tu");