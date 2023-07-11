<!--TODO: Make the header disaper-->
<!--and re aper when it the mouse hovers over the -->
<!--top of the window-->
<script lang="ts">
    import Header from "./components/Header.svelte";
    import Footer from "./components/Footer.svelte";
    import NavePopout from "./components/navePopout/NavePopout.svelte";

    // pages
    import Home from "./pages/Home.svelte";
    import Menu from "./pages/Menu.svelte"; 
    import Order from "./pages/Order.svelte";

    let tabs = ["Home", "Menu", "Order"];
    let activeItem = tabs[1];
    let showNave = false;

    function tabChange(e) {
        activeItem = e.detail;
        toggleNave(); 
    }
    function toggleNave() {
        showNave = !showNave;
    }

    // export let cakes: Array<{price: number, shape: string, seize: number}>
    let cakes = [
        {
            price: 12,
            shape: "sheet",
            size: 14,
        },
        {
            price: 20,
            shape: "sheet",
            size: 16,
        },
        {
            price: 12,
            shape: "sheet",
            size: 14,
        },
        {
            price: 20,
            shape: "sheet",
            size: 16,
        },
        {
            price: 12,
            shape: "sheet",
            size: 14,
        },
        {
            price: 20,
            shape: "sheet",
            size: 16,
        },
        {
            price: 12,
            shape: "sheet",
            size: 14,
        },
        {
            price: 20,
            shape: "sheet",
            size: 16,
        },
        {
            price: 12,
            shape: "sheet",
            size: 14,
        },
        {
            price: 20,
            shape: "sheet",
            size: 16,
        },
        {
            price: 12,
            shape: "sheet",
            size: 14,
        },
        {
            price: 20,
            shape: "sheet",
            size: 16,
        },
        {
            price: 12,
            shape: "sheet",
            size: 14,
        },
        {
            price: 20,
            shape: "sheet",
            size: 16,
        },
        {
            price: 12,
            shape: "sheet",
            size: 14,
        },
        {
            price: 20,
            shape: "sheet",
            size: 16,
        },

    ];
</script>

<main>
    <NavePopout
        {showNave}
        items={tabs}
        {activeItem}
        on:tabChange={tabChange}
        on:click={toggleNave}
    />
    <Header on:click={toggleNave} />
    <div class="pages">
        {#if activeItem === "Home"}
            <Home />
        {:else if activeItem === "Menu"}
            <Menu {cakes} />
        {:else if activeItem === "Order"}
            <Order />
        {/if}
    </div>
    <Footer />
</main>

<style>
    .pages {
        padding-top: 100px;
        padding-bottom: 50px;
    }
</style>
