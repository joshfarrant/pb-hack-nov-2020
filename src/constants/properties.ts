export type TProperty = {
  id: string;
  price: number;
  imgAlt: string;
  imgSrc: string;
  address: string;
  propertyType: string;
  description: string;
};

const description =
  'An extremely well presented, four bedroom, detached family home with driveway and garage in an easily accessible position on this popular residential development. The well appointed spacious and flexible family accommodation is over two floors.\nThe ground floor offers entrance hall with central staircase, living room, dining room, study, kitchen, utility and cloakroom. Upstairs boasts a gallery landing, four double bedrooms, an en-suite shower room and family bathroom in addition to a large loft space.\nExternally there is a driveway, garage and pleasant enclosed rear garden. The property benefits from Upvc double glazing and gas fired central heating. The property is situated on the well established and sought after Darwin Park estate within walking distance of local amenities.\nLichfield City centre is a short distance away with its wide range of shops, restaurants and other attractions whilst also being conveniently located for good local schooling and a number of supermarkets and retail parks.\nCommuter routes include A38, A5 & M6 toll road linking the midlands motorway network with both cross & inter city railway services available.';

export const PROPERTIES: TProperty[] = [
  {
    id: '1',
    price: 300_000,
    imgAlt: 'large house',
    imgSrc: '/assets/images/home-1.jpg',
    address: '1 Farrant Close, Joshville, JF 2DG',
    propertyType: '5 Bedroom detached house',
    description,
  },
  {
    id: '2',
    price: 145_500,
    imgAlt: 'small house',
    imgSrc: '/assets/images/home-2.jpg',
    address: '28 Harper Road, Butterville, IC3 INB',
    propertyType: '1 Bedroom shed',
    description,
  },
  {
    id: '3',
    price: 780_000,
    imgAlt: 'palace',
    imgSrc: '/assets/images/home-3.jpg',
    address: '1 Myles Avenue, Worcestershire, W5 3SU',
    propertyType: '75 Bedroom semi-detached palace',
    description,
  },
  {
    id: '4',
    price: 500_000,
    imgAlt: 'caravan',
    imgSrc: '/assets/images/home-4.jpg',
    address: '5 Zaburdejeva Street, Wolverhampton, WS5 1GK',
    propertyType: '3 Bedroom mobile home',
    description,
  },
  {
    id: '5',
    price: 360_000,
    imgAlt: 'large house',
    imgSrc: '/assets/images/home-5.jpg',
    address: '12 Kent Road, Tamworth, B79 1HK',
    propertyType: '4 Bedroom detached house',
    description,
  },
];
