import { slugify } from "../util/slugify"

export type ProductType = {
  id?: string;
  image: string;
  type: string;
  code: string;
  name: string;
  handle?: string;
  colour: string;
  reticle: string;
  price: string;
  oldPrice: string | null;
  slug?: string;
};

const products: ProductType[] = [
  {
    id: '0',
    image: '/binoculars1.png',
    type: 'Vortex Optics',
    code: 'RZB-3101',
    name: 'Vortex Razor UHD 8x42mm Binocular',
    colour: 'Green',
    reticle: 'None',
    price: "1,999.97",
    oldPrice: "2,449.00",
  },
  {
    id: '1',
    image: '/binoculars1.png',
    type: 'Vortex Optics',
    code: 'RZB-3102',
    name: 'Vortex Razor UHD 10x42mm Binocular',
    colour: 'Green',
    reticle: 'None',
    price: "2,549.00",
    oldPrice: null,
  },
  {
    id: '2',
    image: '/binoculars1.png',
    type: 'Vortex Optics',
    code: 'RZB-3105',
    name: 'Vortex Razor UHD 10x50mm Binocular',
    colour: 'Green',
    reticle: 'None',
    price: "2,599.00",
    oldPrice: null,
  },
  {
    id: '3',
    image: '/binoculars1.png',
    type: 'Vortex Optics',
    code: 'RZB-3103',
    name: 'Vortex Razor UHD 12x50mm Binocular',
    colour: 'Green',
    reticle: 'None',
    price: "2,659.00",
    oldPrice: null,
  },
  {
    id: '4',
    image: '/binoculars1.png',
    type: 'Vortex Optics',
    code: 'RZB-3104',
    name: 'Vortex Razor UHD 18x56mm Binocular',
    colour: 'Green',
    reticle: 'None',
    price: "2,999.00",
    oldPrice: null,
  },
  {
    id: '5',
    image: '/binoculars1.png',
    type: 'Vortex Optics',
    code: 'RZB-2101',
    name: 'Vortex Razor HD 8x42mm Binocular',
    colour: 'Green',
    reticle: 'None',
    price: "1,469.00",
    oldPrice: null,
  },
  {
    id: '6',
    image: '/binoculars1.png',
    type: 'Vortex Optics',
    code: 'RZB-2102',
    name: 'Vortex Razor HD 10x42mm Binocular',
    colour: 'Green',
    reticle: 'None',
    price: "1,499.00",
    oldPrice: null,
  },
  {
    id: '7',
    image: '/binoculars1.png',
    type: 'Vortex Optics',
    code: 'RZB-2103',
    name: 'Vortex Razor 10x50mm Binocular',
    colour: 'Green',
    reticle: 'None',
    price: "1,599.00",
    oldPrice: null,
  },
  {
    id: '8',
    image: '/binoculars1.png',
    type: 'Vortex Optics',
    code: 'RZB-2104',
    name: 'Vortex Razor HD 12x50mm Binocular',
    colour: 'Green',
    reticle: 'None',
    price: "1,649.00",
    oldPrice: null,
  },
  {
    id: '9',
    image: '/binoculars1.png',
    type: 'Vortex Optics',
    code: 'KAI-5618',
    name: 'Vortex Kaibab HD 18x56mm Binocular',
    colour: 'Green',
    reticle: 'None',
    price: "1,699.00",
    oldPrice: null,
  },

  {
    id: '10',
    image: '/binoculars1.png',
    type: 'Vortex Optics',
    code: 'V200',
    name: 'Vortex Viper HD 8x42mm Binocular',
    colour: 'Green',
    reticle: 'None',
    price: "699.00",
    oldPrice: null,
  },
  {
    id: '11',
    image: '/binoculars1.png',
    type: 'Vortex Optics',
    code: 'V201',
    name: 'Vortex Viper HD 10x42mm Binocular',
    colour: 'Green',
    reticle: 'None',
    price: "699.00",
    oldPrice: null,
  },
  {
    id: '12',
    image: '/binoculars1.png',
    type: 'Vortex Optics',
    code: 'V202',
    name: 'Vortex Viper HD 10x50mm Binocular',
    colour: 'Green',
    reticle: 'None',
    price: "849.00",
    oldPrice: null,
  },
  {
    id: '13',
    image: '/binoculars1.png',
    type: 'Vortex Optics',
    code: 'V203',
    name: 'Vortex Viper HD 12x50mm Binocular',
    colour: 'Green',
    reticle: 'None',
    price: "859.00",
    oldPrice: null,
  },
  {
    id: '14',
    image: '/binoculars1.png',
    type: 'Vortex Optics',
    code: 'TRI-1042',
    name: 'Vortex Triumph HD 10x42mm Binocular',
    colour: 'Green',
    reticle: 'None',
    price: "159.00",
    oldPrice: null,
  },
]

products.forEach(product => product.slug = slugify(product.name))

export default products