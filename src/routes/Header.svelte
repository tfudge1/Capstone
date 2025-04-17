<script>
	import Menu from './menu.svelte';
	import {Hamburger} from 'svelte-hamburgers';
	import { page } from '$app/state';

	let open = $state(false);
	// let currentPage = (page.url.pathname).substring(1,(page.url.pathname).length);
</script>

<header>
	<span id="hamburger">
		<Hamburger 
			type="squeeze"
			bind:open
			
		/>
	</span>
	<h2 id='name'>
		<b>
			Nicholas Howard-Fudge
		</b>
	</h2>
	<h2 id='current_page'><b>{(page.url.pathname).substring(1,(page.url.pathname).length)}</b></h2>
</header>
<Menu bind:open />

<style>

	#current_page{
		font-size: larger;
		padding-right:1%;
	}
	#name{
		font-size: larger;
	}

	header {
		position:sticky;
		top:0px;
		display: flex;
		justify-content: space-between;
		background-color: #3F486E;
	}

	#hamburger{
		background-color: #D9D9D9;
		border-radius: 2em;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
