interface RepositoryItemProps {
    repository: {
        name: string,
        description: string,
        html_url: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <ul>
            <li>
                <strong>{props.repository.name ?? "Vazio"}</strong>
                <p>{props.repository.description}</p>

                <p>{props.repository.name}</p>

                <a href={props.repository.html_url}>
                    Acessar repositório
                </a>
            </li>
        </ul>
    )
}