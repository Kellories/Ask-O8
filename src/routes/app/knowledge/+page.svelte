<script lang="ts">
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation'; // For routing

    let knowledgeBases: { id: string; display: string }[] = [];

    const getAllKnowledgeBases = async () => {
        try {
            const res = await fetch('/api/fetchAllKnowledgeBase');
            if (res.ok) {
                return await res.json();
            } else {
                console.error("Failed to fetch knowledge bases:", res.statusText);
                return [];
            }
        } catch (error) {
            console.error("Error during fetch:", error);
            return [];
        }
    };

    // Navigate to /create
    const navigateToCreate = () => {
        goto('/app/knowledge/create');
    };

    // Navigate to the child route for a specific knowledge base
    const openKnowledgeBase = (id: string) => {
        goto(`/app/knowledge/${id}`);
    };

    // Fetch knowledge bases on component mount
    onMount(async () => {
        knowledgeBases = await getAllKnowledgeBases();
    });
</script>

<main class="p-4 bg-gray-50 min-h-screen">
    <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold text-gray-800">Knowledge Bases</h1>
        <button
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            on:click={navigateToCreate}
        >
            Create Knowledge Base
        </button>
    </div>

    {#if knowledgeBases.length === 0}
        <p class="text-gray-700 text-center">No knowledge base entries created yet!</p>
    {:else}
        <Table striped={true} hoverable={true} class="bg-white border border-gray-200 rounded-md shadow-md">
            <TableHead>
                <TableHeadCell class="px-6 py-3 text-left font-medium text-gray-700">ID</TableHeadCell>
                <TableHeadCell class="px-6 py-3 text-left font-medium text-gray-700">Display Name</TableHeadCell>
                <TableHeadCell class="px-6 py-3 text-left font-medium text-gray-700">Actions</TableHeadCell>
            </TableHead>
            <TableBody class = 'text-gray-900'>
                {#each knowledgeBases as kb}
                    <TableBodyRow class = 'text-gray-900'>
                        <TableBodyCell class="px-6 py-4 text-sm text-gray-900">{kb.id}</TableBodyCell>
                        <TableBodyCell class="px-6 py-4 text-sm text-gray-900">{kb.display}</TableBodyCell>
                        <TableBodyCell class="px-6 py-4 text-sm text-gray-900">
                            <button
                                class="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200"
                                on:click={() => openKnowledgeBase(kb.id)}
                            >
                                Open
                            </button>
                        </TableBodyCell>
                    </TableBodyRow>
                {/each}
            </TableBody>
        </Table>
    {/if}
</main>
