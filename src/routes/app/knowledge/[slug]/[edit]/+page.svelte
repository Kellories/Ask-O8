<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    let slug: string = '';
    let contentid: string = '';
    let knowledgebase: string = '';
    let content: string = '';
    let loading = true;
    let errorMessage = '';
    let successMessage = '';

    $: contentid = $page.params.edit;
    $: knowledgebase = $page.params.slug;

    // Fetch the current content
    const fetchContent = async () => {
        try {
            const res = await fetch(`/api/fetchContent/${contentid}`);
            if (!res.ok) {
                throw new Error('Failed to fetch content');
            }
            const data = await res.json();
            content = data[0]?.content || '';
        } catch (error) {
            errorMessage = error.message || 'An unexpected error occurred';
        } finally {
            loading = false;
        }
    };

    // Save updated content
    const saveContent = async () => {
        try {
            const res = await fetch(`/api/updateContent/${contentid}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || 'Failed to update content');
            }

            successMessage = 'Content updated successfully';
            // Redirect back to the knowledge base page
            goto(`/app/knowledge/${knowledgebase}`);
        } catch (error) {
            errorMessage = error.message || 'An unexpected error occurred';
        }
    };

    onMount(async () => {
        await fetchContent();
    });
</script>

<main class="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
    {#if loading}
        <p class="text-gray-700">Loading content...</p>
    {:else if errorMessage}
        <p class="text-red-500">{errorMessage}</p>
    {:else}
        <div class="w-full max-w-3xl bg-white p-6 rounded-md shadow-md">
            <h1 class="text-2xl font-bold text-gray-800 mb-4">Edit Content</h1>

            {#if successMessage}
                <p class="text-green-500 mb-4">{successMessage}</p>
            {/if}

            <form
                on:submit|preventDefault={saveContent}
                class="space-y-4"
            >
                <div>
                    <label class="block text-sm font-medium dark text-gray-700 mb-1">Content</label>
                    <textarea
                        bind:value={content}
                        class="w-full border-gray-300 rounded-md shadow-sm focus:ring dark:bg-gray-100 p-2 focus:ring-blue-200"
                        rows="10"
                        required
                    ></textarea>
                </div>

                <div class="flex justify-between items-center">
                    <button
                        type="button"
                        class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                        on:click={() => goto(`/app/knowledge/${knowledgebase}`)}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    {/if}
</main>
