<script>
	import { onMount, afterUpdate } from 'svelte';
	import MessageInput from './MessageInput.svelte';
	let messages = [];
	let messageContainer;
	let selectedKnowledgeBase = '';
	let knowledgeBases = [];

	const fetchKnowledgeBases = async () => {
		try {
			const response = await fetch('/api/fetchAllKnowledgeBase', {
				method: 'GET',
			});

			if (response.ok) {
				const data = await response.json();
				knowledgeBases = data  
			} else {
				console.error('Error fetching knowledge bases.');
				knowledgeBases = [];
			}

			
		} catch (error) {
			console.error('Fetch error:', error);
			knowledgeBases = [];
		}
	};

	onMount(async()=>{await fetchKnowledgeBases()});

	const sendMessage = async (message) => {
		messages = [...messages, { text: message, sender: 'user' }];
		try {
			const response = await fetch('/api/createEmbedding', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					input: message,
					knowledgeBase: selectedKnowledgeBase
				})
			});

			if (response.ok) {
				const data = await response.json();
				console.log(data)
				// write logic to find most similar content embedding in knowledgebase
				const response1 = await fetch ('/api/findSimilarEmbedding',{
					method:'POST',
					headers:{
						'Content-Type':'application/json'
					},
					body: JSON.stringify({
						knowledgebaseid : selectedKnowledgeBase,
						embedding : data.embedding,

					})
				})

				let data1 = await response1.json()

				// write logic to append the content fetched into a chat completion



				messages = [...messages, { text: data1.content, sender: 'bot' }];
			} else {
				messages = [
					...messages,
					{ text: 'Error fetching response from the server.', sender: 'bot' }
				];
			}
		} catch (error) {
			console.error('Fetch error:', error);
			messages = [
				...messages,
				{ text: 'There was an error contacting the server.', sender: 'bot' }
			];
		}
	};

	const scrollToBottom = () => {
		if (messageContainer) {
			messageContainer.scrollTop = messageContainer.scrollHeight;
		}
	};

	afterUpdate(scrollToBottom);
</script>

<div class="flex h-full w-full flex-col items-center justify-center pt-8">
	<div class="flex h-[80vh] w-full max-w-3xl flex-col rounded-lg bg-white p-4 shadow-lg">
		<!-- Dropdown for selecting Knowledge Base, aligned to the left -->
		<div class="mb-4 self-start">
			<label for="knowledgeBase" class="sr-only">Select Knowledge Base:</label>
			<select
				id="knowledgeBase"
				bind:value={selectedKnowledgeBase}
				class="rounded-md bg-[#1b2845] px-3 py-2 font-medium text-white"
			>
				<option value="" disabled selected>Select...</option>
				{#each knowledgeBases as knowledgeBase}
					<option value={knowledgeBase.id}>{knowledgeBase.display}</option>
				{/each}
			</select>
		</div>

		<!-- Chat Messages Area with fixed height and scrolling -->
		<div
			bind:this={messageContainer}
			class="mb-2 flex-grow overflow-y-auto rounded-lg bg-gray-50 p-4"
		>
			{#each messages as message}
				<div class="{message.sender === 'user' ? 'text-right' : 'text-left'} my-2">
					<div
						class="{message.sender === 'user'
							? 'bg-blue-500 text-white'
							: 'bg-gray-300 text-gray-900'} inline-block max-w-[70%] rounded-2xl px-4 py-2 shadow-md"
					>
						<p>{message.text}</p>
					</div>
				</div>
			{/each}
		</div>

		<!-- Message Input -->
		<MessageInput on:send={(event) => sendMessage(event.detail)} />
	</div>
</div>
