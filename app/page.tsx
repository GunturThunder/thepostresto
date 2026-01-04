"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type MenuItem = {
  name: string;
  price: string;
  detail: string;
  image: string;
};

const imageLibrary = {
  western:
    "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80",
  pizza:
    "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=900&q=80",
  pasta:
    "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=900&q=80",
  asian:
    "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=900&q=80",
  salad:
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
  bites:
    "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=900&q=80",
  drink:
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80",
  breakfast:
    "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=900&q=80",
  dessert:
    "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&w=900&q=80",
};

const menuHighlights = [
  {
    title: "Western Classics",
    description: "Comfort-forward plates with bold sauces and hearty sides.",
    items: [
      {
        name: "The Post Burger",
        price: "155k",
        detail:
          "Beef patty, brioche bun, pickles, lettuce, tomato, caramelized onion, spiced mayo, fries.",
        image: imageLibrary.western,
      },
      {
        name: "Cajun Chicken",
        price: "155k",
        detail:
          "Grilled chicken, diane sauce, mashed potato, grilled veggies, micro herbs.",
        image: imageLibrary.western,
      },
      {
        name: "Grilled Salmon",
        price: "180k",
        detail:
          "Norwegian salmon, mashed potato, mixed salad, creamy lemon capers sauce.",
        image: imageLibrary.western,
      },
    ],
  },
  {
    title: "Pizza & Pasta",
    description: "Stone baked pizza and fresh pasta made daily.",
    items: [
      {
        name: "Beef Pepperoni Pizza",
        price: "130k",
        detail:
          "Italian tomato sauce, mozzarella cheese, beef pepperoni, parmesan, olive oil.",
        image: imageLibrary.pizza,
      },
      {
        name: "Four Cheese Pizza",
        price: "140k",
        detail:
          "Cheesy bechamel, mozzarella, ricotta, gorgonzola, parmesan.",
        image: imageLibrary.pizza,
      },
      {
        name: "Beef Carbonara",
        price: "135k",
        detail:
          "Smoked beef bacon, parmesan, parsley, black pepper, linguine.",
        image: imageLibrary.pasta,
      },
    ],
  },
  {
    title: "Asian & Wok Hey",
    description: "Rice bowls, pho, and smoky wok favorites.",
    items: [
      {
        name: "Ox Tail Fried Rice",
        price: "135k",
        detail:
          "Fried rice with oxtail, green chili, sunny side up, crackers.",
        image: imageLibrary.asian,
      },
      {
        name: "Beef Pho",
        price: "135k",
        detail:
          "Vietnamese rice noodle, beef strip, rich broth, lime, onion, green chili.",
        image: imageLibrary.asian,
      },
      {
        name: "Iga Bakar Taliwang",
        price: "180k",
        detail:
          "Sweet grilled beef ribs with spicy taliwang sauce and steamed rice.",
        image: imageLibrary.asian,
      },
    ],
  },
  {
    title: "Small Bites & Salads",
    description: "Shareable starters and fresh, crunchy bowls.",
    items: [
      {
        name: "Fried Calamari",
        price: "95k",
        detail: "Crispy calamari, spicy sauce, coriander leaf.",
        image: imageLibrary.bites,
      },
      {
        name: "Classic Nachos",
        price: "115k",
        detail:
          "Corn tortilla, pico de gallo, jalapeno, sour cream, salsa.",
        image: imageLibrary.bites,
      },
      {
        name: "Chipotle Chicken Salad",
        price: "90k",
        detail:
          "Grilled chicken, fresh lettuce, corn, tomato, avocado, walnut.",
        image: imageLibrary.salad,
      },
    ],
  },
];

const signatureDrinks: MenuItem[] = [
  {
    name: "Tropical Sunset",
    detail: "Pineapple and citrus with a dash of strawberry.",
    price: "45k",
    image: imageLibrary.drink,
  },
  {
    name: "Agua de Sandia",
    detail: "Fresh watermelon infused with lychee and lemon.",
    price: "45k",
    image: imageLibrary.drink,
  },
  {
    name: "Pink Granada",
    detail: "Dairy beverage blended with pomegranate juice and lemon.",
    price: "45k",
    image: imageLibrary.drink,
  },
  {
    name: "Granada Negra",
    detail: "Pomegranate mocktail shaken with espresso Serenity Blend.",
    price: "45k",
    image: imageLibrary.drink,
  },
  {
    name: "Rose Coco Latte",
    detail: "Rose and roasted coconut milk topped with espresso.",
    price: "50k",
    image: imageLibrary.drink,
  },
  {
    name: "Rose Tropicano",
    detail: "Rose and tropical roasted coconut topped with espresso.",
    price: "45k",
    image: imageLibrary.drink,
  },
  {
    name: "Naranja Negri",
    detail: "Orange juice with soda and espresso Serenity Blend.",
    price: "50k",
    image: imageLibrary.drink,
  },
];

const breakfastItems: MenuItem[] = [
  {
    name: "Big Breakfast",
    detail:
      "Sourdough toast, sausage, beef bacon, tomato, baked beans, eggs, mushroom.",
    price: "130k",
    image: imageLibrary.breakfast,
  },
  {
    name: "The French Toast",
    detail: "Brioche bread, mascarpone creme, banana, honey, berries compote.",
    price: "85k",
    image: imageLibrary.breakfast,
  },
  {
    name: "Smoked Salmon-Avo on Toast",
    detail: "Sourdough toast with poached egg and mixed seed.",
    price: "85k",
    image: imageLibrary.breakfast,
  },
  {
    name: "Croissant Ham & Egg Sandwich",
    detail: "Smoked beef, mayo, hard boiled egg, cheddar, lettuce, tomato.",
    price: "95k",
    image: imageLibrary.breakfast,
  },
];

const dessertItems: MenuItem[] = [
  {
    name: "Creme Brulee",
    detail: "Rich custard base with caramelized sugar crust.",
    price: "37k",
    image: imageLibrary.dessert,
  },
  {
    name: "Dark Chocolate Lava",
    detail: "Warm chocolate cake with vanilla ice cream.",
    price: "65k",
    image: imageLibrary.dessert,
  },
  {
    name: "Fresh Homemade Coffee Tiramisu",
    detail: "Coffee-soaked ladyfingers with creamy mascarpone.",
    price: "85k",
    image: imageLibrary.dessert,
  },
  {
    name: "Burnt Cheesecake",
    detail: "Caramelized cheesecake with vanilla pod and premium honey.",
    price: "65k",
    image: imageLibrary.dessert,
  },
];

const services = [
  {
    title: "Dine-In",
    detail: "Relaxed, all-day seating with full menu service.",
  },
  {
    title: "Takeaway",
    detail: "Grab breakfast, coffee, or dinner on the go.",
  },
  {
    title: "Delivery",
    detail: "Your favorites delivered to home or office.",
  },
  {
    title: "Catering",
    detail: "Custom menus for meetings, shoots, and gatherings.",
  },
  {
    title: "Private Events",
    detail: "Celebrate birthdays, launches, and intimate parties.",
  },
  {
    title: "Group Bookings",
    detail: "Reserve tables for teams or special occasions.",
  },
];

const MenuItemCard = ({
  item,
  onOpen,
}: {
  item: MenuItem;
  onOpen: (item: MenuItem) => void;
}) => (
  <button type="button" className="menu-card" onClick={() => onOpen(item)}>
    <div className="flex items-start justify-between gap-4">
      <span className="menu-card-title">{item.name}</span>
      <span className="menu-card-price">{item.price}</span>
    </div>
    <p className="menu-card-detail">{item.detail}</p>
    <span className="menu-card-pill">View details</span>
  </button>
);

const MenuItemModal = ({
  item,
  onClose,
}: {
  item: MenuItem;
  onClose: () => void;
}) => (
  <div
    className="modal-overlay"
    onClick={(event) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    }}
  >
    <div
      className="modal-card"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.name} details`}
    >
      <div className="modal-image">
        <img src={item.image} alt={`${item.name} photo`} loading="eager" />
      </div>
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-serif text-3xl text-ink">{item.name}</p>
            <p className="mt-2 text-sm text-muted">{item.detail}</p>
          </div>
          <span className="text-xs uppercase tracking-[0.3em] text-muted">
            {item.price}
          </span>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="cta-primary" href="mailto:info@thepostcafe.com">
            Book a Table
          </a>
          <button type="button" className="cta-outline" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default function Home() {
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);

  useEffect(() => {
    if (!activeItem) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveItem(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeItem]);

  const handleOpenItem = (item: MenuItem) => {
    setActiveItem(item);
  };

  const handleCloseItem = () => {
    setActiveItem(null);
  };

  return (
    <div className="relative min-h-screen bg-sand text-ink">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-20" />

      <header className="sticky top-0 z-30 border-b border-line bg-[rgba(244,239,230,0.85)] backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div>
            <p className="font-serif text-xl uppercase tracking-[0.3em] sm:tracking-[0.45em]">
              The Post
            </p>
            <span className="text-xs uppercase tracking-[0.2em] text-muted sm:tracking-[0.35em]">
              Coffee & Eatery
            </span>
          </div>
          <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.28em] text-muted lg:flex">
            <a className="transition hover:text-ink" href="#menu">
              Menu
            </a>
            <a className="transition hover:text-ink" href="#signature">
              Signature
            </a>
            <a className="transition hover:text-ink" href="#breakfast">
              Breakfast
            </a>
            <a className="transition hover:text-ink" href="#dessert">
              Dessert
            </a>
            <a className="transition hover:text-ink" href="#services">
              Services
            </a>
            <a className="transition hover:text-ink" href="#visit">
              Visit
            </a>
          </nav>
          <a className="cta-outline hidden lg:inline-flex" href="mailto:info@thepostcafe.com">
            Book a Table
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section id="home" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6 reveal">
              <p className="text-xs uppercase tracking-[0.25em] text-muted sm:tracking-[0.4em]">
                Cipete, Jakarta Selatan
              </p>
              <h1 className="text-balance font-serif text-4xl font-semibold leading-tight md:text-5xl">
                Comfort food, crafted coffee, and a warm table all day.
              </h1>
              <p className="text-base leading-relaxed text-muted md:text-lg">
                The Post Coffee & Eatery blends Western classics, Asian
                favorites, and signature barista creations in a calm, welcoming
                space. Start early with breakfast from 7am to 3pm and linger for
                lunch, dinner, or a late coffee.
              </p>
              <div className="flex flex-wrap gap-4">
                <a className="cta-primary" href="#menu">
                  Explore Menu
                </a>
                <a className="cta-outline" href="mailto:info@thepostcafe.com">
                  Book a Table
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.3em] text-muted">
                <span>Breakfast 7am - 3pm</span>
                <span>PB1 10% + service 5%</span>
              </div>
            </div>
            <div className="relative flex items-center justify-center reveal reveal-delay-1">
              <div className="absolute -top-6 left-0 h-24 w-24 rounded-full border border-line" />
              <div className="absolute -bottom-10 right-6 h-32 w-32 rounded-full border border-line" />
              <div className="relative w-full max-w-lg overflow-hidden rounded-[36px] border border-line bg-card shadow-soft">
                <Image
                  src="/images/hero-dish.png"
                  alt="Breakfast plate with eggs, toast, and sides"
                  width={1280}
                  height={1240}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[32px] border border-line bg-card p-8 shadow-soft">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                The Post Story
              </p>
              <h2 className="mt-4 font-serif text-3xl">
                Coffee & Eatery with a neighborhood soul.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                The Post is where the aroma of espresso meets comfort-forward
                cuisine. Expect crisp salads, stone baked pizzas, rustic pasta,
                and rice dishes that feel familiar yet refined. Every plate is
                paired with a thoughtful cup, whether you love bright, fruity
                notes or rich, bold roasts.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[28px] border border-line bg-sand-dark p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-muted">
                  Signature Focus
                </p>
                <h3 className="mt-3 font-serif text-2xl">
                  Serenity Blend espresso.
                </h3>
                <p className="mt-3 text-sm text-muted">
                  Balanced espresso base used across our signature barista
                  creations.
                </p>
              </div>
              <div className="rounded-[28px] border border-line bg-sand-dark p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-muted">
                  Fresh Daily
                </p>
                <h3 className="mt-3 font-serif text-2xl">
                  Pasta made with premium ingredients.
                </h3>
                <p className="mt-3 text-sm text-muted">
                  Crafted daily for depth, texture, and comfort.
                </p>
              </div>
              <div className="rounded-[28px] border border-line bg-sand-dark p-6 md:col-span-2">
                <p className="text-xs uppercase tracking-[0.3em] text-muted">
                  All-Day Menu
                </p>
                <h3 className="mt-3 font-serif text-2xl">
                  Western classics, Asian favorites, and artisanal desserts.
                </h3>
                <p className="mt-3 text-sm text-muted">
                  From burgers and rib platters to pho, nasi goreng, and
                  indulgent sweets.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Menu Highlights
              </p>
              <h2 className="mt-4 font-serif text-3xl">
                Crowd favorites across every craving.
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {menuHighlights.map((section) => (
                <div
                  key={section.title}
                  className="rounded-[32px] border border-line bg-card p-6 shadow-soft"
                >
                  <h3 className="font-serif text-2xl">{section.title}</h3>
                  <p className="mt-2 text-sm text-muted">
                    {section.description}
                  </p>
                  <div className="mt-6 space-y-4">
                    {section.items.map((item) => (
                      <MenuItemCard
                        key={item.name}
                        item={item}
                        onOpen={handleOpenItem}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="signature" className="py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1.05fr]">
            <div className="rounded-[36px] border border-line bg-card p-8 shadow-soft">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Signature Barista Creations
              </p>
              <h2 className="mt-4 font-serif text-3xl">
                Crafted drinks with tropical brightness.
              </h2>
              <p className="mt-4 text-sm text-muted">
                Espresso meets fruit, florals, and coconut for a refreshing take
                on coffee mocktails and lattes.
              </p>
              <div className="mt-6 space-y-4">
                {signatureDrinks.map((drink) => (
                  <MenuItemCard
                    key={drink.name}
                    item={drink}
                    onOpen={handleOpenItem}
                  />
                ))}
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="absolute -left-8 -top-10 h-24 w-24 rounded-full border border-line" />
              <div className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-line bg-sand-dark p-6 shadow-soft">
                <Image
                  src="/images/signature-drink.png"
                  alt="Signature drink illustration"
                  width={820}
                  height={800}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-2">
            <div
              id="breakfast"
              className="rounded-[32px] border border-line bg-card p-8 shadow-soft"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Breakfast Menu
              </p>
              <h2 className="mt-4 font-serif text-3xl">
                Served from 7am to 3pm.
              </h2>
              <div className="mt-6 space-y-4">
                {breakfastItems.map((item) => (
                  <MenuItemCard
                    key={item.name}
                    item={item}
                    onOpen={handleOpenItem}
                  />
                ))}
              </div>
            </div>
            <div
              id="dessert"
              className="rounded-[32px] border border-line bg-sand-dark p-8 shadow-soft"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Cravings & Comforts
              </p>
              <h2 className="mt-4 font-serif text-3xl">
                Desserts to pair with your coffee.
              </h2>
              <div className="mt-6 space-y-4">
                {dessertItems.map((item) => (
                  <MenuItemCard
                    key={item.name}
                    item={item}
                    onOpen={handleOpenItem}
                  />
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-line bg-card p-4 text-sm text-muted">
                <p className="text-xs uppercase tracking-[0.3em] text-muted">
                  Pairing Guidelines
                </p>
                <p className="mt-3">
                  Rich desserts pair with bold espresso drinks. Chocolate lovers
                  shine with mocha or Italian roast. Creamy desserts match
                  cappuccino or latte.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Services
              </p>
              <h2 className="mt-4 font-serif text-3xl">
                Everything you need for everyday and special moments.
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-[28px] border border-line bg-card p-6 shadow-soft"
                >
                  <h3 className="font-serif text-2xl">{service.title}</h3>
                  <p className="mt-3 text-sm text-muted">{service.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="visit" className="py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[36px] border border-line bg-card p-8 shadow-soft">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Visit The Post
              </p>
              <h2 className="mt-4 font-serif text-3xl">
                Cipete Dalam No 33, Jakarta Selatan 12410.
              </h2>
              <p className="mt-4 text-sm text-muted">
                Breakfast served 7am to 3pm. Full menu available all day. Contact
                us for group bookings, catering, or private events.
              </p>
              <div className="mt-6 space-y-3 text-sm text-muted">
                <p>
                  <span className="font-semibold text-ink">Instagram:</span> @thepost_id
                </p>
                <p>
                  <span className="font-semibold text-ink">Website:</span> www.thepostcafe.com
                </p>
                <p>
                  <span className="font-semibold text-ink">Email:</span> info@thepostcafe.com
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <a className="cta-primary" href="mailto:info@thepostcafe.com">
                  Make a Booking
                </a>
                <a
                  className="cta-outline"
                  href="https://instagram.com/thepost_id"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div className="rounded-[36px] border border-line bg-sand-dark p-8 shadow-soft">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                At A Glance
              </p>
              <ul className="mt-6 space-y-4 text-sm text-muted">
                <li>
                  <span className="font-semibold text-ink">Cuisine:</span> Western classics, pizza,
                  pasta, Asian favorites, salads, and small bites.
                </li>
                <li>
                  <span className="font-semibold text-ink">Coffee:</span> Signature barista creations
                  featuring Serenity Blend espresso.
                </li>
                <li>
                  <span className="font-semibold text-ink">Desserts:</span> Creme brulee, lava cake,
                  coffee tiramisu, burnt cheesecake, chocolate mousse.
                </li>
                <li>
                  <span className="font-semibold text-ink">Breakfast:</span> Big Breakfast, French
                  Toast, smoked salmon-avo, and more.
                </li>
                <li>
                  <span className="font-semibold text-ink">Notes:</span> Prices subject to PB1 10%
                  and service 5%.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-xs uppercase tracking-[0.3em] text-muted md:flex-row md:items-center md:justify-between">
          <span>THE POST COFFEE & EATERY</span>
          <span>IG @thepost_id</span>
          <span>Cipete Dalam No 33, Jakarta Selatan 12410</span>
        </div>
      </footer>

      {activeItem ? (
        <MenuItemModal item={activeItem} onClose={handleCloseItem} />
      ) : null}
    </div>
  );
}
