import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5"
        )}>
            <div className='container mx-auto flex items-center justify-between px-6'>
                {/* Logo */}
                <a className='text-xl font-bold text-primary' href="#hero">
                    <span className='text-foreground'>Susheni Kalubowila</span>
                </a>

                {/* Navigation and Toggle Area */}
                <div className="flex items-center gap-2 md:gap-6">
                    {/* Desktop Nav Items */}
                    <div className='hidden md:flex space-x-8'>
                        {navItems.map((item, key) => (
                            <a key={key} href={item.href} className='text-foreground/80 hover:text-primary font-medium transition-colors'>
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Theme Toggle - Visible on both Mobile & Desktop */}
                    <ThemeToggle />

                    {/* Mobile Menu Button - Only visible on small screens */}
                    <button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className='md:hidden p-2 text-foreground z-50 hover:text-primary transition-colors'
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Full-Screen Menu Overlay */}
                <div className={cn(
                    "fixed inset-0 w-screen h-screen z-[999] bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-300 md:hidden",
                    isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"
                )}>

                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-5 right-6 p-2 text-foreground"
                    >
                        <X size={24} />
                    </button>

                    <div className='flex flex-col space-y-8 text-2xl text-center font-semibold'>
                        {navItems.map((item, key) => (
                            <a key={key} href={item.href} className='text-foreground/80 hover:text-primary transition-colors' onClick={() => setIsMenuOpen(false)}>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};