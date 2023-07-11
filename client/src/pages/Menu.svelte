<script lang="ts">
    import type { Cake } from "../../types";
    import Cakes from "../stores/Cakes";

    export let cakes: Array<Cake>;
    let order_list: Array<Cake> = [];
    [];

    function handleClick(cake: Cake): void {
        order_list.push(cake);
        // for (let i = 0; i < order_list.length; i++) {
        //     Cakes.update((...rest) => [...rest, {order_list}]);
        // }
        Cakes.update(() => order_list)
    }
</script>

{#each cakes as cake}
    <div class="cake">
        <h2 class="size">
            {cake.size}" {cake.shape} Cake
        </h2>
        <img class="cakeimg" src="./img/cakes_by_kindra.png" alt="logo" />
        <div class="price">
            ${cake.price}
        </div>
        <button
            class="addToCart"
            on:click={() =>
                handleClick({
                    price: cake.price,
                    shape: cake.shape,
                    size: cake.size,
                })}>Add to cart</button
        >
    </div>
{/each}

<style>
    .cake {
        display: flex;
        flex-flow: column;
        background-color: gray;
        width: 400px;
        margin: auto;
        margin-top: 10px;
    }

    .size {
        padding: 10px;
        margin: auto;
    }

    .cakeimg {
        background-color: black;
        margin: auto;
        width: 50%;
        max-width: 400px;
    }

    .price {
        font-size: 2rem;
        font-weight: bold;
        margin: auto;
    }

    .addToCart {
        background-color: green;
        color: white;
    }

    .addToCart:hover {
        background-color: red;
    }
</style>
