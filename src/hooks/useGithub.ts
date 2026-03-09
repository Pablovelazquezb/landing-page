import { useState, useEffect } from 'react';

export interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string | null;
    stargazers_count: number;
    language: string;
    topics: string[];
    fork: boolean;
    pushed_at: string;
}

export function useGithubProjects(username: string) {
    const [projects, setProjects] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        async function fetchRepos() {
            try {
                const res = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=100`);
                if (!res.ok) throw new Error('Failed to fetch projects');
                const data: Repository[] = await res.json();

                // Define the manually injected projects
                const customProjects: Repository[] = [
                    {
                        id: 10001,
                        name: 'corlynx-site',
                        description: 'A modern landing page designed for Corlynx to showcase their web development services.',
                        html_url: 'https://github.com/Pablovelazquezb/corlynx-site',
                        homepage: 'https://corlynxai.com/',
                        stargazers_count: 0,
                        language: 'TypeScript',
                        topics: ['react', 'nextjs', 'tailwind'],
                        fork: false,
                        pushed_at: new Date().toISOString()
                    },
                    {
                        id: 10002,
                        name: 'inventory-management-software',
                        description: 'A comprehensive inventory management system for tracking internal business stock and logistics.',
                        html_url: 'https://github.com/Pablovelazquezb/inventory-management-software',
                        homepage: 'https://inventory-management-software-bice.vercel.app/',
                        stargazers_count: 0,
                        language: 'TypeScript',
                        topics: ['react', 'inventory', 'management'],
                        fork: false,
                        pushed_at: new Date().toISOString()
                    },
                    {
                        id: 10003,
                        name: 'corlynx-bot-platform',
                        description: 'An AI-powered bot platform to automate customer interactions and streamline communications.',
                        html_url: 'https://github.com/Pablovelazquezb/corlynx-bot-platform',
                        homepage: 'https://corlynx-bot-platform.vercel.app',
                        stargazers_count: 0,
                        language: 'TypeScript',
                        topics: ['ai', 'bot', 'platform'],
                        fork: false,
                        pushed_at: new Date().toISOString()
                    },
                    {
                        id: 10004,
                        name: 'zoo',
                        description: 'A zoo management system with database schemas and analytics for employees, shops, and animals.',
                        html_url: 'https://github.com/Pablovelazquezb/zoo',
                        homepage: 'https://zoo-five-sigma.vercel.app/login',
                        stargazers_count: 0,
                        language: 'TypeScript',
                        topics: ['database', 'management'],
                        fork: false,
                        pushed_at: new Date().toISOString()
                    }
                ];

                const customProjectNames = customProjects.map(p => p.name);

                // Filter out forks, profile README, and repos that overlap with our custom ones
                const filtered = data
                    .filter(repo => !repo.fork && repo.name !== username && !customProjectNames.includes(repo.name))
                    .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
                    .slice(0, 2); // Grab 2 actual repos so we have 6 total

                setProjects([...customProjects, ...filtered]);
            } catch (err: any) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        if (username) {
            fetchRepos();
        }
    }, [username]);

    return { projects, loading, error };
}
