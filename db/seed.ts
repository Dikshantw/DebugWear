import {PrismaClient} from '@prisma/client'

const sampleData = {
    products: [
      {
        name: "Wireless Noise Cancelling Headphones",
        slug: "wireless-noise-cancelling-headphones",
        category: "Electronics",
        description: "Premium over-ear wireless headphones with active noise cancellation and long battery life.",
        images: [
          "/cap.png"
        ],
        price: 199.99,
        rating: 4.5,
        numReviews: 132,
        stock: 25
      },
      {
        name: "Ergonomic Office Chair",
        slug: "ergonomic-office-chair",
        category: "Furniture",
        description: "Comfortable and adjustable office chair with lumbar support and breathable mesh.",
        images: [
          "/full-length.png"
        ],
        price: 149.99,
        rating: 4.3,
        numReviews: 89,
        stock: 18
      },
      {
        name: "Fork it!",
        slug: "fork-it",
        category: "T-shirt",
        description: "For the people who ship",
        images: [
          "/fork-it.png",
        ],
        price: 24.99,
        rating: 4.8,
        numReviews: 205,
        stock: 50,
        banner: "/fork-it.png"
      },
      {
        name: "4K Smart LED TV 55-inch",
        slug: "4k-smart-led-tv-55-inch",
        category: "Electronics",
        description: "Experience stunning visuals and smart features with this 55-inch 4K Ultra HD Smart TV.",
        images: [
          "/jacket.png"
        ],
        price: 499.99,
        rating: 4.6,
        numReviews: 310,
        stock: 12
      },
      {
        name: "Running Shoes for Men",
        slug: "running-shoes-for-men",
        category: "Footwear",
        description: "Lightweight, breathable running shoes designed for comfort and performance.",
        images: [
          "/jeansJacket.png"
        ],
        price: 74.99,
        rating: 4.2,
        numReviews: 143,
        stock: 30
      },
      {
        name: "Wireless Gaming Mouse",
        slug: "wireless-gaming-mouse",
        category: "Gaming",
        description: "High precision wireless gaming mouse with customizable RGB lighting and programmable buttons.",
        images: [
          "/tshirt.png"
        ],
        price: 59.99,
        rating: 4.7,
        numReviews: 178,
        stock: 40
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