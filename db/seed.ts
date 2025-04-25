import {PrismaClient} from '@prisma/client'

const sampleData = {
    products: [
      {
        name: "Wireless Noise Cancelling Headphones",
        slug: "wireless-noise-cancelling-headphones",
        category: "Electronics",
        description: "Premium over-ear wireless headphones with active noise cancellation and long battery life.",
        images: [
          "https://example.com/images/headphones1.jpg",
          "https://example.com/images/headphones2.jpg"
        ],
        price: 199.99,
        
        rating: 4.5,
        numReviews: 132,
        stock: 25,
        banner: "https://example.com/images/headphones-banner.jpg"
      },
      {
        name: "Ergonomic Office Chair",
        slug: "ergonomic-office-chair",
        category: "Furniture",
        description: "Comfortable and adjustable office chair with lumbar support and breathable mesh.",
        images: [
          "https://example.com/images/chair1.jpg",
          "https://example.com/images/chair2.jpg"
        ],
        price: 149.99,
        rating: 4.3,
        numReviews: 89,
        stock: 18,
        banner: "https://example.com/images/chair-banner.jpg"
      },
      {
        name: "Stainless Steel Water Bottle",
        slug: "stainless-steel-water-bottle",
        category: "Kitchen",
        description: "Double-walled, vacuum-insulated stainless steel water bottle keeps drinks hot or cold.",
        images: [
          "https://example.com/images/bottle1.jpg",
          "https://example.com/images/bottle2.jpg"
        ],
        price: 24.99,
        rating: 4.8,
        numReviews: 205,
        stock: 50,
        banner: "https://example.com/images/bottle-banner.jpg"
      },
      {
        name: "4K Smart LED TV 55-inch",
        slug: "4k-smart-led-tv-55-inch",
        category: "Electronics",
        description: "Experience stunning visuals and smart features with this 55-inch 4K Ultra HD Smart TV.",
        images: [
          "https://example.com/images/tv1.jpg",
          "https://example.com/images/tv2.jpg"
        ],
        price: 499.99,
        rating: 4.6,
        numReviews: 310,
        stock: 12,
        banner: "https://example.com/images/tv-banner.jpg"
      },
      {
        name: "Running Shoes for Men",
        slug: "running-shoes-for-men",
        category: "Footwear",
        description: "Lightweight, breathable running shoes designed for comfort and performance.",
        images: [
          "https://example.com/images/shoes1.jpg",
          "https://example.com/images/shoes2.jpg"
        ],
        price: 74.99,
        rating: 4.2,
        numReviews: 143,
        stock: 30,
        banner: "https://example.com/images/shoes-banner.jpg"
      },
      {
        name: "Wireless Gaming Mouse",
        slug: "wireless-gaming-mouse",
        category: "Gaming",
        description: "High precision wireless gaming mouse with customizable RGB lighting and programmable buttons.",
        images: [
          "https://example.com/images/mouse1.jpg",
          "https://example.com/images/mouse2.jpg"
        ],
        price: 59.99,
        rating: 4.7,
        numReviews: 178,
        stock: 40,
        banner: "https://example.com/images/mouse-banner.jpg"
      }
    ]
  };
  

async function main() {
    const prisma = new PrismaClient();
    await prisma.product.deleteMany();

    await prisma.product.createMany({data: sampleData.products})
    console.log('Data seeded successfully')
}

main();