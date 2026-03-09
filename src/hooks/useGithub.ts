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

                // Filter out forks and profile README, sort by stars or updated
                const filtered = data
                    .filter(repo => !repo.fork && repo.name !== username)
                    .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
                    .slice(0, 6); // Grab the top 6

                setProjects(filtered);
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
