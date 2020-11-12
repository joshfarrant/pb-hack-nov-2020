export type TProperty = {
  id: string;
  price: number;
  imgAlt: string;
  imgSrc: string;
  address: string;
  propertyType: string;
  description: string;
};

export const PROPERTIES: TProperty[] = [
  {
    id: '1',
    price: 300_000,
    imgAlt: 'large house',
    imgSrc: '/assets/images/home-1.jpg',
    address: '1 Farrant Close, Joshville, JF 2DG',
    propertyType: '5 Bedroom detached house',
    description:
      'Fusce bibendum vehicula ultrices. Integer iaculis cursus blandit. Suspendisse tincidunt ex vel felis ultricies, a euismod lectus venenatis. Fusce dictum quam orci, at ornare lectus iaculis eu.',
  },
  {
    id: '2',
    price: 145_500,
    imgAlt: 'small house',
    imgSrc: '/assets/images/home-2.jpg',
    address: '28 Harper Road, Butterville, IC3 INB',
    propertyType: '1 Bedroom shed',
    description:
      'Nunc vehicula cursus dui a vulputate. Integer iaculis risus ac enim venenatis iaculis. Vestibulum sit amet risus dui.',
  },
  {
    id: '3',
    price: 780_000,
    imgAlt: 'palace',
    imgSrc: '/assets/images/home-3.jpg',
    address: '1 Myles Avenue, Worcestershire, W5 3SU',
    propertyType: '75 Bedroom semi-detached palace',
    description:
      'Proin laoreet felis in libero porta fringilla ut quis lectus. Suspendisse vel egestas enim, non finibus turpis.',
  },
  {
    id: '4',
    price: 500_000,
    imgAlt: 'caravan',
    imgSrc: '/assets/images/home-4.jpg',
    address: '5 Zaburdejeva Street, Wolverhampton, WS5 1GK',
    propertyType: '3 Bedroom mobile home',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus non dolor vitae lobortis.',
  },
  {
    id: '5',
    price: 360_000,
    imgAlt: 'large house',
    imgSrc: '/assets/images/home-5.jpg',
    address: '12 Kent Road, Tamworth, B79 1HK',
    propertyType: '4 Bedroom detached house',
    description:
      'Vestibulum dapibus commodo semper. Cras et turpis eget ligula scelerisque interdum. Ut justo magna, blandit nec finibus et, tincidunt a nisi.',
  },
];
