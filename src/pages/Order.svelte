<script lang="ts"> 
    import Cake_store from "../stores/Cakes"; 
</script>

{#each $Cake_store as cake}
<div>Size: {cake.size}</div>
<div>Shape: {cake.shape}</div>
<dov>Price: {cake.price}</dov>
{/each}

