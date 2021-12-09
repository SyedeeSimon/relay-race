async function fetchGraphQL(text, variables) {
    console.log('text ', text);
    console.log('variables  ', variables);
    const response = await fetch('https://swapi-graphql.netlify.app/.netlify/functions/index', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: text,
            variables,
        }),
    });
    return await response.json();
}

export default fetchGraphQL;