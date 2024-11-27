<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    let slug: string = '';
    $: slug = $page.params.slug;

    let knowledgeBase: { id: string; display: string; description?: string; documents?: { id: string; content: string; created_at: string }[] } | null = null;
    let loading = true;
    let errorMessage = '';

    // Fetch knowledge base details with documents
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

    // Navigate to create content page
    const createContent = () => {
        goto(`/app/knowledge/${slug}/create`);
    };

    onMount(fetchKnowledgeBase);
</script>

<main class="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
    {#if loading}
        <p class="text-gray-700">Loading knowledge base details...</p>
    {:else if errorMessage}
        <p class="text-red-500">{errorMessage}</p>
    {:else if knowledgeBase}
        <div class="w-full max-w-lg bg-white p-6 rounded-md shadow-md">
            <!-- Knowledge Base Details -->
             <div class = 'flex flex-row justify-between'>
                 <h1 class="text-2xl font-bold text-gray-800 ">{knowledgeBase.display}</h1>             
                 <button
                 on:click={createContent}
                 class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
             >
                 Create New Content
             </button>
             </div>
                
            <p class="text-sm text-gray-600">{knowledgeBase.description || 'No description provided'}</p>

            <!-- Documents Section -->
            <h2 class="text-xl font-semibold text-gray-700 mt-6">Documents</h2>
            {#if knowledgeBase.documents && knowledgeBase.documents.length > 0}
                <ul class="mt-2 space-y-4">
                    {#each knowledgeBase.documents as doc}
                        <li class="p-4 border border-gray-200 rounded-md">
                            <p class="text-gray-800">{doc.content}</p>
                            <p class="text-sm text-gray-500 mt-1">Created at: {new Date(doc.created_at).toLocaleString()}</p>
                        </li>
                    {/each}
                </ul>
            {:else}
                <p class="text-gray-500 mt-2">No documents available for this knowledge base.</p>
            {/if}

            <!-- Create Content Button -->

        </div>
    {/if}
</main>
