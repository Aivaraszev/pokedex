import { Card, CardHeader, CardBody, Text, Heading } from "@chakra-ui/react";
function PokemonListItem({ pokemon, id }) {
    return (
        <Card width="7em" height="5em">
            <CardHeader>
                <Heading size="sm">#{id}</Heading>
            </CardHeader>
            <CardBody>
                <Text fontSize="2xl">{pokemon.name}</Text>
            </CardBody>
        </Card>
    );
}

export default PokemonListItem;
