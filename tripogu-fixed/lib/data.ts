export type Place = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  distance: string;
  rating: number;
  reviews: string;
  image: string;
  overview: string;
  highlights: string[];
  tags: string[];
  opening: string;
  entry: string;
  bestTime: string;
  latitude: number;
  longitude: number;
};

export type Route = {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  distance: string;
  difficulty: string;
  rating: number;
  image: string;
  summary: string;
  stops: string[];
};

export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  image: string;
  category: string;
  body: string[];
};

export const categories = [
  'All',
  'Nature',
  'Waterfalls',
  'Routes',
  'Culture',
  'Food',
  'Stay',
  'Adventure',
];

export const popularSearches = ['Nandi Hills', 'Coorg', 'Hampi', 'Gokarna', 'Mysore', 'Yana', 'Chikmagalur'];

export const places: Place[] = [
  {
    slug: 'mattigatta-falls',
    title: 'Mattigatta Falls',
    subtitle: 'Waterfall • Forest trail',
    category: 'Nature',
    distance: '5 min away',
    rating: 4.6,
    reviews: '126 reviews',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    overview:
      'A scenic waterfall with a short forest approach, ideal for day trips, photography, and a quick nature break. The trail is easy to follow and the viewpoints are rewarding in both sunrise and monsoon seasons.',
    highlights: ['Easy access', 'Great photo spots', 'Family friendly'],
    tags: ['Open now', 'Parking', 'Guide available'],
    opening: 'Open daily 6:00 AM – 6:30 PM',
    entry: 'Entry fee may apply on weekends',
    bestTime: 'July to January',
    latitude: 14.214,
    longitude: 74.857,
  },
  {
    slug: 'bhadra-wildlife-sanctuary',
    title: 'Bhadra Wildlife Sanctuary',
    subtitle: 'Wildlife • Nature reserve',
    category: 'Adventure',
    distance: '40 min drive',
    rating: 4.4,
    reviews: '98 reviews',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    overview:
      'A calm, protected forest region with rich biodiversity, boat safaris, and scenic roads. Perfect for travelers who prefer long drives, wildlife spotting, and a quieter, immersive stay.',
    highlights: ['Safari access', 'Birding', 'Scenic roads'],
    tags: ['Permit', 'Nature', 'Boating'],
    opening: 'Open 6:00 AM – 5:30 PM',
    entry: 'Protected area entry rules apply',
    bestTime: 'October to March',
    latitude: 13.745,
    longitude: 75.638,
  },
  {
    slug: 'gokarna-beach-escape',
    title: 'Gokarna’s Peaceful Beach Escape',
    subtitle: 'Beach • Coastal walk',
    category: 'Nature',
    distance: '2 hr drive',
    rating: 4.8,
    reviews: '281 reviews',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    overview:
      'A relaxed coastal destination with cliff walks, quiet coves, and beach cafés. It works well as a weekend escape or a multi-stop Karnataka route itinerary.',
    highlights: ['Sunset views', 'Beach cafés', 'Walkable route'],
    tags: ['Coast', 'Sunset', 'Weekend trip'],
    opening: 'Always open',
    entry: 'Free public beaches',
    bestTime: 'November to February',
    latitude: 14.549,
    longitude: 74.318,
  },
  {
    slug: 'yana-rocks',
    title: 'Yana Rocks',
    subtitle: 'Monolith • Trek',
    category: 'Adventure',
    distance: '1 hr 20 min',
    rating: 4.7,
    reviews: '165 reviews',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Famous for dramatic limestone formations and a forest walk that feels remote but accessible. Great for route-based exploration and short trekking plans.',
    highlights: ['Trek route', 'Ancient rocks', 'Nature trail'],
    tags: ['Trek', 'Hike', 'Photo stop'],
    opening: 'Open daylight hours',
    entry: 'Nominal parking fees possible',
    bestTime: 'October to February',
    latitude: 14.543,
    longitude: 74.621,
  },
];

export const routes: Route[] = [
  {
    slug: 'western-ghats-viewpoint-route',
    title: 'Western Ghats Viewpoint Route Map',
    subtitle: 'Road trip • 1 day • 120 km',
    duration: '6–8 hours',
    distance: '120 km',
    difficulty: 'Easy',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    summary:
      'A scenic loop with hill viewpoints, waterfalls, and a few food stops. The route is designed to be used from map + results screens with a clear stop-by-stop flow.',
    stops: ['Start point', 'Coffee stop', 'Waterfall', 'Viewpoint', 'Return loop'],
  },
  {
    slug: 'karnataka-coastal-escape',
    title: 'Karnataka Coastal Escape',
    subtitle: 'Beach route • 2 days • 210 km',
    duration: '2 days',
    distance: '210 km',
    difficulty: 'Moderate',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
    summary:
      'A longer coastal route combining beaches, cliff views, viewpoints, and cafe breaks. Good for saved route collections and blog coverage.',
    stops: ['Gokarna', 'Cliff cafés', 'Beaches', 'Sunset point', 'Overnight stay'],
  },
  {
    slug: 'monsoon-waterfall-circuit',
    title: 'Monsoon Waterfall Circuit',
    subtitle: 'Nature route • 1 day • 95 km',
    duration: '5–7 hours',
    distance: '95 km',
    difficulty: 'Easy',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200&q=80',
    summary:
      'A compact waterfall route with lush monsoon stops and short walks. Designed for quick browsing on mobile and richer exploration on desktop.',
    stops: ['Town start', 'Falls 1', 'Falls 2', 'Local lunch', 'Back route'],
  },
];

export const blogs: Blog[] = [
  {
    slug: 'gokarna-trip-guide',
    title: 'Gokarna: Karnataka’s Peaceful Beach Escape',
    excerpt:
      'A complete guide to planning a slow beach trip with route ideas, places to stay, and the best time to visit.',
    author: 'Tripogu Team',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80',
    category: 'Beach travel',
    body: [
      'Gokarna works well as a weekend escape because the route can be broken into compact segments. You can plan sightseeing, beach time, and food stops without long transit gaps.',
      'For a better experience, save one route and one place at a time. That keeps the map focused and makes the mobile flow less crowded.',
      'This blog layout intentionally mirrors the reference with a strong hero, readable article width, and supporting image cards in the content body.',
    ],
  },
  {
    slug: 'waterfall-season-guide',
    title: 'How to plan monsoon waterfall routes safely',
    excerpt:
      'Best practices for route planning, weather checks, packing, and safety when visiting waterfalls during rainy months.',
    author: 'Ananya Rao',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1456615825686-4791f11c3b14?auto=format&fit=crop&w=1200&q=80',
    category: 'Safety',
    body: [
      'Use route cards to compare access time, elevation, and the number of stops before you leave. That keeps the experience predictable and easier to save.',
      'On mobile, the best pattern is a sticky search bar followed by result cards and a bottom navigation rail.',
      'On desktop, a split map-and-results layout works better for browsing and filtering in one screen.',
    ],
  },
  {
    slug: 'weekend-road-trip-checklist',
    title: 'A compact weekend road trip checklist',
    excerpt:
      'A simple, practical checklist for planning routes, accommodation, food, and saved places in one place.',
    author: 'Tripogu Editors',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    category: 'Planning',
    body: [
      'Keep the first screen focused on the map and the most relevant results. This reduces choice overload and improves search flow.',
      'Saved items should separate places and routes so users can return to either quickly.',
      'A Material 3 shell uses rounded surfaces, clear hierarchy, and strong state feedback on filters and buttons.',
    ],
  },
];

export const travelHubs = [
  { name: 'Booking.com', category: 'Hotels', badge: 'Visit' },
  { name: 'Agoda', category: 'Deals', badge: 'Visit' },
  { name: 'MakeMyTrip', category: 'Holiday packages', badge: 'Visit' },
  { name: 'Tripadvisor', category: 'Travel reviews', badge: 'Visit' },
  { name: 'redBus', category: 'Bus tickets', badge: 'Visit' },
  { name: 'ixigo', category: 'Travel tools', badge: 'Visit' },
  { name: 'Zoomcar', category: 'Car rentals', badge: 'Visit' },
  { name: 'Decathlon', category: 'Sports gear', badge: 'Visit' },
];

export const filters = {
  categories: ['Tourist attractions', 'Natural spots', 'Temples', 'Waterfalls', 'Routes', 'Cafés', 'Stays', 'Trails'],
  features: ['Family friendly', 'Parking', 'Open now', 'Guided tour', 'Weekend trip', 'Budget', 'Photography', 'Adventure'],
};

export const savedListings = places.slice(0, 3);
export const savedRoutes = routes.slice(0, 2);
