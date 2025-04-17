<svelte:head>
	<title>Projects</title>
	<meta name="description" content="Projects" />
</svelte:head>
<script>
	import face from '$lib/images/IMG_1041.jpeg';
	export let data;
</script>

<div class="text_area">
	<div class="structure">
		{#each data.posts as post}
		<div class="project_card">
			<picture class="proj_thumb">
				<img class="thumbnail" src={post.mainImage?.asset?.url} alt={`Thumbnail for ${post.title}`}/>
			</picture>
			<h3>{post.title}</h3>
			<button>
				<a href={`/projects/${post.slug.current}`}>View Project</a>
			</button>
		</div>
	{/each}
	</div>
</div>

<style>

	h3{
		margin-top:5px;
		margin-bottom:5px;
	}

	button{
		border-radius: 5px;
		background-color:#5348BB;
	}

	a{
		color:white;
	}

	.project_card{
		display:flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #D9D9D9;
		margin:5px;
		padding:10px;
		max-width: 30%;
	}
	.structure{
		display:flex;
		flex-direction: row;
		justify-content: space-evenly;
		color:black;
		flex-wrap:wrap;
	}
	.proj_thumb img{
		max-height:100%;
		max-width:100%;
	}
</style>
