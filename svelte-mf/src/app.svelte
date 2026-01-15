<script>
  import { Router, Route, Link } from "svelte-routing";
  import NewRoute from "./NewRoute.svelte";

  export let base = "";
  export let message = "Hello from Svelte MF";
</script>

<Router basepath={base}>
  <div class="mf-4">
    <h3>{message}</h3>
    <p>Base path: {base}</p>

    <Link to={`${base}/first-route`}>Go</Link>
  </div>

  <Route path={`/first-route`} component={NewRoute} />
</Router>

<style>
  .mf-4 {
    padding: 12px;
    border: 2px solid #ff3e00;
    border-radius: 4px;
  }
</style>
