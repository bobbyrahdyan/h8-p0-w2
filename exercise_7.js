// 1. Menyusun Barisan Bintang

let rows1 = 5;
for (let i = 0; i < rows1; i++) {
    console.log('*')
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping

let rows2 = 5;
for (let i = 0; i < rows2; i++) {
    let gabungBintang = '';
    for (let j = 0; j < rows2; j++) {
        gabungBintang += '*';
    }
    console.log(gabungBintang);
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

let rows3 = 5;
for (let i = 1; i <= rows3; i++) {
    let gabungBintang = '';
    for (let j = 0; j < i; j++) {
        gabungBintang += '*';
    }
    console.log(gabungBintang);
}