import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    Text,
    Heading,
    CardFooter,
    Image,
    Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function PokemonCard() {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => response.json())
            .then(setPokemon);
    }, [name]);
    return (
        <Card align="center">
            <CardHeader>
                <Flex spacing="4">
                    {pokemon?.sprites.front_default !== null && (
                        <Image
                            boxSize="150px"
                            src={pokemon?.sprites.front_default}
                        ></Image>
                    )}

                    <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                        <Heading size="lg">Name: {pokemon?.name}</Heading>
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody>
                <Text size="md">
                    Base Experience: {pokemon?.base_experience}
                </Text>
                <Text size="md">Order: {pokemon?.order}</Text>
                <Text size="md">Weight: {pokemon?.weight}</Text>
                <Text size="md">Id: {pokemon?.id}</Text>
            </CardBody>
            <CardFooter>
                <Link to="/">Back</Link>
            </CardFooter>
        </Card>
    );
}

export default PokemonCard;
