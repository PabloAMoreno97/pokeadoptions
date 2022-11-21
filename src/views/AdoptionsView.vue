<script lang="ts">
export default {
    data() {
        return {
            pokemonsInfo: {
                results: [{ name: "" }]
            }
        }
    },
    created() {
        this.load()
    },
    methods: {
        load: function () {

            fetch("https://pokeapi.co/api/v2/pokemon/")
                .then(async response => {
                    this.pokemonsInfo = await response.json();


                    if (!response.ok) {

                        const error = (this.pokemonsInfo && this.pokemonsInfo) || response.statusText;
                        return Promise.reject(error);
                    }

                    console.log(this.pokemonsInfo.results[0].name);
                })
                .catch(error => {
                    console.error("There was an error!", error);
                });
        },
    }
}
</script>

<template>
    <div>
        <ul>
            <li v-for="(pokemon, index) in pokemonsInfo.results" :key="index">{{ pokemon.name }}</li>
        </ul>
    </div>
</template>

<style>

</style>