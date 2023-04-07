<script>
    import {onMount} from "svelte";
    import axios from "axios";
    import {account, counters } from "../stores.js";



    onMount(async () => {
        const data = await axios({
            method: 'post',
            url: 'https://localhost:3000/api/counters/getCounterByAccount',
            data: {
                accountId: $account.id
            }
        })
    })


</script>

<main>


</main>