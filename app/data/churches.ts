export type Church = {
  id: string;
  name: string;
  city: string;
  country: string;
  denomination: string;
  serviceTimes: string[];
  tags: string[];
};

export const churches: Church[] = [
  {
    id: 'cristo-cel-monterrey',
    name: 'Cristo para las Naciones Monterrey',
    city: 'Monterrey',
    country: 'México',
    denomination: 'Cristiana',
    serviceTimes: ['Domingo 10:00', 'Miércoles 19:00'],
    tags: ['familias', 'jóvenes']
  },
  {
    id: 'vida-nueva-bogota',
    name: 'Iglesia Vida Nueva Bogotá',
    city: 'Bogotá',
    country: 'Colombia',
    denomination: 'Evangélica',
    serviceTimes: ['Domingo 09:00', 'Domingo 11:00'],
    tags: ['alabanza', 'grupos pequeños']
  },
  {
    id: 'gracia-houston',
    name: 'Comunidad Gracia Houston',
    city: 'Houston',
    country: 'Estados Unidos',
    denomination: 'No denominacional',
    serviceTimes: ['Domingo 11:30'],
    tags: ['bilingüe', 'misiones']
  },
  {
    id: 'esperanza-lima',
    name: 'Centro Cristiano Esperanza',
    city: 'Lima',
    country: 'Perú',
    denomination: 'Pentecostal',
    serviceTimes: ['Sábado 18:00', 'Domingo 10:00'],
    tags: ['niños', 'servicio social']
  }
];
