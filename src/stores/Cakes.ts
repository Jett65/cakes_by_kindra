import { type Writable, writable } from "svelte/store";
import type Cake from "../../types"

const Cakes: Writable<Array<Cake>> = writable([]);

export default Cakes;
