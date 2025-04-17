<script>
	export let data;
	const post = data.post;
  </script>
  
  <article class="project">
	<h1>{post.title}</h1>
  
	<picture class="proj_thumb">
		<img class="thumbnail" src={post.mainImage?.asset?.url} alt={`Thumbnail for ${post.title}`}/>
	</picture>
  
	  <section class="text_area">
		<p>{@html JSON.stringify(post.body, null, 2).slice(1, -1).replaceAll('\\n', '<br>')}</p>
	</section>
	  
  </article>
  
  <style>
	.proj_thumb img{
		max-height:100%;
		max-width:100%;
	}
	.project {
	  max-width: 800px;
	  margin: 2rem auto;
	  padding: 1rem;
	  font-family: sans-serif;
	}
  
	img {
	  max-width: 100%;
	  margin-bottom: 1rem;
	}
  
	.body {
	  margin-top: 2rem;
	}
  </style>
  