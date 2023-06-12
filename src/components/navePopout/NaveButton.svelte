<script lang="ts"> 
</script>

<button class="nave" on:click>
    <div class="line" />
    <div class="line" />
    <div class="line" />
</button>

<style>
    .nave {
        cursor: pointer; 
        background-color: transparent;
        border: none;
        padding: 0;
        margin: 0;
        width: 37px;
        height: 31px;
        margin-top: 65%; 
    }
    .nave:hover {
        border-radius: 5px;
        background-color: lightgray;
    }
    .line { 
        background-color: black;
        display: flex;
        justify-content: center;
        width: 95%;
        height: 6px;
        border-radius: 10px;
        margin-top: 1px;
        margin-bottom: 4px;
    }
</style>
