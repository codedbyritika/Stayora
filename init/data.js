const sampleListings = [


  {
    title: "Aurora Glass Lodge",
    description: "Sleep beneath the northern lights in this modern glass lodge surrounded by snowy landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    },
    price: 9200,
    location: "Tromsø",
    country: "Norway",
  },

  {
    title: "Skyline Penthouse",
    description:
      "Luxury penthouse featuring floor-to-ceiling windows, private terrace, and breathtaking city views.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1748499237782-a7c28d51e8a3?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 8500,
    location: "New York",
    country: "United States",
  },


  {
    title: "Floating Bamboo Retreat",
    description: "A handcrafted bamboo home floating peacefully on a crystal-clear lake with breathtaking sunrise views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    price: 3100,
    location: "Ubud",
    country: "Indonesia",
  },

  {
    title: "Canal View Residence",
    description:
      "Elegant waterfront apartment located in a historic district with modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1775241830194-eee6ce7d1913?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4200,
    location: "Amsterdam",
    country: "Netherlands",
  },

  {
    title: "Desert Moon Camp",
    description: "Experience luxury camping under star-filled skies with traditional hospitality and modern comforts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 2500,
    location: "Merzouga",
    country: "Morocco",
  },

  {
    title: "Alpine Mountain Chalet",
    description:
      "A premium chalet surrounded by snow-capped mountains, perfect for a peaceful getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1671898595422-f69c0e57f728?q=80&w=1240&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 6500,
    location: "Zermatt",
    country: "Switzerland",
  },

  {
    title: "Cherry Blossom Studio",
    description: "A cozy studio apartment just steps away from beautiful cherry blossom parks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    price: 4700,
    location: "Kyoto",
    country: "Japan",
  },

  {
    title: "Marina Bay Luxury Suite",
    description:
      "Contemporary suite offering panoramic waterfront views and world-class facilities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1771556303052-8afa292d0c92?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 7000,
    location: "Singapore",
    country: "Singapore",
  },

  {
    title: "Vintage Railway Cottage",
    description: "A beautifully restored railway station transformed into a charming countryside stay.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464890100898-a385f744067f",
    },
    price: 2800,
    location: "Yorkshire",
    country: "England",
  },

  {
    title: "Santorini Cliffside Villa",
    description:
      "Experience breathtaking sunsets and stunning sea views from this exclusive villa.",
    image: {
      filename: "listingimage",

      url: "https://images.unsplash.com/photo-1688664562000-4c1f7cdb48f8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 9000,
    location: "Santorini",
    country: "Greece",
  },

  {
    title: "Harbor View Loft",
    description: "A stylish loft apartment overlooking a vibrant marina filled with luxury yachts and cafes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 5800,
    location: "Auckland",
    country: "New Zealand",
  },

  {
    title: "Tokyo Smart Apartment",
    description:
      "Modern smart apartment in the heart of the city with seamless connectivity.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1724338542109-0e68d3e7097d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 5000,
    location: "Tokyo",
    country: "Japan",
  },

  {
    title: "Rainforest Canopy House",
    description: "Live among the treetops with panoramic rainforest views and exotic wildlife all around.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    price: 3600,
    location: "Manaus",
    country: "Brazil",
  },

  {
    title: "Dubai Desert Luxury Retreat",
    description:
      "Premium accommodation combining modern luxury with unique desert experiences.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1553522988-49daec855a59?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 10000,
    location: "Dubai",
    country: "United Arab Emirates",
  },

  {
    title: "Paris Boutique Residence",
    description:
      "Stylish apartment located near iconic landmarks and vibrant cultural attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1580654842783-4f4cbcd3ae82?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 6200,
    location: "Paris",
    country: "France",
  },

  {
    title: "Sydney Harbour Apartment",
    description:
      "Modern waterfront apartment with spectacular harbour views and premium amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1714321239479-227f15195c99?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 5800,
    location: "Sydney",
    country: "Australia",
  },

  {
    title: "Bali Oceanfront Villa",
    description:
      "Private villa featuring an infinity pool, tropical gardens, and direct beach access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1764660732920-0746a45e18d5?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 7500,
    location: "Bali",
    country: "Indonesia",
  },

  {
    title: "London Riverside Loft",
    description:
      "Contemporary loft overlooking the Thames, featuring modern interiors and easy access to London's iconic attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    },
    price: 6800,
    location: "London",
    country: "United Kingdom",
  },

  {
    title: "Maldives Overwater Villa",
    description:
      "Luxurious overwater villa with direct lagoon access, private deck, and stunning ocean views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
    },
    price: 15000,
    location: "Maldives",
    country: "Maldives",
  },

  {
    title: "Swiss Lakeside Retreat",
    description:
      "Elegant lakeside retreat surrounded by alpine scenery, perfect for relaxation and adventure.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 7200,
    location: "Lucerne",
    country: "Switzerland",
  },

  {
    title: "Barcelona City Apartment",
    description:
      "Stylish apartment in the heart of Barcelona, steps away from historic landmarks and vibrant nightlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464790719320-516ecd75af6c",
    },
    price: 4900,
    location: "Barcelona",
    country: "Spain",
  },

  {
    title: "Goa Beach House",
    description:
      "Relax by the Arabian Sea in this spacious beach house with private access to pristine shores.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 4200,
    location: "Goa",
    country: "India",
  },

  {
    title: "Iceland Northern Lights Cabin",
    description:
      "Cozy cabin offering unforgettable views of the Northern Lights and Iceland's breathtaking landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618422433457-02c7d5009390?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 8500,
    location: "Reykjavik",
    country: "Iceland",
  },

  {
    title: "Rome Heritage Residence",
    description:
      "Stay in a beautifully restored residence surrounded by centuries of history and culture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1529260830199-42c24126f198",
    },
    price: 5600,
    location: "Rome",
    country: "Italy",
  },

  {
    title: "Cape Town Ocean Escape",
    description:
      "Luxury accommodation with panoramic views of the Atlantic Ocean and Table Mountain.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    },
    price: 6300,
    location: "Cape Town",
    country: "South Africa",
  },

  {
    title: "Banff Mountain Lodge",
    description:
      "Rustic luxury lodge nestled in the Canadian Rockies, surrounded by breathtaking natural beauty.",
    image: {
      filename: "listingimage",

      url: "https://images.unsplash.com/photo-1583878594798-c31409c8ab4a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 7100,
    location: "Banff",
    country: "Canada",
  },

  {
    title: "Seoul Urban Apartments",
    description:
      "Minimalist smart studio apartment located in one of Seoul's most vibrant neighborhoods.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1642681083598-a0242df521d3?q=80&w=385&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4500,
    location: "Seoul",
    country: "South Korea",
  },
];

//exporting sample data as an object
module.exports = { data: sampleListings };