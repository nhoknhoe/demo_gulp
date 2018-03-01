function count(_chuoi) {
    var chuoi = _chuoi.trim().replace(/\s+/g, " ");
    var dem = 0;
    for (var i = 0; i < chuoi.length; i++) {
        if (chuoi[i] == " ") {
            dem++;
        }
    }
    return dem + 1;
}
var chuoi = "  Cộng    Hòa Xã Hội Chủ Nghĩa Việt Nam";
console.log("Chuoi ban vua nhap co : " + count(chuoi) + " tu");
