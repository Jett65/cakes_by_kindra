<script lang="ts">
    import NaveButton from "./navePopout/NaveButton.svelte";  
</script>

<div class="header">
    <div></div>
    <div class="logo">
        <img src="./img/cakes_by_kindra.png"  alt="logo"/>
    </div>
    <div class="nave">
        <NaveButton on:click/>
    </div>
</div>

<style>
    .header {  
        position: fixed;
        z-index: 1;
        background-color: #bdcadd;
        display: grid; 
        grid-template-columns: 1fr, 1fr, 1fr; 
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 90px;
    }
    .nave {
            margin-left: auto; 
            margin-right: 10px;
            grid-column: 3;
        }
    img {  
        grid-column: 2;  
        margin-left: 40%;
        width: 100px;
    }
</style>
