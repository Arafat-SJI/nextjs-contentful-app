'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const HeaderPage: React.FC = () => {
    const [navigationItems, setNavigationItems] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchHeaderData = async () => {
            try {
                const response = await fetch('https://cdn.contentful.com/spaces/jt1bgu1lglsv/entries?content_type=header', {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`, 
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                const headerEntry = data.items[0];

                if (!headerEntry || !headerEntry.fields.navigation) {
                    throw new Error('No navigation found');
                }

                const includes = data.includes?.Entry || [];
                const navItems = headerEntry.fields.navigation.map((navLink: any) => {
                    const navItem = includes.find((entry: any) => entry.sys.id === navLink.sys.id);
                    return navItem ? {
                        nav: navItem.fields.nav,
                        url: navItem.fields.url,
                    } : null;
                }).filter(Boolean); 

                setNavigationItems(navItems);
            } catch (err) {
                console.error('Error fetching header data:', err);
                setError('Failed to load header data. Please try again later.');
            }
        };

        fetchHeaderData();
    }, []);

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    if (navigationItems.length === 0) {
        return <div className="text-gray-500">Loading...</div>;
    }

    return (
        <header className="bg-gray-800 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-lg font-bold">
                    Arafat&Iraz
                </div>
                <nav className="flex space-x-4">
                    {navigationItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.url}
                            className="hover:bg-gray-700 px-3 py-2 rounded transition duration-200"
                        >
                            {item.nav}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default HeaderPage;