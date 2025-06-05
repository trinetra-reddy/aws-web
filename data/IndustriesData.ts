import Image from 'next/image'

export const industriesData = [
    {
        label: 'Hospitality',
        // icon: <UtensilsCrossed size={36} className="text-pink-500" />,
        image: '/assets/Hospital-room.svg',
        alt: 'Hospitality',
        className: 'w-full h-auto rounded-xl',
        desc: 'Streamlined booking, dining, and guest services with powerful digital tools.',
    },
    {
        label: 'E-commerce',
        // icon: <ShoppingCart size={36} className="text-yellow-500" />,
        //   icon: (<Image src="/assets/Ecommerce.svg" alt="Ecommerce" width={600} height={400} className="w-full h-auto rounded-xl" />),
        image: '/assets/Ecommerce.svg',
        alt: 'Ecommerce',
        className: 'w-full h-auto rounded-xl',
        desc: 'Sell smarter with optimized storefronts, carts, and backend logistics.'
    },

    {
        label: 'Automobile',
        // icon: <Car size={36} className="text-green-600" />,
        //   icon: '<Image src="/assets/automobile.svg" alt="Automobile" width={600} height={400} className="w-full h-auto rounded-xl" />',
        image: '/assets/automobile.svg',
        alt: 'Automobile',
        className: 'w-full h-auto rounded-xl',
        desc: 'Automate inventory, bookings, and servicing for the automotive industry.'
    },
    {
        label: 'Real Estate',
        // icon: <Blocks size={36} className="text-purple-600" />, c:\Users\alamu\Downloads\Realestate.svg
        //   icon: '<Image src="/assets/Realestate.svg" alt="Real Estate" width={600} height={400} className="w-full h-auto rounded-xl" />',
        image: '/assets/Realestate.svg',
        alt: 'Real Estate',
        className: 'w-full h-auto rounded-xl',
        desc: 'Showcase listings and manage leads with modern property tech platforms.'
    },
    {
        label: 'Healthcare',
        // icon: <ShieldCheck size={36} className="text-red-600" />,
        //   icon: '<Image src="/assets/Health-care.svg" alt="Health care" width={600} height={400} className="w-full h-auto rounded-xl" />',
        image: '/assets/Health-care.svg',
        alt: 'Health care',
        className: 'w-full h-auto rounded-xl',
        desc: 'Digital solutions for appointment scheduling, records, and patient engagement.'
    },
    {
        label: 'Logistics',
        // icon: <Car size={36} className="text-indigo-500" />, 
        //   icon: '<Image src="/assets/Logistics.svg" alt="Logistics" width={600} height={400} className="w-full h-auto rounded-xl" />',
        image: '/assets/Logistics.svg',
        alt: 'Logistics',
        className: 'w-full h-auto rounded-xl',
        desc: 'Track fleets, optimize deliveries, and manage operations efficiently.'
    },
    {
        label: 'Education',
        // icon: <ShieldCheck size={36} className="text-red-600" />,
        //   icon: '<Image src="/assets/Education.svg" alt="Education" width={600} height={400} className="w-full h-auto rounded-xl" />',
        image: '/assets/Education.svg',
        alt: 'Education',
        className: 'w-full h-auto rounded-xl',
        desc: 'Empowering schools and learners with digital classrooms and portals.'
    }
];