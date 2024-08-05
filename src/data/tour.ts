import arunachal_nagaland from '../assets/arunachal_nagaland.jpg';
import arunachal_pradesh from '../assets/arunachal_pradesh.jpg';
import assam_arunachal_pradesh from '../assets/assam_arunachal_pradesh.jpg';
// import assam_meghalaya_arunachal from '../assets/assam_meghalaya_arunachal.jpg';
// import assam_meghalaya_nagaland from '../assets/assam_meghalaya_nagaland.jpg';
import assam_meghalaya from '../assets/assam_meghalaya.jpg';
import bhutan from '../assets/bhutan.jpg';
import kashmir from '../assets/kashmir.jpg';
import kerala from '../assets/kerala.jpg';
import kashmir_ladakh from '../assets/kashmir_ladakh.jpg';
import meghalaya from '../assets/meghalaya.jpg';
import nagaland_manipur_mizoram from '../assets/nagaland_manipur_mizoram.jpg';
import rajasthan from '../assets/rajasthan.jpg';
import shimla_manali from '../assets/shimla_manali.jpg';
import sikkim from '../assets/sikkim.jpg';
import sikkim_darjeeling from '../assets/sikkim_darjeeling.jpg';
import assam from '../assets/assam.jpg';
import nepal from '../assets/nepal.jpg';
// import kamakhya from '../assets/kamakhya.webp';

export interface TourType {
  slno: string;
  state: string;
  image: string;
  placesCovered: string;
  days: number;
  nights: number;
  itineraryCode: string;
}

const tours: TourType[] = [
  {
    slno: '1',
    state: 'Arunachal Nagaland',
    image: arunachal_nagaland,
    placesCovered: 'Bomdila(1N), Tawang(2N), Dirang(1N), Kohima(3N)',
    days: 8,
    nights: 7,
    itineraryCode: '5'
  },
  {
    slno: '2',
    state: 'Arunachal Pradesh',
    image: arunachal_pradesh,
    placesCovered: 'Bhalukpong(1N), Dirang(1N), Tawang(3N), Bomdila(1N)',
    days: 7,
    nights: 6,
    itineraryCode: '4'
  },
  {
    slno: '3',
    state: 'Assam',
    image: assam,
    placesCovered: 'Kaziranga(1N), Majuli(2N), Tinsukia(1N), Golden Pagoda(1N), Dibrusaikhowa(1N), Dibrugarh(2N)',
    days: 9,
    nights: 8,
    itineraryCode: '12'
  },
  // {
  //   slno: '4',
  //   state: 'Assam',
  //   image: kamakhya,
  //   placesCovered: 'Guwahati(3N)',
  //   days: 4,
  //   nights: 3,
  //   itineraryCode: '13'
  // },
  // {
  //   slno: '5',
  //   state: 'Assam',
  //   image: sibsagar,
  //   placesCovered: 'Kaziranga(1N), Sibsagar(1N)',
  //   days: 3,
  //   nights: 2,
  //   itineraryCode: '10'
  // },
  {
    slno: '6',
    state: 'Assam Arunachal Pradesh',
    image: assam_arunachal_pradesh,
    placesCovered: 'Kaziranga(1N), Sibsagar(1N), Dibrugarh(1N), Roing(2N), Anini(2N)',
    days: 8,
    nights: 7,
    itineraryCode: '11'
  },
  {
    slno: '7',
    state: 'Assam Meghalaya',
    image: assam_meghalaya,
    placesCovered: 'Baghmara(2N), Shillong(1N), Jowai(1N), Shnongpdeng(1N), Cherrapunjee(1N), Guwahati(2N), Kaziranga(2N)',
    days: 11,
    nights: 10,
    itineraryCode: '2'
  },
  // {
  //   slno: '8',
  //   state: 'Assam Meghalaya Arunachal',
  //   image: assam_meghalaya_arunachal,
  //   placesCovered: 'Dirang(1N), Tawang(3N), Bomdila(1N), Kaziranga(1N), Shillong(3N), Guwahati(1N)',
  //   days: 11,
  //   nights: 10,
  //   itineraryCode: '3'
  // },
  // {
  //   slno: '9',
  //   state: 'Assam Meghalaya Nagaland',
  //   image: assam_meghalaya_nagaland,
  //   placesCovered: 'Shillong(2N), Cherrapunjee(2N), Dawki(1N), Guwahati(1N), Kaziranga(1N), Kohima(3N), Dzuko valley(1N)',
  //   days: 12,
  //   nights: 11,
  //   itineraryCode: '6'
  // },
  {
    slno: '11',
    state: 'Meghalaya',
    image: meghalaya,
    placesCovered: 'Shillong(2N), Mawlynnong(1N), Cherrapunjee(2N)',
    days: 6,
    nights: 5,
    itineraryCode: '1'
  },
  {
    slno: '12',
    state: 'Mizoram',
    image: nagaland_manipur_mizoram,
    placesCovered: 'Aizawl(3N), Champhai(1N), Aizawl(1N)',
    days: 6,
    nights: 5,
    itineraryCode: '7'
  },
  {
    slno: '13',
    state: 'Nagaland Manipur Mizoram',
    image: nagaland_manipur_mizoram,
    placesCovered: 'Kohima(3N), Imphal(3N), Aizawl(3N)',
    days: 10,
    nights: 9,
    itineraryCode: '8'
  },
  {
    slno: '14',
    state: 'Sikkim',
    image: sikkim,
    placesCovered: 'Gangtok(4N), Lachen(1N), Lachung(1N), Pelling(1N)',
    days: 8,
    nights: 7,
    itineraryCode: '18'
  },
  {
    slno: '15',
    state: 'Sikkim Darjeeling',
    image: sikkim_darjeeling,
    placesCovered: 'Gangtok(4N), Lachen(1N), Lachung(1N), Pelling(2N), Darjeeling(2N)',
    days: 11,
    nights: 10,
    itineraryCode: '19'
  },
  {
    slno: '16',
    state: 'Bhutan',
    image: bhutan,
    placesCovered: 'Jaigaon(1N), Thimphu(2N), Paro(2N)',
    days: 6,
    nights: 5,
    itineraryCode: '21'
  },
  {
    slno: '17',
    state: 'Nepal',
    image: nepal, // Assuming there is no specific image for Nepal
    placesCovered: 'Kathmandu(3N), Pokhara(1N)',
    days: 5,
    nights: 4,
    itineraryCode: '20'
  },
  {
    slno: '18',
    state: 'Rajasthan',
    image: rajasthan,
    placesCovered: 'Udaipur(2N), Jaisalmer(2N), Jodhpur(1N)',
    days: 6,
    nights: 5,
    itineraryCode: '22'
  },
  {
    slno: '19',
    state: 'Kerala',
    image: kerala,
    placesCovered: 'Munnar(2N), Thekkady(1N), Alleppey(1N), Kochi(1N)',
    days: 6,
    nights: 5,
    itineraryCode: '16'
  },
  {
    slno: '20',
    state: 'Kashmir Ladakh',
    image: kashmir_ladakh,
    placesCovered: 'Srinagar(1N), Kargil(1N), Leh(3N), Nubra(2N), Pangong(1N)',
    days: 9,
    nights: 8,
    itineraryCode: '14'
  },
  {
    slno: '21',
    state: 'Kashmir',
    image: kashmir,
    placesCovered: 'Srinagar(2N), Pahalgam(1N), Gulmarg(2N), Srinagar Houseboat(1N)',
    days: 7,
    nights: 6,
    itineraryCode: '15'
  },
  {
    slno: '22',
    state: 'Shimla Manali',
    image: shimla_manali,
    placesCovered: 'Shimla(2N), Manali(3N)',
    days: 6,
    nights: 5,
    itineraryCode: '17'
  },
  {
    slno: '23',
    state: 'test Assam Meghalaya Nagaland',
    image: assam_meghalaya,
    placesCovered: 'Guwahati(2N), Shillong(2N), Cherrapunjee(2N), Kaziranga(2N)',
    days: 8,
    nights: 7,
    itineraryCode: '67'
  }
];

export default tours;
