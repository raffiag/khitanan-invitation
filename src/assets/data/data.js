export const data = {
    bride: {
        L: {
            id: 1,
            name: 'OKI MARWAN',
            child: 'Ayah Dari Muhammad Al Fatih',
            father: '',
            mother: '',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'IIN FATIMAH',
            child: 'Ibu Dari Muhammad Al Fatih',
            father: '',
            mother: '',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'Juli',
            date: '05',
            day: 'Sabtu',
            hours: {
                start: '10.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2025',
            month: 'Juli',
            date: '05',
            day: 'Sabtu',
            hours: {
                start: '10.00',
                finish: 'Selesai'
            }
        },
        address: 'Kwitang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta'
    },

    link: {
        calendar: 'https://calendar.app.google/t5HL3Yu7PYkp39BMA',
        map: 'https://maps.app.goo.gl/xgYD8fwNsqtry11SA',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Oki Marwan',
            icon: './src/assets/images/bca.png',
            rekening: '2700235893'
        },
        // {
        //     id: 2,
        //     name: 'Ipsum Lorem',
        //     icon: './src/assets/images/bri.png',
        //     rekening: '12345678'
        // },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbwzAeUHaiQbBBri3cuzDWG12ub3n2DQ7hBpfNk_b-1fu1-2zW1RGINNMpXZhBt8tMlfDw/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
