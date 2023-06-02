<script lang="ts">
    import Header from "./components/Header.svelte";
    import Footer from "./components/Footer.svelte";
    import NavePopout from "./components/navePopout/NavePopout.svelte";

    // pages
    import Home from "./pages/Home.svelte";

    let tabs = ["Home", "Order", "Price List"];
    let activeItem = tabs[0];
    let showNave = false;

    function tabChange(e) {
        activeItem = e.detail;
        toggleNave();
        console.log(typeof e.detail);
    }
    function toggleNave() {
        showNave = !showNave;
    }
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
        {:else if activeItem === "Order"}
            <div>Order</div>
        {:else if activeItem === "Price List"}
            <div>Price List</div>
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
