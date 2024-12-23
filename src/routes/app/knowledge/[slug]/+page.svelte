<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let slug: string = '';
	$: slug = $page.params.slug;

	let knowledgeBase: {
		id: string;
		display: string;
		description?: string;
		documents?: { id: string; content: string; created_at: string }[];
	} | null = null;
	let loading = true;
	let deleting = false;
	let errorMessage = '';

	const deleteContent = async (id: string) => {
		try {
			deleting = true;
			const res = await fetch(`/api/deleteDocument/${id}`, { method: 'DELETE' });
			if (!res.ok) {
				const errorData = await res.json();
				throw new Error(errorData.message || 'Failed to delete document');
			}
			// Remove the deleted document from the list
			if (knowledgeBase?.documents) {
				knowledgeBase.documents = knowledgeBase.documents.filter((doc) => doc.id !== id);
			}
		} catch (error) {
			errorMessage = error.message || 'An unexpected error occurred';
		} finally {
			deleting = false;
		}
	};

	const fetchKnowledgeBase = async () => {
		try {
			const res = await fetch(`/api/fetchKnowledgeBaseById/${slug}`);
			if (!res.ok) {
				const errorData = await res.json();
				throw new Error(errorData.message || 'Failed to fetch data');
			}
			knowledgeBase = await res.json();
		} catch (error) {
			errorMessage = error.message || 'An unexpected error occurred';
		} finally {
			loading = false;
		}
	};

	const createContent = () => {
		goto(`/app/knowledge/${slug}/create`);
	};

	onMount(fetchKnowledgeBase);
</script>

<main class="flex min-h-screen flex-col items-center bg-gray-50 p-6">
	{#if loading}
		<p class="text-gray-700">Loading knowledge base details...</p>
	{:else if errorMessage}
		<p class="text-red-500">{errorMessage}</p>
	{:else if knowledgeBase}
		<div class="w-full max-w-5xl rounded-md bg-white p-6 shadow-md">
			<!-- Knowledge Base Details -->
			<div class="flex flex-row justify-between">
				<h1 class="text-2xl font-bold text-gray-800">{knowledgeBase.display}</h1>
				<button
					on:click={createContent}
					class="rounded-lg bg-blue-600 px-4 py-2 text-white transition duration-200 hover:bg-blue-700"
				>
					Create New Content
				</button>
			</div>
			<p class="text-sm text-gray-600">{knowledgeBase.description || 'No description provided'}</p>

			<!-- Documents Section -->
			<h2 class="mt-6 text-xl font-semibold text-gray-700">Documents</h2>
			{#if knowledgeBase.documents && knowledgeBase.documents.length > 0}
				<ul class="mt-2 space-y-4">
					{#each knowledgeBase.documents as doc}
						<li class="rounded-md border border-gray-200 p-4">
							<p class="text-gray-800">{doc.content}</p>
							<p class="mt-1 text-sm text-gray-500">
								Created at: {new Date(doc.created_at).toLocaleString()}
							</p>
							<div class="mt-1 flex space-x-2">
								<button
									class="rounded-sm bg-sky-600 px-2 py-1 text-sm text-white"
									on:click={() => goto(`/app/knowledge/${slug}/${doc.id}`)}
								>
									Edit
								</button>

								<button
									class="rounded-sm bg-red-600 px-2 py-1 text-sm text-white"
									on:click={() => deleteContent(doc.id)}
									disabled={deleting}
								>
									{deleting ? 'Deleting...' : 'Delete'}
								</button>
							</div>
						</li>
					{/each}
				</ul>
			{:else}
				<p class="mt-2 text-gray-500">No documents available for this knowledge base.</p>
			{/if}
		</div>
	{/if}
</main>
