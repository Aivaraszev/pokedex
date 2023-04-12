import { useState, useEffect } from "react";
import PokemonListItem from "./PokemonListItem";
import { Button, SimpleGrid, Stack } from "@chakra-ui/react";
import { Link, useOutletContext } from "react-router-dom";
function PokemonList() {
    const [pokemonList, setPokemonList] = useState(null);
    const [page, setPage] = useOutletContext();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${page * 20}`)
            .then((response) => response.json())
            .then(setPokemonList);
    }, [page]);

    const increment = () => {
        if (page === 63) {
            return;
        }
        setPage(page + 1);
    };
    const front = () => {
        setPage(0);
    };
    const end = () => {
        setPage(63);
    };
    const decrement = () => {
        if (page === 0) {
            return;
        }
        setPage(page - 1);
    };
    return (
        <>
            <SimpleGrid columns={4} spacing={10}>
                {pokemonList?.results.map((object, i) => (
                    <Link to={`/pokemon/${object.name}`} key={i}>
                        <PokemonListItem
                            pokemon={object}
                            id={i + 1 + page * 20}
                        />
                    </Link>
                ))}
            </SimpleGrid>
            <Stack m={4} spacing={4} direction="row" align="center">
                <Button colorScheme="blue" onClick={front}>
                    Front
                </Button>
                <Button colorScheme="blue" onClick={decrement}>
                    Back
                </Button>
                <Button colorScheme="blue" onClick={increment}>
                    Next
                </Button>
                <Button colorScheme="blue" onClick={end}>
                    End
                </Button>
            </Stack>
        </>
    );
}

export default PokemonList;
