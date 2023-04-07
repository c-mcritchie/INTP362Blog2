<script>
    let count = 0;
    export let name;
</script>

<main>
    <p>{name}: {count}</p>
    <button on:click={() => count++}>+</button>
    <button on:click={() => count--}>-</button>
</main>
