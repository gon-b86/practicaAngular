import { IPost } from "../interface/ipost.interface"

export const POSTS: IPost[] = [
    {
        id: 1,
        title: 'Exploring the Beaches of Hawaii',
        text: 'Discover the stunning beaches of Hawaii, from Waikiki to the hidden gems of the islands.',
        author: 'Jane Doe',
        image: 'https://i.natgeofe.com/k/f576c284-661a-4046-ba51-fa95699e1a8b/hawaii-beach.png',
        
        date: new Date('2023-01-01').toISOString().split('T')[0],
        

        category: 'Playa'
    },
    {
        id: 2,
        title: 'Hiking the Rocky Mountains',
        text: 'An adventure through the Rocky Mountains, exploring the best hiking trails and scenic views.',
        author: 'John Smith',
        image: 'https://cdn.pixabay.com/photo/2023/06/10/05/11/himalyas-8053173_1280.jpg',
        date: new Date('2023-02-01').toISOString().split('T')[0],
        category: 'Montaña'
    },
    {
        id: 3,
        title: 'A Guide to New York City',
        text: 'Your ultimate guide to New York City, covering the top attractions, restaurants, and hidden spots.',
        author: 'Emily Johnson',
        image: 'https://hips.hearstapps.com/hmg-prod/images/nueva-york-1521191396.jpg',
        date: new Date('2023-03-01').toISOString().split('T')[0],
        category: 'Ciudad'
    },
    {
        id: 4,
        title: 'Life in the Countryside',
        text: 'Experience the tranquility and beauty of rural life, with tips on farming, gardening, and more.',
        author: 'Michael Brown',
        image: 'https://media.istockphoto.com/id/2152642033/es/foto/nature-reserve-park-parque-natural-da-ribeira-dos-caldeiroes-sao-miguel-island-azores-portugal.jpg?s=1024x1024&w=is&k=20&c=UEOmy3OEgrRJWlEi38qNFoyPwuAWCCNzwLaX1pOO_T8=',
        date: new Date('2023-04-01').toISOString().split('T')[0],
        category: 'Rural'
    },
    {
        id: 5,
        title: 'Top Music Festivals Around the World',
        text: 'A look at the best music festivals around the world, from Coachella to Glastonbury.',
        author: 'Sarah Davis',
        image: 'https://offloadmedia.feverup.com/barcelonasecreta.com/wp-content/uploads/2018/04/09111446/unite-with-tomorrowland-spain-1024x597.jpg',
        date: new Date('2023-05-01').toISOString().split('T')[0],
        category: 'Festivales'
    },
    {
        id: 6,
        title: 'Beach Vacation in the Maldives',
        text: 'Plan your perfect beach vacation in the Maldives, with tips on resorts, activities, and more.',
        author: 'David Wilson',
        image: 'https://www.andbeyond.com/wp-content/uploads/sites/5/maldives-six-senses-laamu4.jpg',
        date: new Date('2023-06-01').toISOString().split('T')[0],
        category: 'Playa'
    },
    {
        id: 7,
        title: 'Climbing Mount Everest',
        text: 'A thrilling account of climbing Mount Everest, with advice for aspiring mountaineers.',
        author: 'Laura Martinez',
        image: 'https://fotografias.larazon.es/clipping/cmsimages02/2019/08/12/C78CBB10-61E6-4805-B764-E19589616409/98.jpg?crop=957,538,x0,y204&width=1900&height=1069&optimize=low&format=webply',
        date: new Date('2023-07-01').toISOString().split('T')[0],
        category: 'Montaña'
    },
    {
        id: 8,
        title: 'Exploring Tokyo',
        text: 'Discover the vibrant city of Tokyo, from its bustling streets to its serene temples.',
        author: 'James Anderson',
        image: 'https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_6000,h_3375,c_limit/tokyoGettyImages-1031467664.jpeg',
        date: new Date('2023-08-01').toISOString().split('T')[0],
        category: 'Ciudad'
    },
    {
        id: 9,
        title: 'Rural Retreats in Tuscany',
        text: 'Find peace and relaxation in the rural retreats of Tuscany, with tips on the best places to stay.',
        author: 'Patricia Thomas',
        image: 'https://www.viajaritalia.com/img/toscana.jpg',
        date: new Date('2023-09-01').toISOString().split('T')[0],
        category: 'Rural'
    }
]
