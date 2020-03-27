let tanggal = 1;
let bulan = 1;
let tahun = 2020;

if (tanggal > 0 && tanggal <= 31) {
    tanggal = tanggal
} else {
    tanggal = 'input tanggal tidak benar'
}

switch (bulan) {
    case 1:
        bulan = 'Januari';
        break;
    case 2:
        bulan = 'Februari';
        break;
    case 3:
        bulan = 'Maret';
        break;
    case 4:
        bulan = 'April';
        break;
    case 5:
        bulan = 'Mei';
        break;
    case 6:
        bulan = 'Juni';
        break;
    case 7:
        bulan = 'Juli';
        break;
    case 8:
        bulan = 'Agustus';
        break;
    case 9:
        bulan = 'September';
        break;
    case 10:
        bulan = 'Oktober';
        break;
    case 11:
        bulan = 'November';
        break;
    case 12:
        bulan = 'Desember';
        break;
    default:
        bulan = 'input bulan tidak benar';
        break;
}

if (tahun >= 1900 && tahun <= 2200) {
    tahun = tahun
} else {
    tahun = 'input tahun tidak benar'
}

if (typeof tanggal == 'number' && bulan != 'input bulan tidak benar' &&  typeof tahun == 'number') {
    console.log(tanggal + ' ' + bulan + ' ' + tahun)
} else {
    console.log('input tidak benar')
}