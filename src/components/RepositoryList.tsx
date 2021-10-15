import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

interface Repository {
    name: string;
    description: string;
    html_url: string;
};

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/juanozorio/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [repositories])
    // [] Nunca esquecer dessa dependência


    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
                <ul>
                    {repositories.map(repository => {
                        return <RepositoryItem key={repository.name} repository={repository} />
                    })}

            </ul>
        </section>
    );
}


