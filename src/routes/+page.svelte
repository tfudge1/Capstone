<script>
	import Counter from './Counter.svelte';
	import face from '$lib/images/IMG_1041.jpeg';
	import welcomeFallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
			<picture class="welcome">
				<source srcset={face} type="image/jpeg" />
				<img src={face} alt="Welcome" />
			</picture>
		<span class='text_area'>
			<h3>About Me</h3>
			<p>I’m a fifth-year Full Stack Development student with a passion for building thoughtful, efficient, and user-centered web applications. With a background in both frontend and backend technologies, I enjoy bridging the gap between design and functionality—creating seamless digital experiences from concept to deployment.</p>
			<p>This site was built using Sanity CMS and SvelteKit, chosen specifically to push myself outside of my comfort zone and explore modern, flexible technologies. I’m always curious about new tools and approaches that improve performance, scalability, and user experience.</p>
			<p>What drives me most is the satisfaction of delivering something that not only works, but works well for the person using it. Whether it’s a portfolio, a storefront, or an internal tool, I aim to understand what a client truly needs and build with that in mind, prioritizing usability, maintainability, and clear communication every step of the way.</p>
		</span>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	.welcome {
		display: flex;
		justify-content: center;
		/* position: relative; */
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
		z-index: 0;
	}

	.text_area{
		padding:5px;
		z-index: 1;
	}

	.welcome img {
		position: absolute;
		max-height:75%;
		width:25%;
		margin:auto;
		top: 65px;
		display: block;
	}
</style>
