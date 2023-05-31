<script lang="ts">
    import Header from "./components/Header.svelte";
    import Footer from "./components/Footer.svelte";
    import NavePopout from "./components/navePopout/NavePopout.svelte";

    let tabs = ["Home", "Order", "Price List"];
    let activeItem = tabs[0];
    let showNave = false;

    function tabChange(e) {
        activeItem = e.detail;
        toggleNave();
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
    {#if activeItem === "Home"}
        <div>Home</div>
    {:else if activeItem === "Order"}
        <div>Order</div>
    {:else if activeItem === "Price List"}
        <div>Price List</div>
    {/if}
    <Footer />
</main>

<style>
</style>
