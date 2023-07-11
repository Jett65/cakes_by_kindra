<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { slide, fly, fade } from "svelte/transition";
    const dispatch = createEventDispatcher();

    export let items: Array<string>;
    export let activeItem: string;
    export let showNave = false;
</script>

{#if showNave}
    <div class="backdrop" on:click|self>
        <div
            class="block"
            in:fly={{ x: 200, duration: 200 }}
            out:fly={{ delay: 220, x: 200, duration: 200 }}
        >
            <ul>
                {#each items as item}
                    <li
                        class="tab"
                        in:slide={{ delay: 220, duration: 250 }}
                        out:slide={{ duration: 200 }}
                        on:click={() => dispatch("tabChange", item)}
                    >
                        <div class:active={item === activeItem}>{item}</div>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
{/if}

<style>
    .backdrop {
        position: fixed;
        z-index: 2;
        width: 100%;
        height: 100%;
        position: fixed;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: right;
    }

    .block {
        height: 100%;
        background-color: #adbbce;
        min-width: 150px;
    }

    ul {
        list-style-type: none;
        margin-top: 60px;
        padding: 0;
    }

    .tab {
        display: flex;
        color: black;
        justify-content: center;
        flex-flow: wrap;
        font-size: 1.3rem;
        font-weight: bold;
        width: 100%;
        margin: 10px;
    }
    .tab:hover {
        cursor: pointer;
        color: #4b4b4b;
    }
</style>
