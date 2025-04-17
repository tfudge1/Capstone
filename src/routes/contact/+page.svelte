<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-area">
	<h1>Send me an email!</h1>
	<p>I would love to get in contact with you, please send me an email through the below form and I will get back to you as soon as I can.</p>

	<form method="POST">
		<label>
			Subject:
			<input name="subject" type="text_box" id='subject_line'>
		</label>
		<br/>
		
		<label>
			<textarea name="message">Message</textarea>
		</label>
		<label>
			From:
			<input name="sender" type="text_box">
		</label>
		<button>Send</button>
	</form>
</div>

<style>
	form{
		background-color: #929090;
		width:100%;
		min-width: 100%;
	}
	form textarea{
		max-width: 99%;
		width:99%;
		height:50vh;
	}
	#subject_line{
		width:93%;
		min-width:20vw;
		max-width: 90vw;
	}
</style>