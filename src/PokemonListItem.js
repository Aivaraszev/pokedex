import { Card, CardBody, Text, Heading } from "@chakra-ui/react";

function PokemonListItem({ pokemon, id }) {
    return (
        <Card width="225px" height="150px">
            <CardBody>
                <Heading mb={5} size="sm">
                    #{id}
                </Heading>
                <Text fontSize="2xl">{pokemon.name}</Text>
            </CardBody>
        </Card>
    );
}

export default PokemonListItem;
