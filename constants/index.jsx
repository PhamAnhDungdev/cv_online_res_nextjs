import { Blocks, CircleEllipsis, ContactRound, House, PackageCheck } from "lucide-react";

export const navbarLinks = [
    {
        label: 'Home',
        route: '/',
        icon: House,
    },
    {
        label: 'About me',
        route: '/aboutme',
        icon: ContactRound,
    },
    {
        label: 'Experiences',
        route: '/experiences',
        icon: PackageCheck,
    },
    {
        label: 'Projects',
        route: '/projects',
        icon: Blocks,
    },
    {
        label: 'Others',
        route: '/others',
        icon: CircleEllipsis,
    },
];
